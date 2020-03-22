
import { gql } from "apollo-boost";

const GET_USER_OVERVIEW = gql`

query ($login: String!) {
   user(login: $login) {
    avatarUrl
   }
 }

`;

export default GET_USER_OVERVIEW;
