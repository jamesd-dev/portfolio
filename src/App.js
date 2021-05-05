import Title from './components/sections/Title';
import './App.scss';
import KeySkills from './components/sections/KeySkills';
import Debugging from './components/sections/Debugging';

function App() {
  return (
    <div id="strip-page-container">
      <Title/>
      <KeySkills/>
      <Debugging/>
    </div>
  );
}

export default App;
