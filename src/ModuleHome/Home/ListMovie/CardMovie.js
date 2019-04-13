import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
  Fab,
  CardContent,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";

const Hover = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* transition: all 0.5s; */
  color: white;
  &:hover{
    opacity: 1;
    color: white;
    background: rgba(0,0,0,0.3);
    .qw{
      transition: all 0.5s;
      transform: translateY(-50%);
    }
    .qe{
      transition: all 0.5s;
      transform: translateY(100%)
    }
  }
`

const StylePlayIcon = styled(Fab)`
  border: 2px solid white !important;
  color: white !important;
  background: transparent !important;
  position: absolute;
  transform: translateY(-150%);
`

const StyleButton = styled(Button)`
  position: absolute !important;
  transform: translateY(150%);
`

const CardMovie = ({ movie }) => {
  return (
    <Card style={{ position: 'relative' }}>
      <CardActionArea>
        <Hover>
          <StylePlayIcon className='qw'>
            <a href={movie.Trailer} target={"_blank"} className='text-white'>
              <PlayArrowIcon />
            </a>
          </StylePlayIcon>
          <StyleButton className='qe bg-info' color='inherit' variant='contained'
            component={Link} to={`/detail/${movie.MaPhim}`}
          >Detail</StyleButton>
        </Hover>
        <CardMedia
          style={{ height: 300 }}
          image={movie.HinhAnh}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant='h6'>{movie.TenPhim}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardMovie;
