import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  hoverOn = () => {
    this.setState({ hover: true });
  }

  hoverOff = () => {
    this.setState({ hover: false });
  }

  render = () => {
    const { item, member } = this.props;

    return (
      <li className="item" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        {member ? (
          <div>
            <div className="avatar">
              <img src={member.avatar} alt="" />
            </div>
            <span className={"email " + (this.state.hover ? "show" : "")}>{member.email}</span>
          </div>
        ) : (
          <div>
            <div className="avatar" />
          </div>
        )}
        <div className="message">
          {item.message}
          <span className="theDate">{moment(item.timestamp).format('LLLL')}</span>
        </div>
      </li>
    );
  }
}

MessageComponent.propTypes = {
  item: PropTypes.object,
  member: PropTypes.object,
};
