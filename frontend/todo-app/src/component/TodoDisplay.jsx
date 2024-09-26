import { Button } from "@mui/material";
import { memo } from "react";

const TodoDisplay = ({ items, handle }) => {
  return (
    <>
      <div id="display">
        {items.length > 0 &&
          items.map((item, index) => (
            <li key={index} className="item">
              <p>{item}</p>

              <Button
                variant="outlined"
                color="error"
                onClick={() => handle(index)}
                id="remove"
              >
                Remove
              </Button>
            </li>
          ))}
      </div>
    </>
  );
};

export default memo(TodoDisplay);
