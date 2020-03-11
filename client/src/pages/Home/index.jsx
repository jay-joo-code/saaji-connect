import React from 'react';
import './Home.scss';
import { useHistory } from 'react-router-dom';
import SaajiConnect from 'src/core/dns/SaajiConnect.bat';
import { ReactComponent as Landing } from 'src/assets/home/landing.svg';
import { ReactComponent as Tech } from 'src/assets/home/tech.svg';
import Body from 'src/components/fonts/Body';

const Home = () => {
  const history = useHistory();
  const onDownload = () => {
    history.push('/after');
  };

  return (
    <div>
      <div className="container">
        <div className="container home-wrapper">
          <div className="container home">
            <div className="container text">
              <div className="container text-inner">
                <h2><span>사지 커넥트</span></h2>
                <h3>
                  군대 사이버정보지식방
                  {' '}
                  <span>구글</span>
                  ,
                  <span>유투브</span>
                  {' '}
                  접속 프로그램
                </h3>
                <Body>유투브, 구글, 지메일, 파이어베이스 싸지방에서 안되던 사이트</Body>
                <Body>클릭 하나로 간편한 접속!</Body>
                <div className="button-wrapper">
                  <a href={SaajiConnect} download onClick={onDownload}>다운로드</a>
                </div>
              </div>
            </div>
            <div className="container graphic">
              <Landing />
            </div>
          </div>
        </div>
        <div className="container functions">
          <div className="container functions-inner">
            <div className="container card-wrapper">
              <div className="container card">
                <i className="fas fa-gavel fa-2x" />
                <h3>합법적</h3>
                <div className="hr-navy" />
                <p>합법적인 방법으로 국방부 병사 규정에 의거하여 유투브, 구글 및 당양한 사이트 접속.</p>
              </div>
            </div>
            <div className="container card-wrapper">
              <div className="container card">
                <i className="fas fa-bacon fa-2x" />
                <h3>편리한</h3>
                <div className="hr-navy" />
                <p>자동 삭제, 자동 실행 등의 기능들로 편리한 사용을 고려하여 개발하여 최적화된 유저 경험. </p>
              </div>
            </div>
            <div className="container card-wrapper">
              <div className="container card">
                <i className="fas fa-angle-double-right fa-2x" />
                <h3>효율적</h3>
                <div className="hr-navy" />
                <p>부가적인 기능들을 제외하고 오로지 필요한 사이트 접속에 관련된 코드만 실행하여 고효율 유지.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container checklist">
          <div className="container checklist-container">
            <div className="container graphic">
              <Tech />
            </div>
            <div className="checklist-wrapper">
              <div className="checklist-inner">
                <h3>핵심 기능</h3>
                <p>
                  <i className="fas fa-check-circle" />
                  <span>구글, 유투브와 같은 기본적인 사이트 접속</span>
                </p>
                <p>
                  <i className="fas fa-check-circle" />
                  <span>구글 클라우드, 구글 드라이브 접속</span>
                </p>
                <p>
                  <i className="fas fa-check-circle" />
                  <span>파이어베이스, 깃헙와 같은 개발자 사이트 접속</span>
                </p>
                <p>
                  <i className="fas fa-check-circle" />
                  <span>UI 없는 간결하고 효율적인 프로그램</span>
                </p>
                <p>
                  <i className="fas fa-check-circle" />
                  <span>다운로드 파일 및 파일 기록 자동 삭제</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
