import { Box, Button } from "@mui/material";
import { useState } from "react";
import DialogBox from "./DialogBox";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button variant="contained" onClick={() => setOpen(true)}>
        Menu
      </Button>
      <DialogBox open={open} setOpen={setOpen} name="Menu" />
    </Box>
  );
};

export default Menu;
