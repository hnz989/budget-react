import React from 'react'
import {Header} from 'semantic-ui-react';

function MainHeader({title, type}) {
    //const title = props.title;
    //const {title} = props;
  return  <Header as={type}>{title}</Header>
}

export default MainHeader