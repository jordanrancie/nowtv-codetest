import { MESSAGES_LOADED } from '../action-creators/action-types';
import moment from 'moment';

export default (state = [], action) => {
  // Convert timestamp string to date/moment object
  // Order descending (latest first)
  const sortByDate = array =>
    array
      .map(item => {
        item.timestamp = moment(item.timestamp);
        return item;
      })
      .sort((a, b) => b.timestamp.valueOf() - a.timestamp.valueOf());

  switch (action.type) {
    case MESSAGES_LOADED:
      return sortByDate(action.payload);
    default:
      return state;
  }
};
