import React, { Component } from 'react';
import EditableLabel from './Editable.js';
import Search from './Search.js';
import { Image } from 'semantic-ui-react'

class Home extends Component {

  render(){
    return (
        <div>
        <EditableLabel />
        <Search />
        <br />
        <Image
          rounded
          spaced='right'
          src='https://www.iconsplace.com/download/4eb2ac-holy-bible-256.png'
          size='small'
        />
        </div>
      );
  }
}

export default Home;
