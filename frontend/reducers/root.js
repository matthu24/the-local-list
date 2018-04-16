import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session';

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,

});
