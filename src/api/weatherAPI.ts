import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const weatherAPI = createApi({
    reducerPath: "weatherApi",
    tagTypes: ['Weather'],
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_API_URL}),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: ({
                        city
                    }) => `${import.meta.env.VITE_APP_API_URL}/weather?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}`

        }),
        getForecast:builder.query({
            query: ({
                        city
                    }) => `${import.meta.env.VITE_APP_API_URL}/forecast?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}`

        }),

    }),
});
export const {useGetWeatherQuery, useGetForecastQuery} = weatherAPI;