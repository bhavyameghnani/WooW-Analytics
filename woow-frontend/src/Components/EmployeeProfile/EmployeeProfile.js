import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
// import Typography from '@material-ui/core/Typography';

export default function EmployeeProfile() {
    // const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />     
        {/* <header className="App-header"> */}
         <Container maxWidth="lg">
          <Header title="Employees Profile" />
          <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          </main>
        </Container>
      <br/>
      {/* </header> */}
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Employees Profile',
  description:
    "All you need to know about Employees on WooW Analytics",
  image: 'https://trainingindustry.com/content/uploads/2018/05/Employee-Experience-and-Employee-Engagement-5.17.18.jpg',
  imgText: 'Employee Profile',
  linkText: 'Continue reading…',
};