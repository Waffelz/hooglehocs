import App from './components/App';
var React = require('react');
import ReactDOM from 'react-dom';
import { HashRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

ReactDOM.render(

  <HashRouter>
  <App/>
</HashRouter>,

  document.getElementById('root')
);
