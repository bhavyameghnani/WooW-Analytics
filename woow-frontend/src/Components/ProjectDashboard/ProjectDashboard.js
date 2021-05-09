import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';



export default function ProjectDashboard() {

return (
    <React.Fragment>
      <CssBaseline />     
      {/* <header className="App-header"> */}
       <Container maxWidth="lg">
        <Header title="WooW Analytics" />
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />

        <img alt="img" src="https://www.datapine.com/blog/wp-content/uploads/2018/05/it-project-management-dashboard.png"/>
        </main>
        </Container>
      <br/>
      {/* </header> */}
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Project Dashboard WooW Analytics',
  description:
    "All you need to manage your projects",
  image: 'https://3tllv348mk0t1s188m2qazuj-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/GA-dash-v2-1024x539.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
