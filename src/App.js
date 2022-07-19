import React, { useEffect, useState } from "react";
import "./App.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import back from "./images/back.jpg";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";

import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HistoryIcon from "@mui/icons-material/History";
import { Typography } from "@mui/material";

import Display from "./components/Display";
function App() {
  const top100Films = [];

  const [searched, SetSearched] = useState({
    place: "Delhi",
    time: "18-July'22",
    day: "Monday",
    weather: "Cloudy",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    humidity: "62",
    wind: "8",
    temperature: "16",
    cloudy: "86",
  });

  const [recent, setRecent]= useState([])


  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};

// now.toLocaleString('en-us', options);
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  useEffect(()=>
  {

    fetch('http://api.weatherapi.com/v1/current.json?key=09bb9c507d734edab54205410221607&q=Amritsar&aqi=no')
    .then((res)=>res.json())
    .then(data=>
      {
      let obj ={

        place:  data.location.name,
        date:data.location.localtime,
        day: weekday[(new Date(data.location.localtime)).getDay()],
        weather: data.current.condition.text,
        icon: data.current.condition.icon,
        humidity:  data.current.humidity,
        wind:  data.current.wind_kph,
        temperature:  data.current.feelslike_c,
        cloudy:  data.current.cloud,

      }
      SetSearched({...obj})
      console.log(obj)
      })

  },[])


  return (
    <main className="app">
     
      <Box
        className="card"
        sx={{
          width: 1024,
          height: 500,
          display: "flex",

          boxSizing: "border-box",
        }}
      >
 <Display searched={searched}   />
        <Box
          sx={{
            flex: 2,
            background: "rgba(255, 255, 255, 4%)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Autocomplete
              freeSolo
              sx={{ ml: 1, flex: 4 }}
              id="free-solo-2-demo"
              disableClearable
              disablePortal={true}
              options={top100Films.map((option) => option.label)}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  sx={{ ml: 1, flex: 4 }}
                  {...params}
                  placeholder="Search Location"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",

                    disableUnderline: true,
                  }}
                />
              )}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="button"
              sx={{ p: "10px", flex: 1 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <Box sx={{ display: "flex", flexDirection: "column", py: 3, px: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "3px",
                  my: 2,
                }}
              >
                Recent
                <HistoryIcon sx={{ pl: "4px" }} />
              </Typography>



{
  recent.map(data=>  <Typography
    variant="subtitle"
    sx={{
      my: 1,
      cursor: "pointer",
      color: "#576871",
      "&:hover": {
        color: "white",
      },
    }}
    name={data}
    onClick={(e) => {
      console.log(e.target.innerText);
    }}
  >
    {data}
  </Typography>)
}

            </Box>

            <Divider
              sx={{ height: 1, my: 4, background: "#576871" }}
              orientation="horizontal"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  mb: 2,
                }}
              >
                Weather Details
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle"
                  sx={{
                    my: 1,
                    color: "white",
                  }}
                >
                  Cloudy
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    my: 1,
                    color: "white",
                  }}
                >
                  {searched.cloudy}%
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle"
                  sx={{
                    my: 1,
                    color: "white",
                  }}
                >
                  Humidity
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    my: 1,
                    color: "white",
                  }}
                >
                  {searched.humidity}%
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle"
                  sx={{
                    my: 1,
                    color: "white",
                  }}
                >
                  Wind
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    my: 1,
                    color: "white",
                  }}
                >
                 {searched.wind}km/h
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}




export default App;
