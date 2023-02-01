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

    
function Reply({replyComment}) {
    const [replyUser, SetReplyUser] = useState(replyComment.comment);
  return (
    <ThemeProvider theme={theme}>

    <FormControl  color="lightColor" variant="standard" className='disabledChangePlease scrollLightPost widthLessReply'>

        <TextField
            id="outlined-multiline-static"
            label={replyComment.id}
            multiline
            fontColor= "white"
            rows={2}
            disabled
            className='disabledChangePlease scrollLightPost'
            color="lightColor"
            inputProps={{maxLength: 300, fontColorDescription, style: { color: "white",
             fontSize:"12px", textAlign:"justify", paddingRight:"7px"}}}
            value={replyUser}
        
          />
            
            <Stack sx={{marginTop:"-25px"}} direction="row" justifyContent="flex-end" spacing={0}>


                <IconButton aria-label="reply" >
                    <FaReply size ={15}/>
                </IconButton>
                <IconButton aria-label="delete" sx={{ marginRight:"10px"}} >
                    <FaTrash size ={15}/>
                </IconButton>
                
            </Stack>
    </FormControl>


    </ThemeProvider>
  );
}
    
export default Reply