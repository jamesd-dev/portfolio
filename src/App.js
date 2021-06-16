import Title from './components/sections/Title';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const MIN_SCREEN_WIDTH = 900;
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
    <></> :
    <div id="strip-page-container">
      <Title/>
    </div>
  );
}

export default App;
