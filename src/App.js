import './App.css';

//// 10/27
// 0.5 hrs: research mobile device detection
//// 10/28
// 2.0 hrs: research React and read documentation
// 0.5 hrs: set up React project and config for Github Pages
// 0.5 hrs: begin update to CSS 3; begin dev mobile web app in React
//// 10/29
// 1.5 hrs: incorporate responsive design and fluid typography for mobile web app

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

function App () {
  return (
    <div className='App'>
      <NavBar />
      <SearchPanel />
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
