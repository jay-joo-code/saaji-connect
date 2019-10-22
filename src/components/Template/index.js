import React from 'react';
import { connect } from 'react-redux';
// import { increment } from 'src/redux/actions/counter';
import './Template.scss'

class Template extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                Template
            </div>
            )
    }
}

export default connect(null, {  })(Template);
