# loc-ui

Simple `npm` library for learning purposes

usage:

install:
```bash
npm i --save loc-ui
```

use:
```js
import React, { Component } from 'react';
import { Button } from 'loc-ui';

class MyComponent extends Component {

  render(){
    
    return(
      <div>
          <Button text='click me!' />
      </div>
    );
  }
}
```