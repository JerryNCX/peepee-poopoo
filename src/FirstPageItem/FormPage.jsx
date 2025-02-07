import {
  Flex,
  Image,
  Text,
  Input,
  Stack,
  Box,
  HStack,
  Button,
  VStack,
  ProgressRoot,
  AbsoluteCenter,
  // NativeSelectField, NativeSelectRoot,
} from "@chakra-ui/react";
import { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import Nationality from "./Nationality.jsx";
import SelectDate from "./DatePicker.jsx";
import {
  FileInput,
  FileUploadLabel,
  FileUploadRoot,
} from "../components/ui/file-upload";
import { useNavigate } from "react-router-dom";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "../components/ui/native-select";
import { useForm } from "react-hook-form";
// import axios from 'axios';

// const [data, setData] = useState([]);
// const [error, SetError] = useState(null);
// useEffect(() => {
//   const fetchData = async () => {
//     try{
//       const response = await axios.get('../../backend/connect.cjs')
//     } catch (err) {
//       SetError(err.message);
//     }
//   };

// fetchData()
// },[]);

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    vehicleInfo: "",
    passportNumber: "",
    isMalaysia: true,
    requiresTowing: true,
    date: "",
    file: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    // Append all fields to FormData (including files)
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        body: data, // Send FormData directly
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Submission failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Box bgColor="#123456" h="100vh">
        {/* <Box>
                <VStack>
                <Text fontSize="7xl" fontWeight="bold">
                Spot & Tow
                </Text>
                <Text fontSize="xl">Car breakdown? Fill this form!!</Text>
                </VStack>
                </Box>
              <Field label="Name" required>
              <Input placeholder="Name" className="Input" />
              </Field>
              
              <Field label="Contact" required>
              <Input placeholder="Exapmle +6012-345 6789" className="Input" />
              </Field>
              
              <Field label="Email" required>
              <Input placeholder="Email" className="Input" />
              </Field>

              <Field label="Vehicle Information" required>
              <Input placeholder="BMW M4, WXX 1234" className="Input" />
              </Field>
              
              <Field
              label="IC / Passport Number"
              invalid
              errorText="Only numbers allowed"
              required
              >
              <Input placeholder="IC / Passport Number" className="Input" />
              </Field>

              <Field label="Nationality" required>
              <NativeSelectRoot
              size="sm"
              width="-moz-max-content"
              variant={"subtle"}
              >
              <NativeSelectField placeholder="Nationality">
              <Nationality />
              </NativeSelectField>
              </NativeSelectRoot>
              </Field>

              <Field label="Service Options" required>
              <NativeSelectRoot
              size="sm"
              width="-moz-max-content"
              variant={"subtle"}
              >
              <NativeSelectField placeholder="Towing">
              </NativeSelectField>
              </NativeSelectRoot>
              </Field>

              <Field label="Select Date & Time">
              <SelectDate />
              </Field>
              
              <Field label="Upload Mobile Pictures/Videos">
              <FileUploadRoot gap="1" bgColor="black">
              <FileUploadLabel></FileUploadLabel>
              <FileInput />
              </FileUploadRoot>
              </Field> */}
        <form onSubmit={handleSubmit}>
          <VStack gap={4}>
            <Text fontSize="7xl" fontWeight="bold">
              Spot & Tow
            </Text>
            <Text fontSize="xl">Car breakdown? Fill this form!!</Text>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="vehicleInfo"
              placeholder="Vehicle Info"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="passportNumber"
              placeholder="IC/Passport Number"
              onChange={handleChange}
              required
            />

            <label>
              <input type="checkbox" name="isMalaysia" onChange={handleChange}>
                {/* <option value="Malaysia">Malaysia</option>
              <option value="Thailand">Thaland</option>
              <option value="Singapore">Singapore</option>
              <option value="Indonesia">Indonesia</option>
              <option value="China">China</option>
              <option value="Pakisthan">Pakisthan</option>
              <option value="Other">Other</option> */}
              </input>
              Malaysia
            </label>

            <label>
              <input
                type="checkbox"
                name="requiresTowing"
                onChange={handleChange}
              />
              Towing
            </label>

            <input type="date" name="date" onChange={handleChange} required />

            <input
              type="file"
              name="file"
              onChange={(e) =>
                setFormData({ ...formData, file: e.target.files[0] })
              }
            />

            <button
              type="submit"
              _hover={{ bg: "green" }}
              colorPalette="peal"
              onClick={() => navigate("/Payment")}
            >
              Submit
            </button>
          </VStack>
        </form>
      </Box>
    </>
  );
}

export default FormPage;
