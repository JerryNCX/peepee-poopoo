import { 
  Box, VStack, Text, Button 
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FileInput, FileUploadLabel, FileUploadRoot } from "../components/ui/file-upload";
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
    console.log(errors);
  };

  return (
    <Box bgColor="yellow.100" h="150vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4}>
          <Text fontSize="7xl" fontWeight="bold" color="black">Spot & Tow</Text>
          <Text fontSize="xl" color="black">Car breakdown? Fill this form!!</Text>

          <input type="text" placeholder="Name" {...register("Name", { required: true })} 
          style={{ 
            backgroundColor: "white",
            color: "black",
            width: "300px",  // Adjust width as needed
            height: "40px",  // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"}}
            />
          {errors.Name && <span style={{ color: "red" }}>Name is required</span>}

          <input type="tel" placeholder="Contact" {...register("Contact", { required: true })}
          style={{ 
            backgroundColor: "white",
            color: "black",
            width: "300px",  // Adjust width as needed
            height: "40px",  // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"}}
          />
          {errors.Contact && <span style={{ color: "red" }}>Contact is required</span>}

          <input type="email" placeholder="Email" {...register("Email", { required: true })} 
           style={{ 
            backgroundColor: "white",
            color: "black",
            width: "300px",  // Adjust width as needed
            height: "40px",  // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"}}
          />
          {errors.Email && <span style={{ color: "red" }}>Email is required</span>}

          <input type="text" placeholder="Vehicle Information" {...register("VehicleInfo", { required: true })} 
           style={{ 
             backgroundColor: "white",
             color: "black",
             width: "300px",  // Adjust width as needed
             height: "40px",  // Adjust height as needed
             padding: "10px 12px",
             fontSize: "16px",
             border: "1px solid #ccc",
             borderRadius: "4px",
             boxSizing: "border-box"}}
             />
          {errors.VehicleInfo && <span style={{ color: "red" }}>Vehicle Information is required</span>}

          <input type="text" placeholder="IC/Passport Number" {...register("ICPassport", { required: true })} 
           style={{ 
             backgroundColor: "white",
            color: "black",
            width: "300px",  // Adjust width as needed
            height: "40px",  // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box"}}
            />
          {errors.ICPassport && <span style={{ color: "red" }}>IC/Passport Number is required</span>}

          <select {...register("Nationality", { required: true })}
          style={{ 
            backgroundColor: "white",
            color: "black",
            width: "300px",  // Adjust width as needed
            height: "40px",  // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            marginBottom: "10px"  // Add spacing between elements
          }}>
            <option value="">Select Nationality</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Thailand">Thailand</option>
            <option value="Singapore">Singapore</option>
          </select>
          {errors.Nationality && <span style={{ color: "red" }}>Nationality is required</span>}

          <select {...register("ServiceOption", { required: true })}
          style={{ 
            backgroundColor: "white",
            color: "black",
            width: "300px",  // Adjust width as needed
            height: "40px",  // Adjust height as needed
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            marginBottom: "10px"  // Add spacing between elements
          }}
          >
            <option value="">Select Service</option>
            <option value="Towing">Towing</option>
            <option value="Accident">Accident Assistance</option>
          </select>
          {errors.ServiceOption && <span style={{ color: "red" }}>Service Option is required</span>}

          <SelectDate {...register("DateTime", { required: true })} 
          style={{
            backgroundColor: "white",
            color: "black",
            width: "300px",
            padding: "10px 12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            margin: "8px 0",
            boxSizing: "border-box"
          }}/>
         
          <FileUploadRoot w="300px">
            <FileUploadLabel />
            <FileInput {...register("FileUpload", { required: true })}  bg="white" border="1px solid #ccc" />
          </FileUploadRoot>
          

          <Button
              _hover={{ bg: "green" }}
              colorPalette="peal"
              >
              <input type="submit"/>
            </Button>
        </VStack>
        </form>
    </Box>
  );
}

export default FormPage;