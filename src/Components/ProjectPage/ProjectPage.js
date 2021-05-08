import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactRoundedImage from "react-rounded-image";
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    //   height: '80%'
    },
    button: {
      margin: theme.spacing(1),
    },
    textRoot: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    autoRoot: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Bhavya Meghnani', "Frontend Developer", 6.0, 24, 4.0),
    createData('Anshu Singh', "Frontend Developer", 9.0, 37, 4.3),
    createData('Darshan Patil', "AI/ML Developer", 9.0, 37, 4.3),
    createData('Devang Patil', "Backend Developer", 9.0, 37, 4.3),
  ];


export default function ProjectPage() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [complexity, setComplexity] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleComplexityChange = (event) => {
      setComplexity(event.target.value);
    };
  
    return (
      <React.Fragment>
        <CssBaseline />     
        {/* <header className="App-header"> */}
         <Container maxWidth="lg">
          <Header title="WooW Analytics" />
          <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          </main>

          <Grid container spacing={3}>
            <Grid item xs={false}  md={8}>
                <Paper className={classes.paper}>
                    <Typography gutterBottom variant="h4" component="h2">
                        <i><b>Project Summary</b></i>
                    </Typography>
                    <Typography gutterBottom variant="h7" component="h3">
                        Weather forecasting systems use a combination of science and technology to make accurate predictions on weather conditions of a particular location at a particular time. Weather forecast systems and applications predict weather conditions based on multiple parameters, such as pressure, temperature, humidity, wind speed, etc.
                    </Typography>
                </Paper>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="right">Open positions</TableCell>
                                    <TableCell align="right">No. of Hours</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            {/* <img height="280" width="350" alt="graph" src="https://www.pngkey.com/png/detail/238-2383266_line-graph-png-transparent-line-graph-png.png" /> */}
                            <Chart
                                // width={'600px'}
                                // height={'400px'}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                  ['x', 'dogs'],
                                  [0, 0],
                                  [1, 10],
                                  [2, 23],
                                  [3, 17],
                                  [4, 18],
                                  [5, 9],
                                  [6, 11],
                                  [7, 27],
                                  [8, 33],
                                  [9, 40],
                                  [10, 32],
                                  [11, 35],
                                ]}
                                options={{
                                  hAxis: {
                                    title: 'Time',
                                  },
                                  vAxis: {
                                    title: 'Popularity',
                                  },
                                }}
                                rootProps={{ 'data-testid': '1' }}
                              />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <img height="300" width="770" alt="graph" src="https://i.stack.imgur.com/fvErV.png" />
                        </Paper>
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            // onClick={}
                          >
                            Edit & Save Project Details
                        </Button>
                        <Button
                            variant="contained"
                            style={{backgroundColor:"#00FF00"}}
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                            onClick={()=>handleClickOpen()}
                          >
                            Add Task to Project
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                          >
                            Delete this Project
                        </Button>

                        <Dialog
                          open={open}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-slide-title"
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogTitle id="alert-dialog-slide-title">{"Add Task to Project"}</DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              <center>
                                <TextField className={classes.textRoot}id="standard-basic" label="Enter Position Details" /> 
                                <TextField className={classes.textRoot}id="standard-basic" label="Enter Task Details" /> 
                                <TextField className={classes.textRoot}id="standard-basic" label="No. of Hours for the task" />
                                <TextField className={classes.textRoot}id="standard-basic" label="Enter Techstack Details" />
                                <br/> <br/>
                                <InputLabel id="demo-simple-select-label">Complexity</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={complexity}
                                  onChange={handleComplexityChange}
                                >
                                  <MenuItem value={10}>Simple</MenuItem>
                                  <MenuItem value={20}>Medium</MenuItem>
                                  <MenuItem value={30}>Hard</MenuItem>
                                </Select>
                                <br/>
                              </center>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Discard Changes
                            </Button>
                            <Button onClick={handleClose} color="primary">
                              Save Changes
                            </Button>
                          </DialogActions>
                        </Dialog>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <PieChart
                  label={({ dataEntry }) => dataEntry.value}
                  animate="true"
                  animationDuration={2000}
                  data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                  ]}
                />;
                </Paper>

                <br/>

                <Paper className={classes.paper}>
                  <Typography gutterBottom variant="h4" component="h2">
                    <i><b>Team Details</b></i>
                  </Typography>
                  <center>

                  <ReactRoundedImage image="https://media-exp1.licdn.com/dms/image/C4E03AQE5YCxTOtEJag/profile-displayphoto-shrink_800_800/0/1609997372563?e=1625702400&v=beta&t=JU_5OvpkF1SfZdlM9Ma2_1ATE6GyuycF5p5vuzVImA4" roundedSize="0" imageWidth="110" imageHeight="110"/>
                    <Typography gutterBottom variant="h5" component="h2">
                      <i>Anshu - Frontend Developer</i>
                    </Typography>


                    <ReactRoundedImage image="https://media-exp1.licdn.com/dms/image/C4E03AQFZny9MoTAgNw/profile-displayphoto-shrink_800_800/0/1618072722784?e=1625702400&v=beta&t=W23PrBWuUE8f719lD4Dz6uj5cqp7mP04QSZQtSCYR0A" roundedSize="0" imageWidth="110" imageHeight="110"/>
                    <Typography gutterBottom variant="h5" component="h2">
                      <i>Devang - Backend Developer</i>
                    </Typography>


                    <ReactRoundedImage image="https://media-exp1.licdn.com/dms/image/C5103AQHmkYPwt5dceA/profile-displayphoto-shrink_800_800/0/1571726981584?e=1625702400&v=beta&t=hMoGZ0b1GVljxnkhZ96wcc4G-6K_nILdVcfLyS51xjQ" roundedSize="0" imageWidth="110" imageHeight="110"/>
                    <Typography gutterBottom variant="h5" component="h2">
                      <i>Darshan - Backend Developer</i>
                    </Typography>


                    <ReactRoundedImage image="https://media-exp1.licdn.com/dms/image/C4D03AQF9mLPOG-UkSA/profile-displayphoto-shrink_800_800/0/1595870041988?e=1625702400&v=beta&t=Y0HXQLjaLLT6F5UoV1Jf2z_V277qX736OZyGlG3Bq1M" roundedSize="0" imageWidth="110" imageHeight="110"/>
                    <Typography gutterBottom variant="h5" component="h2">
                      <i>Bhavya - Frontend Developer</i>
                    </Typography>

                  </center>          
                </Paper> 

                <br/>

                
                
            </Grid>
        </Grid>

        </Container>
      <br/>
      {/* </header> */}
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
    title: 'Project Details',
    description:
      "Read more about the project here",
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/PM.jpg',
    imgText: 'Project Details',
    linkText: 'Continue reading…',
  };

  const data = [
    {									
        color: "steelblue", 
        points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
    }
];

const techstacks = [
  {									
      title: "Java", 
      title: "Python", 
      title: "Elasticsearch", 
      title: "Angural", 
      title: "React", 
      title: "C++", 
  }
];