import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import { Card } from 'antd';
import Grid from '@material-ui/core/Grid';

const { Meta } = Card;


export default function EmployeeProfile() {
    // const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Employees Profile" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
            {employeeData.map((card) => (
            <Grid item  xs={12} sm={6} md={3}> 
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title={card.name} description={card.description} />
                </Card>
            </Grid>))}
            </Grid>
          </main>
        </Container>
      <br/>
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


const employeeData = [
  {
    name: 'Bhavya',
    description: 'Frontend Developer'
  },
  {
    name: 'Devang',
    description: 'Frontend Developer'
  },
  {
    name: 'Darshan',
    description: 'Frontend Developer'
  },
  {
    name: 'Anshu',
    description: 'Frontend Developer'
  },
  {
    name: 'Bhavya',
    description: 'Frontend Developer'
  },
  {
    name: 'Devang',
    description: 'Frontend Developer'
  },
  {
    name: 'Darshan',
    description: 'Frontend Developer'
  },
  {
    name: 'Anshu',
    description: 'Frontend Developer'
  },
]