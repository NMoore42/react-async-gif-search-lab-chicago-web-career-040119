import React, { Component } from "react";

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifData: []
    }
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${"cat"}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(errors => console.log(errors.messages))
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}
