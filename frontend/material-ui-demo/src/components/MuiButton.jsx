import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState([]);

  const handleFormats = (_, newFormat) => {
    setFormats(newFormat);
  };
  return (
    <Stack margin={10}>
      <Stack spacing={2} direction="row" marginBlockEnd={5}>
        <Button variant="text" href="https://www.youtube.com">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row" marginBlockEnd={5}>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row" marginBlockEnd={5}>
        <Button variant="outlined" size="small">
          small
        </Button>
        <Button variant="outlined" size="medium">
          medium
        </Button>
        <Button variant="outlined" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" marginBlockEnd={5}>
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          send
        </Button>
        <IconButton>
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" marginBlockEnd={5}>
        <ButtonGroup variant="outlined" size="small">
          <Button onClick={() => alert("left clicked")}>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row" marginBlockEnd={5}>
        <ToggleButtonGroup
          exclusive
          value={formats}
          onChange={handleFormats}
          color="success"
          size="small"
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
