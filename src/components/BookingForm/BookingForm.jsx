import "./BookingForm.scss";
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
import { Add, Remove } from "@mui/icons-material";
import { TOUR_OPTIONS, STARTING_TIMES } from "../../data/booking";

export default function BookingForm() {
  const [participants, setParticipants] = useState(1);

  const handleAddParticipant = () => {
    setParticipants((prev) => prev + 1);
  };

  const handleRemoveParticipant = () => {
    setParticipants((prev) => Math.max(1, prev - 1));
  };

  return (
    <Box className="booking-box">
      <TextField
        fullWidth
        margin="normal"
        label="Hotel Name"
        placeholder="Your hotel name use for pickup purpose"
        required
      />

      <TextField
        fullWidth
        margin="normal"
        label="Hotel Address"
        placeholder="Your hotel name use for pickup purpose"
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="tour-option-label" required>
          Tour option
        </InputLabel>
        <Select
          labelId="tour-option-label"
          id="tour-option"
          defaultValue=""
          label="Tour option"
        >
          {TOUR_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        required
      />

      <FormControl
        fullWidth
        margin="normal"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <InputLabel id="starting-time-label" required>
          Starting time
        </InputLabel>
        <Select
          labelId="starting-time-label"
          id="starting-time"
          defaultValue=""
          label="Starting time"
          sx={{ width: "70%" }}
        >
          {STARTING_TIMES.map((time) => (
            <MenuItem key={time.value} value={time.value}>
              {time.label}
            </MenuItem>
          ))}
        </Select>

        <Box sx={{ width: "27%" }}>
          <TextField
            label="Number of participants"
            value={participants}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleRemoveParticipant}
                    color="primary"
                    disabled={participants <= 1}
                  >
                    <Remove />
                  </IconButton>
                  <IconButton onClick={handleAddParticipant} color="primary">
                    <Add />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Special request"
        placeholder="Write 'none' if you don't have any"
        required
      />
    </Box>
  );
}
