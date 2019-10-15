import React, {Fragment, useState} from 'react';
import './App.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import MessageList from './components/MessageList';
import MessageOpen from './components/MessageOpen';

const GET_MESSAGES = gql`
query{
  messages(last:4){
    id,
    username,
    slug,
    objet,
    content
  }
}
`
const Root = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  const [Lu, setLu] = useState([])
  if (loading) return <div className="msg-status">Loading...</div>;
  if (error) return <div className="msg-status">Error :(</div>;
  return(

  <Router>
      <Switch>
          <Route path='/message/:id' component={MessageOpen} />
          <Route render={()=> <MessageList Messages={data.messages} Lu={Lu} setLu={setLu} /> } />
      </Switch>
  </Router>
)
};

const App = () => {
  return( 
  <Fragment >
    <svg className="logo" width="31" height="50" viewBox="0 0 31 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2251 50.0002C28.3127 50.0002 30.0051 48.3078 30.0051 46.2202C30.0051 44.1326 28.3127 42.4402 26.2251 42.4402C24.1375 42.4402 22.4451 44.1326 22.4451 46.2202C22.4451 48.3078 24.1375 50.0002 26.2251 50.0002Z" fill="white"/>
      <path d="M3.77997 7.55995C5.86759 7.55995 7.55995 5.8676 7.55995 3.77998C7.55995 1.69235 5.86759 0 3.77997 0C1.69235 0 0 1.69235 0 3.77998C0 5.8676 1.69235 7.55995 3.77997 7.55995Z" fill="white"/>
      <path d="M10.6618 0H20.9589L10.6618 50V0Z" fill="#132660"/>
      <path d="M19.4209 50H10.6618V0H25.8859V7.58602H19.4209V21.2461H25.8859V28.7539H19.4209V50Z" fill="white"/>
    </svg>

    <Root />
  </Fragment>
  )
}

export default App;
