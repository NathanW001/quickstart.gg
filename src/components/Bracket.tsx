import './Bracket.css'
import Set from './subcomponents/Set'
import { gql, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import api_response_sample from '../sample_api_response.json'
import { useState } from 'react';

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
  return api_response_sample
}

function formatBracketData(api_data: {}): Array<{[key: number]: Array<Object>}> {
  var ret: Array<{[key: number]: Array<Object>}> = [{},{}]; //kinda a weird def but it's to make typescipt happy
  (api_data.data.phaseGroup.sets.nodes).map((set_data) => {
    console.log(set_data)
    console.log(ret)
    if (set_data.round < 0 && ret[1][set_data.round] == null) { // in the losers bracket and no sets of that round have been added yet
      ret[1][set_data.round] = [set_data]
    }
    else if (set_data.round < 0) { // in the losers bracket and implicitly a set already is there
      ret[1][set_data.round].push(set_data)
    }
    else if (set_data.round >= 0 && ret[0][set_data.round] == null) { // in the winners bracket and no sets of that round have been added yet
      ret[0][set_data.round] = [set_data]
    }
    else {
      ret[0][set_data.round].push(set_data)
    }
  })
  return ret
}

function Bracket() {
  const [bracketUpperLowerLocation, setBracketUpperLowerLocation] = useState(0);
  const [bracketRoundLocation, setBracketRoundLocation] = useState(1);

  console.log(api_response_sample)
  console.log(formatBracketData(api_response_sample));
  return (
    <>
      <div id='bracket-name'> Bracket Name </div>
      <div id='wave-name'> Pool {api_response_sample.data.phaseGroup.displayIdentifier} </div>
      
      <div className='bracket-matches'>
        {(api_response_sample.data.phaseGroup.sets.nodes).map((set) => {
          // console.log(set.slots[0].entrant.name, "vs", set.slots[1].entrant.name);
          return <Set player1={set.slots[0].entrant.name} score1={set.slots[0].standing.stats.score.value} player2={set.slots[1].entrant.name} score2={set.slots[1].standing.stats.score.value} status={0}/>
          // <div>ball</div>
        })}

      </div>
    </>
  )
}

export default Bracket