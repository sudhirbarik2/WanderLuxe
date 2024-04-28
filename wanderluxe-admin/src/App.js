import './App.css';
import Navbar from './components/Nav';
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './Home';
import Register from './components/Register';
import AddData from './components/AddData';
function App() {
  return (
    <div className="App">
      <Navbar /><br/><br/><br/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/addData" element={<AddData/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          {/* <Route exact path="/packages" component={HotDeals}></Route>Only HotDeals */}
          {/* <Route exact path="/packages/:continent" component={Packages}></Route>Destinations with search */}
          {/* <Route exact path="/book/:userId/:destinationId" component={Bookings}></Route> */}
          {/* <Route exact path="/viewBookings" component={Bookings}></Route> */}
          {/* <Route path="*" render={() => <Redirect to="/" />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
