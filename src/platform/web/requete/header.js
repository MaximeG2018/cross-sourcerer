
import { gql } from "apollo-boost";

const GET_USER_HEADER = gql`

query ($login: String!) {
   user(login: $login) {
    login
    avatarUrl
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories(first:100) {
      totalCount
   }
  }
 }

`;

export default GET_USER_HEADER;
