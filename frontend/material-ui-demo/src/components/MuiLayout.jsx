import { Box, Divider, Grid2, Paper, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "16px" }} elevation={10}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="section"
          sx={{
            backgroundColor: "primary.main",
            width: "100px",
            height: "100px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          MuiLayout
        </Box>
        <Box width="100px" height="100px" bgcolor="success.light"></Box>
      </Stack>
      <Grid2 container my={2}>
        <Grid2
          item="true"
          bgcolor="primary.light"
          p={2}
          size={{ xs: 12, sm: 6 }}
        >
          Item 1
        </Grid2>
        <Grid2
          item="true"
          bgcolor="primary.light"
          p={2}
          size={{ xs: 12, sm: 6 }}
        >
          Item 2
        </Grid2>
        <Grid2
          item="true"
          bgcolor="primary.light"
          p={2}
          size={{ xs: 12, sm: 6 }}
        >
          Item 3
        </Grid2>
        <Grid2
          item="true"
          bgcolor="primary.light"
          p={2}
          size={{ xs: 12, sm: 6 }}
        >
          Item 4
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default MuiLayout;
