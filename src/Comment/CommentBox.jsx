import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './Comment.css'
class CommentBox extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            commentlist:[
                 {"author":"张三","date":"2009-9-9","content":"今天心情好好"},
                {"author":"易彬","date":"2020-8-17","content":"找到了1万钱的工作"},
                {"author":"小蒋","date":"2030-9-9","content":"走向人生巅峰"}]
        }
    }
    // let commentlist=[
    //     {"author":"张三","date":"2009-9-9","content":"今天心情好好"},
    //     {"author":"易彬","date":"2020-8-17","content":"找到了1万钱的工作"},
    //     {"author":"小蒋","date":"2030-9-9","content":"走向人生巅峰"}];
    addComment(obj){
        console.log("这是传过来的对象",obj)
        this.setState({
            commentlist:[...this.state.commentlist,obj]
        })
        //props是只读了
        // this.props.data.push(obj)
        // console.log( this.state.commentlist)

    }
    render()
    {

        return (
            <div className="box">
                <CommentList data={this.state.commentlist}/>
                <CommentForm onAddComment={this.addComment.bind(this)}/>
            </div>
        )
    }
}

export {CommentBox as default}