import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonComponent from './components/ButtonComponent';
import queryString from "query-string"

const App = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const queryParams = queryString.parse(window.location.search)

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
