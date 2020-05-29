import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './js/redux/index';
import App from './components/App';


render(
  // <Provider store={store}>
  //   <Router>
      <App />,
      //   </Router>
      // </Provider>,
      document.getElementById('root')
);
