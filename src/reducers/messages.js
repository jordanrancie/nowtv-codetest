import { MESSAGES_LOADED } from '../action-creators/action-types';
import moment from 'moment';

export default (state = [], action) => {
  // Order descending (latest first)
  const sortByDate = array => array.sort((a, b) => moment(b.timestamp).valueOf() - moment(a.timestamp).valueOf());

  switch (action.type) {
    case MESSAGES_LOADED:
      return sortByDate(action.payload);
    default:
      return state;
  }
};
