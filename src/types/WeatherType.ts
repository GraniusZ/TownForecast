export type WeatherType = {
    clouds: { all:number },
    name: string,
    coord: object
    dt: number
    id: number
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    rain: object
    sys: object
    timezone: number
    visibility: number
    wind: { speed:number }
    weather: [{
        description: string
        icon: string
        id: number
        main: string
    }]


}