// Header.js
import React from 'react';
import { Icon } from 'semantic-ui-react';
//import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
    
    <header className="header-main">
      
      <img src="data:image/png;base64,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"width={80}height={90} style={{position:'relative',top:'35px'}}/>
      <h1 class="logo">&nbsp;&nbsp;INTERIORS</h1>
      <div class="topnav">
     <a href="/Home"> <Icon disabled name='home'/>Home</a>
      <a href="/Service"><Icon disabled name='industry'/>Service</a>
      <a href="/About"><Icon disabled name='phone volume'/>About</a> 
     <a href="/Login"> <Icon disabled name='user'/>Login</a>
</div>
    </header>
    </div>
  );
};

export default Header;
