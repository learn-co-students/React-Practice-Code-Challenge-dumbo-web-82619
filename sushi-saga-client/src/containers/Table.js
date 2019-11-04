import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  // console.log(props.wallet)
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.wallet >= 0 ? props.wallet : 0 } remaining!
      </h1>
      <form onSubmit={props.addToWallet}>
        <input name='amount'></input>
        <button>Add to wallet</button>
      </form>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.beenEaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table