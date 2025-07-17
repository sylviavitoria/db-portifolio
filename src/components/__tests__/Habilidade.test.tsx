import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Habilidade from '../Habilidade';

describe('Componente Habilidade', () => {
  test('deve renderizar o título da habilidade', () => {
    render(<Habilidade titulo="JAVA" nivel={4} />);
    expect(screen.getByText('JAVA')).toBeInTheDocument();
  });

  test('deve renderizar o bullet point', () => {
    render(<Habilidade titulo="JAVA" nivel={4} />);
    expect(screen.getByText('•')).toBeInTheDocument();
  });

  test('deve renderizar 5 bolinhas no total', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={4} />);
    const bolinhas = container.querySelectorAll('.bolinha');
    expect(bolinhas).toHaveLength(5);
  });

  test('deve aplicar classe "cheia" nas bolinhas até o nível especificado', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={3} />);
    const bolinhas = container.querySelectorAll('.bolinha');

    expect(bolinhas[0]).toHaveClass('cheia');
    expect(bolinhas[1]).toHaveClass('cheia');
    expect(bolinhas[2]).toHaveClass('cheia');
    expect(bolinhas[3]).toHaveClass('vazia');
    expect(bolinhas[4]).toHaveClass('vazia');
  });

  test('deve aplicar classe "vazia" quando nível é 0', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={0} />);
    const bolinhas = container.querySelectorAll('.bolinha');

    bolinhas.forEach(bolinha => {
      expect(bolinha).toHaveClass('vazia');
    });
  });

  test('deve aplicar classe "cheia" em todas as bolinhas quando nível é 5', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={5} />);
    const bolinhas = container.querySelectorAll('.bolinha');

    bolinhas.forEach(bolinha => {
      expect(bolinha).toHaveClass('cheia');
    });
  });

  test('deve ter a estrutura HTML correta', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={4} />);
    expect(screen.getByText('JAVA').closest('.habilidade-item')).toBeInTheDocument();
    expect(screen.getByText('JAVA').closest('.habilidade-content')).toBeInTheDocument();
    expect(container.querySelector('.bolinhas-container')).toBeInTheDocument();
  });

  test('deve lidar com níveis negativos (tratando como 0)', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={-1} />);
    const bolinhas = container.querySelectorAll('.bolinha');

    bolinhas.forEach(bolinha => {
      expect(bolinha).toHaveClass('vazia');
    });
  });

  test('deve lidar com níveis acima de 5 (preenchendo todas as bolinhas)', () => {
    const { container } = render(<Habilidade titulo="JAVA" nivel={10} />);
    const bolinhas = container.querySelectorAll('.bolinha');

    bolinhas.forEach(bolinha => {
      expect(bolinha).toHaveClass('cheia');
    });
  });

  test('deve renderizar com título vazio', () => {
    render(<Habilidade titulo="" nivel={3} />);
    const tituloElement = screen.getByText('•').parentElement?.querySelector('.habilidade-titulo');
    expect(tituloElement).toHaveTextContent('');
  });

  test('deve renderizar com título contendo caracteres especiais', () => {
    render(<Habilidade titulo="C#/.NET" nivel={4} />);
    expect(screen.getByText('C#/.NET')).toBeInTheDocument();
  });
});
