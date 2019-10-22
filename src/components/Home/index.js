import React from 'react';
import { connect } from 'react-redux';
// import { increment } from 'src/redux/actions/counter';
import './Home.scss'
import HomeImage from './home-image.jpg';
import SaajiConnect from './SaajiConnect.bat';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='container'>
                <div className='container home-wrapper'>
                    <div className='container home'>
                        <div className='container text'>
                            <div className='container text-inner'>
                                <h2><span>싸지 커넥트</span></h2>
                                <h3>군대 사이버정보지식방 <span>구글</span>, <span>유투브</span> 접속 프로그램</h3>
                                <p>유투브, 구글, 지메일, 파이어베이스 싸지방에서 안되던 사이트</p>
                                <p>클릭 하나로 간편한 접속!</p>
                                <a href={SaajiConnect} download>다운로드</a>
                            </div>
                        </div>
                        <div className='container graphic'>
                            <img src={HomeImage} />
                        </div>
                    </div>
                </div>
                <div className='container functions'>
                    
                </div>
            </div>
            )
    }
}

export default connect(null, {  })(Home);
