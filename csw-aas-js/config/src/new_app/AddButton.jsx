import Fab from "@material-ui/core/Fab";
import React, {useState, useContext} from "react";
import {makeStyles} from "@material-ui/styles";
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ConfigsContext from "./context/ConfigsContext";

const useStyles = makeStyles({
  fab: {
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  },
});

const AddButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {addItem} = useContext(ConfigsContext);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab} >
        <AddIcon onClick={openModal} />
      </Fab>
      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add new configuration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="path"
            label="Path"
            type="text"
            fullWidth
            multiline
          />
          <TextField
            margin="dense"
            id="config_text"
            label="Configuration Text"
            type="text"
            multiline={true}
            fullWidth
          />
          <TextField
            margin="dense"
            id="commit_message"
            label="Commit Message"
            type="text"
            multiline={true}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={closeModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddButton.propTypes = {

};

export default AddButton;
