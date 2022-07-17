import React, { useState } from "react";
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
function App() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
  ];

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
        <Box
          sx={{
            flex: 3,
            display: "flex",
            p: 10,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "100px",
                display: "flex",
                flexDirection: "row",
                alignContent: "flex-end",
              }}
            >
              16°
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignContent: "flex-start",
                p: 2.5,
              }}
            >
              <div style={{ fontSize: "50px" }}>London</div>
              <div style={{ fontSize: "15px" }}>06:09 - Monday, 9 Sep' 22 </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignContent: "flex-start",
                p: 2.5,
              }}
            >
              <img
                height="100%"
                src={require("./images/weather/64x64/day/116.png")}
                alt="icon"
              />
              <div style={{ fontSize: "15px" }}>Cloudy </div>
            </Box>
          </Box>
        </Box>
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

          <Box sx={{ display: "flex", flexDirection: "column", py: 3,px:5 }}>
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

              <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  cursor: "pointer",
                  color: "#576871",
                  "&:hover": {
                    color: "white",
                  },
                }}
                name="Delhi"
                onClick={(e) => {
                  console.log(e.target.innerText);
                }}
              >
                Delhi
              </Typography>
              <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  cursor: "pointer",
                  color: "#576871",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Delhi
              </Typography>

              <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  cursor: "pointer",
                  color: "#576871",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Delhi
              </Typography>
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

              
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent:'space-between'}}>
                <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  color:'white'
                }}
              
              >
                Cloudy
              </Typography>
              <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  color:'white'
                }}
              
              >
                86%
              </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent:'space-between'}}>
                <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  color:'white'
                }}
              
              >
                Humidity
              </Typography>
              <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  color:'white'
                }}
              
              >
                62%
              </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent:'space-between'}}>
                <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  color:'white'
                }}
              
              >
                Wind
              </Typography>
              <Typography
                variant="subtitle"
                sx={{
                  my: 1,
                  color:'white'
                }}
              
              >
                8km/h
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
