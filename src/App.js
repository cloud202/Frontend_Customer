import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CustomerDashboard from './pages/user/CustomerDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>

           <Route path="/">
            <Route index path="/" element={<CustomerDashboard/>}  />
            </Route> 
       </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
