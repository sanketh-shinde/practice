import { InputAdornment, Stack, TextField } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack>
      <Stack spacing={2} direction="row" marginBlockEnd={5}>
        <TextField label="Enter name" variant="filled" />
        <TextField label="Enter name" variant="outlined" />
        <TextField label="Enter name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row" marginBlockEnd={5}>
        <TextField label="Enter name" required />
        <TextField
          label="Enter password"
          type="password"
          helperText="never share your password"
        />
        <TextField
          label="Enter name"
          slotProps={{ input: { readOnly: true } }}
        />
      </Stack>

      <Stack spacing={2} direction="row" marginBlockEnd={5}>
        <TextField
          label="Amount"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="end">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Weight"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            },
          }}
        />
      </Stack>
      <Stack direction="row">
        <TextField
          label="Enter Password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Dont share password"}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
