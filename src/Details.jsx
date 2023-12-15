import { useParams } from "react-router-dom"

const Details = () => {
  const x = useParams();
  const {id} = useParams()
  return (
    <div>
      <p>Details</p>
      <p>Here it is{x.id}</p>
      <h2>id {id}</h2>
    </div>
  )
}

export default Details