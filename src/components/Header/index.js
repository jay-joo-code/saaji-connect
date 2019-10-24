import React from 'react';
import { connect } from 'react-redux';
// import { increment } from 'src/redux/actions/counter';
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='container header'>
            </div>
            )
    }
}

export default connect(null, {  })(Header);
