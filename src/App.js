import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./App.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
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
      this.setState({ images: [] });

      fetchImages(searchText, 1).then((res) => {
        const imagesData = res.hits;
        this.setState({ images: imagesData });
      });
    }

    if (prevState.page !== page) {
      if (page !== 1) {
        fetchImages(searchText, page)
          .then((res) => {
            const imagesData = res.hits;
            this.setState({
              images: [...this.state.images, ...imagesData],
            });
          })
          .finally(this.scrollToBottom);
      }
    }
  }

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  getSearchFieldText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  changePageNumber = (page) => {
    this.setState({ page });
  };

  render() {
    const { getSearchFieldText, changePageNumber } = this;
    const { images, page } = this.state;

    return (
      <>
        <Searchbar onSubmit={getSearchFieldText} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <Button page={page} onLoad={changePageNumber} />}
      </>
    );
  }
}

export default App;
