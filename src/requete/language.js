
import { gql } from "apollo-boost";

const GET_USER_LANGUAGES = gql`

query ($login: String!){
   user(login: $login){
    repositories(first:100) {
      totalCount
      nodes {
        languages(first:100) {
          totalCount
          nodes {
            name
            color
          }
        }
      }
    }
   }
 }

`;

export default GET_USER_LANGUAGES;
