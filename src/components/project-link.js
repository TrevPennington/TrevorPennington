import React from "react"

const ProjectLink = ({ project }) => (
  <div>
      <h1>
      {project.frontmatter.title}
      </h1>
  </div>
)
export default ProjectLink