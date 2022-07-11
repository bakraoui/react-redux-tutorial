
import './App.css';
import CakeContainer from './components/CakeContainer';
import CakeContainerUsingHooks from './components/CakeContainerUsingHooks';
import IceCreamContainer from './components/IceCreamContainer';
import JusContainer from './components/JusContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      {/* <CakeContainer />
      <NewCakeContainer />
      <CakeContainerUsingHooks />
      <IceCreamContainer />

      <JusContainer /> */}


      <UserComponent />
    </div>
  );
}

export default App;
