import React from 'react'
import Box from "@mui/material/Box"


export default function Display({searched}) {

    let img = 'http:'+ searched.icon;
  return (
    <Box
          sx={{
            flex: 3,
            display: "flex",
            px: 10,
            py: 8,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              width: "100%",
              gap:2
            }}
          >
            <div
              style={{
                fontSize: "70px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              {searched.temperature}°
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                p:1
                
                
              }}
            >
              <div style={{ fontSize: "45px" }}>{searched.place}</div>
              <div style={{ fontSize: "15px" }}>{searched.time} {searched.date}, {searched.day} </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                p:1
                
              }}
            >
              <img
                
                src={`http:${searched.icon}`}
                alt="icon"
              />
              <div style={{ fontSize: "15px" }}>{searched.weather} </div>
            </Box>
          </Box>
        </Box>
  )
}
