import React from 'react';
import Home from 'src/components/Home';
import is from 'is_js';

const App = () => {
  if (is.ie()) {
    alert('이 사이트는 인터넷 익스플로러에서 작동하지 않습니다. 크롬을 사용해주세요!');
    return <div />;
  }
  
  return <Home />
}

export default App;
