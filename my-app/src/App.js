import logo from './logo.svg';
import './App.css';

function App() {
  return (



    <div className="App">

      <div className="Nav-bar">

        <div className="Nav-button">Search</div>
        <div className="Nav-button">Create</div>
        <div className="Nav-button">Update</div>
        <div className="Nav-button">Delete</div>

      </div>

      <header className="App-header">

        <div className="Page-container">

          <div className="Param-grid Page-element">
            <div className="White-box">

              <div className="Param-child Title">Search Paramaters:</div>
              <div className="Param-child">
                <a>User:</a>
                <input></input>
              </div>
              <div className="Param-child">
                <a>Table:</a>
                <input></input>
              </div>

              
              

            </div>
          </div>
          <div className="Results Page-element White-box">
            <div>Results</div>
          </div>

          </div>


      </header>
    </div>




  );
}

export default App;
