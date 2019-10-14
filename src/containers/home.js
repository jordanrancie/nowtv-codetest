import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';
import { MessageComponent } from './message';

import '../assets/Components.css';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMembers();
    this.props.loadMessages();
  }

  render() {
    const { messages, members } = this.props;
    return (
      <div>
        <ul>
          {Array.isArray(messages)
            ? messages.map(item => <MessageComponent key={item.id} item={item} member={members[item.userId]} />)
            : ''}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages, loadMembers }, dispatch);

Home.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  members: PropTypes.object,
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
