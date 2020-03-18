import React from 'react'
import Card from "./Card";
import Message from "./Message";
import Add from "./Add"
import CourseList from "./CourseList";
import NavigationBar from "./NavigationBar";
import Search from "./Search";
import {Container} from "@material-ui/core";



export default class WhiteBoard extends React.Component {
    render() {
        return (
            <div>
                <Container/>

                <NavigationBar/>
                <div className="card-deck">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="card-deck">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>
        )
    }
}

