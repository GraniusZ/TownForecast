import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const geoAPI = createApi({
    reducerPath: "geoApi",
    tagTypes: ['Geo'],
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_GEO_URL}),
    endpoints: (builder) => ({
        getCity:builder.query({
            query: ({
                        lat, lon
                    }) => `${import.meta.env.VITE_APP_GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${import.meta.env.VITE_APP_API_KEY}`

        }),
    }),
});
export const {useGetCityQuery} = geoAPI;