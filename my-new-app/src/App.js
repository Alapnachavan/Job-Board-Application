import './App.css';
import Navbar from './pages/Navbar/navbar';
import Header from './pages/Header/header';
import Search from './pages/Search/search';
import Card from './pages/card/card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Search/>
      <Card/>
    </div>
  
  );
}

export default App;
