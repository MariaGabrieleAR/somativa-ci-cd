import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Procure pelo texto diretamente dentro do componente, sem expressão regular
  const linkElement = screen.getByText('learn react', { exact: false });
  // Use expect.toBeInTheDocument para verificar se o elemento está presente no DOM
  expect(linkElement).toBeInTheDocument();
});
