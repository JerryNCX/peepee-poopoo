import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { FileInput, FileUploadLabel, FileUploadRoot } from "../components/ui/file-upload";
import SelectDate from "./DatePicker.jsx";

function FormPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  // Watch file input to check if a file is uploaded
  const uploadedFile = watch("FileUpload");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/pickdroplocation");
  };

  return (
    <Box bgColor="yellow.100" h="150vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4}>
          <Text fontSize="7xl" fontWeight="bold" color="black">Spot & Tow</Text>
          <Text fontSize="xl" color="black">Car breakdown? Fill this form!!</Text>

          <input type="text" placeholder="Name" {...register("Name", { required: true })} 
          style={inputStyle} />

          <input type="email" placeholder="Email" {...register("Email", { required: true })} 
          style={inputStyle} />

          <input type="tel" placeholder="Contact" {...register("Contact", { required: true })} 
          style={inputStyle} />

          <input type="text" placeholder="Vehicle Info" {...register("VehicleInfo", { required: true })} 
          style={inputStyle} />

          <input type="text" placeholder="IC Number" {...register("IC", { required: true })} 
          style={inputStyle} />

          {/* Nationality Dropdown */}
          <select {...register("Nationality", { required: true })} style={inputStyle}>
            <option value="">Select Nationality</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Singaporean">Singaporean</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Filipino">Filipino</option>
            <option value="Thai">Thai</option>
            <option value="Other">Other</option>
          </select>

          <select {...register("Service", { required: true })} style={inputStyle}>
            <option value="">Select Service</option>
            <option value="Towing">Towing</option>
            <option value="Battery Jumpstart">Battery Jumpstart</option>
            <option value="Flat Tire">Flat Tire Replacement</option>
          </select>

          {/* Optional Date Picker */}
          <Controller
            control={control}
            name="DateTime"
            render={({ field }) => <SelectDate {...field} />}
          />

          {/* File Upload */}
          <FileUploadRoot w="300px">
            <FileUploadLabel />
            <FileInput 
              bg="white" border="1px solid #ccc"
              onChange={(e) => setValue("FileUpload", e.target.files[0])}
            />
          </FileUploadRoot>

          {/* Display selected file name */}
          {uploadedFile && <Text fontSize="sm" color="gray.600">Selected file: {uploadedFile.name}</Text>}

          <Button type="submit" _hover={{ bg: "green" }} colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

// Input field styles
const inputStyle = {
  backgroundColor: "white",
  color: "black",
  width: "300px",
  height: "40px",
  padding: "10px 12px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

export default FormPage;