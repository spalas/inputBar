
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BookData  from './bookData.json'

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book name" data={BookData} />
      <SearchBar placeholder="Enter a book name" data={BookData} />
      
    </div>
  );
}

export default App;

