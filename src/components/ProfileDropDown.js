import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons'
import AvatarsButton from "./AvatarsButton";
import ProfileIcon from "./ProfileIcon";

const ProfileDropDown = () => (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">

            <ProfileIcon/>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">Action</button>
            <button className="dropdown-item" type="button">Another action</button>
            <button className="dropdown-item" type="button">Something else here</button>
        </div>
    </div>
);

export default ProfileDropDown
