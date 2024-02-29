import { Queries, queries, render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: React.ReactElement,
  options?: RenderOptions<Q, Container, BaseElement>
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <>
        <div id="root">
          <BrowserRouter>{children}</BrowserRouter>
        </div>
        <div id="portal-root" />
      </>
    ),
    ...options
  });
};

export * from '@testing-library/react';

export { customRender as render };
