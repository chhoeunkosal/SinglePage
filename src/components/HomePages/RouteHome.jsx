import React from 'react';
import Home from './Home';
import Store from '../Stores/Store'
import About from '../Abouts/About';
import Contact from '../Contacts/Contact';
// import Apple from './Apple';
// import Huawei from './Huawei';
// import Samsung from './Samsung';
import RouteStore from '../Stores/RouteStore';
import { Route, Switch } from 'react-router-dom';
export default class RouteHome extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                        <Route path="/Store" component={Store}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Contact" component={Contact}/>
                    {/*<Route path="/Apple" component={Apple} />
                    <Route path="/Huawei" component={Huawei} />
                    <Route path="/Samsung" component={Samsung} />*/}
                </Switch>
                <RouteStore/>

            </div>
        )
    }
}