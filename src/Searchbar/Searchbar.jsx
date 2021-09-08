import { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    search: "",
  };

  getSearchText = (e) => {
    this.setState({
      search: e.currentTarget.value.trim(),
    });
  };

  

    onSearchBtnClick = (e) => {
      const { onSubmit } = this.props;
      const { search } = this.state;

      e.preventDefault();
      onSubmit(search);

      this.setState({ search: ""})
  };

    render() {
        const { onSearchBtnClick, getSearchText, state} = this;


    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSearchBtnClick}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={getSearchText}
            className="SearchForm-input"
            type="text"
            value={state.search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
