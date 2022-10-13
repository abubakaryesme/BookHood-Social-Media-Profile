import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import Geocode from "react-geocode";
import useGeoLocation from "./useGeoLocation";
import "../components/Filter.css";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 500,
    label: "500 Rs",
  },
  {
    value: 1500,
    label: "1500 Rs",
  },
  {
    value: 3000,
    label: "3000 Rs",
  },
  {
    value: 5000,
    label: "5000 Rs",
  },
  {
    value: 6500,
    label: "6500 Rs",
  },
  {
    value: 8000,
    label: "8000 Rs",
  },
  {
    value: 10000,
    label: ">10000 Rs",
  },
];

function valuetext(value) {
  return `${value} Rs`;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Filter() {
  const currLocation = useGeoLocation();
  const [instituteAddress, setInstituteAddress] = useState();
  const [instituteAddObj, SetInstituteAddObj] = useState();
  const [nearbyAddress, setNearbyAddress] = useState();
  const [nearbyAddObj, SetNearbyAddObj] = useState();
  const [connectionSelected, setConnectionSelected] = useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [radius, setRadius] = useState(1);
  const [price, setPrice] = useState(0);
  const [chipData, setChipData] = React.useState([]);

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        instituteAddress &&
        instituteAddress.value &&
        (await geocodeByPlaceId(instituteAddress.value.place_id));
      let addressObject = null;
      try {
        addressObject = {
          address: instituteAddress.label,
          latitude: geocodeObj[0].geometry.location.lat(),
          longitude: geocodeObj[0].geometry.location.lng(),
        };
      } catch (error) {}
      SetInstituteAddObj(addressObject);
      console.log("Institute: ", addressObject);
    };
    func();
  }, [instituteAddress]);

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        nearbyAddress &&
        nearbyAddress.value &&
        (await geocodeByPlaceId(nearbyAddress.value.place_id));
      let addressObject = null;
      try {
        addressObject = {
          address: nearbyAddress.label,
          latitude: geocodeObj[0].geometry.location.lat(),
          longitude: geocodeObj[0].geometry.location.lng(),
        };
      } catch (error) {}
      SetNearbyAddObj(addressObject);
      console.log("Nearby: ", addressObject);
    };
    func();
  }, [nearbyAddress]);

  const handleCurrLocation = () => {
    if (currLocation.loaded && !currLocation.error) {
      Geocode.setApiKey("AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI");
      Geocode.setRegion("pk");
      Geocode.setLocationType("ROOFTOP");
      Geocode.fromLatLng(
        `${currLocation.coordinates.lat}`,
        `${currLocation.coordinates.lng}`
      ).then(
        (response) => {
          const address = response.results[0].formatted_address;
          let obj = {};
          obj.label = address;
          obj.value = "";
          setNearbyAddress(obj);
          if (!chipData.find((ele) => ele.key === 1)) {
            setChipData([...chipData, { key: 1, label: "Nearby" }]);
          }
          setInstituteAddress(null);
          setChipData((chips) => chips.filter((chip) => chip.key !== 0));
        },
        (error) => {}
      );
    }
  };

  const handleChipDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete));
    if (chipToDelete === 3) {
      setConnectionSelected(false);
    } else if (chipToDelete === 2) {
      setPrice(0);
    } else if (chipToDelete === 0) {
      setInstituteAddress(null);
    } else if (chipToDelete === 1) {
      setNearbyAddress(null);
      setRadius(1);
    }
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleRadiusChange = (e) => {
    if ((e.target.value >= 1 && e.target.value <= 50) || !e.target.value) {
      setRadius(e.target.value);
    }
  };

  const handleConnectionChange = () => {
    setConnectionSelected(!connectionSelected);
    if (!connectionSelected) {
      setChipData([...chipData, { key: 3, label: "Connections" }]);
    } else if (connectionSelected) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 3));
    }
  };

  const handlePriceChange = (value) => {
    setPrice(value.target.value);
    let obj = { key: 2, label: "Price" };
    if (
      value.target.value !== 0 &&
      !chipData.find((ele) => {
        return ele.key === obj.key;
      })
    ) {
      setChipData([...chipData, { key: 2, label: "Price" }]);
    } else if (value.target.value === 0) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 2));
    }
  };

  const handleInstituteAdd = (val) => {
    setInstituteAddress(val);
    if (val !== null) {
      setChipData([...chipData, { key: 0, label: "Institute" }]);
      setChipData((chips) => chips.filter((chip) => chip.key !== 1));
      setNearbyAddress(null);
    } else if (val === null) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 0));
    }
  };

  const handleNearbyAdd = (val) => {
    setNearbyAddress(val);
    if (val !== null) {
      setChipData([...chipData, { key: 1, label: "Nearby" }]);
      setChipData((chips) => chips.filter((chip) => chip.key !== 0));
      setInstituteAddress(null);
    } else if (val === null) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 1));
    }
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ px: { lg: "3%", md: "0" }, mt: "15px", textAlign: "center" }}
    >
      <Accordion className="filter-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion-heading">Filters</div>
          {chipData.map((chip) => (
            <Chip
              key={chip.key}
              className="filter-chip"
              label={chip.label}
              onDelete={handleChipDelete(chip.key)}
            />
          ))}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#4d648d",
                },
              }}
            >
              <Tab className="filter-tabs" label="Institute" {...TabProps(0)} />
              <Tab className="filter-tabs" label="Nearby" {...TabProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <GooglePlacesAutocomplete
              apiKey="AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI"
              selectProps={{
                isClearable: true,
                value: instituteAddress,
                placeholder: "Institute Name...",
                onChange: (val) => {
                  handleInstituteAdd(val);
                },
              }}
              autocompletionRequest={{
                componentRestrictions: {
                  country: ["pk"],
                },
                types: [
                  "primary_school",
                  "school",
                  "secondary_school",
                  "university",
                ],
              }}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Grid container>
              <Grid item lg={2}>
                <TextField
                  value={radius}
                  onChange={handleRadiusChange}
                  id="outlined-number"
                  label="Radius in km"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#283655",
                      borderColor: "#4d648d",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#4d648d",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item lg={1}>
                <IconButton color="secondary" onClick={handleCurrLocation}>
                  <MyLocationIcon sx={{ color: "#4d648d" }} />
                </IconButton>
              </Grid>
              <Grid item lg={9}>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI"
                  selectProps={{
                    isClearable: true,
                    value: nearbyAddress,
                    placeholder: "Location...",
                    onChange: (val) => {
                      handleNearbyAdd(val);
                    },
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["pk"],
                    },
                  }}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <Grid container sx={{ mt: "10px" }}>
            <Grid item lg={9} sx={{ pl: "3%" }}>
              <span className="price-filter">Price</span>
              <Slider
                aria-label="Custom marks"
                value={price}
                getAriaValueText={valuetext}
                step={10}
                max={10000}
                valueLabelDisplay="auto"
                marks={marks}
                sx={{ color: "#4d648d" }}
                onChange={(value) => handlePriceChange(value)}
              />
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                ml: "4%",
                mr: "2%",
                backgroundColor: "#4d648d",
                width: "2px",
              }}
            />
            <Grid item lg={2}>
              <div className="price-filter">Connections</div>
              <ToggleButton
                className="connection-filter"
                sx={{
                  mt: "5px",
                  color: "#4d648d",
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: "bold",
                  border: "1px solid #4d648d",
                  borderRadius: "30px",
                }}
                value="check"
                selected={connectionSelected}
                onChange={handleConnectionChange}
              >
                Zero Connections
              </ToggleButton>
            </Grid>
            <Grid item lg={12}></Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default Filter;
