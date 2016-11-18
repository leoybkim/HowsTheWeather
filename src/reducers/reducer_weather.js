import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('Action recieved: ', action);
  switch(action.type) {
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]); // not chaging old state, but returning new instance
      return [ action.payload.data, ...state ]; // [city, city, city] not [city, [city, city]]
    }
  return state;
}
