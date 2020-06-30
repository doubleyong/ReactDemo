/**
 * Created by doubleyong on 2020/6/30.
 */
import React from 'react'
import {inject,observer} from 'mobx-react'
@inject('user')
@inject('product')
@observer
class CountNum extends React.Component
{
    addNum(){
        this.props.user.changeNum();
    }
    render()
    {
        return (
            <div>
                <h2>计数器</h2>
                {this.props.product.productName}
                {this.props.user.num}
                <button onClick={this.addNum.bind(this)}>+</button>
            </div>
        )
    }
}

export {CountNum as default}