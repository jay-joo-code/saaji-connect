import React from 'react';
import is from 'is_js';
import Theme from './Theme';
import 'src/styles/normalise.css';

const App = () => {
  // warn internet explorer
  if (is.ie()) {
    const text = '이 사이트는 인터넷 익스플로러에서 작동하지 않습니다. 크롬을 사용해주세요!';
    alert(text);
    return <div>{text}</div>;
  }

  return <Theme />;
};

export default App;
