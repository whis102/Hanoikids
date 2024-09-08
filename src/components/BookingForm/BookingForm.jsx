import "./BookingForm.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

export default function BookingForm({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      hotelName: formData.hotelName || "",
      hotelAddress: formData.hotelAddress || "",
      tourOption: formData.tourOption || "",
      date: formData.date || "",
      startingTime: formData.startingTime || "",
      specialRequest: formData.specialRequest || "",
    },

    // required field
    validationSchema: Yup.object({
      hotelName: Yup.string().required("Hotel name is required"),
      hotelAddress: Yup.string().required("Hotel address is required"),
      tourOption: Yup.string().required("Please select a tour option"),
      date: Yup.date().required("Date is required"),
      startingTime: Yup.string().required("Please select a starting time"),
    }),
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });

  const [participants, setParticipants] = useState(formData.participants);

  const handleAddParticipant = () => {
    setParticipants((prev) => prev + 1);
    setFormData({ participants: participants + 1 });
  };

  const handleRemoveParticipant = () => {
    setParticipants((prev) => Math.max(1, prev - 1));
    setFormData({ participants: Math.max(1, participants - 1) });
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      className="booking-box"
    >
      <TextField
        fullWidth
        margin="normal"
        label="Hotel Name"
        placeholder="Your hotel name use for pickup purpose"
        {...formik.getFieldProps("hotelName")}
        error={formik.touched.hotelName && Boolean(formik.errors.hotelName)}
        helperText={formik.touched.hotelName && formik.errors.hotelName}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Hotel Address"
        placeholder="Your hotel address use for pickup purpose"
        {...formik.getFieldProps("hotelAddress")}
        error={
          formik.touched.hotelAddress && Boolean(formik.errors.hotelAddress)
        }
        helperText={formik.touched.hotelAddress && formik.errors.hotelAddress}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="tour-option-label" required>
          Tour option
        </InputLabel>
        <Select
          labelId="tour-option-label"
          id="tour-option"
          {...formik.getFieldProps("tourOption")}
          error={formik.touched.tourOption && Boolean(formik.errors.tourOption)}
        >
          {TOUR_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.tourOption && formik.errors.tourOption && (
          <div className="error">{formik.errors.tourOption}</div>
        )}
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        {...formik.getFieldProps("date")}
        error={formik.touched.date && Boolean(formik.errors.date)}
        helperText={formik.touched.date && formik.errors.date}
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
          {...formik.getFieldProps("startingTime")}
          error={
            formik.touched.startingTime && Boolean(formik.errors.startingTime)
          }
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
        placeholder="If you have any further expectations or notes, please do not hesitate to inform us."
      />
    </Box>
  );
}
