import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  spanH:{
    fontSize:"50px",
    textAlign: "center",
    color : "#FC7C00",
    fontFamily: "Pacifico , cursive",
  },
  spanM:{
    fontFamily :"Satisfy, cursive",
    fontSize:"25px",
    textAlign: "center",
  },
  spanO:{
    fontFamily :"Satisfy, cursive",
    fontSize:"25px",
    textAlign: "center",
  },
  bg:{
    backgroundColor: "	#FFFF99",
  },
  hr:{
  
    border :"5px solid orange",
    
  },
  spanO1:{
    color : "#FC7C00",
    fontFamily :"Satisfy, cursive",
    fontSize:"25px",
    textAlign: "center",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={3} className={classes.bg}>
     <Grid item xs={3}></Grid>
    <Grid item xs={6}>
    <img src="https://img.icons8.com/ios-filled/48/000000/fantasy.png"/>
        
        <span className={classes.spanH}>Something About Us</span>
        <img src="https://img.icons8.com/android/48/000000/fantasy.png"/>
    </Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={12}>
        <span className={classes.spanM}>
        We are a small company primarly focused on customer satisfaction and integrity.
        At the time when Covid-19 has affected us all deeply, we have come up with a 
        platform aiming at providing you all your requiremnts from the comfort of your home.
        <br/> <br/>
        Our items are securely packaged and santitized but we still advise caution while handling the package . We provide services all kinds. 
        Anything you want deleivred just name it! Just add the item in the awaiting list and our admins will update you about thier res[ective 
        delivery status and schedule.
      </span>
      </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <span className={classes.spanO}>HAPPY ORDERING AND STAY SAFE. </span>
        </Grid>
        <Grid item xs={4}></Grid>
<br/> <br/>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <span className={classes.spanO1}> &nbsp; &nbsp;Some reviews of our customers! </span>
        </Grid>
        <Grid item xs={4}></Grid>


    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png" >
           Remy Sharp 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pastels and Paint Brushes"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://i.pinimg.com/originals/75/cf/de/75cfde3980df6e078eb1465bbb4323d6.jpg"
        title="Remy's Review"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive pastel set is a perfect set together with your
          other gifts. Add water, if you like, to see it become glittery.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>  
          <Typography>
            Set aside  to let rest for 10 minutes, and then paint.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid> 
    
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY9CFeq9b0Heyu5smWdzciVy8mSgdQptD0NQ&usqp=CAU" >
           Remy Sharp 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Watercolor Set!"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.shopify.com/s/files/1/0404/2041/files/paints_large.jpg?v=1524827986"
        title="Metallic watercolors"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This impressive pastel set is a perfect set together with your
          other gifts. Add water, if you like, to see it become glittery.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Detail</Typography>       
           <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid> 
    
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-Lady-Girl-Female-Avatar-People-Happy-512.png" >
          Remy Sharp 
         </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Highlighters Set"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://i.pinimg.com/564x/fe/e0/45/fee0456f62837b022fe20d565a362e25.jpg"
        title="Highlighters"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is impressive !! <br/> Too good!!!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detail</Typography>
          <Typography paragraph>
          t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </Grid> 

    </Grid> 
    );
};