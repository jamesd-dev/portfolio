import Title from './components/sections/Title';
import ScreenApologyMessage from './components/ScreenApologyMessage';
import './App.scss';
import { useEffect, useState } from 'react';
import { MIN_SCREEN_WIDTH } from './Constants';
import Profile from './components/sections/Profile';

function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  let delayedScreenCheck;

  function cancelDelayedScreenCheck() {
    clearTimeout(delayedScreenCheck);
  }

  function checkIsScreenSmall() {
    let w = window.innerWidth;
    cancelDelayedScreenCheck();
    delayedScreenCheck = setTimeout(() => setIsSmallScreen(w <= MIN_SCREEN_WIDTH), 0.5);
  }

  useEffect(() => {
    checkIsScreenSmall();
    return () => {
      cancelDelayedScreenCheck();
    }
  });

  window.addEventListener('resize', checkIsScreenSmall);

  return (
    (isSmallScreen) ?
    <ScreenApologyMessage/> :
    <div id="strip-page-container">
      <Title/>
      <Profile/>
    </div>
  );
}

export default App;
