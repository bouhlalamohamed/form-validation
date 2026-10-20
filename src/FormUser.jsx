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
  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const countries = [
    { value: "sa", label: "Saudi Arabia" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "eg", label: "Egypt" },
    { value: "jo", label: "Jordan" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Succsess : form submitted!");
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ width: "552px", height: "48px", marginBottom: "27px" }}>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
      </Box>

      <Paper elevation={5} sx={{ p: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            select
            label="Country"
            name="country"
            fullWidth
            variant="outlined"
            required
          >
            <MenuItem value="">
              <em>Select your country</em>
            </MenuItem>
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

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
            disabled={loading}
          >
            {loading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
                Updating...
              </>
            ) : (
              "Update"
            )}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

// export default UpdateUserForm;
