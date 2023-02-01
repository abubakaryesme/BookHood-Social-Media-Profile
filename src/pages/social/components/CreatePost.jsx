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


import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TitleIcon from '@mui/icons-material/Title';
import Badge from '@mui/material/Badge';
import { Scale } from '@mui/icons-material';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#D0E1F945',
      darker: '#053e85',
    },
    primary1: {
      main: '#fff',
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
      main: '#D0E1F945',
      contrastText: '#fff',
    }
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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: '#D0E1F9',
  border: '2px solid #283655',
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function CreatePost() {
  const [description, setDescription] = useState('')
  const [postType, setPostType] = useState('')
  const [postPrivacy, setPostPrivacy] = useState('Public')
  const [rating, setRating] = useState(0)
  const [bookName, setbookName] = useState('Northren Area of Pakistan')
  const [ISBN,setISBN] = useState(12345)
  const [autorName, setAuthorName] = useState('Muhammad Abu Bakar')
  const [bookNameTwo, setbookNameTwo] = useState('Northren Area of Pakistan')
  const [ISBNTwo,setISBNTwo] = useState(12345)
  const [autorNameTwo, setAuthorNameTwo] = useState('Muhammad Abu Bakar')
  const [imagesArray,setImagesArray] = useState([])

  const handleChange = (event, newType) => {
    setPostType(newType);
  };
  
  const control = {
    value: postType,
    onChange: handleChange,
    exclusive: true,
  };  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    if(postType === '')
      setPostType('REVIEW');
  }
  const handleClose = () => {
    setOpen(false);
    setPostType('');
  }

  const handleImagesPostFunction = ()=>{
    document.getElementById("imagesPost123").click();
  }

  const imageFilePostHandler = async(e) =>{
      setImagesArray([]);
      // await setImagesArray([...imagesArray, ...e.target.files]);
      // e.target.files.mao
      // await console.log(e.target.files)
      const files =  e.currentTarget.files;
  
      setImagesArray(Array.from(files).map((file) => file));
      console.log(imagesArray)
      
  }

  const handleOpenAndImage = ()=>{
    handleOpen();
    handleImagesPostFunction();
  }
  return (
    <div>
      <div className='messageBody' onClick={handleOpen} style={{"background-color": "#D0E1F945", "margin-top": "1rem",}}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}  direction="column" sx={{color:'white'}} justifyContent="left" >

        {/* <Grid item  sx={{color:'white'}} lg={12} > 
          
          <Box  className="formInputTitleEtc1">

            <FormControl fullWidth  color="secondary" variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" sx={{fontSize: "20px",}}>
                TITLE
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                disabled

                
                startAdornment={
                  <InputAdornment position="start">
                    <TitleIcon sx={{height: "2rem", width: "2rem"}} />
                  </InputAdornment>
                }
              />
            </FormControl>
            </Box>
          </Grid> */}

          <Grid item  sx={{color:'white'}} lg={12} > 
          
          <Box  className="formInputTitleEtc1">

            <FormControl fullWidth  color="secondary" variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" sx={{fontSize: "20px"}}>
                SEARCH BOOK
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                disabled

                
                startAdornment={
                  <InputAdornment position="start">
                    <PageviewIcon sx={{height: "2rem", width: "2rem"}} />
                  </InputAdornment>
                }
              />
            </FormControl>
            </Box>
          </Grid>

                  <Grid item  sx={{color:'white'}} lg={12} > 
          
          <Box  className="formInputTitleEtc1">

            <FormControl fullWidth   color="secondary" variant="standard">

                <TextField
                    id="outlined-multiline-static"
                    label="DESCRIPTION" 
                    multiline
                    rows={4}
                    disabled
                    defaultValue="Write a brief description!"
                  />
            </FormControl>
            </Box>
          </Grid>


        </Grid>
        </ThemeProvider>
      </div> 


      <Grid container spacing={0}  direction="column" sx={{color:'white'}}
         >
        <Grid item  sx={{color:'white'}} lg={12}>    


            <Grid container spacing={0} sx={{background: '#D0E1F945' }} 
            direction="row" justifyContent="center" >

            <Grid item lg={12}>
            <ThemeProvider theme={theme}>
              <ToggleButtonGroup  color="primary1" size="large" {...control} onClick={handleOpen} sx={{background: "#4D648D", color: "white"}} aria-label="Large sizes">

                <ToggleButton className='createposttoggle' sx={{color: "white"}}  value="REVIEW" key="REVIEW">
                        <ReviewsIcon /> REVIEW
                </ToggleButton>  

                
                <ToggleButton className='createposttoggle' sx={{color: "white"}}  value=" PREVIEW" key=" PREVIEW">
                    <PreviewIcon /> PREVIEW
                </ToggleButton>  

                
                <ToggleButton className='createposttoggle' sx={{color: "white"}}  value="RECOMENDATION" key="RECOMENDATION">
                        <RecommendIcon /> RECOMENDATION
                </ToggleButton>  

                
                <ToggleButton className='createposttoggle' sx={{color: "white"}}  value="COMPARISON" key="COMPARISON">
                        <ElectricBoltIcon />  COMPARISON
                </ToggleButton>   


                </ToggleButtonGroup>
                </ThemeProvider>
              </Grid> 

            </Grid>   
        </Grid> 

        <Grid item lg={12} sx={{ backgroundColor: '#d0e1f945100', marginTop: '5px'}} >  

                <Grid container spacing={0}  direction="row" sx={{height: "4rem"}}
                                                justifyContent="center" alignItems="center" >

                  <Grid item lg={9} sx={{paddingRight: '5px' }}>

                      <Button onClick={handleOpenAndImage} className="nav-button3" variant="contained" size = "large" sx={{height: "2.9rem", width: "100%", backgroundColor: "#4D648D" }}  endIcon={
                          <AddPhotoAlternateIcon sx={{ mr: 1, height: "2rem", width: "4rem", color :'#1e1f26' }} />
                        
                        }>
                              <input id="imagesPost123" onChange={imageFilePostHandler} hidden accept="image/*" multiple type="file" />

                          <b style={{"font-size": "25px", color:"white"}}>IMAGE</b>
                      </Button>
                  </Grid> 

                  <Grid item lg={3}>
                    <Item sx={{ backgroundColor: '#4D648D', color:'white'}}>     

                      <Fab onClick={handleOpen} className='sendTheIcon' variant="extended"  sx={{height: "2rem", width: "9rem", boxShadow: "1px 1px 2px 0px #1E1F26, -1px -1px 2px 0px #1E1F26" }}  color="#D0E1F9" aria-label="add">
                        <b style={{"font-size": "25px", color:"#1E1F26"}}>POST</b>
                        
                        <SendIcon className='fadeInLeft' sx={{ ml: 1, height: "2rem", width: "3rem" }} />
                      </Fab>
                    </Item> 
                  </Grid>         

                </Grid>   

        </Grid>         

      </Grid>    

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          


        <div className='messageBody' onClick={handleOpen} style={{"background-color": "#D0E1F9", "margin-top": "1rem",}}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}  direction="column" sx={{color:'white'}} justifyContent="left" >

        {postType !== 'COMPARISON'? 
          <Grid item  sx={{color:'white'}} lg={12} > 
              
          <Box  className="formInputTitleEtc1">

            <FormControl fullWidth  color="secondary" variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment11" sx={{fontSize: "20px",}}>
                TITLE
              </InputLabel>
              <Input
                id="input-with-icon-adornment11"
                required
                inputProps={{ maxLength: 30 }}
                
                startAdornment={
                  <InputAdornment position="start">
                    <TitleIcon sx={{height: "2rem", width: "2rem"}} />
                  </InputAdornment>
                }
              />
            </FormControl>
            </Box>
          </Grid>
        :

        <Grid item  sx={{color:'white'}} lg={12} > 
              
        <Box  className="formInputTitleEtc1">

          <FormControl fullWidth  color="secondary" variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment22" sx={{fontSize: "20px"}}>
              SEARCH BOOK ONE
            </InputLabel>
            <Input
              id="input-with-icon-adornment22"
              required
              inputProps={{ maxLength: 70 }}
              
              startAdornment={
                <InputAdornment position="start">
                  <PageviewIcon sx={{height: "2rem", width: "2rem"}} />
                </InputAdornment>
              }
            />
          </FormControl>
          </Box>

          <Box  className="formInputTitleEtc1">

          <FormControl fullWidth  color="secondary" variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment22" sx={{fontSize: "20px"}}>
              SEARCH BOOK TWO
            </InputLabel>
            <Input
              id="input-with-icon-adornment22"
              required
              inputProps={{ maxLength: 70 }}
              
              startAdornment={
                <InputAdornment position="start">
                  <PageviewIcon sx={{height: "2rem", width: "2rem"}} />
                </InputAdornment>
              }
            />
          </FormControl>
          </Box>

        </Grid>
        
        }


              <Grid item  sx={{color:'white'}} lg={12} className='scrollbar-hidden123'> 
              
              <Box  className='formInputTitleEtc1 scrollbar-hidden123'>

                <FormControl fullWidth  color="secondary" variant="standard" className='scrollbar-hidden123'>

                    <TextField
                        className='scrollbar-hidden123'
                        id="outlined-multiline-static"
                        label="DESCRIPTION" 
                        multiline
                        rows={6}
                        required
                        inputProps={{ maxLength: 800 }}
                        color="secondary"
                      />
                </FormControl>
                </Box>
              </Grid>

              {   
                postType === "REVIEW" && 
                <Grid item  sx={{color:'white'}} lg={12}  className="formInputTitleEtc3"> 
                
                <Box  className="formInputTitleEtc2" sx={{ border: "2px solid #1E1F26", width:"100%"}}>
                    <Typography component="legend"  sx={{color: "#1E1F26", width:"40%", fontSize: '20px',
                    borderRight: "3px solid #1E1F26"}}><b>RATE THIS BOOK </b> </Typography>
                    <StyledRating
                      name="customized-color"
                      size="large"
                      precision={0.5}
                      icon={<RectangleIcon fontSize="large" />}
                      emptyIcon={<RectangleOutlinedIcon fontSize="large" />}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </Box>
                </Grid>

              }

            </Grid>
            </ThemeProvider>
          </div> 


          <Grid container spacing={0}  direction="column" sx={{color:'white'}}
            >
            <Grid item  sx={{color:'white'}} lg={12}>    


                <Grid container spacing={0} sx={{background: '#D0E1F9' }} 
                direction="row" justifyContent="center" alignContent="center" className="formInputTitleEtc1">

                <Grid item lg={12}>
                <ThemeProvider theme={theme}>
                  <ToggleButtonGroup color="primary1" size="large" required {...control} sx={{background: "#4D648D", color: "white"}} aria-label="Large sizes">

                    <ToggleButton className='createposttoggle' sx={{color: "white"}}  value="REVIEW" key="REVIEW">
                            <ReviewsIcon /> REVIEW
                    </ToggleButton>  

                    
                    <ToggleButton className='createposttoggle' sx={{color: "white"}}  value=" PREVIEW" key=" PREVIEW">
                        <PreviewIcon /> PREVIEW
                    </ToggleButton>  

                    
                    <ToggleButton className='createposttoggle' sx={{color: "white"}}  value="RECOMENDATION" key="RECOMENDATION">
                            <RecommendIcon /> RECOMENDATION
                    </ToggleButton>  

                    
                    <ToggleButton className='createposttoggle' sx={{color: "white"}}  value="COMPARISON" key="COMPARISON">
                            <ElectricBoltIcon />  COMPARISON
                    </ToggleButton>   


                    </ToggleButtonGroup>
                    </ThemeProvider>
                  </Grid> 

                </Grid>   
            </Grid> 

            <Grid item lg={12} sx={{ backgroundColor: '#d0e1f9100', marginTop: '5px'}} >  

                    <Grid container spacing={0}  direction="row" sx={{height: "4rem"}}
                                                    justifyContent="center" alignItems="center"   >

                      <Grid item lg={7.6} sx={{paddingRight: '5px' }} >

                          <Button onClick={handleImagesPostFunction} className="nav-button3" variant="contained" size = "large" sx={{height: "2.9rem", width: "100%", backgroundColor: "#4D648D" }}  endIcon={
                            <ThemeProvider theme={theme}>
                              <Badge color="badgeColor" sx={{color: "#D0E1F9"}} badgeContent={imagesArray.length} max={10}>
                                <AddPhotoAlternateIcon sx={{ mr: 1, height: "1.7rem", width: "3rem", color :'#1e1f26' }} />
                              </Badge>
                            </ThemeProvider>
                            }>
                              <b style={{"font-size": "25px", color:"white"}}>IMAGE </b>
                          </Button>
                      </Grid> 

                      <Grid item lg={3}>
                        <Item sx={{ backgroundColor: '#4D648D', color:'white'}}>     

                          <Fab className='sendTheIcon' variant="extended"  sx={{height: "2rem", width: "9rem", boxShadow: "1px 1px 1px 1px #1E1F26, -1px -1px 1px 1px #1E1F26" }}  color="#D0E1F9" aria-label="add">
                            <b style={{"font-size": "25px", color:"#1e1f26"}}>POST</b>
                            
                            <SendIcon className='fadeInLeft' sx={{ ml: 1, height: "2rem", width: "3rem" }} />
                          </Fab>
                        </Item> 
                      </Grid>         

                    </Grid>   

            </Grid>         

          </Grid>    





        </Box>
      </Modal>

    </div>
  );
}



export default CreatePost