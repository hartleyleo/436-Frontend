import './App.css';
import Tabs from "./components/Tabs.js";

function App() {
  return (
    <div className="App">

      <Tabs>

        

          <div label="Search">
            Search

            {/* <div className="Page-container">

              <div className="Param-grid Page-element">
                <div className="White-box">

                  <div className="Param-child Title">Search Paramaters:</div>
                  <div className="Param-child Child-title">
                    <a>User:</a>
                    <input></input>
                  </div>
                  <div className="Param-child Child-title">
                    <a>Table:</a>
                    <input></input>
                  </div>

                </div>
              </div>

              <div className="Results Page-element White-box">
                <div>Results</div>
              </div>

            </div> */}

          </div>


          <div label="Croc">
            After 'while, <em>Crocodile</em>!
          </div>

          <div label="Sarcosuchus">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>

       

      </Tabs>


      {/* <div className="Nav-bar">

        <div className="Nav-button">Search</div>
        <div className="Nav-button">Create</div>
        <div className="Nav-button">Update</div>
        <div className="Nav-button">Delete</div>

      </div> */}

      




    </div>




  );
}

export default App;
