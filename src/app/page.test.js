import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Map;

@ExtendWith(MockitoExtension.class)
public class HomeTest {

    @Mock
    private Image image;

    @Mock
    private Button button1;

    @Mock
    private Button button2;

    @InjectMocks
    private Home home;

    @Test
    public void testHome() {
        // Act
        home.render();

        // Assert
        verify(image, times(1)).render();
        verify(button1, times(1)).render();
        verify(button2, times(1)).render();
    }

    @Test
    public void testHeader() {
        // Act
        home.render();

        // Assert
        verify(home.getHeader()).render();
    }

    @Test
    public void testHeroSection() {
        // Act
        home.render();

        // Assert
        verify(home.getHeroSection()).render();
    }
}

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Map;

@ExtendWith(MockitoExtension.class)
public class HomeRendererTest {

    @Mock
    private Header header;

    @Mock
    private HeroSection heroSection;

    @InjectMocks
    private HomeRenderer homeRenderer;

    @Test
    public void testRender() {
        // Act
        Map<String, Object> result = homeRenderer.render(header, heroSection);

        // Assert
        verify(header, times(1)).render();
        verify(heroSection, times(1)).render();
    }
}

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Map;

@ExtendWith(MockitoExtension.class)
public class HomeRendererTest {

    @Mock
    private Header header;

    @Mock
    private HeroSection heroSection;

    @InjectMocks
    private HomeRenderer homeRenderer;

    @Test
    public void testRender() {
        // Act
        Map<String, Object> result = homeRenderer.render(header, heroSection);

        // Assert
        verify(header, times(1)).render();
        verify(heroSection, times(1)).render();
    }
}

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Map;

@ExtendWith(MockitoExtension.class)
public class HomeRendererTest {

    @Mock
    private Header header;

    @Mock
    private HeroSection heroSection;

    @InjectMocks
    private HomeRenderer homeRenderer;

    @Test
    public void testRender() {
        // Act
        Map<String, Object> result = homeRenderer.render(header, heroSection);

        // Assert
        verify(header, times(1)).render();
        verify(heroSection, times(1)).render();
    }
}

import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('renders header correctly', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('.header')).not.toBeNull();
  });

  it('renders hero section correctly', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('.hero-section')).not.toBeNull();
  });
});

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('calls button click event when clicked', async () => {
    const { getByText, getByRole } = render(<Home />);
    const button = getByRole('button');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('View My Work')).toBeInTheDocument());
  });
});