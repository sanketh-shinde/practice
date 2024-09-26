import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

const MuiCheckbox = () => {
  const [checkTnc, setCheckTnc] = useState(false);
  const [skills, setSkills] = useState([]);

  console.log(skills);

  const handleChange = (e) => {
    setCheckTnc(e.target.checked);
  };

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
          label="Terms and Conditions"
          control={<Checkbox checked={checkTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          checked={checkTnc}
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Select Skill</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox />}
              label="HTML"
              value="html"
              checked={skills.includes("html")}
              onChange={handleSkillsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="CSS"
              value="css"
              checked={skills.includes("css")}
              onChange={handleSkillsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="JavaScript"
              value="javascript"
              checked={skills.includes("javascript")}
              onChange={handleSkillsChange}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
