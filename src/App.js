import React from 'react'
import './App.css'
import CommentBox from './Comment/CommentBox'
import ProductList from './Product/ProductList'
import Nav from './Nav/Nav'
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Err404 from './Err404'
import ShowDetail from './ShowDetail'
function App() {
    // let commentlist=[
    //     {"author":"张三","date":"2009-9-9","content":"今天心情好好"},
    //     {"author":"易彬","date":"2020-8-17","content":"找到了1万钱的工作"},
    //     {"author":"小蒋","date":"2030-9-9","content":"走向人生巅峰"}];
  return (
      <Router>
          <div className="App">
             <Nav/>
          <Switch>
            <Route path="/Product" component={ProductList}> </Route>

            <Route path="/CommentList" component={CommentBox}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/" render={()=><Redirect to="/About"/>}/>
          </Switch>
          </div>
      </Router>
  );
}

export default App;
