// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {setupListeners} from "@reduxjs/toolkit/query";
import {weatherReducer} from "@store/slices/WeatherSlice.ts";
import {weatherAPI} from "@/api/weatherAPI.ts";
import {geoAPI} from "@/api/geoAPI.ts";

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState'));
    }
};
const rootReducer = combineReducers({
    weather: weatherReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    [geoAPI.reducerPath]: geoAPI.reducer,
});

export const store: ToolkitStore = configureStore({
    reducer: rootReducer,
    preloadedState: reHydrateStore(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherAPI.middleware, geoAPI.middleware, localStorageMiddleware),

});


export const setupStore = (preloadedState: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,

    });

};
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch