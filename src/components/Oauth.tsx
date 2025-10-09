import './Oauth.css'
import { useEffect, useState } from 'react';
import { redirect, useSearchParams } from 'react-router-dom';

// this page is the page that will be the callback page that start.gg sends to, it sends with a query of code. From that code we run a post request to get the oauth access and refresh tokens. After getting these sucessfully, I want to pass them to the Bracket component. I will also use this component to get the specific start.gg link and ask what pool, etc. 

var stage = 0;

function Oauth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [oauthAccessToken, setOauthAccessToken] = useState('');
  const [oauthRefreshToken, setOauthRefreshToken] = useState('');
  const authorization_code = searchParams.get("code");


  useEffect(() => {
    async function fetchOauth() {
      setOauthAccessToken('');
      const result = await fetch(
        "https://api.start.gg/oauth/access_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            grant_type: "authorization_code",
            client_secret: "TODO CHANGE THIS",
            code: authorization_code,
            scope: "tournament.reporter",
            client_id: "TODO CHANGE THIS",
            redirect_uri: "quickstart.gg/oauth"
           })
        }
      )

      if (result.body !== null) {
        await result.json().then(
          data => { 
            setOauthAccessToken(data.access_token);
            setOauthRefreshToken(data.refresh_token);
          }
        )
      }
      
    }

    fetchOauth();
  }, []);

  return (
    <>
      <div id='bracket-name'> Loading start.gg information </div>
      {stage > 0 ? <div>Enter bracket or event link</div>:<></>}
    </>
  )
}

export default Oauth