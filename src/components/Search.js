import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      searchtext: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  submitForm = () => {
    this.props.history.push("/key=" + this.state.searchtext);
  };

  handleChange(event) {
    this.setState({
      searchtext: event.target.value,
      searchtexterrorText: "",
      emailerrorstatus: false
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 text-left text-primary">Search@twitter</div>
          <div className="col-md-6 text-right text-primary">Autorefresh</div>
        </div>

        <form onSubmit={this.submitForm} className="mr-2 form-div col-md-10">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              value={this.state.searchtext}
              onChange={this.handleChange}
              placeholder="Search text"
            />
            <input className="btn btn-primary" type="submit" value="SEARCH" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
