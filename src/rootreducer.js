import { combineReducers } from 'redux';
import home from './containers/home/home.reducer';
import about from './containers/about/about.reducer';

const root = combineReducers({
    home,
    about
})

export default root;