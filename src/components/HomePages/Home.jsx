import React from 'react'
import { Link, } from 'react-router-dom'
export default class Content extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 ">
                        <nav className="navbar text-color navbar-fixed-top">
                            <ul className="nav navbar-nav navbar-right space">
                                <li role="presentation"><Link to="/"><h4>Home</h4></Link></li>
                                <li role="presentation"><Link to="/Store"><h4>Store</h4></Link></li>
                                <li role="presentation"><Link to="/Contact"><h4> Contact</h4></Link></li>
                                <li role="presentation"><Link to="/About"><h4> About</h4></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/*<div className="row">
                    <div className="col-sm-12">
                        <video width="100%" controls autoplay loop>
                            <source src="iPhone7.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>*/}

                {/*<div className="row">
                    <div className="col-sm-12">
                        <ul className="nav nav-pills">
                            <li role="presentation"><Link to="/Apple">APPLE</Link></li>
                            <li role="presentation"><Link to="/Huawei">HUAWEI</Link></li>
                            <li role="presentation"><Link to="/Samsung">SAMSUNG</Link></li>
                        </ul>
                    </div>
                </div>*/}
            </div>
        )
    }
}