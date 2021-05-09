import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ProjectCards from './ProjectCard';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import ServiceCall from '../../Service/ServiceCall';

const { TabPane } = Tabs;

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

export default function Home() {
  const classes = useStyles();

  const [projectData, setProjectData] = React.useState([]);
  const [searchData, setSearchData] = React.useState([]);
  const [keyword, setKeywordValue] = React.useState();
  const [count, setCount] = React.useState(0);


  useEffect(() => {
      ServiceCall.getAllProjects().then((response)=>{
        console.log(response.data);
        setProjectData(response.data)
    })
    setCount(100);
  },[]);

  function handleCategory(){
    console.log(keyword)
    ServiceCall.getSearchProjects(keyword).then((response)=>{
      console.log(response.data)
      setSearchData(response.data)
    })
  }

  return (
    <React.Fragment>
      <CssBaseline />     
      {/* <header className="App-header"> */}
       <Container maxWidth="lg">
        <Header title="WooW Analytics" />
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />

        <TextField 
                id="standard-basic"
                variant="outlined"
                multiline
                style={{ margin: 40, width: 700}}
                placeholder="WooW Project Repository Search"
                onChange = {(e) => setKeywordValue(e.target.value)} 
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon onClick={()=> handleCategory()} /> {/*  */}
                        </IconButton>
                    </InputAdornment>
                    )
                }}
          />

          {searchData && 
            <Grid container spacing={4}>
            {searchData.map((card) => (
              <ProjectCards card={card['_source']} pid={card['_id']}/>
            ))}
          </Grid>}

        <Container className={classes.cardGrid} maxWidth="lg">
        <Tabs defaultActiveKey="2" centered>
    <TabPane tab="Past Projects" key="1">
    <Typography component="h1" variant="h3" style={{color: '#8B0000'}} gutterBottom>
            <i>Past Projects</i>
        </Typography>
        <Grid container spacing={4}>
            {projectData.map((card) => (
              (() => {
                if(card['_source']['status'].includes('Previous')){

                  return(<ProjectCards card={card['_source']} pid={card['_id']}/>)
                }
              })()
            ))}
          </Grid>
    </TabPane>
    <TabPane tab="Live Projects" key="2">
      <Typography component="h1" variant="h3" style={{color: '#006400'}} gutterBottom>
                <i>Live Projects</i>
            </Typography>
            <Grid container spacing={4}>
            {projectData.map((card) => (
              (() => {
                if(card['_source']['status'].includes('Live')){
                  return(<ProjectCards card={card['_source']} pid={card['_id']}/>)
                }
              })()
            ))}
            </Grid>
    </TabPane>
    <TabPane tab="UpComing Projects" key="3">
      <Typography component="h1" variant="h3" style={{color: '#000080'}} gutterBottom>
              <i>UpComing Projects</i>
          </Typography>
          <Grid container spacing={4}>
          {projectData.map((card) => (
              (() => {
                if(card['_source']['status'].includes('Coming')){
                  return(<ProjectCards card={card['_source']} pid={card['_id']}/>)
                }
              })()
            ))}
            </Grid>
    </TabPane>
  </Tabs>

        </Container> 
        </main>
        </Container>
      <br/>
      {/* </header> */}
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'WooW Analytics by Team Parabellum',
  description:
    "All you need to manage your Workflows",
  image: 'https://s27389.pcdn.co/wp-content/uploads/2020/09/why-problem-solving-analytics-needs-new-thinking.jpeg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const liveProjects = [
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
  }
]

const upcomingProjects =[
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


const pastProjects = [
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
  }
]