import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const response = { speaker: 'Speaker', quote: 'Test' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(response));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button and a quote', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByRole('p');

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test('should call api on button click and update its text', async () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl)

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
})

test('should call api on start and renders response', async () => {
  render(<App />);
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
})