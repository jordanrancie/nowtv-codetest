import { MEMBERS_LOADED } from '../action-creators/action-types';

export default (state = [], action) => {
  // Convert array to key/map object.
  const arrayToMap = array =>
    array.reduce((indexed, member) => {
      indexed[member.id] = member;
      return indexed;
    }, {});

  switch (action.type) {
    case MEMBERS_LOADED:
      return arrayToMap(action.payload);
    default:
      return state;
  }
};
