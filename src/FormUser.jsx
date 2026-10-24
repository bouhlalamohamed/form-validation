import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
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
import * as yup from "yup";
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full Name is required")
    .max(20, "Full Name must be less than 20 characters")
    .matches(/^([^0-9]*)$/, "Full Name must not contain numbers"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Age must be greater than or equal to 18"),
  password: yup.string().required("Password is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  country: yup.string().required("Country is required"),
});

export const UpdateUserForm = () => {
  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      issubmitted,
      isSubmitSuccessful,
      isValidating,
      dirtyFields,
    },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
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

    reset();

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
            {...register("fullName", {
              // required: "Full Name is required",
              // validate: (value, formvalues) => {
              //   return (
              //     value.trim().length > 20 ||
              //     "full name must be least than 20 characteres"
              //   );
              // },
            })}
            fullWidth
            variant="outlined"
          />
          {errors.fullName && (
            <Typography
              variant="overline"
              gutterBottom
              sx={{
                color: "red",
              }}
            >
              {errors.fullName?.message}
            </Typography>
          )}
          <TextField
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
            {...register("age", {
              // required: "Age is required",
              // min: { value: 18, message: "Age must be greater than 18" },
            })}
          />
          {errors.age && (
            <Typography
              variant="overline"
              gutterBottom
              sx={{
                color: "red",
              }}
            >
              {errors.age?.message}
            </Typography>
          )}
          <TextField
            label="Password **"
            {...register("password")}
            type="password"
            fullWidth
            variant="outlined"
          />
          {errors.password && (
            <Typography
              variant="overline"
              gutterBottom
              sx={{
                color: "red",
              }}
            >
              {errors.password?.message}
            </Typography>
          )}
          <TextField
            label="Email *"
            {...register("email")}
            type="email"
            fullWidth
            variant="outlined"
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
