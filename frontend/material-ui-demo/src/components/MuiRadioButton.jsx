import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [gender, setGender] = useState("");

  return (
    <Box>
      <FormControl>
        <FormLabel id="gender">Select Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel control={<Radio />} label="Male" value="male" />
          <FormControlLabel control={<Radio />} label="Female" value="female" />
          <FormControlLabel control={<Radio />} label="Others" value="others" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
