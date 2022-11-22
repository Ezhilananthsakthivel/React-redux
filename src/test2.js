import { connect } from 'react-redux'
import store from './store'

function Test2(props) {
    console.log(props)
    return (
        <>
            <h3>count-{props.state}</h3>
        </>
    );
}

const mapsStateToProps = (state) => ({ state })

export default connect(mapsStateToProps)(Test2);