import {FC} from "react";
import {findIcon} from "@utils/weatherIcons.tsx";

type ForecastCard = {
    hour: string
    temp: number,
    icon: string
}
export const TodayForecastCard: FC<ForecastCard> = ({hour, temp, icon}) => {
    const date = new Date(hour);

    const formattedTime = date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});


    return (
        <div className="flex flex-col items-center gap-2 px-2 sm:px-5">
            <span className="text-xs sm:text-sm text-main-3 font-semibold">{formattedTime}</span>
            <div className="[&>*]:h-[55px] h-[55px] w-[55px [&>*]:w-[55px]"> {findIcon(icon)}</div>
            <span
                className="text-main-4 text-sm  sm:text-base h-fit font-semibold">{Math.ceil((temp - 273.15)) + "°C"}</span>
        </div>
    );
};