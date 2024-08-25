import "./PersonalDetails.scss";
import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PersonalDetails() {
  return (
    <Box className="booking-box">
      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        placeholder="Your full name"
        type="text"
        required
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        placeholder="example@gmail.com"
        type="email"
        required
      />

      <FormControl
        fullWidth
        margin="normal"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: "70%" }}
          margin="normal"
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />

        <Box sx={{ width: "27%" }}>
          <InputLabel id="gender-label" required>
            Gender
          </InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            defaultValue=""
            label="Gender"
            sx={{ width: "70%" }}
          >
            <MenuItem>Male</MenuItem>
            <MenuItem>Female</MenuItem>
            <MenuItem>Rather not say</MenuItem>
          </Select>
        </Box>
      </FormControl>

      <TextField
        fullWidth
        label="Passport Number"
        placeholder="For the safety of Hanoikids members"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary">
                <Visibility />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
