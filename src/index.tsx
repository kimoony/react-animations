import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import App from './App';
import { RecoilRoot } from 'recoil';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <HashRouter>
        <App />
      </HashRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

