import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import './Follow.css'

export default function Following() {
  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <Button

                className="nav-button nav-button-ltr"
                sx={{
                  my: 2,
                  mx: 4,
                  color:  "white",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 23,
                  textTransform: "uppercase",
                  textAlign: "center"
                }}

                style={{"border": "2px solid white"}}
              >Following</Button>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem className='scaleFollow'  key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.username}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    name: 'Breakfast',
    username: '@bkristastucchio',

  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    name: 'Burger',
    username: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    name: 'Camera',
    username: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    name: 'Coffee',
    username: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    name: 'Hats',
    username: '@hjrc33',

  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    name: 'Honey',
    username: '@arwinneil',

  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    name: 'Basketball',
    username: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    name: 'Fern',
    username: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    name: 'Mushrooms',
    username: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    name: 'Tomato basil',
    username: '@shelleypauls',
  },

];
