import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const data = React.useContext(GithubContext)
  return (
    <main>
      <h2>Dashboard Page{data}</h2>
    </main>
  );
};

export default Dashboard;
