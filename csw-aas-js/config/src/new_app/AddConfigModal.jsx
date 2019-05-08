import React, {useContext, useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import UiContext from "./context/UiContext";
import {addConfig} from "./configServerApi";
import {AuthContext} from 'csw-aas-js';

export const AddConfigModal = () => {

  const {addModalOpen, closeAddModal} = useContext(UiContext);
  const {auth} = useContext(AuthContext);

  const [data, setData] = useState({
    path: '',
    text: '',
    message: ''
  });

  const saveConfig = () => {
    addConfig(data.path, data.message, auth.token(), data.text);
    closeAddModal()
  };

  return <Dialog
    open={addModalOpen}
    onClose={closeAddModal}
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
        value={data.path}
        multiline
        onChange={(e) => setData({...data, path: e.target.value})}
      />
      <TextField
        margin="dense"
        id="commit_message"
        label="Commit Message"
        type="text"
        value={data.message}
        multiline={true}
        fullWidth
        onChange={(e) => setData({...data, message: e.target.value})}
      />
      <TextField
        margin="dense"
        id="config_text"
        label="Configuration Text"
        type="text"
        multiline={true}
        value={data.text}
        fullWidth
        rows={4}
        variant={'outlined'}
        onChange={(e) => setData({...data, text: e.target.value})}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={closeAddModal} color="secondary">
        Cancel
      </Button>
      <Button onClick={saveConfig} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
};
