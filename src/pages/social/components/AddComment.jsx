import React, {useState}  from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import {FaEdit,FaReply,FaTrash} from "react-icons/fa"


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
        main: '#D0E1F9',
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
      }
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



function AddComment() {
  const [replyUser, SetReplyUser] = useState();
  return (
    <ThemeProvider theme={theme}>

    <FormControl  color="badgeColor" variant="standard" className='scrollLightPost widthLessReply'>

        <TextField
            id="outlined-multiline-static"
            label="Add Comment"
            multiline
            fontColor= "#1E1F26"
            rows={2}
            className='scrollLightPost'
            color="badgeColor"
            inputProps={{maxLength: 300, fontColorDescription, style: { color: "#1E1F26",
             fontSize:"12px", textAlign:"justify", background:"D0E1F9"}}}
            value={replyUser}
        
          />
            
            <Stack sx={{marginTop:"-30px"}} direction="row" justifyContent="flex-end" spacing={0}>


                <IconButton className='sendTheIcon' aria-label="reply" >
                    <b style={{"font-size": "10px", color:"#1e1f26"}}>POST</b>                
                    <SendIcon className='fadeInLeft' sx={{ ml: 1, height: "1.3rem", width: "1.3rem" }} />
                </IconButton>
                
            </Stack>
    </FormControl>


    </ThemeProvider>
  );
}

export default AddComment