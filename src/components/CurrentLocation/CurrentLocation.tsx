import {FC, useEffect, useState} from "react";
import {useGetCityQuery} from "@/api/geoAPI";
import {setCity} from "@store/slices/WeatherSlice.ts";
import {useAppDispatch} from "@hooks/useTypedDispatch.ts";
import {Spinner} from "@components/Spinner/Spinner.tsx";


export const CurrentLocation: FC = () => {
    const [lat, setLat] = useState<number>()
    const [long, setLong] = useState<number>()
    const {data:cityData} = useGetCityQuery({lat:lat, lon:long}, { skip: !lat || !long })
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (cityData) {
            dispatch(setCity(cityData[0].name));
        }
    }, [cityData, dispatch]);
    const handle = () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            setLoading(false)
        }, function () {
            setLoading(false)
        });
    };

    return (
        <div className="w-full h-fit flex justify-end items-center ">
            <div className="py-2 px-3 bg-main-2 text-main-3 w-44 h-8 cursor-pointer flex justify-center items-center hover:text-main-4 duration-200 transition-all ease-in-out rounded-xl" onClick={handle}>
                {loading ? <Spinner/> :  <span>Current Location</span>}
            </div>

        </div>
    )
};
