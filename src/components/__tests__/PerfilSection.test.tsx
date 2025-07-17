import React from 'react';
import { render, screen } from '@testing-library/react';
import PerfilSection from '../PerfilSection';

describe('PerfilSection', () => {
  it('renderiza o nome corretamente', () => {
    render(<PerfilSection />);
    expect(screen.getByText(/Sylvia Vitória/i)).toBeInTheDocument();
  });

  it('renderiza o título sobre mim', () => {
    render(<PerfilSection />);
    expect(screen.getByText(/Sobre mim/i)).toBeInTheDocument();
  });
});