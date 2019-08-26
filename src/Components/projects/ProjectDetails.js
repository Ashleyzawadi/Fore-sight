import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laborum sed enim repellat, error pariatur ut ipsa suscipit velit aliquam, quo consequuntur nostrum voluptatem minus? Accusamus commodi autem dolorum eaque.</p>
                    <div className="card-actions grey lighten-4 grey-text">
                        <div>Posted by Leigh</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
