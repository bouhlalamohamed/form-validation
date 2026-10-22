import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
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
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

export const UpdateUserForm = () => {
  const { register, handleSubmit, control } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "John Doe",
    },
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const countries = [
    { value: "sa", label: "Saudi Arabia" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "eg", label: "Egypt" },
    { value: "jo", label: "Jordan" },
  ];

  const submitForm = (data) => {
    // e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Succsess : form submitted!");
    }, 1500);

    return console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ width: "552px", height: "48px", marginBottom: "27px" }}>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
      </Box>

      <Paper elevation={5} sx={{ p: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(submitForm)}
          sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          <TextField
            label="Full Name"
            {...register("fullName", { required: "Full Name is required" })}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
            required
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be greater than 18" },
            })}
          />
          <TextField
            label="Password **"
            {...register("password")}
            type="password"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Email *"
            {...register("email")}
            type="email"
            fullWidth
            variant="outlined"
            required
          />

          <FormControl>
            <InputLabel id="demo-simple-select-outlined-label">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Country"
              fullWidth
              variant="outlined"
              defaultValue={""}
              {...register("country")}
            >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

      <DevTool control={control} />
    </Container>
  );
};

// export default UpdateUserForm;
