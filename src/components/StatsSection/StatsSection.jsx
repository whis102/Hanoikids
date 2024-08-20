import { useEffect, useState } from "react";
import statsData from "../../data/stats.js";
import { Grid, Typography, Box } from "@mui/material";
import "./StatsSection.scss";

export default function StatsSection() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    setStats(statsData);
  });

  return (
    <Grid container spacing={2} className="stats-container">
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={index}>
          <Box>
            <Typography variant="h4" component="h4" fontWeight="bold">
              {stat.number}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {stat.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
