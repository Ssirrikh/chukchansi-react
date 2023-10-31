import './App.css';

//// 10/27
// 0.5 hrs: research mobile device detection
//// 10/28
// 2.0 hrs: research React and read documentation
// 0.5 hrs: set up React project and config for Github Pages
// 0.5 hrs: begin dev mobile web app
//// 10/29
// 1.5 hrs: update navbar and search box to React + responsive CSS 3
// 2.0 hrs: redesign search results for mobile; continue update to React + responsive CSS 3
//// 10/30
// 3.0 hrs: refactor responsiveness to be device-independent, for both portrait+landscape

function NavBar () {
  return (
    <div id='NavBar' className='NavBar'>
      English-Chukchansi Dictionary
    </div>
  );
}

function SearchPanel () {
  return (
    <div className='SearchPanel'>
      <input type='text' id='SearchBar' className='SearchBar' placeholder='Search...' />
    </div>
  );
}

function SearchResultPanel () {
  let words = [];
  for (let i = 0; i < 30; i++) words.push({base: 'Word '+i, trans: 'Trans '+i});
  return (
    <div className='SearchResultPanel'>
      {words.map( word => <SearchResult word={word} /> )}
    </div>
  );
}
function SearchResult (props) {
  return (
    <div className='SearchResult'>
      <span className='SearchResultBase'>{props.word.base}</span>
      <br/>
      <span className='SearchResultTranslation'>{props.word.trans}</span>
      {(Math.random()<0.2) && <div className='AudioIcon' />}
      {(Math.random()<0.2) && <div className='ImageIcon' />}
    </div>
  );
}

function App () {
  return (
    <div className='App'>
      <NavBar />
      <div className='Content'>
        <SearchPanel />
        <SearchResultPanel />
      </div>
    </div>
  );
}

//<SearchPanel />
//<SearchResultPanel />

export default App;
