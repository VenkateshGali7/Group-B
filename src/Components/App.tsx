import '../Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSignUp from './SignInSignUp';
import Home from './Home';
import MyProfile from './MyProfile'; 
import Dashboard from './Dashboard';

import employeeImage from '../Images/logo.png';
import UserProfile from './UserProfile';
const employeeData = {
  id: 1,
  name: 'Ankit Soni',
  position: 'Software Engineer',
  department: 'Engineering',
  email: 'ankit@gmail.com',
  phone: '123-456-7890',
  image: employeeImage, 
  skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Git'],
  experience: '5+ years',
  bio: 'Passionate about creating efficient and user-friendly web applications...',

};

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<SignInSignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path="/myprofile" element={<MyProfile employee={employeeData} />} />        
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
