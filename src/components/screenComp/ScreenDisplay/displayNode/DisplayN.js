import './DisplayN.css'

const DisplayN = (props) => {
  return (
    <div className="scrCompNode">
      <div className="container-1">
        <img src={props.image} className="data-image"></img>

        <div className="nodename">
          <p>{props.b_name}</p>
          <p>${props.pr}</p>
        </div>
      </div>
      <div className="container-2">
        <p>State : {props.locationState}</p>
        <p>City : {props.locationCity}</p>
        <p>{props.about}</p>
      </div>
    </div>
  )
}

export default DisplayN
