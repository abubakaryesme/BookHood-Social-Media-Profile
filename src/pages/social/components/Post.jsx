import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PreviewIcon from '@mui/icons-material/Preview';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RecommendIcon from '@mui/icons-material/Recommend';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './CreatePost.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import RectangleIcon from '@mui/icons-material/Rectangle';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TitleIcon from '@mui/icons-material/Title';
import Badge from '@mui/material/Badge';
import { Scale } from '@mui/icons-material';

import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ImageListItem from '@mui/material/ImageListItem';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {BsBook}  from "react-icons/bs";
import {BsBookFill}  from "react-icons/bs";
import {BiEdit}  from "react-icons/bi";
import {FaRegShareSquare}  from "react-icons/fa";

import './Post.css'

const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#D0E1F945',
      darker: '#053e85',
    },
    secondary: {
      main: '#283655',
      contrastText: '#fff',
    },
    badgeColor: {
      main: '#1E1F26',
      contrastText: '#fff',
    },
    lightColor: {
      main: '#fff',
      contrastText: '#fff',
    },
    periwinkle: {
      main: '#D0E1F9',
      darker: '#053e85',
    },
  },
});


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#1E1F26',
  },
  '& .MuiRating-iconHover': {
    color: '#1E1F26',
  },
});


const style = {

  bgcolor: '#D0E1F945',
  border: '2px solid #283655',
  boxShadow: 24,
  borderRadius: "15px",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const fontColorDescription = {
  style: { color: "#1E1F26" }
}

const options = {
    shouldForwardProp: (prop) => prop !== 'fontColor',
  };
  const StyledTextField = styled(
    TextField,
    options,
  )(({ fontColor }) => ({
    input: {
      color: fontColor,
    },
  }));


  const dotOptions = [
    'Hide Post',
    'Delete Post',
    'Unfollow',
  ];
  
  const ITEM_HEIGHT = 48;
  
function Post({itemObj}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = itemObj.imagesArray.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

  const control = {

    exclusive: true,
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ "margin-bottom": "0.5rem", "border-radius": "30px"}}  className='lightPostColorHoja'>

      <div className='avatarPostRow'>
        <Avatar alt="Remy Sharp" sx={{ml:1,width:"3rem", height: "3rem"}} src={itemObj.imagesArray[0]} />
        <div className='avatarPostColumn'>
            <b> {itemObj.name}</b>
          <p style={{"padding": "0", "margin":"0"}}>{itemObj.username}</p>

        </div>

        <div className='avatarPostColumnEnd'>
          <p style={{"padding": "0", "margin":"0"}}>{itemObj.typePost}</p>
          <p style={{"padding": "0", "margin":"0"}}>{itemObj.day}</p>

        </div>

        <div style={{"padding": "0", "margin-right":"-18px"}}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor:"#d0e1f9",
          },
        }}
      >
        {dotOptions.map((option) => (
          <MenuItem key={option}  sx={{ color:"#1e1f26"}} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

    </div>

      </div>

      <div  className="messageBody lightPostColorHoja" style={{"width":"95%","marginLeft":"0.4rem","background-color": "#D0E1F90", "margin-top": "0rem", "margin-bottom": "0rem", "border-radius": "10px",}}>
      {/* <div  className="messageBody lightPostColorHoja" style={{"width":"95%","marginLeft":"0.4rem","background-color": "#D0E1F980", "margin-top": "1rem", "margin-bottom": "0.5rem", "border-radius": "10px", boxShadow: "2px 1px 2px 1px rgba(77, 100,141, 0.3), -2px -1px 2px 1px rgba(77, 100,141, 0.3)"}}> */}
      
      <ThemeProvider theme={theme}>
        <Grid container spacing={1}  direction="column" sx={{color:'white' , borderRadius: "20px"}} justifyContent="left" >

          <Grid item  sx={{color:'white',borderRadius: "20px", paddingBottom:"0.5rem"}} lg={12} > 
          
          { itemObj.typePost !== 'COMPARISON' ?
          <Box style={{ "border-radius": "20px"}}  className="formInputTitleEtc123">

            <FormControl fullWidth  color="lightColor" variant="standard" className='whitekrdoplease'>
              <InputLabel htmlFor="input-with-icon-adornment" sx={{fontSize: "20px"}} className='midnightkrdoplease'>
                BOOK
              </InputLabel>
              <Input
                className='midnightkrdoplease'
                id="input-with-icon-adornment"
                readOnly
                value={itemObj.bookField}
                startAdornment={
                  <InputAdornment position="start">
                    <MenuBookIcon sx={{height: "2rem", width: "2rem"}} />
                  </InputAdornment>
                }
              />
            </FormControl>
            </Box> 
            :
            <>
            <Box style={{ "border-radius": "20px"}}  className="formInputTitleEtc1234">

            <FormControl fullWidth  color="lightColor" variant="standard" className='whitekrdoplease'>
              <Input
                className='midnightkrdoplease'
                id="input-with-icon-adornment"
                readOnly
                value={itemObj.bookField}
                startAdornment={
                  <InputAdornment position="start">
                    <MenuBookIcon sx={{height: "2rem", width: "2rem"}} />
                  </InputAdornment>
                }
              />
            </FormControl>
            </Box>
            <div  style={{ "border-radius": "20px", height: "1.5rem", marginTop:"5px"}}  className="formInputTitleEtcVS">
                <ElectricBoltIcon sx={{mb:1, height: "1.5rem", width: "3rem", color:"#283655" }} />
            </div>

            <Box style={{ "border-radius": "20px"}}  className="formInputTitleEtc1234">

            <FormControl fullWidth  color="lightColor" variant="standard" className='whitekrdoplease'>

              <Input
                className='midnightkrdoplease'
                id="input-with-icon-adornment"
                readOnly
                value={itemObj.bookField}
                startAdornment={
                  <InputAdornment position="start">
                    <MenuBookIcon sx={{height: "2rem", width: "2rem"}} />
                  </InputAdornment>
                }
              />
            </FormControl>
            </Box>
          </>
          }
          </Grid>

      

        <Grid item  sx={{color:'white', paddingBottom:"0.5rem"}} lg={12} > 
          
          <Box  className="formInputTitleEtc1234 disabledChangePlease" >

            <FormControl fullWidth color="lightColor" variant="standard" className='disabledChangePlease scrollLightPost'>

                <TextField
                    id="outlined-multiline-static"
                    label="DESCRIPTION" 
                    multiline
                    fontColor= "white"
                    rows={itemObj.imagesArray.length == 0 ? 12: 4}
                    disabled
                    className='disabledChangePlease scrollLightPost'
                    color="lightColor"
                    inputProps={{fontColorDescription, style: { color: "white",
                     fontSize:"12px", textAlign:"justify"}}}
                    value={itemObj.description}
                  />
            </FormControl>
            </Box>
          </Grid>

          
          {itemObj.typePost.toLowerCase() == 'REVIEW'.toLowerCase() &&  <Grid item  sx={{color:'white'}} lg={12}  > 
              
              <Box   className="formInputTitleEtc4 borderRadiusRatingPost" sx={{ border: "2px solid #1E1F26", width:"93.5%", borderRadius:"5px"}} >
                  <Typography component="legend"  sx={{color: "#1E1F26", width:"20%", fontSize: '10px',
                   borderRight: "3px solid #1E1F26"}}><b>RATING </b> </Typography>
                  <StyledRating
                    name="customized-color"
                    size="large"
                    readOnly="true"
                    precision={0.5}
                    defaultValue={itemObj.rating}
                    icon={<RectangleIcon fontSize="large" />}
                    emptyIcon={<RectangleOutlinedIcon fontSize="large" />}

                  />
                </Box>
          </Grid> }

        </Grid>
        </ThemeProvider>
      </div> 

      
        
    { itemObj.imagesArray.length != 0 &&
    <>
    <div >
      <ImageListItem sx={{width:"95%"}} style={{"display": "block", "margin-left": "auto",
            "margin-right": "auto"}} >
          <img
            src={itemObj.imagesArray[activeStep]}
            srcSet={itemObj.imagesArray[activeStep]}
            alt={itemObj.imagesArray[activeStep]}
          />
        </ImageListItem>
    </div>
    <div style={{"display": "flex", "justify-content": "center"}}>
      <MobileStepper
        sx={{width:"89.5%", background: "#1E1F26", color: "#D0E1F9"}} 
        variant="text"
        steps={maxSteps}
        position="static"
        color='primary'
        activeStep={activeStep}
        nextButton={
          <Button
          className="nav-button nav-button-ltr"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{color: "#D0E1F9"}} />
            ) : (
              <KeyboardArrowRight sx={{color: "#D0E1F9"}} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} className="nav-button nav-button-ltr">
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{color: "#D0E1F9"}} />
            ) : (
              <KeyboardArrowLeft sx={{color: "#D0E1F9"}} />
            )}
          </Button>
        }
      />
    </div>
    </>
    }

      <Grid container spacing={0}  direction="column" style={{position:"absolute", bottom:"5px"}} sx={{color:'white',}}
         >
        
        <Grid item lg={9} sx={{ borderRadius:"10px", backgroundColor: '#1E1F26', marginTop: '5px',
         marginLeft: "5px", width:"92%"}} >  

                <Grid container spacing={1}  direction="row" sx={{height: "3rem"}}
                                                justifyContent="center" alignItems="center"  >

                <Grid item lg={3.8}>   
                      
                      
                      <IconButton sx={{color:"#D0E1F9", borderRadius:"7px",
                      "& .MuiTouchRipple-root .MuiTouchRipple-child": { borderRadius: "7px",},}} aria-label="reply" >
                        <BsBook size={25}  sx={{ ml: 0, height: "2rem", width: "4rem" }} />
                      </IconButton>

                  </Grid>  

                  <Grid item lg={3.8}>
                    {/* <Item sx={{ backgroundColor: '#D0E1F9', color:'white'}}>     

                      <Fab  className='sendTheIcon' variant="extended"  sx={{height: "2rem", width: "9rem", boxShadow: "1px 1px 1px 1px #1E1F26, -1px -1px 1px 1px #1E1F26" }}  color="#D0E1F9" aria-label="add">
                        <b style={{"font-size": "25px", color:"#1E1F26"}}>POST</b>
                        
                        <SendIcon className='fadeInLeft' sx={{ ml: 0, height: "2rem", width: "3rem" }} />
                      </Fab> 
                    </Item>  */}

                      <IconButton sx={{color:"#D0E1F9", borderRadius:"7px",
                      "& .MuiTouchRipple-root .MuiTouchRipple-child": { borderRadius: "7px",},}} aria-label="reply" >
                        <BiEdit size={25} sx={{ ml: 0, height: "2rem", width: "4rem" }} />
                      </IconButton>

                  </Grid>  

                  <Grid item lg={3.8}>

                      <IconButton sx={{color:"#D0E1F9", borderRadius:"7px",
                      "& .MuiTouchRipple-root .MuiTouchRipple-child": { borderRadius: "7px",},}} aria-label="reply" >
                        <FaRegShareSquare size={25} sx={{ ml: 0, height: "2rem", width: "4rem" }} />
                      </IconButton>
                  </Grid>         

                </Grid>   

        </Grid>         

      </Grid> 
      </div>
  );
}

export default Post