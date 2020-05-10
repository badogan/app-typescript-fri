import * as React from 'react';

import { NameProvider } from './RenderPropsCore';

export default () => (
  <NameProvider>
    {
    ({ name }) => 
      <div>{name}</div>
    
    }
  </NameProvider>
);