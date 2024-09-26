import { useState } from "react";

import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Box width={250}>
      <TextField
        label="Select Country"
        select
        fullWidth
        size="small"
        value={country}
        onChange={handleCountry}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="EU">Europe</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
