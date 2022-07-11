import React from 'react'
import { buyjus } from '../state management'
import { connect } from "react-redux";


function JusContainer(props) {
  return (
    <div>
        <h2> Number of Jus : { props.numberOfJus}</h2>
        <button onClick={ props.buyjus }>buy jus</button>
    </div>
  )
}


// step one

const mapStateToProps = state => {
    return {
      numberOfJus : state.jus.numberOfJus
    }
  }
  
  // step two
  
  const mapDispatchToProps = dispatch => {
    return {
      buyjus : () => dispatch( buyjus() ) 
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(JusContainer)

// export default JusContainer