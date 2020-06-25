import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContacts } from '../../actionCreators/Simple';
import SIMPLE from '../../components/Simple';


class ContactsContainer extends React.Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { simple } = this.props;
    return (
      <section>
        {simple && simple.map((item, i) => <SIMPLE details={item} key={i.toString()} />)}
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { simpleState } = state;
  const { simple } = simpleState;
  return {
    simple,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContacts: bindActionCreators(getContacts, dispatch),
  };
}

ContactsContainer.propTypes = {
  simple: PropTypes.array,
  getContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
