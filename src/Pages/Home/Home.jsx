import React, { useState } from 'react';
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
const Home = ({sidebar}) => {

  const [category, setCategory]= useState(0);
  return (
  <>
  <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
  {/* agr sidebar false ho g tu large container show krwao */}
  <div className={`container ${sidebar?"":'large-container'}`}>
<Feed category={category}/>
  </div>
  </>
  );
}

export default Home;
