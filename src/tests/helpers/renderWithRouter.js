import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(componente) {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={ history }>
        {componente}
      </Router>,
    ),
    history,
  };
}

export default renderWithRouter;
