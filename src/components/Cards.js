import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import roomm8Logo from '../img/roomm8.png'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={roomm8Logo}
          title="placeholder"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Roomm8
          </Typography>
          <Typography component="p">
            (IN DEVELOPMENT) An application meant for interaction between roommates 
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
