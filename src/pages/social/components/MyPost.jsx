import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddComment from './AddComment';
import Post from './Post';
import Comments from './Comments';
import PostSpring from '../static/PostSpring.png'

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


function MyPost() {
  return (
    <div className='messageBody' style={{"background-color": "white",
     "margin-top": "2rem","margin-bottom": "2rem"}}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}  direction="column" sx={{color:'white'}} justifyContent="center" >

              
            {itemData.map((item) => (
                <Grid item key={item.id} color="badgeColor" sx={{color:'white', borderRadius: "25px",}} lg={11} >


                  <Grid container spacing={3} className='springUpOnHover' direction="row" sx={{color:'white'}} justifyContent="center" > 


                    <Grid item  color="badgeColor" sx={{color:'white', borderRadius: "25px", zIndex:"5"}} lg={6} >
                      <Item color="primary1" className='lightPostColorHoja' sx={{border: "1px solid #1E1F26", borderRadius: "15px", boxShadow:"1px 1px 1px 1px #1E1F26,-1px -1px 1px 1px #1E1F26",
                       background:"#d0e1f9", height:"90.5vh", position:"relative"}}>
                      
                        <Post   itemObj ={item}/></Item>
                    </Grid>
                    <img className='fadeIn' src= {PostSpring} alt="Spring" 
                        style={{"width": "20% !important","height" : "85vh", position:"absolute",
                         left:"647px", marginTop:"30px", paddingTop:"36px" }} />

                    <Grid item key={item.id}  color="badgeColor" className='scrollLightPostComment springUpOnHover' sx={{color:'white', borderRadius: "25px", zIndex:"5"}} lg={6} >
                      <Item color="primary" className='lightPostColorHoja' sx={{border: "1px solid #1E1F26", borderRadius: "15px", boxShadow:"1px 1px 1px 1px #1E1F26,-1px -1px 1px 1px #1E1F26", background:"#d0e1f9"}}>

                        <Comments  itemObj ={item}/>
                        <div   style={{height:"12vh", marginTop:"50px"}}>
                        <AddComment />
                        </div>
                        </Item>
                    </Grid>


                  </Grid>


                </Grid>

                ))}
            
            </Grid>
          </ThemeProvider>

    </div>
  );
}

const itemData = [
  {
    id: '1',
    name: 'Breakfast',
    username: '@bkristastucchio',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review ",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'},{comment:"WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review WoW! thats really a nice review ",
                id:'4'}, {comment:"WoW! thats really a nice review",
                id:'5'}, {comment:"WoW! thats really a nice review",
                id:'6'}],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },
  {
    id: '2',
    name: 'Burger',
    username: '@rollelflex_graphy726',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:[],
  },
  {
    id: '3',
    name: 'Camera',
    username: '@helloimnik',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1522770179533-24471fcdba45', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },
  {
    id: '4',
    name: 'Coffee',
    username: '@nolanissac',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'COMPARISON',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },
  {
    id: '5',
    name: 'Hats',
    username: '@hjrc33',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1533827432537-70133748f5c8', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],

  },
  {
    id: '6',
    name: 'Honey',
    username: '@arwinneil',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good. Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    comments: [],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],

  },
  {
    id: '7',
    name: 'Basketball',
    username: '@tjdragotta',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },
  {
    id: '8',
    name: 'Fern',
    username: '@katie_wasserman',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },
  {
    id: '9',
    name: 'Mushrooms',
    username: '@silverdalex',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },
  {
    id: '10',
    name: 'Tomato basil',
    username: '@shelleypauls',
    description: 'Hi!  Book is too good. Its story is fantastic. Must Read Book. The author is also too good.',
    bookField:'Journey of Kaar e Kamal By Rana Bilal Yousaf',
    day: '3d',
    likes: [],
    comments: [{comment:"WoW! thats really a nice review",
                id:'1'}, {comment:"WoW! thats really a nice review",
                id:'2'}, {comment:"WoW! thats really a nice review",
                id:'3'}],
    reply: [],
    shares: '999',
    privacyPost: 'Public',
    typePost: 'Review',
    rating: '4.5',
    imagesArray:['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
  },

];

export default MyPost