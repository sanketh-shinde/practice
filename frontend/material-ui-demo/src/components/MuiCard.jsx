import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card sx={{ padding: "5px" }} elevation={10}>
        <CardMedia
          component="img"
          height="140px"
          image="/images/unsplash-image.jpg"
          alt="unplash image"
        ></CardMedia>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            React
          </Typography>
          <Typography variant="body2">
            React is a library for JavaScript. React is used for creating UI
          </Typography>
        </CardContent>
        <CardActions>
          <Button>share</Button>
          <Button>read more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
