import React from "react";
import { connect } from 'react-redux'
import { inc, dec, res } from './counter'
import store from './store'

function Test({ state, incs, decs, reset }) {
    //console.log(props)
    return (
        <>
            {/* <h2>count-{props.state}</h2>
            <button onClick={() => props.dispatch({ type: inc, val: 1 })}>+</button>
            <button onClick={() => props.dispatch({ type: dec, val: 1 })}>-</button>
            <button onClick={() => props.dispatch({ type: res })}>0</button> */}
            <h2>count-{state}</h2>
            <button onClick={incs}>+</button>
            <button onClick={decs}>-</button>
            <button onClick={reset}>0</button>

        </>
    );
}

const mapsStateToProps = (state) => ({ state })

const mapsDispatchToProps = (dispatch) => ({ incs: () => dispatch({ type: inc }), decs: () => dispatch({ type: dec }), reset: () => dispatch({ type: res }) })

export default connect(mapsStateToProps, mapsDispatchToProps)(Test);