import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Context/parcelContext';
import reducer, {initialState} from "./Context/reducer"

ReactDOM.render(
  
  <App />,
  // <StateProvider initialState={initialState} reducer={reducer}>
  //   <App />
  // </StateProvider>,
  
  document.getElementById('root')
);


