import './App.css';

//// 10/27
// 0.5 hrs: research mobile device detection
//// 10/28
// 2.0 hrs: research React and read documentation
// 0.5 hrs: set up React project and config for Github Pages
// 0.5 hrs: begin dev mobile web app
//// 10/29
// 1.5 hrs: update navbar and search box to React + responsive CSS 3
// 2.0 hrs: redesign search results for mobile + update to React + responsive CSS 3

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
      {props.word.base}
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
      <SearchPanel />
      <SearchResultPanel />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
