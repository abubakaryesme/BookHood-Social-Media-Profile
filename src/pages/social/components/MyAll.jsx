import React from 'react'
import BookPic from '../static/MyBook.png'
import HoodPic from '../static/MyHood.png'
import LibPic from '../static/LibrariesPic.png'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'white' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = styled((theme) => ({
    divider: {
        background: "white",
    },
  }));

function MyAll() {
  return (
    <Box>

        <Grid container spacing={2} sx={{marginTop: "1rem", marginTop: "1rem", color:"white"}} direction="column"
        justifyContent="center" alignItems="center">

            <Grid item lg={12} className='scaleFollow1' >
                <Item sx={{ backgroundColor: '#D0E1F9', padding: "0",borderRadius: "25px"}}>  
                    <Divider className="divider" sx={{"&::before, &::after": {borderColor: "#D0E1F9"}, 
                color: "#D0E1F9", background: '#1E1F26', boxShadow: "0px 6px 4px #4D648D",}} textAlign="left"><h1  >MY Book</h1></Divider>
                    <img  src= {BookPic} style={{"width": "15rem", "height": "15rem"}} alt="Book pic" />
                    
                </Item>
                
            </Grid>


            <Grid  item lg={12} className='scaleFollow1'  sx={{marginBottom: "1rem", marginTop: "1rem"}}>
            <Item sx={{ backgroundColor: '#D0E1F9', padding: "0",borderRadius: "25px"}}>  
                <Divider light="true" color="white"  sx={{   "&::before, &::after": {borderColor: "#D0E1F9",}, 
                color: "#D0E1F9", background: '#1E1F26', boxShadow: "0px 6px 4px #4D648D",}} textAlign="right"> <h1>MY HOOD</h1></Divider>
                <img  src= {HoodPic} style={{"width": "15rem", "height": "15rem"}} alt="Hood icon" />
                
            </Item>
                
            </Grid>

            <Grid item lg={12} className='scaleFollow1'>
            <Item sx={{ backgroundColor: '#D0E1F9', padding: "0",borderRadius: "25px"}}>  
                <Divider sx={{"&::before, &::after": {borderColor: "#D0E1F9",}, 
                color: "#D0E1F9", background: '#1E1F26', boxShadow: "0px 6px 4px #4D648D",}} textAlign="center"><h1 >MY LIBRARIES</h1></Divider>
                <img  src= {LibPic} style={{"width": "15rem", "height": "15rem"}} alt="my libraries" />
                
            </Item>
                
            </Grid>

        </Grid>
    </Box>
  );
}

export default MyAll