import React from 'react'
import Comment from './Comment'
class CommentList extends React.Component
{
    //什么叫高阶函数

    render()
    {
        //map返回的是一个数组
        let CommentArr = this.props.data.map((item,index)=>{
            let {author,content,date} = item;
            return <Comment key={index} author={author} date={date} >{content}</Comment>
        })
        return (
            <div className="list">
                {CommentArr}
            </div>
        )
    }
}

export {CommentList as default}