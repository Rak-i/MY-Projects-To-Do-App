import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Item from '../Item';

// class List extends PureComponent {
// constructor(props) {
//   super(props);
//   this.state = {
//     // editText: false,
//     // inputValue: '',
//   };
// }
const List = (props) => (
  <ul>
    {
      props.items.map((item, index) => (
        <Row md="3" className="checkbox" key={index.toString()}>
          <Item item={item} onDelete={() => props.onDelete(index)} onClick={(inputText) => props.onClick(index, inputText)} onChange={(e) => props.onChange(e, index)} checked={props.checked} />
        </Row>
      ))
    }
  </ul>
);


List.propTypes = {
  items: PropTypes.array,
  checked: PropTypes.bool,
  // onDelete: PropTypes.func,
  // onClick: PropTypes.func,
  // onChange: PropTypes.func,
};

export default List;
