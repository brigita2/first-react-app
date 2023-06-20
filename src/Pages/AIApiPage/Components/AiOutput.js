import { Fragment } from "react"
const AiOutput = ({ data }) => {
  if (!data) {
    return '';
  }

  return (
    <Fragment>
      <h3>Information about {data.name}</h3>
     <ul>
       <li>Age: {data.age}</li>
       <li>Gender: {data.gender}</li>
       <li>Nationality: {data.nationality}</li>
     </ul>
    </Fragment>
  )
}

export default AiOutput;