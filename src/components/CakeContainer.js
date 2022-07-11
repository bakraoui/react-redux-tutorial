import React from 'react'
import { buycake } from '../state management/index';
import { connect } from "react-redux";

function CakeContainer(props) {
    
  return (
    <div>
        <h2> Number of Cakes : { props.numberOfCakes}</h2>
        <button onClick={ props.buycake }>shopp</button>
    </div>
  )
}

// step one

const mapStateToProps = state => {
  return {
    numberOfCakes : state.cake.numberOfCakes
  }
}

// step two

const mapDispatchToProps = dispatch => {
  return {
    buycake : () => dispatch( buycake() ) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
// export default CakeContainer
