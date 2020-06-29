import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './Comment.css'
class CommentBox extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            commentlist:this.props.data
        }
    }
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