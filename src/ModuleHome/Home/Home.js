import React, { Component } from "react";
import Carousel from "./Carousel/Carousel";
import { connect } from "react-redux";
import { getListMovieRequest } from "../../store/actions/movie";
import { getItem, getDetailBookRequest } from "../../store/actions/bookstick";
import Spinner from "../../ulti/Spinner/Spinner";
import HomeApp from "./HomeApp/HomeApp";
import Footer from "../Footer/Footer";
import ListMoviev2 from "./ListMovie/ListMoviev2";
import BookStickerFormv2 from "./BookStickerForm/BookStickerFormv2";

class Home extends Component {
  componentDidMount() {
    this.props.getListMovieRequest();
  }
  render() {
    const { movies, match, history } = this.props;
    if (Object.keys(movies).length === 0) return <Spinner />;
    return (
      <>
        <Carousel />
        <BookStickerFormv2 movies={movies} history={history} />
        <ListMoviev2 movies={movies} match={match} />
        <HomeApp />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.movies
  };
};

export default connect(
  mapStateToProps,
  { getListMovieRequest, getDetailBookRequest, getItem }
)(Home);
