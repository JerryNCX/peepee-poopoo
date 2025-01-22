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
import axios from 'axios';

const [data, setData] = useState([]);
const [error, SetError] = useState(null);
useEffect(() => {
  const fetchData = async () => {
    try{
      const response = await axios.get('../../backend/connect.cjs')
    } catch (err) {
      SetError(err.message);
    }
  };

fetchData()
},[]);


function FormPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Box bgColor="#123456" h="100vh" >
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
        <form onSubmit={handleSubmit(onSubmit)} bgColor="#123456">
          <VStack gap={4} >
            <Text fontSize="7xl" fontWeight="bold">
              Spot & Tow
            </Text>
            <Text fontSize="xl">Car breakdown? Fill this form!!</Text>
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
            />
            <input
              type="tel"
              placeholder="Contaxt"
              {...register("Contaxt", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
            <input
              type="text"
              placeholder="Vehicle Information"
              {...register("Vehicle Information", { required: true })}
            />
            <input
              type="text"
              placeholder="IC/Passport Number"
              {...register("IC/Passport Number", { required: true })}
            />
            <select {...register("Nationality", { required: true })}>
              <option value="Malaysia">Malaysia</option>
              <option value="Thailand">Thailand</option>
              <option value="Singapore">Singapore</option>
              <option value="Indonesia">Indonesia</option>
              <option value="China">China</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Others">Others</option>
            </select>
            <select {...register("Service Options", { required: true })}>
              <option value="Towing">Towing</option>
            </select>
            <SelectDate
              type="datetime"
              placeholder="Select Date & Time"
              {...register("Select Date & Time", { required: true })}
            />

            <Field label="Upload Mobile Pictures/Videos" w="50%">
              <FileUploadRoot gap="1" bgColor="black">
                <FileUploadLabel></FileUploadLabel>
                <FileInput />
              </FileUploadRoot>
            </Field>

            <Button
              _hover={{ bg: "green" }}
              colorPalette="peal"
              onClick={() => navigate("/Payment")}
            >
              <input type="submit"/>
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
}

export default FormPage;
