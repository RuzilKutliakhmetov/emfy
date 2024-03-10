import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonComponent from './components/ButtonComponent';
import queryString from "query-string"

const App = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const queryParams = queryString.parse(window.location.search)

  useEffect(() => {

    const getAccessToken = async () => {
      try {
        const response = await axios.post('https://www.amocrm.ru/oauth2/access_token', {
          client_id: 'b4415501-f3d5-45b7-992c-4ff08f29b5f8',
          client_secret: 'ZG6pUwJCsKvwXq0QoapCjKpD8Bmi8BHa9HVGg1wta4T5XgNAhALY6ukwSIS2VD4H',
          grant_type: 'authorization_code',
          code: authorizationCode,
          redirect_uri: 'https://ruzilkutliakhmetov.github.io/emfy',
        });

        // const response = await axios.post('https://www.amocrm.ru/oauth2/access_token', {
        //   client_id: 'b4415501-f3d5-45b7-992c-4ff08f29b5f8',
        //   client_secret: 'ZG6pUwJCsKvwXq0QoapCjKpD8Bmi8BHa9HVGg1wta4T5XgNAhALY6ukwSIS2VD4H',
        //   grant_type: 'authorization_code',
        //   code: authorizationCode,
        //   redirect_uri: 'https://ruzilkutliakhmetov.github.io/emfy',
        // });
        console.log(response.data);
        const accessToken = response.data.access_token;
        setAccessToken(accessToken);
      } catch (error) {
        console.error('Error getting access token:', error);
      }
    };

    getAccessToken();
  }, []);

  return (
    <div>
      <h1>Authorization Code: {authorizationCode}</h1>
      <h2>Access Token: {accessToken}</h2>
      <p>Value of term: {queryParams.term}</p>
      <p>
        All query params <pre>{JSON.stringify(queryParams, null, 2)}</pre>
      </p>
      <ButtonComponent />
    </div>
  );
};

export default App;
