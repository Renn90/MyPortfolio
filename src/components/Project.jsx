import React, { useEffect, useState } from 'react'
import { client } from '../client'

const Project = () => {
    const [project, setProject] = useState([])

    const projectQuery = `*[_type == "projects"]{
        _id,
        name,
        details,
        image,
        stack,
        gitlink,
        livelink
    }`

    
    useEffect(()=>{
        const fetchProject = async ()=> {
            try{
              const response = await client.fetch(projectQuery)
              console.log(response)
              if(response.ok){
                  setProject(response)
              }
            }catch(error){
              console.log(error)
            }
          }
          fetchProject()
    },[])
    console.log(project)
  return (
    <div>
      <img />
      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default Project
