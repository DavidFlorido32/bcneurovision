import logo from './logo.png';
import deg2 from './assets/degradado2.png'
import deg1 from './assets/degradado1.png'
import lights from './assets/rayos.png'
import './app.scss';

function App() {
  return (
    <div className="App">
      <div className='imgs'>
        {/* <img src={lights} className="App-lights" alt="" /> 
        <img src={deg2} className="App-deg2" alt="" /> */}
        <header className="App-header">
          <div className='up'>
            <a className='link-insta' href="https://instagram.com/bcneurovision">
              INSTAGRAM
            </a>
            <a className='link-tickets' href="https://ntry.at/bcneurovision">
              TICKETS
            </a>
            <a className="link-twit" href="https://twitter.com/BCNeurovision">
              TWITTER
            </a>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* <img src={deg1} className="App-deg1" alt="" /> */}
      </div>      
    </div>
  );
}

export default App;
