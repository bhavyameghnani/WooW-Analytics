import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
}));

const sections = [
  { title: 'Quick Search', url: '#/home' },
  { title: 'Employee Profile', url: '#/home' },
  { title: 'Projects Dashboard', url: '#/home' },
];

const mainFeaturedPost = {
  title: 'WooW Analytics by Team Parabellum',
  description:
    "All you need to manage your Workflows",
  image: 'https://s27389.pcdn.co/wp-content/uploads/2020/09/why-problem-solving-analytics-needs-new-thinking.jpeg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Sentiment analysis product rating',
    tag: 'AI/ML',
    description:
      'This project aims to develop a sentiment analysis system for product rating. It is an e-commerce web application. The main goal of this sentiment analysis system is to understand the hidden sentiments of customers in feedback and comments and analyze their product rating patterns.',
    image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2020/08/Sentiment-Analysis-scaled.jpg',
    imageText: 'Sentiment analysis for product rating',
  },
  {
    title: 'Fingerprint-based ATM system',
    tag: 'IOT',
    description:
      'This project is a desktop application that uses the fingerprint of users for authentication. Since each individual has a unique fingerprint, this method of using fingerprint as a means of authentication to access your ATM is safer and more secure than using an ATM card. Users need not carry their ATM cards with them at all times – they can use their fingerprint to access ATM services. ',
    image: 'https://api.army.mil/e2/c/images/2020/02/04/576140/original.jpg',
    imageText: 'Fingerprint-based ATM system',
  },
  {
    title: 'Weather forecasting system',
    tag: 'AI/ML',
    description:
      'Weather forecasting systems use a combination of science and technology to make accurate predictions on weather conditions of a particular location at a particular time. Weather forecast systems and applications predict weather conditions based on multiple parameters, such as pressure, temperature, humidity, wind speed, etc.',
    image: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_weather_and_prediction.png',
    imageText: 'Weather forecasting system',
  },
  {
    title: 'Image encryption using AES algorithm',
    tag: 'DS Oriented',
    description:
      'When it comes to communication and imaging systems, you need to incorporate the highest level of security in place. Without a reliable and secure system, there’s a massive threat to sensitive data. Cybercriminals and hackers are always on the lookout for hacking into confidential data, which puts it at risk of being violated. ',
    image: 'https://store.hp.com/app/assets/images/uploads/prod/how-different-types-of-encryption-are-used-hero1562082216786524.jpg',
    imageText: 'Image encryption using AES algorithm',
  },
  {
    title: 'Android Patient Tracker',
    tag: 'Mobile - Android',
    description:
      'This project involves the development of an Android application for viewing and managing patient data. The app is designed to help doctors to see the medical history of their patients. Doctors can also continually upgrade the system by entering the latest medical data of their patients. ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTWbSRXArrIZtsB3CKh1vqk3lMeytWiJfUA&usqp=CAU',
    imageText: 'Android Patient Tracker',
  },
  {
    title: 'Automated payroll system with GPS tracking and image capture',
    tag: 'AI/ML, IOT',
    description:
      'This automated payroll system doubles up as a web and Android application – while the user will use the Android interface, the Admin (usually the HR) will use the web interface. ',
    image: 'https://edtechmagazine.com/higher/sites/edtechmagazine.com.higher/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202003/GettyImages-1093593674.jpg?itok=TlfeRdoH',
    imageText: 'Automated payroll system with GPS tracking and image capture',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />     
      {/* <header className="App-header"> */}
       <Container maxWidth="lg">
        <Header title="WooW Analytics" sections={sections} />
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {featuredPosts.map((card) => (
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
            ))}
          </Grid>
        </Container> 
        </main>
        </Container>
      <br/>
      {/* </header> */}
    </React.Fragment> 
  );
}