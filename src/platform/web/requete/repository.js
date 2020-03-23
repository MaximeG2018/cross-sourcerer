
import { gql } from "apollo-boost";

const GET_USER_REPOSITORIES = gql`

query ($login: String!){
   user(login: $login){
    repositories(first:3) {
      totalCount
      nodes {
        name
        nameWithOwner
        description
        updatedAt
        assignableUsers(first:5) {
          totalCount
        }
        collaborators(first: 10) {
            totalCount
            nodes {
              login
              avatarUrl
            }
          }
        defaultBranchRef {
          target {
            ... on Commit {
              history{
                totalCount
              }
            }
          }
        }
        languages(first:100) {
          totalCount
          nodes {
            name
            color
          }
        }
      primaryLanguage {
         name
         color
       }
      }
    }
   }
 }

`;

export default GET_USER_REPOSITORIES;
