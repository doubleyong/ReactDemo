import React from 'react'
// import Axios from '../Axios'
import 'whatwg-fetch'
import api from '../Api'
import {Link,Route} from 'react-router-dom'
import ShowDetail from '../ShowDetail'
class ProductList extends React.Component
{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentWillMount(){
        //发起请求
        fetch(`${api.baseUrl}/healthproject/admin/patientActivity/selectPatientActivityWhere`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            return response.json()
        }).then((json)=>{
            console.log("fetch")
            console.log(json)
                    this.setState({
                        list:json.data.data
                    })
        }).catch(function(err){
            console.log(err)
        })
        // Axios.post("/healthproject/admin/patientActivity/selectPatientActivityWhere")
        //     .then((res)=>{
        //         console.log(res)
        //         this.setState({
        //             list:res.data.data.data
        //         })
        //     }).catch(function(err){
        //         console.log(err)
        // })
    }
    render()
    {
        let list = this.state.list.map((item,index)=>{
            // return <div key={index}><Link to={"/Product/ShowDetail/"+item.patientactivityTitle}>id:{item.patientactivityTitle}</Link>{item.cancelreason}</div>
            return <div key={index}><Link to={{pathname:"/Product/ShowDetail",query:{id:item.patientactivityTitle}}}>id:{item.patientactivityTitle}</Link>{item.cancelreason}</div>
        })
        return (
            <div>
                {list}
                <div>
                    <Route path="/Product/ShowDetail" component={ShowDetail}/>
                </div>
            </div>
        )
    }
}

export {ProductList as default}