import React from "react";
import GET_USER_HEADER from "../../requete/header"
import { useQuery } from "@apollo/react-hooks"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Container, Row, Col } from 'react-bootstrap';

const { REACT_APP_LOGIN } = process.env

function Header() {

  const classes = useStyles();

  const { loading, error, data} = useQuery(GET_USER_HEADER, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const user = data.user;

  const repos = data.user.repositories.nodes
  let nbCommits = 0;
  let nbLinesCodesAdditions = 0;
  let nbLinesCodesDeletions = 0;
  let nbLinesCodes = 0;

  repos.forEach(item => {
    if (item.defaultBranchRef != null) {
      nbCommits += item.defaultBranchRef.target.history.totalCount;
      item.defaultBranchRef.target.history.nodes.forEach(lines => {
        nbLinesCodesAdditions += lines.additions
        nbLinesCodesAdditions += lines.deletions
      })
      nbLinesCodes = nbLinesCodesAdditions - nbLinesCodesDeletions
    }
  })

  return (
    <>
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Sourcerer
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Container>
          <h1 style={{ marginBottom: '5vh', marginTop: '5vh'}}> {user.login} </h1>
          </Container>
          <Container>
            <Row>
              <Col>
                <img src={user.avatarUrl} style={{ width: 100, height: 100, borderRadius: 100 / 2 }} alt="avatar" />
              </Col>
              <Col style={{ marginTop: 'auto'}}>
                <p style={{ fontFamily: 'Roboto', fontSize: 14}}> Commits </p>
                <p style={{ fontWeight: 'bold', fontFamily:'Roboto', fontSize: 14 }}> {nbCommits} </p>
              </Col>
              <Col style={{ marginTop: 'auto'}}>
                <p style={{ fontFamily: 'Roboto', fontSize: 14}}> Repos </p>
                <p style={{ fontWeight: 'bold', fontFamily:'Roboto',fontSize: 14 }}>  {user.repositories.totalCount} </p>
              </Col>
              <Col style={{ marginTop: 'auto'}}>
                   <p style={{ fontFamily: 'Roboto', fontSize: 14}}> Lines of code </p>
                   <p style={{ fontWeight: 'bold', fontFamily:'Roboto',fontSize: 14 }}> {nbLinesCodes} </p>
              </Col>
              <Col style={{ marginTop: 'auto'}}>
                 <p style={{ fontFamily: 'Roboto', fontSize: 14}}>Followers </p>
                 <p style={{ fontWeight: 'bold', fontFamily:'Roboto', fontSize: 14 }}> {user.followers.totalCount} </p>
              </Col>
              <Col style={{ marginTop: 'auto'}}>
                <p style={{ fontFamily: 'Roboto', fontSize: 14}}> Following </p>
                <p style={{ fontWeight: 'bold', fontFamily:'Roboto', fontSize: 14 }}> {user.following.totalCount} </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
  )
}

export default Header;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
