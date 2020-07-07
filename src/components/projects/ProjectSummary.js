import React from 'react'

const ProjectSummary=({project}) =>{
    return (
        <div className="project-list section">
        <div className="card z-depth-0 project-summary">
    <span className="card-title">{project.title}</span>
            <p>Posted by Siva</p>
            <p className="grey-text">3rdSeptember,2am</p>
        </div>
    </div>
    )
}
export default  ProjectSummary