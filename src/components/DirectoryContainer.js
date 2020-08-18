import React, { Component } from "react";
import API from "../utils/API.js";

class DirectoryContainer extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: "",
  };

  //   userSearch = () => {
  //     API.search()
  //       .then((res) => {
  //         this.setState({ result: res.data.results });
  //       })
  //       .catch((err) => console.log(err));
  //   };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }
}

export default DirectoryContainer;
