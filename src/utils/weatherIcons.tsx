import {ReactComponent as ClearDay} from "@assets/icons/weatherIcons/clear-day.svg";
import {ReactComponent as ClearNight} from "@assets/icons/weatherIcons/clear-night.svg";
import {ReactComponent as FewCloudsDay} from "@assets/icons/weatherIcons/partly-cloudy-day.svg";
import {ReactComponent as FewCloudsNight} from "@assets/icons/weatherIcons/partly-cloudy-night.svg";
import {ReactComponent as Cloudy} from "@assets/icons/weatherIcons/cloudy.svg";
import {ReactComponent as Overcast} from "@assets/icons/weatherIcons/overcast.svg";
import {ReactComponent as Drizzle} from "@assets/icons/weatherIcons/drizzle.svg";
import {ReactComponent as Rain} from "@assets/icons/weatherIcons/rain.svg";
import {ReactComponent as Thunderstorm} from "@assets/icons/weatherIcons/thunderstorms-extreme.svg";
import {ReactComponent as Snow} from "@assets/icons/weatherIcons/snow.svg";
import {ReactComponent as Mist} from "@assets/icons/weatherIcons/mist.svg";
export const findIcon = (id:string) => {
    const icon = weatherIcons.find((icon) => icon.id == id)
    if (icon) {
        return <div>{icon.icon}</div>
    }
}

export const weatherIcons = [
    {
        id: "01d",
        icon: <ClearDay/>
    },
    {
        id: "01n",
        icon: <ClearNight  />
    },
    {
        id: "02d",
        icon: <FewCloudsDay />
    },
    {
        id: "02n",
        icon: <FewCloudsNight/>
    },
    {
        id: "03d",
        icon: <Cloudy />
    },
    {
        id: "03n",
        icon: <Cloudy />
    },
    {
        id: "04d",
        icon: <Overcast/>
    },
    {
        id: "04n",
        icon: <Overcast/>
    },
    {
        id: "09d",
        icon: <Drizzle/>
    },
    {
        id: "09n",
        icon: <Drizzle/>
    },
    {
        id: "10d",
        icon: <Rain/>
    },
    {
        id: "10n",
        icon: <Rain/>
    },
    {
        id: "11d",
        icon: <Thunderstorm/>
    },
    {
        id: "11n",
        icon: <Thunderstorm/>
    },
    {
        id: "13d",
        icon: <Snow/>
    },
    {
        id: "13n",
        icon: <Snow/>
    },
    {
        id: "50d",
        icon: <Mist/>
    },
    {
        id: "50n",
        icon: <Mist/>
    },

]
