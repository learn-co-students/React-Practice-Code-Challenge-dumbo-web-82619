import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" 
            onClick={() => props.eat(props.id, props.price)}>
          { 
            props.beenEaten.includes(props.id) ?
              null
            :
              <img src={props.img_url} alt={props.name} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {props.name} - ${props.price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi