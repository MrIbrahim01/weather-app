
import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const port = 3000;
const app = express();
const apiKey = "17c9cc5992b0e85f51bee25b114daed8";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async(req, res)=>{
    try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`)
        const resIcon =  result.data.weather[0].icon; 
        const icon = `https://openweathermap.org/img/wn/${resIcon}@2x.png`;
        const temp = JSON.stringify(result.data.main.temp);
        const city = result.data.name;
        const weatherStatus = result.data.weather[0].main;
        const humidity = JSON.stringify(result.data.main.humidity);
        const wind = JSON.stringify(result.data.wind.speed);
        const cloud = JSON.stringify(result.data.clouds.all);
        const rain = JSON.stringify(result.data.rain);
        // const icon = result.data.weather[0].icon;
        res.render("index.ejs", {
            temperature: (temp-273.15).toFixed(0),
            cityName: city,
            weather: weatherStatus,
            humid:humidity,
            wind:wind,
            cloud:cloud,
            rain:rain,
            icon: icon
        });

    } catch (error){
        console.log(error.response.data);
        res.sendStatus(500);
    }
})
app.post("/get-location", async(req, res)=>{
    try{
        const location = req.body.location;
        console.log(location);
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
        const resIcon =  result.data.weather[0].icon; 
        const icon = `https://openweathermap.org/img/wn/${resIcon}@2x.png`;
        const temp = JSON.stringify(result.data.main.temp);
        const city = result.data.name;
        const weatherStatus = result.data.weather[0].main;
        const humidity = JSON.stringify(result.data.main.humidity);
        const wind = JSON.stringify(result.data.wind.speed);
        const cloud = JSON.stringify(result.data.clouds.all);
        const rain = JSON.stringify(result.data.rain);
        res.render("index.ejs", {
            temperature: (temp-273.15).toFixed(0),
            cityName: city,
            weather: weatherStatus,
            humid:humidity,
            wind:wind,
            cloud:cloud,
            rain:rain,
            icon: icon
        });

    } catch (error){
        // console.log(error.response.data);
        res.sendStatus(500);
    }
})

app.get("/get-birmingham", async(req, res)=>{
    try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=birmingham&appid=${apiKey}`)
        const resIcon =  result.data.weather[0].icon; 
        const icon = `https://openweathermap.org/img/wn/${resIcon}@2x.png`;
        const temp = JSON.stringify(result.data.main.temp);
        const city = result.data.name;
        const weatherStatus = result.data.weather[0].main;
        const humidity = JSON.stringify(result.data.main.humidity);
        const wind = JSON.stringify(result.data.wind.speed);
        const cloud = JSON.stringify(result.data.clouds.all);
        const rain = JSON.stringify(result.data.rain);
        res.render("index.ejs", {
            temperature: (temp-273.15).toFixed(0),
            cityName: city,
            weather: weatherStatus,
            humid:humidity,
            wind:wind,
            cloud:cloud,
            rain:rain,
            icon: icon
        });

    } catch (error){
        console.log(error.response.data);
        res.sendStatus(500);
    }
})
app.get("/get-manchester", async(req, res)=>{
    try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=manchester&appid=${apiKey}`);
        const resIcon =  result.data.weather[0].icon; 
        const icon = `https://openweathermap.org/img/wn/${resIcon}@2x.png`;
        const temp = JSON.stringify(result.data.main.temp);
        const city = result.data.name;
        const weatherStatus = result.data.weather[0].main;
        const humidity = JSON.stringify(result.data.main.humidity);
        const wind = JSON.stringify(result.data.wind.speed);
        const cloud = JSON.stringify(result.data.clouds.all);
        const rain = JSON.stringify(result.data.rain);
        res.render("index.ejs", {
            temperature: (temp-273.15).toFixed(0),
            cityName: city,
            weather: weatherStatus,
            humid:humidity,
            wind:wind,
            cloud:cloud,
            rain:rain,
            icon: icon
        });

    } catch (error){
        console.log(error.response.data);
        res.sendStatus(500);
    }
})
app.get("/get-newyork", async(req, res)=>{
    try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=newyork&appid=${apiKey}`);
        const resIcon =  result.data.weather[0].icon; 
        const icon = `https://openweathermap.org/img/wn/${resIcon}@2x.png`;
        const temp = JSON.stringify(result.data.main.temp);
        const city = result.data.name;
        const weatherStatus = result.data.weather[0].main;
        const humidity = JSON.stringify(result.data.main.humidity);
        const wind = JSON.stringify(result.data.wind.speed);
        const cloud = JSON.stringify(result.data.clouds.all);
        const rain = JSON.stringify(result.data.rain);
        res.render("index.ejs", {
            temperature: (temp-273.15).toFixed(0),
            cityName: city,
            weather: weatherStatus,
            humid:humidity,
            wind:wind,
            cloud:cloud,
            rain:rain,
            icon: icon
        });

    } catch (error){
        console.log(error.response.data);
        res.sendStatus(500);
    }
})
app.get("/get-california", async(req, res)=>{
    try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=california&appid=${apiKey}`);
        const resIcon =  result.data.weather[0].icon; 
        const icon = `https://openweathermap.org/img/wn/${resIcon}@2x.png`;
        const temp = JSON.stringify(result.data.main.temp);
        const city = result.data.name;
        const weatherStatus = result.data.weather[0].main;
        const humidity = JSON.stringify(result.data.main.humidity);
        const wind = JSON.stringify(result.data.wind.speed);
        const cloud = JSON.stringify(result.data.clouds.all);
        const rain = JSON.stringify(result.data.rain);
        res.render("index.ejs", {
            temperature: (temp-273.15).toFixed(0),
            cityName: city,
            weather: weatherStatus,
            humid:humidity,
            wind:wind,
            cloud:cloud,
            rain:rain,
            icon: icon
        });

    } catch (error){
        console.log(error.response.data);
        res.sendStatus(500);
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})