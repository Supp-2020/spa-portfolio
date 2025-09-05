import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class HomeControllerTest {
    @Mock
    private UserService userService;

    @InjectMocks
    private HomeController homeController;

    @Test
    public void testGetHomePage() throws Exception {
        // Setup
        when(userService.getUser()).thenReturn(new User());

        // Test
        String response = homeController.getHomePage();

        // Verify
        assertEquals("Hello, John Doe!", response);
    }
}

import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('renders the home page', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Hello, John Doe!')).toBeInTheDocument();
  });
});