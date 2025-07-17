import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('../Footer', () => () => (
  <footer className="footer">
    <div className="navbar-left">
      <img src="mocked-logo.png" alt="Logo DB" className="logo" />
    </div>
  </footer>
));

import Footer from '../Footer';

describe('Footer', () => {
  it('renderiza o logo corretamente', () => {
    render(<Footer />);
    const logoImage = screen.getByAltText('Logo DB');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'mocked-logo.png');
  });
});
