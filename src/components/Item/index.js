import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editText: false,
      toggleButton: true,
    };
  }

  // Function for Editing in inputText
  onEdit = () => {
    this.setState({
      editText: true,
      toggleButton: false,
    });
    // this.props.onEdit(event);
  };

  // Function for onChange in input
  onChange = (e) => {
    this.props.onChange(e);
  };

  // Function for Saving in inputText
  onSave = (event) => {
    event.preventDefault();
    this.setState({
      editText: false,
      toggleButton: true,
      //   onSave: true,
    });
  };

  onDelete = (event) => {
    event.preventDefault();
    this.props.onDelete();
  };

  onCheckboxClick = (event, inputText) => {
    event.preventDefault();
    this.props.onClick(inputText);
  }

  render() {
    const { editText, toggleButton } = this.state;
    const { item, checked } = this.props;

    return (
      <div className="unstyled centered">
        <input className="styled-checkbox" type="checkbox" checked={checked} onClick={() => this.onCheckboxClick(item)}></input>
        <a href="/" htmlFor="styled-checkbox-2" onClick={(e) => this.onCheckboxClick(e, item)} />
        {editText ? <input type="text" value={item} onChange={this.onChange} /> : <span>{item}</span>}
        {toggleButton ? <button onClick={(event) => this.onEdit(event)}>Edit</button> : <button onClick={(event) => this.onSave(event, item)}>Save</button>}
        <button onClick={(event) => this.onDelete(event)}>Delete</button>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.array,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Item;
