// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
import { apiSlice } from './services/apiSlice';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

const { dispatch } = store;

export { store, dispatch };
