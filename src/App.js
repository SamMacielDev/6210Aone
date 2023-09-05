import data from './data.json';
import Scp from './Scp';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 


function App()
{return (
    <Router>
      <Nav data={data} />
        <Routes>
          <Route path={"HOME"} element={<Default />} />
          {
            data.map(
              scp => (
                <Route key={scp.model}
                    path={`${scp.model}`}
                    element={<Scp scp={scp}/>}
                />
              )
            )
          }
        </Routes>
   </Router>
  );
}
 
function Default()
{
  return(
      <div>
          <h1>Welcome to my Assignment One for Web Services and Design Methodologies</h1>
          <p>*** SCP Foundation now in React !!!***</p>     
     </div>
  );
}

export default App;




