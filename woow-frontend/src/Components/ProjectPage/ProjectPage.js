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
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Bhavya Meghnani', "Frontend", 6.0, 24, 4.0),
    createData('Anshu Singh', "Frontend", 9.0, 37, 4.3),
    createData('Darshan Patil', "Backend", 9.0, 37, 4.3),
    createData('Devang Patil', "Backend", 9.0, 37, 4.3),
  ];


export default function ProjectPage() {
    const classes = useStyles();
  
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
                                    <TableCell>Team Names</TableCell>
                                    <TableCell align="right">Techstack</TableCell>
                                    <TableCell align="right">No. of Hours</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
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
                            <img height="280" width="350" alt="graph" src="https://www.pngkey.com/png/detail/238-2383266_line-graph-png-transparent-line-graph-png.png" />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <img height="300" width="770" alt="graph" src="https://i.stack.imgur.com/fvErV.png" />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <Typography gutterBottom variant="h4" component="h2">
                    <i><b>Team Details</b></i>
                  </Typography>
                </Paper>
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