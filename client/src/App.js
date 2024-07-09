import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Createquiz from './pages/createquiz';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import Takequiz from './pages/takequiz';
import Quizpage from './pages/quizpage';
import Home from './pages/home';

function App() {
  return (
    <div className='App'>
     <Navbar/>
         <div className='comp2'>
      <Routes>
           <Route path="/"  element={<Takequiz/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/createquiz" element={<Createquiz/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/takequiz">
            <Route index element={<Takequiz/>}/>
            <Route path=":id" element={<Quizpage/>}/>
            </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
