import { render, screen } from '@testing-library/react';
import HomePage from './homepage';

describe('HomePage', () => {
  test('should render correctly', () => {
    render(<HomePage />);
    const homeTextElement = screen.getByRole('heading', {
      level: 1,
      name: /home page/i,
    });
    expect(homeTextElement).toBeInTheDocument();
  });
});
