import { useEffect, useState } from "react";
import statsData from "../../data/stats.json";
import { Grid, Typography, Box } from "@mui/material";

export default function StatsSection() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    setStats(statsData);
  });

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      textAlign="center"
      p={3}
    >
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={index}>
          <Box>
            <Typography
              variant="h4"
              component="div"
              color="primary"
              fontWeight="bold"
            >
              {stat.number}
            </Typography>
            <Typography variant="body1" component="div" color="textSecondary">
              {stat.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
