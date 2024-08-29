import "./PersonalDetails.scss";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function PersonalDetails({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData({ [field]: value });
  };

  return (
    <Box className="booking-box">
      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        placeholder="Your full name"
        type="text"
        required
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        placeholder="example@gmail.com"
        type="email"
        required
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
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
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />

        <FormControl sx={{ width: "27%" }}>
          <InputLabel id="gender-label" required>
            Gender
          </InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            defaultValue=""
            label="Gender"
            sx={{ width: "100%" }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Rather not say</MenuItem>
          </Select>
        </FormControl>
      </FormControl>

      <TextField
        margin="normal"
        fullWidth
        label="Passport Number"
        placeholder="For the safety of Hanoikids members"
        type="password"
        required
      />
    </Box>
  );
}
