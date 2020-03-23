import React from "react";
import GET_USER_REPOSITORIES from "../../requete/repository"
import { useQuery } from "@apollo/react-hooks"

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Container } from 'react-bootstrap';

const { REACT_APP_LOGIN } = process.env

function Repository() {

  const classes = useStyles();

  const { loading, error, data} = useQuery(GET_USER_REPOSITORIES, {
    variables: { login: REACT_APP_LOGIN }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const repo = data.user.repositories.nodes
  let repository = []

  repo.forEach(item => {
      repository.push(item)
  })

    return(
      <Container>
        <div>
          <div>
              <h1 style={{ marginTop: '10vh'}}> Repositories : {data.user.repositories.totalCount} </h1>
              <span style={{ marginLeft: "20px", marginRight: "10px"}}> # </span>
              <span style={{ marginRight: "200px"}}> Repository </span>
              <span style={{ marginRight: "20px"}}> Commits </span>
              <span style={{ marginRight: "50px"}}> Team </span>
              <span style={{ marginRight: "10px"}}> Language </span>
          </div>

          <div>
          {data.user.repositories.nodes.map((repo, index) => {
            return (
              <div className={classes.root} key={index}>
               <ExpansionPanel>
                 <ExpansionPanelSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel1a-content"
                   id="panel1a-header"
                 >
                   <Typography className={classes.heading}>
                    <span style={{ marginRight: "10px"}}> {index} </span>
                    <img  style={{ marginRight: "10px"}} src="https://sourcerer.io/icons/repo-github-icon.svg" alt='Avatar'/>
                    <span style={{ marginRight: "100px"}}>{repo.name} </span>
                    <span style={{ marginRight: "20px"}}>{repo.defaultBranchRef.target.history.totalCount} </span>
                    <span style={{ marginRight: "100px"}}>{repo.assignableUsers.totalCount} </span>
                    <span style={{ marginRight: "10px"}}>{(repo.primaryLanguage) ? repo.primaryLanguage.name : ""} </span>
                   </Typography>
                   <div style={{ margin:"auto",marginRight: "10px", width: '20px', height: '20px', borderRadius: '10px', backgroundColor: (repo.primaryLanguage) ? repo.primaryLanguage.color : "" }}> </div>
                 </ExpansionPanelSummary>
                 <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    {repo.languages.nodes.map((language, index1) => {
                      return (
                        <div key={index1}>
                          <p> {language.name} </p>
                          <div style={{width: '20px', height: '20px', borderRadius: '10px',backgroundColor: (language.color) ? language.color : "" }}></div>
                        </div>
                      )
                    })}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    {repo.collaborators.nodes.map((collaborateur, index2) => {
                         return (
                            <div key={index2}>
                              <img src={collaborateur.avatarUrl} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} alt='Avatar'></img>
                              <p> {collaborateur.login} </p>
                            </div>
                            )
                       })}
                   </div>
               </ExpansionPanel>
            </div>
          )})}
        </div>
      </div>
</Container>
      )
}

export default Repository;


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));
