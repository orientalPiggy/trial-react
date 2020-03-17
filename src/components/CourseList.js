import React from 'react'
import CourseRow from "./CourseRow";

const CourseList = () =>
    <div>
        <h2>Course List</h2>
        <table className="table">
            <tbody>
                <thead>
                    <tr>
                       <th>
                           Title
                       </th>
                    </tr>
                </thead>
                <CourseRow title="CS5200" seats={23}/>
                <CourseRow title="CS5300" seats={24}/>
                <CourseRow title="CS5400" seats={25}/>
                <CourseRow title="CS5500" seats={26}/>
                <CourseRow title="CS5600" seats={27}/>

            </tbody>
        </table>
    </div>


export default CourseList