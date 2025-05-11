"use client";

import * as React from "react";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import worldCup from "@/public/worldCup.jpeg";
// import beyonce from "@/public/beyonce.jpeg";
// import Image from "next/image";

export default function EarlyYears() {
  const theme = useTheme();

  return (
    <Box overflow="auto">
      <Paper sx={{ backgroundColor: "#ffffff" }}>
        <Card sx={{ display: "flex", marginBottom: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
            }}
          >
            <Grid
              container
              sx={{
                padding: "1rem",
                borderWidth: "1rem",
                borderColor: "#B31942",
              }}
            >
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  borderColor: "#ffffff",
                  border: "1rem",
                  backgroundColor: "#0A3161",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", color: "#ffffff" }}>
                  <Typography
                    sx={{
                      backgroundColor: "#B31942",
                      padding: ".5rem",
                      color: "#ffffff",
                      fontFamily: "serif",
                    }}
                    component="div"
                    variant="h4"
                  >
                    Upbringing and Early Years
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      paddingTop: "1rem",
                      fontWeight: "600",
                      color: "#ffffff",
                    }}
                  >
                    Eban Cambridge was born in Oakland, California in 1985.
                    Growing up I spent a lot of time at Allen Temple Baptist
                    Church. I was a part of Boy Scout Troop 409 and reached the
                    rank of Eagle Scout, I volunteered for the Red Cross, and
                    played StarCraft all night. My upbringing showed me the
                    power of goodwill and the commonality in Americans around
                    the country.
                  </Typography>
                </CardContent>
              </Grid>
              <Grid sx={{ backgroundColor: "#0A3161" }} item xs={12} md={4}>
                <Image
                  height="50vw"
                  // src={beyonce}
                  alt="Eagle Scout Picture"
                ></Image>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <Card sx={{ display: "flex", marginBottom: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
            }}
          >
            <Grid
              container
              sx={{
                padding: "1rem",
                borderWidth: "1rem",
                borderColor: "#B31942",
              }}
            >
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  borderColor: "#ffffff",
                  border: "1rem",
                  backgroundColor: "#0A3161",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", color: "#ffffff" }}>
                  <Typography
                    sx={{
                      backgroundColor: "#B31942",
                      padding: ".5rem",
                      color: "#ffffff",
                      fontFamily: "serif",
                    }}
                    component="div"
                    variant="h4"
                  >
                    Passions and Hobbies
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      paddingTop: "1rem",
                      fontWeight: "600",
                      color: "#ffffff",
                    }}
                  >
                    I enjoy traveling and going to Once in a Lifetime events.
                    The picture to the left shows me at the 2010 World Cup in
                    South Africa. I just recently went to Portugal during the
                    summer. Nothing compares to a moment in time that cannot be
                    duplicated. I also like watching sports and root for my
                    Golden State Warriors, Oakland A's, and Las Vegas Raiders. I
                    took my Son to see Game 5 of the 2022 NBA Finals!
                  </Typography>
                </CardContent>
              </Grid>
              <Grid sx={{ backgroundColor: "#0A3161" }} item xs={12} md={4}>
                <Image
                  height="50vw"
                  // src={worldCup}
                  alt="Eagle Scout Picture"
                ></Image>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <Card sx={{ display: "flex", marginBottom: "1rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid
              container
              sx={{
                padding: "1rem",
                borderWidth: "1rem",
                borderColor: "#B31942",
              }}
            >
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  borderColor: "#ffffff",
                  border: "1rem",
                  backgroundColor: "#0A3161",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", color: "#ffffff" }}>
                  <Typography
                    sx={{
                      backgroundColor: "#B31942",
                      padding: ".5rem",
                      color: "#ffffff",
                      fontFamily: "serif",
                    }}
                    component="div"
                    variant="h4"
                  >
                    Current Endeavors
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      paddingTop: "1rem",
                      fontWeight: "600",
                      color: "#ffffff",
                    }}
                  >
                    Well as you might now know I'm running for President of the
                    United States of America. It consumes a lot of time as you
                    might expect. I also enjoy being a father and smoking bbq on
                    my Weber grill. As I believe in constantly working on all
                    skills, I am working on several side endeavors like writing
                    a political book for people confused by politics, building a
                    website app, and designing a clothing brand. Whew!
                  </Typography>
                </CardContent>
              </Grid>
              <Grid sx={{ backgroundColor: "#0A3161" }} item xs={12} md={4}>
                <Image
                  height="50vw"
                  // src={beyonce}
                  alt="Eagle Scout Picture"
                ></Image>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Paper>
    </Box>
  );
}
