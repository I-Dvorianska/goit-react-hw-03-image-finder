import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./App.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImages from "utils/fetchApi";

class App extends Component {
  state = {
    searchText: "",
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchText } = this.state;

    if (prevState.searchText !== searchText) {
      fetchImages(searchText, page).then((res) => {
        const imagesData = res.hits;
        this.setState({ images: imagesData });
      });
    }
  }

  getSearchFieldText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    const { getSearchFieldText } = this;
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={getSearchFieldText} />
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    );
  }
}

export default App;
