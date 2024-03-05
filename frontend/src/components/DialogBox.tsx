import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createMenu } from "../store/slices/menuSlice";
import { NewMenu } from "../types/menu";

interface Props {
  name: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DialogBox = ({ name, open, setOpen }: Props) => {
  const [newMenu, setNewMenu] = useState<NewMenu>({ name: "", price: 0 });
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.menu.isLoading);

  const handleCreate = () => {
    const isValid = newMenu.name;
    if (!isValid) return;
    dispatch(createMenu(newMenu));
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Create {name}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name.."
          variant="standard"
          sx={{ width: "100%", mb: 2 }}
          onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
        />
        <TextField
          label="Price..."
          variant="standard"
          sx={{ width: "100%" }}
          onChange={(e) =>
            setNewMenu({ ...newMenu, price: Number(e.target.value) })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleCreate}
          disabled={loading}
          sx={{
            bgcolor: "blueviolet",
            width: 100,
            height: 36,
          }}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: "blueviolet" }} />
          ) : (
            "Create"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogBox;
