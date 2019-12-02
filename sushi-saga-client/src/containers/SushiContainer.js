import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        
            {props.sushis.map(sushi=> {
            return <Sushi key={sushi.id} sushi={sushi} />     
            })
          //   "id": 1,
          //   "name": "Tako Supreme",
          //   "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
          //   "price": 20,
          //   "created_at": "2018-07-27T18:53:16.241Z"
          // },
            
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer