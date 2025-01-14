import * as React from "react";
import {Link} from "react-scroll";

const logo = require("Assets/img/logo-gradient.svg");

export default class MainHero extends React.Component<any, undefined> {
    render() {
        return (
            <div className="row h-100">
                <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <img src={logo} className="hero__logo" />
                    <div className="hero__title text-center">
                        RedbackThomson
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center">
                    <div className="hero__navigation">
                        <Link to="projects" smooth={true} className="btn cta cta--block">
                            Projects
                        </Link>
                        <Link to="contact" smooth={true} className="btn cta cta--secondary cta--block">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
