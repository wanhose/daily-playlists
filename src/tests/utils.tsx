import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Queries, queries, render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient();

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
          <QueryClientProvider client={client}>
            <BrowserRouter>{children}</BrowserRouter>
          </QueryClientProvider>
        </div>
        <div id="portal-root" />
      </>
    ),
    ...options
  });
};

export * from '@testing-library/react';

export { customRender as render };
