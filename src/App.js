import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import './components/Rows'
import Rows from './components/Rows';
import requests from './requests';


function App() {
  return (
   <>
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Rows isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title="Trending" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentary" fetchUrl={requests.fetchDocumentaries} />

      </>
    
  );
}

export default App;
