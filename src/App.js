import React from 'react'
import './App.css'
import CommentBox from './Comment/CommentBox'
function App() {
    let commentlist=[
        {"author":"张三","date":"2009-9-9","content":"今天心情好好"},
        {"author":"易彬","date":"2020-8-17","content":"找到了1万钱的工作"},
        {"author":"小蒋","date":"2030-9-9","content":"走向人生巅峰"}];
  return (

    <div className="App">
    <CommentBox data={commentlist}/>
    </div>
  );
}

export default App;
