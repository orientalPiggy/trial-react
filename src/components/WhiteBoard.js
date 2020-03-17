import React from 'react'
import CourseCard from "./CourseCard";
import Message from "./Message";
import Add from "./Add"
import CourseList from "./CourseList";
import NavigationBar from "./NavigationBar";
import Search from "./Search";


export default class WhiteBoard extends React.Component {
    render() {
        return (
            <div>



                <NavigationBar/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>






            </div>
        )
    }
}

