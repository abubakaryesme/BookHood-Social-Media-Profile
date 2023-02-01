import React from 'react'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import './Comments.css'
import Comment from './Comment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Reply from './Reply';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));


const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#d0e1f945',
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
    },
  });
  
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#D0E1F9',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Comments({itemObj}) {
    var result = `COMMENTS - ${itemObj.comments.length}`; 
  return (
    <div style={{ "margin-bottom": "0.3rem", "border-radius": "30px", height:"71vh"}}  className='lightPostColorHoja'>
    <div className='commentsPostRow'>
    <Root  className='borderRadiusCommentTag' sx={{ borderRadius: "5px"}}>
      <Divider className='dividerTextChanger'  sx={{   "&::before, &::after": {borderColor: "#D0E1F9",}, 
                color: "#D0E1F9", background: '#1E1F26',}}>
        <Chip  label= {result}  />
      </Divider>
    </Root>
    </div>
    <div className='scrollLightPostComment' style={{overflowY:"auto", height:"73vh", paddingRight:"7px"}}>
    {itemObj.comments.length === 0 ? 
    (
        <p>No Comment to show</p>
    )
    : 
    (
        <ThemeProvider theme={theme}>
        <Grid container spacing={3}  direction="column" sx={{color:'white',marginTop:"0.3rem"}} justifyContent="center">

              
            {itemObj.comments.map((item) => (
                <Grid item key={item.id} color="badgeColor" sx={{color:'white', borderRadius: "25px",}} lg={11} >


                        <div className='avatarPostRow'>
                            <Avatar alt="Remy Sharp" sx={{mr:1,width:"2rem", height: "2rem"}} src={itemObj.imagesArray[0]} />
                            <Comment  commentObj ={item} name={itemObj.name}/>
                        </div>

                </Grid>


                ))}
            
            </Grid>
          </ThemeProvider>

    )
    }
    </div>
    
    </div>
  );
}

export default Comments