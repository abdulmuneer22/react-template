// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import { apiSlice } from '../services/apiSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, [apiSlice.reducerPath]: apiSlice.reducer });

export default reducers;
