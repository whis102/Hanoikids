import { useState } from "react";

import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function BookingForm() {
  const [participants, setParticipants] = useState(1);

  const handleAddParticipant = () => {
    setParticipants((prev) => prev + 1);
  };

  const handleRemoveParticipant = () => {
    setParticipants((prev) => Math.max(1, prev - 1));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      {/* Tour option */}
      <TextField
        fullWidth
        margin="normal"
        label="Hotel Name"
        placeholder="Write 'none' if you don't have any"
        required
      />

      <TextField
        fullWidth
        margin="normal"
        label="Hotel Address"
        placeholder="Write 'none' if you don't have any"
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
          <MenuItem value="option1">Imperial Citadel of Thang Long</MenuItem>
          <MenuItem value="option2">Hoa Lo Prison</MenuItem>
          <MenuItem value="option3">Bat Trang Ceramic Village</MenuItem>
          <MenuItem value="option4">Old Quater and French Quater</MenuItem>
          <MenuItem value="option5">Vietnam Museum of Ethnology</MenuItem>
          <MenuItem value="option6">Bat Trang Ceramic Village</MenuItem>
          <MenuItem value="option7">
            Temple of Literature and Ho Chi Minh Complex
          </MenuItem>
        </Select>
      </FormControl>

      {/* Date */}
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

      {/* Starting time */}
      <FormControl
        fullWidth
        margin="normal"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <InputLabel id="starting-time-label" required>
          Starting time
        </InputLabel>
        <Select
          labelId="starting-time-label"
          id="starting-time"
          defaultValue=""
          label="Starting time"
          sx={{ width: "60%" }}
        >
          <MenuItem value="09:00 Vietnam GMT +7">09:00 Vietnam GMT +7</MenuItem>
          <MenuItem value="14:00 Vietnam GMT +7">14:00 Vietnam GMT +7</MenuItem>
        </Select>

        <TextField
          label="Number of participants"
          value={participants}
          InputProps={{
            readOnly: true,
          }}
          sx={{ width: "30%" }}
          required
        ></TextField>
        {/* <Box> */}
        <IconButton onClick={handleRemoveParticipant} color="primary">
          <Remove />
        </IconButton>
        <IconButton onClick={handleAddParticipant} color="primary">
          <Add />
        </IconButton>
        {/* </Box> */}
      </FormControl>

      {/* Special request */}
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
