import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiAutocomplete = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  const [skillValue, setSkillValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Select Skill" />}
        value={skillValue}
        onChange={(_, newSkill) => setSkillValue(newSkill)}
        freeSolo
      />

      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Select Skill" />}
        value={skill}
        onChange={(_, newSkill) => setSkill(newSkill)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
