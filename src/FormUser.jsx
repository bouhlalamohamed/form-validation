import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Alert,
  Paper,
  Typography,
  MenuItem,
  Grid,
  CircularProgress,
} from "@mui/material";

export const UpdateUserForm = () => {
  //   const [formData, setFormData] = useState({
  //     fullName: "Leanna Graham",
  //     age: "29",
  //     password: "......",
  //     email: "sincere@april.biz",
  //     country: "",
  //   });

  //   const [loading, setLoading] = useState(false);
  //   const [successMessage, setSuccessMessage] = useState("Form submitted!");

  //   const countries = [
  //     { value: "sa", label: "Saudi Arabia" },
  //     { value: "ae", label: "United Arab Emirates" },
  //     { value: "eg", label: "Egypt" },
  //     { value: "jo", label: "Jordan" },
  //   ];

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     // محاكاة استدعاء API
  //     setTimeout(() => {
  //       console.log("Form Data:", formData);
  //       setLoading(false);
  //       setSuccessMessage("تم تحديث البيانات بنجاح!");
  //     }, 1500);
  //   };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* {successMessage && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {successMessage}
        </Alert>
      )} */}

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 3, fontWeight: "bold", color: "#5e35b1" }}
        >
          Update User
        </Typography>

        <Box
          component="form"
          //   onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          {/* Full Name */}
          <TextField
            label="Full Name"
            name="fullName"
            // value={formData.fullName}
            // onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />

          {/* Age */}
          <TextField
            label="Age"
            name="age"
            type="number"
            // value={formData.age}
            // onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />

          {/* Password */}
          <TextField
            label="Password"
            name="password"
            type="password"
            // value={formData.password}
            // onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            // value={formData.email}
            // onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />

          {/* Country */}
          <TextField
            select
            label="Country"
            name="country"
            // value={formData.country}
            // onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          >
            <MenuItem value="">
              <em>Select your country</em>
            </MenuItem>
            {/* {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#5e35b1",
              color: "white",
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#4527a0",
              },
              mt: 1,
              position: "relative",
            }}
            // disabled={loading}
          >
            {/* {loading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
                Updating...
              </>
            ) : (
              "Update"
            )} */}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

// export default UpdateUserForm;
