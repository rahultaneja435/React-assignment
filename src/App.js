import './App.css';
import { DataGrid} from '@material-ui/data-grid';
//UI mockup of Excel
import Next from './Next'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const rows = [
    { id: 1, col1: 'Buyer', col2: 'COMPLETE',col3:'Wayne Enterprises',col6:'shankar',col7:'100',col8:'Bale',col9:'LC57MG',col10:'51000',col12:'₹/Candy',col13:'04-07-2021  12:52:12'},
    { id: 2, col1: 'Buyer', col2: 'COMPLETE',col3:'Wayne Enterprises',col6:'shankar',col7:'100',col8:'Bale',col9:'KJEJBW',col10:'51000',col11:'51000',col12:'₹/Candy' },
    { id: 3, col1: 'Seller', col2: 'COMPLETE',col3:'DC Corp',col6:'shankar',col7:'100',col8:'Bale',col9:'QDCLQZ',col10:'44500',col11:'44500',col12:'₹/Candy'  },
    { id: 4, col1: 'Seller', col2: 'COMPLETE',col3:'DC Corp',col6:'shankar',col7:'100',col8:'Bale',col9:'I1NBQH',col10:'44500' ,col11:'44500',col12:'₹/Candy'   },
    { id: 5, col1: 'Seller', col2: 'COMPLETE',col3:'DC Corp',col6:'shankar',col7:'100',col8:'Bale' ,col9:'F2NATE',col10:'44500',col11:'44500' ,col12:'₹/Candy'  },
    { id: 6, col1: 'Seller', col2: 'COMPLETE',col3:'DC Corp',col6:'shankar',col7:'100',col8:'Bale' ,col9:'3FD6TL',col10:'44500',col11:'44500',col12:'₹/Candy'   },
    { id: 7, col1: 'Seller', col2: 'COMPLETE',col3:'DC Corp',col6:'shankar',col7:'100',col8:'Bale',col9:'R7VJZT',col10:'44500' ,col11:'44500',col12:'₹/Candy'   },
    { id: 8, col1: 'Seller', col2: 'COMPLETE',col3:'DC Corp',col6:'shankar',col7:'100',col8:'Bale' ,col9:'JRMAEL',col10:'44500',col11:'44500',col12:'₹/Candy'  },
  ];
  
  const columns= [
    { field: 'col1', headerName: 'Type', width: 120},
    { field: 'col2', headerName: 'Status', width: 120 },
    { field: 'col3', headerName: 'Buyer', width: 120 },
    { field: 'col4', headerName: 'Seller', width: 120 },
    { field: 'col5', headerName: 'Broker', width: 120 },
    { field: 'col6', headerName: 'Variety', width: 120 },
    { field: 'col7', headerName: 'Quantity', width: 140 },
    { field: 'col8', headerName: 'Quantity unit', width: 200 },
    { field: 'col9', headerName: 'Confirmation', width: 150 },
    { field: 'col10', headerName: 'Original Price', width: 150 },
    { field: 'col11', headerName: 'Accepted price', width: 150 },
    { field: 'col12', headerName: 'Price/Unit', width: 150 },
    { field: 'col13', headerName: 'created At', width: 150 },
    { field: 'col14', headerName: 'confirmed at', width: 150 },
    
  ];
  return (
    <div className="App">
       <Router>
      <div style={{display:"flex"}}> 
        <nav>
          <ul>
            <li>
              <Link to="/">Task1(UI mockup for Excel)</Link>
            </li>
            <li>
              <Link to="/Assignment">Assignement API ( listing futurama character)</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Assignment">
            <Next />
          </Route>
        </Switch>
      </div>
    </Router>
      <h1 >Sauda Excel data</h1>
     <div style={{ height: 500, width: '100%',alignContent:'center',backgroundColor:'grey' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </div>
  );
}

export default App;
