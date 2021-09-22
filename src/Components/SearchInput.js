import React from "react";

class SearchInput extends React.Component {
  state = { entry: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui from">
          <div className="field">
            <div className="ui massive icon input" style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
