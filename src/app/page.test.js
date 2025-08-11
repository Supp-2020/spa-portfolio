import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './page.js';
import { create } from 'react-test-renderer';

describe('Home component', () => {
  it('renders correctly', async () => {
    const tree = create(<Home />);
    expect(tree.root).toHaveStyle({
      'min-h-screen': '100vh',
      'bg-background': 'background-color',
    });
  });

  it('renders header with correct classes', async () => {
    const { container } = render(<Home />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60');
  });

  it('renders navigation with correct classes', async () => {
    const { container } = render(<Home />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('flex items-center space-x-6 text-sm font-medium');
  });

  it('renders hero section with correct classes', async () => {
    const { container } = render(<Home />);
    const heroSection = container.querySelector('section');
    expect(heroSection).toHaveClass('container py-24 bg-muted/50');
  });

  it('renders buttons with correct classes and text content', async () => {
    const { container } = render(<Home />);
    const viewMyWorkButton = container.querySelector('button > a');
    const getInTouchButton = container.querySelector('button > a');
    expect(viewMyWorkButton).toHaveTextContent('View My Work');
    expect(getInTouchButton).toHaveTextContent('Get In Touch');
  });

  it('renders projects section with correct classes', async () => {
    const { container } = render(<Home />);
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toHaveClass('container py-24 bg-muted/50');
  });
});

describe('Header component', () => {
  it('renders correctly', async () => {
    const tree = create(<header />);
    expect(tree.root).toHaveStyle({
      'sticky top-0 z-50 w-full border-b': 'border-bottom-style',
    });
  });

  it('renders navigation with correct classes', async () => {
    const { container } = render(<header />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('flex items-center space-x-6 text-sm font-medium');
  });

  it('renders logo with correct classes', async () => {
    const { container } = render(<header />);
    const logo = container.querySelector('a > span');
    expect(logo).toHaveClass('mr-6 flex items-center space-x-2');
  });
});

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

describe('RootLayout component', () => {
  it('renders correctly', async () => {
    const tree = render(<RootLayout />);
    expect(tree.root).toHaveStyle({
      'lang': 'en',
    });
  });

  it('sets body class with correct variables', async () => {
    const { container } = render(<RootLayout />);
    const body = container.querySelector('body');
    expect(body).toHaveClass(`${geistSans.variable} ${geistMono.variable} antialiased`);
  });
});

describe('Home component', () => {
  it('renders correctly', async () => {
    const tree = render(<Home />);
    expect(tree.root).toHaveStyle({
      'min-h-screen': '100vh',
      'bg-background': 'background-color',
    });
  });

  it('renders header with correct classes', async () => {
    const { container } = render(<Home />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60');
  });

  it('renders navigation with correct classes', async () => {
    const { container } = render(<Home />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('flex items-center space-x-6 text-sm font-medium');
  });
});