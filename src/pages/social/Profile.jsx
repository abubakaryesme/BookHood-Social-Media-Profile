import React from "react";
import MyInfo from "./components/MyInfo";
import Followers from "./components/Followers";
import MyPost from "./components/MyPost";
import MyAll from "./components/MyAll";
import CreatePost from "./components/CreatePost";
import Following from "./components/Following";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function MySocial() {
  return (
    <React.Fragment>
      <MyInfo />
      

      <Grid container spacing={2} sx={{marginTop: "1rem", marginTop: "1rem"}} direction="row"
      justifyContent="center" >

        <Grid item lg={2.5}>
          <Item sx={{marginBottom: "2rem", backgroundColor: '#4D648D',borderRadius: "15px"}}>      <Followers />
          </Item>
          <Item sx={{marginBottom: "2rem", backgroundColor: '#4D648D',borderRadius: "15px"}} > <Following/></Item>
        </Grid>

        <Grid item lg={6}>
          <Item sx={{marginBottom: "1rem", backgroundColor: '#d0e1f9100', borderRadius: "10px",}}><CreatePost /></Item>
          <Item sx={{  border:"1.5px solid rgba(30, 31, 38,1)", 
          marginBottom: "2rem", backgroundColor: 'white', borderRadius: "5px"}}><MyPost /></Item>
        </Grid>

        <Grid item lg={2.5}>
          <Item sx={{paddingBottom:"2rem"}}><MyAll /></Item>
        </Grid>


      </Grid>

    </React.Fragment>
  );
}

export default MySocial;
