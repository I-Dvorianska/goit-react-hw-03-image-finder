import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./App.css";

class App extends Component {
  state = {
    searchText: "",
  };

  getSearchFieldText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.getSearchFieldText} />
      </>
    );
  }
}

export default App;
