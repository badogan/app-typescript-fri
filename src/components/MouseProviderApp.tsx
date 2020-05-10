import * as React from 'react';

import { MouseProvider } from './MouseProviderCore';

export default () => (
  <MouseProvider
    render={mouse => (
      <p>The mouse position is {mouse.x}, {mouse.y}</p>
    )}
  />
);