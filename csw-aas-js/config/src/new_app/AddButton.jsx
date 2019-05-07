import Fab from "@material-ui/core/Fab";
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ConfigsContext from "./context/ConfigsContext";
import {ClientRole, AuthContext} from 'csw-aas-js'
import request from "superagent";

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
  const {auth} = useContext(AuthContext);
  const openModal = () => setOpen(true);

  const [data,setData] = useState({
    path: '',
    text: '',
    message: ''
  });

  const closeModal = () => {
    setData({
      path: '',
      text: '',
      message: ''
    });
    setOpen(false);
  };

  const saveConfig = () => {

    /*******************************************************************************/

    const url = `http://localhost:5000/config/${data.path}?comment=${data.message}`;
    const payload= data.text;
    const token = auth.token();

    request
      .post(url)
      .set('Content-Type', 'text/plain')
      .set('Authorization', `Bearer ${token}`)
      .send(payload)
      .then(
        res => {
          console.info(res.text);
          window.location.reload();
        },
        err => {
          console.error(err.toString())
        },
      );

    /*******************************************************************************/

    closeModal()
  };

  return (
      <ClientRole clientRole={'admin'} client='csw-config-server' error={<span className={classes.fab} >Please login as admin to add new configurations</span>}>
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
              value={data.path}
              multiline
              onChange={(e) => setData({...data, path:e.target.value})}
            />
            <TextField
              margin="dense"
              id="config_text"
              label="Configuration Text"
              type="text"
              multiline={true}
              value={data.text}
              fullWidth
              onChange={(e) => setData({...data, text:e.target.value})}
            />
            <TextField
              margin="dense"
              id="commit_message"
              label="Commit Message"
              type="text"
              value={data.message}
              multiline={true}
              fullWidth
              onChange={(e) => setData({...data, message:e.target.value})}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="secondary">
              Cancel
            </Button>
            <Button onClick={saveConfig} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </ClientRole>
  );
};

AddButton.propTypes = {

};

export default AddButton;
