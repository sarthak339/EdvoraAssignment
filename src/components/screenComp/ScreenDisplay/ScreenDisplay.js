import './ScreenDisplay.css'
import DisplayN from './displayNode/DisplayN'

const ScreenDisplay = (props) => {
  const gettingData = props.myallData
  console.log(gettingData)
  const gettingUniqueData = props.uniqueData
  console.log(gettingUniqueData)

  return (
    <div className="dis">
      {gettingUniqueData.map((dt) => {
        return (
          <>
            <div className="tit">
              <p>{dt}</p>
            </div>
            <div className="scrComp">
              {gettingData.disData
                .filter((fil) => fil.product_name === dt)
                .map((m) => {
                  return (
                    <DisplayN
                      image={m.image}
                      b_name={m.brand_name}
                      pr={m.price}
                      locationState={m.address.state}
                      locationCity={m.address.city}
                      about={m.discription}
                    />
                  )
                })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ScreenDisplay
