import React, { useState, useEffect, Children, useContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
const GithubContext = React.createContext()

const GithubProvider = ({children})=>{
    const [user, setUSer] = useState(mockUser)
    const [repo, setRepo] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    return (<GithubContext.Provider value ={{user, repo, followers}}>{children}</GithubContext.Provider>)
}


export const useGlobalContext = ()=>{
  return   useContext(GithubContext)
}


export {GithubContext, GithubProvider}