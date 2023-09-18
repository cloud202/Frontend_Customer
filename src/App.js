import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CustomerDashboard from './pages/CustomerDashboard';
import NewProject from './pages/NewProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
           <Route path="/">
            <Route index path="/" element={<CustomerDashboard/>}  />
            <Route path="/newproject" element={<NewProject/>}  />
            </Route> 
       </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
