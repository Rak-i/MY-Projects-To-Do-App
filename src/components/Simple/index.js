import React, { PureComponent } from 'react';
import { Col } from 'react-bootstrap';
import List from '../List';
// import PropTypes from 'prop-types';

class Simple extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
      completed: [],
      checked: true,
    };
  }

  // Function for onChange in input
  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  // Function to send the submit value to List Component
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputValue.length) {
      this.setState({
        inputValue: '',
        items: [...this.state.items, this.state.inputValue],
      });
    }
  }

  // Function to delete the TODO item
  onDelete = (i) => {
    const { items } = this.state;
    const list = [...items];
    list.splice(i, 1);
    this.setState({
      items: list,
    });
  }

  onClick = (i) => {
    const { items, completed } = this.state;
    const list = [...items];
    const completedList = list.splice(i, 1);
    this.setState({
      items: list,
      completed: [...completed, completedList],
    });
  }

  onChangeText = (e, i) => {
    const { value } = e.target;
    const { items } = this.state;
    const list = [...items];
    list[i] = value;
    this.setState({
      items: list,
    });
  }

  render() {
    const { items, completed, checked } = this.state;
    return (
      <div className="input">
        <Col md="3">
          <h5>ADD ITEM</h5 >
          <input type="text" name="search" value={this.state.inputValue} onChange={this.onChange} />
          <button onClick={(event) => this.onSubmit(event)}>Add</button>
        </Col>
        <Col md="3">
          <h5>TODO</h5 >
          <List items={items} onClick={this.onClick} onDelete={this.onDelete} onChange={this.onChangeText} />
        </Col>
        <Col md="3" className="completed-list">
          <h5>COMPLETED</h5 >
          <List items={completed} checked={checked} />
        </Col>
      </div>
    );
  }
}

export default Simple;
