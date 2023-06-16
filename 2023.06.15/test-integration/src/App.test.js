import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText('App');
  expect(linkElement).toBeInTheDocument();
});

it('renders coucou in paragraph', () => {
  render(<App/>);
  const p  = screen.getByTestId("p");
  console.log(p.textContent);
  expect(p.textContent).toBe('coucou');
})