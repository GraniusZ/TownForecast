import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type WeatherSliceType = {
    city: string
    settings: {
        temp: "Celsius" | "Fahrenheit"
        time: "24" | "12"
    }
    sideMenu: boolean
}
const initialState: WeatherSliceType =
    {
        city: "",
        settings:{
            temp: "Celsius",
            time: "24"
        },
        sideMenu:false
    }

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {

        setCity: (state, action:PayloadAction<string>) => {
            state.city = action.payload;
        },


    },
});

export const {setCity} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
