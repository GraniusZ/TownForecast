import {FC, useEffect, useState} from "react";
import {CurrentLocation} from "@components/CurrentLocation/CurrentLocation.tsx";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "@hooks/useTypedSelector.ts";
import {useGetForecastQuery, useGetWeatherQuery} from "@/api/weatherAPI.ts";
import {useGetCityQuery} from "@/api/geoAPI.ts";
import {useAppDispatch} from "@hooks/useTypedDispatch.ts";
import {setCity, setSideMenu} from "@store/slices/WeatherSlice.ts";
import {Spinner} from "@components/Spinner/Spinner.tsx";

export const Layout: FC = () => {
    const city = useAppSelector(state => state.weather.city)
    const dispatch = useAppDispatch()
    const {data: weather, isLoading: isLoadingWeather} = useGetWeatherQuery({city: city})
    const {data: forecast, isLoading: isLoadingForecast} = useGetForecastQuery({city: city})
    const [lat, setLat] = useState<number>()
    const [long, setLong] = useState<number>()
    const [locError, setLocError] = useState(false)
    const {data: cityData} = useGetCityQuery({lat: lat, lon: long}, {skip: !lat || !long})
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        dispatch(setSideMenu(false))
    }, []);
    useEffect(() => {
        if (cityData) {
            dispatch(setCity(cityData[0].name));
            setLoading(false)
        }
    }, [cityData, dispatch]);
    const handleAccess = () => {
        setLoading(true)
        setLocError(false)
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        }, function () {
            setLocError(true);
            setLoading(false)
        });
    };

    if (city == '') {
        return (<div className="w-full h-full bg-main-1 flex flex-row justify-center items-center px-6 ">
            <div
                className="max-w-sm w-full h-fit bg-main-2 text-main-3  py-3 px-4 flex justify-center items-center text-lg rounded-xl flex-col gap-6">
                <div className="w-fit flex items-center justify-center text-center">Need access to your current
                    location
                </div>
                <div className="flex flex-col gap-1 h-fit w-full  items-center justify-center px-6">
                    <div
                        className="w-full  py-6 px-3 bg-main-5 text-main-4 flex h-8 rounded-xl text-sm items-center justify-center "
                        onClick={handleAccess}>
                        {loading ? <Spinner/> :
                            <span className="w-fit  text-center">Please click here and grant us access</span>}

                    </div>
                    {locError &&
                        <div className="text-xs px-5">Unexpected Error :( Please, refresh page and try again</div>}
                </div>


            </div>
        </div>)
    }
    if (isLoadingForecast || isLoadingWeather || city == '') {
        return (<div className="w-full h-full bg-main-1 flex flex-row "></div>)
    }
    return (
        <div className="w-full h-full bg-main-1 flex p-6 overflow-y-auto">

            <div className="w-full h-full  flex flex-col gap-4 overflow-y-auto">
                <CurrentLocation/>
                <Outlet context={{weather, forecast}}/>
            </div>


        </div>

    );
};