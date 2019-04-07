import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";

const StyledCardMedia = styled(props => (
  <CardMedia classes={{ root: "root" }} {...props} />
))`
  &.root {
    height: 360px !important;
  }
`;

const PlayIcon = styled(props => <PlayArrowIcon {...props} />)`
  position: absolute;
  opacity: 0;
  width: 50% !important;
  height: 25% !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem !important;
  border-radius: 50%;
  background: transparent;
  border: 1px solid whitesmoke;
  color: azure;
  z-index: 10;

  &:hover {
    opacity: 1;
    transition: all 0.5s;
  }
`;

const CardMovie = ({ movie }) => {
  return (
    <Card>
      <CardActionArea>
        <a href={movie.Trailer} target={"_blank"}>
          <PlayIcon />
        </a>
        <Link to={`/detail/${movie.MaPhim}`}>
          <StyledCardMedia
            image={movie.HinhAnh}
            title={movie.TenPhim}
            style={{ height: 140 }}
          />
        </Link>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <ShareIcon color="primary" />
        </IconButton>
        <IconButton>
          <FavoriteIcon color="secondary" />
        </IconButton>
        <Link to={`/detail/${movie.MaPhim}`} style={{ textDecoration: "none" }}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardMovie;
