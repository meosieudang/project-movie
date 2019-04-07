import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Slider from "react-slick";
import styled from "styled-components";
import CardMovie from "./CardMovie";

const settings = {
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const StyledDiv = styled(props => <div {...props} />)`
  margin: 0 20vw;
  margin-top: 5rem;

  @media screen and (max-width: 576px) {
  }
`;

const ListMoviev2 = ({ movies }) => {
  return (
    <>
      <StyledDiv>
        <Grid container spacing={16} justify="center" className="mb-4">
          <Grid item>
            <Typography variant="h5" color="secondary">
              Now Showing
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="default">
              Coming soon
            </Typography>
          </Grid>
        </Grid>

        <Slider {...settings}>
          {movies.map(movie => (
            <Grid
              container
              spacing={24}
              alignContent="center"
              key={movie.MaPhim}
            >
              <Grid item style={{ marginBottom: "2rem", marginLeft: 10 }}>
                <CardMovie movie={movie} />
              </Grid>
            </Grid>
          ))}
        </Slider>
      </StyledDiv>
    </>
  );
};

export default ListMoviev2;
