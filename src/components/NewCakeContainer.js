import React, {useState} from 'react'
import { buycake } from '../state management/index';
import { connect } from "react-redux";

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
  return (
    <div>
        <h2> Number of Cakes : { props.numberOfCakes}</h2>
        <input type='text' value={number} onChange = {(e)=>setnumber(e.target.value)} />
        <button onClick={ () => props.buycake(number) }>shopp</button>
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
    buycake : (number) => dispatch( buycake(number) ) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
// export default CakeContainer
