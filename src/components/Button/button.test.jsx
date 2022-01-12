import {render, screen} from '@testing-library/react';
import Button from './button';

const text = 'test'

test('should render the button with some text', () => {
    render(<Button>{text}</Button>)

    const buttonEl = screen.getByText(text);

    expect(buttonEl).toBeInTheDocument();
})