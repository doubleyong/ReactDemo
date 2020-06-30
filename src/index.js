import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index'
import {Provider} from 'mobx-react'
//Provider 组件将我们的store注入App组件
// Provide相当于一个数据容器
//router做为一个容器，将根节点包起来，路由才能跳转
/*
* {user , product}
* */
ReactDOM.render(
   <Provider {...store}>
    <App />
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
