import React from 'react';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import {ClientRole} from 'csw-aas-js'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ConfigPreview = props => {
  const {config} = props;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {config.path}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {config.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color={'primary'} href={`http://localhost:5000/config/${config.path}`} size="small">
          <DownloadIcon /> &nbsp;Download
        </Button>
        <ClientRole clientRole={'admin'} error={null} client='csw-config-server'>
          <Button color={'secondary'}>
            <DeleteIcon /> Delete
          </Button>
        </ClientRole>
      </CardActions>
    </Card>
  );
};
export default ConfigPreview

ConfigPreview.propTypes = {
  config: PropTypes.object.isRequired
};
