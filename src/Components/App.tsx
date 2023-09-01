import '../Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSignUp from './SignInSignUp';
import Home from './Home';
import UserProfile from './UserProfile';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<SignInSignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userprofile' element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
