import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitch = (e) => {
    setChecked(e.target.checked);
  };

  //   console.log(checked);

  const [skills, setSkills] = useState([]);

  console.log(skills);

  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index == -1) setSkills([...skills, e.target.value]);
    else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="dark mode"
          control={<Switch value={checked} onChange={handleSwitch} />}
        />
      </Box>

      <FormControl>
        <FormLabel>Select Skill</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Switch />}
            label="HTML"
            value="html"
            checked={skills.includes("html")}
            onChange={handleSkillsChange}
          />
          <FormControlLabel
            control={<Switch />}
            label="CSS"
            value="css"
            checked={skills.includes("css")}
            onChange={handleSkillsChange}
          />
          <FormControlLabel
            control={<Switch />}
            label="JavaScript"
            value="javascript"
            checked={skills.includes("javascript")}
            onChange={handleSkillsChange}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default MuiSwitch;
