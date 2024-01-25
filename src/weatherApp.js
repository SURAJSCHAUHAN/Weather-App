// import React, { useEffect, useState } from "react";
// import "./App.css";
 
// const WeatherApp =()=>{
//     const [search , setSearch] = useState("Ajmer");
//     const [city, setCity] = useState({});  
    
//         const fetchApi = async ()=>{
//             const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=41398a558c7969cdf7b543a8f6cf506e&units=metric`;
//             const response = await fetch(url);
//             const data =await response.json();

//             const {temp,temp_max,temp_min,pressure,humidity} = data.main;
//             const {speed} = data.wind;
//             const {main:WeatherMood} = data.weather[0];
//             const {country,sunrise,sunset}=data.sys;

//             const weatherInfo ={
//                 temp,
//                 temp_max,
//                 temp_min,
//                 pressure,
//                 humidity,
//                 speed,
//                 country,
//                 sunrise,
//                 sunset
//             };
//             setCity(weatherInfo);
//         }

//     function handleChange(event){
//         setSearch(event.target.value);
//     }

//     function handleSearch(){
//         fetchApi();
//     }

//     let rise = city.sunrise;
//     let timerise = `${new Date(rise*1000).getHours()}:${new Date(rise*1000).getMinutes()}`;
//     let set = city.sunrise;
//     let timeset = `${new Date(set*1000).getHours()}:${new Date(set*1000).getMinutes()}`;
//     return(
//         <div className="box">
//             <div>
//                 <div className="inputData">
//                     <input type="search" value={search}  placeholder="Enter City.." onChange={handleChange} />
//                 </div>
//                 <div>
//                     <button className="btn-go" onClick={handleSearch}>GO</button>
//                 </div>
//             </div>

//             {!city ? "No Data Found":
//                 <div className="info">
//                     <h2>{search}</h2>

//                     <h1>{city.temp}°Cel</h1>      {/*  for degree symbol Alt + 0176*/}
//                     <h3>Min: {city.temp_min} | Max: {city.temp_max}</h3>
//                     <h3>Pressure: {city.pressure} | Humidity: {city.humidity}</h3>
//                     <h3>Country: {city.country}</h3>
//                     <h3>Sunrise: {timerise} | Sunset: {timeset}</h3>
//                     <h3>Wind: {city.speed} m/s</h3>

//                 </div>
//             }
//         </div>
//     );
// }
// export default WeatherApp;



import React, { useEffect, useState } from "react";
import "./App.css";
 
const WeatherApp =()=>{
    const [search , setSearch] = useState("Udaipur");
    const [city, setCity] = useState({});  
    
    useEffect(()=>{
        const fetchApi = async ()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=41398a558c7969cdf7b543a8f6cf506e&units=metric`;
            const response = await fetch(url);
            const data =await response.json();

            const {temp,temp_max,temp_min,pressure,humidity} = data.main;
            const {speed} = data.wind;
            const {main:WeatherMood} = data.weather[0];
            const {country,sunrise,sunset}=data.sys;

            const weatherInfo ={
                temp,
                temp_max,
                temp_min,
                pressure,
                humidity,
                speed,
                country,
                sunrise,
                sunset
            };
            setCity(weatherInfo);
        }
        fetchApi();
    },[search]);

    function handleChange(event){
        setSearch(event.target.value);
    }
    let rise = city.sunrise;
    let timerise = `${new Date(rise*1000).getHours()}:${new Date(rise*1000).getMinutes()}`;
    let set = city.sunrise;
    let timeset = `${new Date(set*1000).getHours()}:${new Date(set*1000).getMinutes()}`;
    return(
        <div className="box">
            <div className="inputData">
                <input type="search" value={search}  placeholder="Enter City.." onChange={handleChange} />
            </div>

            {!city ? "No Data Found":
                <div className="info">
                    <h2>{search}</h2>

                    <h1>{city.temp}°Cel</h1>      {/*  for degree symbol Alt + 0176*/}
                    <h3>Min: {city.temp_min} | Max: {city.temp_max}</h3>
                    <h3>Pressure: {city.pressure} | Humidity: {city.humidity}</h3>
                    <h3>Country: {city.country}</h3>
                    <h3>SunRise: {timerise} | SunSet: {timeset}</h3>
                    <h3>Wind: {city.speed} m/s</h3>

                </div>
            }
        </div>
    );
}
export default WeatherApp;