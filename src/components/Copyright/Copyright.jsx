import { Box, Typography } from "@mui/material";

export default function Copyright(params) {
  return (
    <Box sx={{ backgroundColor: "#036eb0" }}>
      <Typography variant="body2" color={"textSecondary"} textAlign={"center"}>
        © {new Date().getFullYear()} HANOIKIDS VOLUNTARY ENGLISH TOUR GUIDING
        CLUB. ALL RIGHTS RESERVED.
      </Typography>
    </Box>
  );
}
