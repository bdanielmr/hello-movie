import { render, screen } from '@testing-library/react';
import App from './App';

test('renders load component splash to app file', () => {
  render(<App />);
  const linkElement = screen.getByText(/Explora ahora/i);
  expect(linkElement).toBeInTheDocument();
});
