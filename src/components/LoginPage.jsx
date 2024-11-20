import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BASE_URL from './../UTILS';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otp, setOTP] = useState("");
  
}