import {FC} from "react";
import {WeatherType} from "types/WeatherType.ts";
import {useOutletContext} from "react-router-dom";
import {findIcon} from "@utils/weatherIcons.tsx";
import {TodayForecastCard} from "@components/forecastCard/forecastCard.tsx";
import {ForecastType} from "types/ForecastType.ts";


type Context = {
    weather: WeatherType
    forecast: ForecastType,
}
export const Weather: FC = () => {
    const {weather, forecast} = useOutletContext<Context>()
    return (
        <div
            className="w-full h-full overflow-auto overflow-x-hidden flex flex-col lg:flex-row max-w-[1345px] ">
            <div className="w-full h-full justify-between flex flex-col gap-6 lg:gap-2 ">
                <div className="w-full h-fit py-2 flex flex-col  gap-8   ">
                    <div
                        className="w-full h-fit flex flex-row px-4  sm:px-6 md:px-12 justify-between items-center max-w-[800px]">
                        <div className="h-fit flex flex-col w-fit   gap-6  sm:gap-8 md:gap-16">
                            <div className="flex flex-col">
                            <span
                                className="text-main-4 text-xl sm:text-3xl h-fit font-bold">{weather.name}</span>
                                <span
                                    className="text-main-3 text-sm first-letter:uppercase">{weather.weather[0].description}</span>
                                <span
                                    className="text-main-3 text-sm">Chance of rain: {(forecast.list[0].pop * 100).toFixed(2)}%</span>
                            </div>
                            <div>
                        <span
                            className="text-main-4 text-3xl sm:text-5xl h-fit font-semibold"> {Math.ceil((weather.main.temp - 273.15)) + "°C"}</span>
                            </div>
                        </div>
                        <div className="h-fit w-fit">
                            <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]">

                                {findIcon(weather.weather[0].icon)}
                            </div>
                        </div>
                    </div>
                    <div className="bg-main-2 rounded-xl flex flex-col gap-4 w-full  ">
                        <span
                            className="text-sm text-main-3 w-full uppercase font-medium mt-6 mx-6">Forecast</span>
                        <div className="h-[139px] w-full flex items-center relative">
                            <div className="w-full flex-grow-0 flex absolute flex-row h-full overflow-x-auto pb-6">

                                {(() => {
                                    const cards = [];
                                    for (const index of forecast.list.keys()) {


                                        if (index < 16 && index != 0) {
                                            cards.push(<div className="flex flex-row" key={index}><TodayForecastCard
                                                hour={forecast.list[index].dt_txt}
                                                temp={forecast.list[index].main.temp}
                                                icon={forecast.list[index].weather[0].icon}/>
                                                <hr className="h-full w-px bg-main-2 brightness-75 border-0"/>
                                                {(index < 15) &&
                                                    <hr className="h-full w-px bg-main-2 brightness-75 border-0"/>}
                                            </div>)
                                        }
                                    }
                                    return cards
                                })()}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="h-fit gap-4  flex w-full bg-main-2 rounded-xl flex-col p-6 max-w-[800px]">
                    <span className="text-sm text-main-3 uppercase font-medium h-fit">Addition data</span>
                    <div className="w-full h-fit flex-row flex-wrap flex gap-x-16 gap-y-8">
                        <div className="w-[95px] h-fit flex flex-col gap-2">
                            <span className="text-sm text-main-3">Real Feel</span>
                            <span
                                className="text-main-4 text-base sm:text-lg h-fit font-semibold">{Math.ceil((weather.main.temp - 273.15)) + "°C"}</span>
                        </div>
                        <div className="w-[95px] h-fit flex flex-col gap-2">
                            <span className="text-sm text-main-3">Chance of rain</span>
                            <span
                                className="text-main-4 text-base sm:text-lg h-fit font-semibold">{(forecast.list[0].pop * 100).toFixed(2)}%</span>
                        </div>
                        <div className="w-[95px] h-fit flex flex-col gap-2">
                            <span className="text-sm text-main-3">Visibility</span>
                            <span
                                className="text-main-4 text-base sm:text-lg h-fit font-semibold">{weather.visibility / 1000}km</span>
                        </div>
                        <div className="w-[95px] h-fit flex flex-col gap-2">
                            <span className="text-sm text-main-3">Wind</span>
                            <span
                                className="text-main-4 text-base sm:text-lg h-fit font-semibold">{weather.wind.speed} m/s</span>
                        </div>
                        <div className="w-[95px] h-fit flex flex-col gap-2">
                            <span className="text-sm text-main-3">Humidity</span>
                            <span
                                className="text-main-4 text-base sm:text-lg h-fit font-semibold">{weather.main.humidity}%</span>
                        </div>
                        <div className="w-[95px] h-fit flex flex-col gap-2">
                            <span className="text-sm text-main-3">Cloudiness</span>
                            <span
                                className="text-main-4 text-base sm:text-lg h-fit font-semibold">{weather.clouds.all}%</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};
