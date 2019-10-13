import React from 'react';
import PropTypes from 'prop-types';

export class MessageComponent extends React.PureComponent {
  render() {
    const { item, member } = this.props;

    return (
      <li className="item">
        {member ? (
          <div>
            <div className="avatar">
              <img src={member.avatar} />
            </div>
            <span className="email">member.email</span>
          </div>
        ) : (
          <div>
            <div className="avatar" />
          </div>
        )}
        <div className="message">
          {item.message}
          <span className="theDate">{item.timestamp.format('LLLL')}</span>
        </div>
      </li>
    );
  }
}

MessageComponent.propTypes = {
  item: PropTypes.object,
  member: PropTypes.object,
};
