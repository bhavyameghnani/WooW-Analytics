import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ProjectCards(props) {
  const classes = useStyles();
  const { card } = props;

  return (
      <Grid item key={card.title} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={card.image}
            title={card.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Chip label={card.tag} />
            {/* <Typography align="center">
            {card.tag}
            </Typography> */}
            <Typography align="center">
            {card.description}
            </Typography>
          </CardContent>
          <center>
          <CardActions> 
              <Button 
                variant="contained"  
                size="small" 
                color="primary"
                onClick={() => {window.open('/#/')}}
              >
                  Read More
              </Button> 
              <Button 
                variant="contained"  
                size="small" 
                color="primary"
                onClick={() => {window.open('/#/')}}
              >
                  Apply Now
              </Button> 
              <Button 
                variant="contained"  
                size="small" 
                color="primary"
                onClick={() => {window.open('/#/')}}
              >
                  Connect Team
              </Button> 
          </CardActions>
          </center>
        </Card>
      </Grid>
  );
}

ProjectCards.propTypes = {
  post: PropTypes.object,
};