import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import RandomGeneratorPage from './components/RandomGeneratorPage/RandomGeneratorPage';
import VideoPage from './components/VideoPage/VideoPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <audio id="soundtrack" src="./Peao.m4a" type="audio/mp3">
        Áudio não suportado
      </audio>
      <Router>
        <Route exact path="/" render={() => <WelcomePage />} />
        <Route
          exact
          path="/random-generator"
          render={() => <RandomGeneratorPage />}
        />
        <Route exact path="/random-video" render={() => <VideoPage />} />
      </Router>
    </>
  );
}

export default App;
