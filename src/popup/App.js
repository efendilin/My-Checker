/*global chrome*/
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import BuildIcon from '@material-ui/icons/Build';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
var is_init = false;

export const useStyles = makeStyles({
  root: {
    height: 60,
    flexGrow: 1,
    width: 250,
  },
});

export function ButtonAppBar(props) {
  const { config } = props;
  const classes = useStyles();

  const handleMenu = (e) => {
    config(true);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <BuildIcon onClick={handleMenu} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}


function App() {
  const classes = useStyles();
  const [config_open, setConfig_Open] = React.useState(false);

  const [state, setState] = React.useState({
    isAutomatic: true,
    UseLocal: false,
  });

  const handleChange = (event) => {
    let changed = {}
    if (event.target.name !== "serverIP"&&event.target.name !== "BMDserver") {
      changed = { ...state, [event.target.name]: event.target.checked };
    }else{
      changed = { ...state, [event.target.name]: event.target.value };
    }
    chrome.runtime.sendMessage({type:"change_seeting", info:changed, origin:"popup"})
    setState(changed);
  };

  React.useEffect(() => {
    if (is_init) return;
    chrome.storage.local.get(null,function(data){
      is_init = true;
      console.log(data)
      setState(data.seeting);
    });
  });

  const handleClose = () => {
    //console.log(state);
    setConfig_Open(false);
    //console.log(patient_data);
  }

  return (
    <div className={classes.root}>
      <header className="App-header">
      <div className="Div1">
        <ButtonAppBar config={setConfig_Open} className="the_app_bar" />
        <Grid container spacing={1}>
          <Grid item>
          <FormGroup row> 
            <FormControlLabel
              control={<Switch checked={state.isAutomatic} onChange={handleChange} name="isAutomatic" color="primary" />}
              label="Auto Marking" 
            />
            <FormControlLabel
              control={<Switch checked={state.UseLocal} onChange={handleChange} name="UseLocal" color="primary" />}
              label="Use Your Own List" 
            />
          </FormGroup>
        </Grid>
        </Grid>
      </div>
      <Dialog fullScreen open={config_open} onClose={handleClose} aria-labelledby="Selector-dialog">
      <DialogTitle id="Config-dialog">Config Dialog</DialogTitle>
        <DialogContent >
          <label>Your Own Drug List</label>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </header>
    </div>
  );
}

export default App;
