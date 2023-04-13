import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.css'



const reactContentRoot = document.getElementById("root");
/* Zamiast  reactContentRoot ponizej mozemy wstawic document.getElementById('root') i usunac linie powyzej*/
ReactDOM.render(<App />, reactContentRoot);





