import React from "react"
import "./projects.css"

class Projects extends React.Component {
    render() {
        return(
            <div>
                <div className='projCard'>
                    <h1 className='projTitle' style={{ fontSize: `12` }}>
                        {this.props.title}
                    </h1>
                </div>
            </div>
        )
    }
}
export default Projects