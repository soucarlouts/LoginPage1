import { useState } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';

function App() {

  return (
<div 
style={{display: 'flex', gap: '35px' }}>
<LoginForm/>
<RegisterForm/>
</div>
  );
}

export default App;
