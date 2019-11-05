import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div 
        className="plate" 
        onClick={() => props.eatSushi(props)}
      >
        {props.eatenSushi.includes(props.id) ?
          null :
            <img src={props.image} alt={props.name} width="100%"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi