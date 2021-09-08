import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./App.css";
// import { f} from "utils/fetchApi";
import Api from "utils/fetchApi";

class App extends Component {
  state = {
    searchText: "",
    images: [],
    page: 1,
  };

  componentDidUpdate(prevState) {
    const { page, searchText, images } = this.state;
    if (prevState.searchText !== searchText) {
      console.log(prevState.searchText);
      console.log(this.state.searchText);
      //   const result = fetchApi(page, searchText);
      //   console.log(fetchApi(page, searchText));
      //   this.setState({ images: result });
      //   console.log(images);
      //   console.log(
      //     Api.fetchImages(page, searchText).then((res) =>
      //     //   this.setState({ images: res.hits })
      //     )
      //   );.
    }
  }

  getSearchFieldText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    const { getSearchFieldText } = this;

    return (
      <>
        <Searchbar onSubmit={getSearchFieldText} />
      </>
    );
  }
}

export default App;
