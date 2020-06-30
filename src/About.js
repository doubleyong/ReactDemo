import React from 'react'
import CountNum from './mbox/CountNum'
class About extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>计数器</h2>
                 <CountNum/>
                <CountNum/>
                <CountNum/>
            </div>
        )
    }
}

export {About as default}