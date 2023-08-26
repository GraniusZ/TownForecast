export type ForecastType = {
    city: {
        name:string
    }
    list: [
        {
            pop: number
            visibility:number,
            dt_txt: string,
            clouds:{
                all:number
            }
            wind: {
                speed:number
            }
            main: {
                feels_like: number
                humidity: number
                pressure: number
                temp: number
                temp_max: number
                temp_min: number
            }
            weather: [{
                description: string
                icon: string
                id: number
                main: string
            }]
        }
    ]
}