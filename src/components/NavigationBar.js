import React from 'react'
import LoginButton from "./LoginButton.js"
import SignupButton from "./SignupButton.js"
import ProfileIcon from "./ProfileIcon";
import ProfileDropDown from "./ProfileDropDown";
import Badge from "./MailBadge";
import MailBadge from "./MailBadge";
import ImageAvatars from "./ImageAvatars";


export default class CourseCard extends React.Component {
    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">InSight</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Section 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Section 2</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                               aria-label="Search"></input>
                    </form>
                </div>





                <ProfileDropDown/>

                <ImageAvatars/>





                <LoginButton/>

                <SignupButton/>

                <ProfileIcon/>

                <MailBadge/>








            </nav>






        );
    }
}




