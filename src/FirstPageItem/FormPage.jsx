import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FileInput,
  FileUploadLabel,
  FileUploadRoot,
} from "../components/ui/file-upload";
import SelectDate from "./DatePicker.jsx";

function FormPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Prevent navigation if there are errors
    if (Object.keys(errors).length === 0) {
      navigate("/PickDropLocation");
    }
  };

  return (
    <Box bgColor="yellow.100" h="160vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4}>
          <Text fontSize="7xl" fontWeight="bold" color="black">
            Spot & Tow
          </Text>
          <Text fontSize="xl" color="black">
            Car breakdown? Fill this form!!
          </Text>
          <input
            type="text"
            placeholder="Name"
            {...register("Name", { required: "Name is required" })}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px", // Adjust width as needed
              height: "40px", // Adjust height as needed
              padding: "10px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.Name && (
            <span style={{ color: "red" }}>{errors.Name.message}</span>
          )}
          <input
            type="tel"
            placeholder="Contact"
            {...register("Contact", { required: "Contact is required" })}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px", // Adjust width as needed
              height: "40px", // Adjust height as needed
              padding: "10px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.Contact && (
            <span style={{ color: "red" }}>{errors.Contact.message}</span>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("Email", { required: "Email is required" })}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px", // Adjust width as needed
              height: "40px", // Adjust height as needed
              padding: "10px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.Email && (
            <span style={{ color: "red" }}>{errors.Email.message}</span>
          )}
          <input
            type="text"
            placeholder="Vehicle Information"
            {...register("VehicleInfo", {
              required: "Vehicle Information is required",
            })}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px", // Adjust width as needed
              height: "40px", // Adjust height as needed
              padding: "10px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.VehicleInfo && (
            <span style={{ color: "red" }}>{errors.VehicleInfo.message}</span>
          )}
          <input
            type="text"
            placeholder="IC/Passport Number"
            {...register("ICPassport", {
              required: "IC/Passport Number is required",
            })}
          style={{
            backgroundColor: "white",
            color: "black",
            width: "300px", // Adjust width as needed
            height: "40px", // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
          />
          {errors.ICPassport && (
            <span style={{ color: "red" }}>{errors.ICPassport.message}</span>
          )}
          <select
            {...register("Nationality", {
              required: "Nationality is required",
            })}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px", // Adjust width as needed
              height: "40px", // Adjust height as needed
              padding: "10px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select Nationality</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Thailand">Thailand</option>
            <option value="Singapore">Singapore</option>
          </select>
          {errors.Nationality && (
            <span style={{ color: "red" }}>{errors.Nationality.message}</span>
          )}
          <select
            {...register("ServiceOption", {
              required: "Service Option is required",
            })}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px", // Adjust width as needed
              height: "40px", // Adjust height as needed
              padding: "10px 12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Select Service</option>
            <option value="Towing">Towing</option>
            <option value="Accident">Accident Assistance</option>
          </select>
          {errors.ServiceOption && (
            <span style={{ color: "red" }}>{errors.ServiceOption.message}</span>
          )}
          <SelectDate
            {...register("DateTime", { required: "Date and Time is required" })}
          />
          {errors.DateTime && (
            <span style={{ color: "red" }}>{errors.DateTime.message}</span>
          )}
          <FileUploadRoot w="300px">
            <FileUploadLabel/>
            <FileInput
              {...register("FileUpload", {
                required: "File upload is required",
              })}
              bg="white"
              border="1px solid #ccc"
            />
          </FileUploadRoot>
          {errors.FileUpload && (
            <span style={{ color: "red" }}>{errors.FileUpload.message}</span>
          )}
          {/* Proper submit button */}
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </VStack>
      </form>
    </Box>
  );
}

export default FormPage;
