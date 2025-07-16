import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HabilidadesSection from '../HabilidadesSection';

jest.mock('../Habilidade', () => {
  return function MockHabilidade({ titulo, nivel }: { titulo: string; nivel: number }) {
    return (
      <div data-testid="habilidade-mock" data-titulo={titulo} data-nivel={nivel}>
        <span>{titulo}</span>
        <span>Nível: {nivel}</span>
      </div>
    );
  };
});

describe('Componente HabilidadesSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve renderizar o título da seção', () => {
    render(<HabilidadesSection />);
    
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Habilidades')).toHaveClass('section-title');
  });

  test('deve renderizar a estrutura HTML correta', () => {
    render(<HabilidadesSection />);
    
    expect(document.querySelector('.skills-section')).toBeInTheDocument();
    expect(document.querySelector('.skills-container')).toBeInTheDocument();
  });

  test('deve renderizar pelo menos algumas categorias de habilidades', () => {
    render(<HabilidadesSection />);
    
    const categoryTitles = screen.getAllByRole('heading', { level: 2 });
    expect(categoryTitles.length).toBeGreaterThan(0);
  });

  test('deve renderizar componentes Habilidade', () => {
    render(<HabilidadesSection />);
    
    const habilidadeComponents = screen.getAllByTestId('habilidade-mock');
    expect(habilidadeComponents.length).toBeGreaterThan(0);
  });

  test('deve renderizar skill-category containers', () => {
    render(<HabilidadesSection />);
    
    const skillCategories = document.querySelectorAll('.skill-category');
    expect(skillCategories.length).toBeGreaterThan(0);
  });

  test('deve renderizar skill-list containers', () => {
    render(<HabilidadesSection />);
    
    const skillLists = document.querySelectorAll('.skill-list');
    expect(skillLists.length).toBeGreaterThan(0);
  });

  test('deve renderizar títulos de categorias com classe correta', () => {
    render(<HabilidadesSection />);
    
    const categoryTitles = document.querySelectorAll('.skill-category-title');
    expect(categoryTitles.length).toBeGreaterThan(0);
  });

  test('deve ter a mesma quantidade de skill-category e skill-list', () => {
    render(<HabilidadesSection />);
    
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillLists = document.querySelectorAll('.skill-list');
    
    expect(skillCategories.length).toBe(skillLists.length);
  });

  test('deve renderizar habilidades com títulos e níveis válidos', () => {
    render(<HabilidadesSection />);
    
    const habilidadeComponents = screen.getAllByTestId('habilidade-mock');
    
    habilidadeComponents.forEach(component => {
      const titulo = component.getAttribute('data-titulo');
      const nivel = component.getAttribute('data-nivel');
      
      expect(titulo).toBeTruthy();
      expect(titulo).not.toBe('');
      expect(Number(nivel)).toBeGreaterThanOrEqual(0);
      expect(Number(nivel)).toBeLessThanOrEqual(5);
    });
  });

  test('deve renderizar cada habilidade com o componente Habilidade correto', () => {
    render(<HabilidadesSection />);
    
    const habilidadeComponents = screen.getAllByTestId('habilidade-mock');
    
    habilidadeComponents.forEach(component => {
      const titulo = component.getAttribute('data-titulo');
      const nivel = component.getAttribute('data-nivel');
      
      expect(component).toHaveTextContent(titulo || '');
      expect(component).toHaveTextContent(`Nível: ${nivel}`);
    });
  });
});