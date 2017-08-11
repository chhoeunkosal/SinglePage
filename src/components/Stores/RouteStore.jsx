import React from 'react';
import Apple from './Apple';
import Huawei from './Huawei';
import Samsung from './Samsung';
import {Route,Switch} from 'react-router-dom'
export default class RouteContent extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                        <Route path="/Apple" component={Apple}/>
                        <Route path="/Huawei" component={Huawei}/>
                        <Route path="/Samsung" component={Samsung}/>
                </Switch>
            </div>
        )
    }
}