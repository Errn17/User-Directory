import React, { Component } from "react";
import API from "../utils/API";

class DirectoryContainer extends Component {
  state = {
    result: [],
    search: "",
    sortType: "asc",
  };

  userSearch = () => {
    API.search()
      .then((res) => {
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  };
}

export default DirectoryContainer;
