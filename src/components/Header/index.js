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
                <h1><span>싸지 커넥트</span></h1>
            </div>
            )
    }
}

export default connect(null, {  })(Header);
