import { Rating, Stack } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [rating, setRating] = useState(null);
  console.log(rating);
  return (
    <>
      <Stack>
        <Rating
          precision={0.5}
          value={rating}
          onChange={(_, newRating) => setRating(newRating)}
        />
      </Stack>
    </>
  );
};

export default MuiRating;
