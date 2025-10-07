import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

// For Java:
@ExtendWith(MockitoExtension.class)
public class HomeTest {
  @InjectMocks
  private Home home;

  @Test
  public void testRender() {
    when(home.getHeader()).thenReturn("Header");
    assertEquals("Header", home.render());
  }
}

// For JavaScript/TypeScript React:
test('renders correctly', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});