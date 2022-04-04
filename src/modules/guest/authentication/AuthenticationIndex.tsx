import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../core/utils/redux';
import AuthenticationRoutes from './AuthenticationRoutes';
import { selectAuth } from './presentation/reducers/auth_reducer';

function AuthenticationModule() {
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoadingUser && authUser != null){
      navigate("/")
    }
  }, [isLoadingUser]);
  
  return <AuthenticationRoutes />;
}

export default AuthenticationModule;
