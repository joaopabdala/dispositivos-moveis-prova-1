import { fireEvent, render } from '@testing-library/react-native';
import Page from '../app/index';
import { router } from 'expo-router';

// Mocking the router.replace function
jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
}));

describe('<Page />', () => {
  test('Image is rendered correctly', () => {
    const { getByTestId } = render(<Page />);

    const image = getByTestId('logo-image'); 
    expect(image).toBeTruthy();
  });

  test('Input placeholders render correctly', () => {
    const { getByPlaceholderText } = render(<Page />);

    getByPlaceholderText('username');  
    getByPlaceholderText('password'); 
  });

  test('can login with correct credentials', () => {
    const { getByPlaceholderText, getByTestId } = render(<Page />);

    fireEvent.changeText(getByPlaceholderText('username'), 'fulano');
    fireEvent.changeText(getByPlaceholderText('password'), '123');

    fireEvent.press(getByTestId('Login')); 

    expect(router.replace).toHaveBeenCalledWith('/list');
  });

  test('shows error with incorrect credentials', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<Page />);

    fireEvent.changeText(getByPlaceholderText('username'), '123123123');
    fireEvent.changeText(getByPlaceholderText('password'), '12312332');

    fireEvent.press(getByTestId('Login'));

    getByText('Login inválido');
  });
});
