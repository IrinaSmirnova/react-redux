import {combineReducers} from 'redux';
import emails from './emails';
import filterEmails from './filterEmails';
export default combineReducers({emails, filterEmails});