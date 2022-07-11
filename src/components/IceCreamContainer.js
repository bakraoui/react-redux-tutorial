import React from 'react'
import { buyicecream } from '../state management/index';
import { connect } from "react-redux";


function IceCreamContainer(props) {
  return (
    <div>
        <h2> Number of IceCreams : { props.numberOfIceCreams}</h2>
        <button onClick={ props.buyicecream }>Buy icecream</button>
    </div>
  )
}
// step one

const mapStateToProps = state => {
    return {
      numberOfIceCreams: state.icecream.numberOfIcecream
    }
  }
  
  // step two
  
  const mapDispatchToProps = dispatch => {
    return {
      buyicecream : () => dispatch( buyicecream() ) 
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
// export default IceCreamContainer