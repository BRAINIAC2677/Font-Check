import React from "react";
import fonts from "../fonts";
import FontItem from "./FontItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    let fontItems = fonts.map((fontItem) => {
      return (
        <FontItem key={fontItem.id} item={fontItem} text={this.state.text} />
      );
    });

    return (
      <div className="container">
        <div className="text-box">
          <label htmlFor="text-box">Your Text </label>
          <input
            type="text"
            placeholder="e.g. Github is awesome"
            id="text-box"
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className="font-box">{fontItems}</div>
      </div>
    );
  }
}

export default App;