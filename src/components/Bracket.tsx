import './Bracket.css'
import Set from './subcomponents/Set'
import { gql, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const BRACKET_QUERY = gql`
query PhaseGroupSets($phaseGroupId: ID!, $page:Int!, $perPage:Int!){
  phaseGroup(id:$phaseGroupId){
    id
    displayIdentifier
    sets(
      page: $page
      perPage: $perPage
      sortType: ROUND
    ){
      pageInfo{
        total
      }
      nodes{
        id
        round
        slots{
          id
          entrant{
            id
            name
          }
        }
      }
    }
  }
}
    `

// this function takes the OAuth token provided by start.gg and uses it to initialize the ApolloClient with the correct auth headers
// the auth should be passed from the oauth component probably
function initApolloClient(auth: String) : ApolloClient {
  const client = new ApolloClient({
    // Required
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://flyby-router-demo.herokuapp.com/",
      headers: {
        "Authentication": "Bearer " + auth
    }}),
  });

  return client
}

function getBracketData(url: string) {

}

function Bracket() {
  return (
    <>
      <div id='bracket-name'> Bracket Name </div>
      <div id='wave-name'> Wave Name </div>
      <Set player1='p1' player2='p2'/>
      <Set player1='p3' player2='p4'/>
      <Set player1='p3' player2='p4'/>
    </>
  )
}

export default Bracket