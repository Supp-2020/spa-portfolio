import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.Mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class HomeTest {

    @Mock
    private String link;

    @Test
    public void testHeader() {
        // Arrange
        when(link).thenReturn("https://example.com");

        // Act
        var home = new Home();
        var header = home.getHeader();

        // Assert
        assertNotNull(header);
        assertEquals("John Doe", header.getLink());
    }

    @Test
    public void testHeroSection() {
        // Arrange
        when(link).thenReturn("https://example.com");

        // Act
        var home = new Home();
        var heroSection = home.getHeroSection();

        // Assert
        assertNotNull(heroSection);
        assertEquals("Hi, I'm John Doe", heroSection.getTitle());
    }

    @Test
    public void testProjectsSection() {
        // Arrange
        when(link).thenReturn("https://example.com");

        // Act
        var home = new Home();
        var projectsSection = home.getProjectsSection();

        // Assert
        assertNotNull(projectsSection);
        assertEquals("Weather Dashboard", projectsSection.getTitle());
    }
}

class Header {
    private String link;

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}

class HeroSection {
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

class ProjectsSection {
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders the header correctly', async () => {
    const { getByText } = render(<Home />);
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('renders the hero section correctly', async () => {
    const { getByText } = render(<Home />);
    expect(getByText('Hi, I\'m John Doe')).toBeInTheDocument();
  });

  it('renders the projects section correctly', async () => {
    const { getByText } = render(<Home />);
    expect(getByText('Weather Dashboard')).toBeInTheDocument();
  });
});