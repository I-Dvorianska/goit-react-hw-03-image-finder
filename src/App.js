import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
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
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchText } = this.state;

    if (prevState.searchText !== searchText) {
      this.setState({ images: [], loading: true });

      fetchImages(searchText, 1).then((res) => {
        const imagesData = res.hits;
        this.setState({ images: imagesData, loading: false });
      });
    }

    if (prevState.page !== page) {
      if (page !== 1) {
        this.setState({ loading: true });
        fetchImages(searchText, page)
          .then((res) => {
            const imagesData = res.hits;
            this.setState({
              images: [...this.state.images, ...imagesData],
              loading: false,
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
    const { images, page, loading } = this.state;

    return (
      <>
        <Searchbar onSubmit={getSearchFieldText} />

        {images.length > 0 && <ImageGallery images={images} />}
        {loading && (
          <Loader
            type="Circles"
            color="#46c5f0"
            height={40}
            width={60}
            timeout={3000}
            style={{ marginLeft: 620, marginTop: 15 }}
          />
        )}
        {images.length > 0 && <Button page={page} onLoad={changePageNumber} />}
      </>
    );
  }
}

export default App;
