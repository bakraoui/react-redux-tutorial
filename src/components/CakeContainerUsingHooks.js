import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buycake } from '../state management'


function CakeContainerUsingHooks() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()

    
    
  return (
    <div>
        <h2> Number of Cakes : { numberOfCakes}</h2>
        <button onClick={ () => dispatch(buycake()) }>buy cake</button>
    </div>
  )
}

export default CakeContainerUsingHooks