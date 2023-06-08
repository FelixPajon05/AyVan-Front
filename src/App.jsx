import Nav from './components/Nav';
import Search from './components/Search';

function App() {

  return (
    <div className="main">
      <Nav />
      <div className="container mt-2">
        <Search />
      </div>
    </div>
  )

}

export default App;