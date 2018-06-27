import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class From extends Component {
  state = {
    text: ''
  };

  // updates text prop with each keystroke
  handleChange = (e) => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };

  // detect when user pressed enter, defer to App component
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.submit(this.state.text);
      this.setState({text: ''}); // clear the textfiled after submit
    }
  };

  render() {
    const {text} = this.state;
    return (
      <TextField
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        label="My shit list..."
        value={text}
        fullWidth
        margin="normal"
      />
    );
  }
}