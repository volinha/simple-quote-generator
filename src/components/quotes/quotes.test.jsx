import { render, screen, fireEvent } from '@testing-library/react';
import Quotes from './quotes';

const quoteTest = 'quote';
const speakerTest = 'speaker';

test('should render received quote, speaker and a button', () => {
    
    render(<Quotes quote={quoteTest} speaker={speakerTest} />)

    const quoteEl = screen.getByText(quoteTest);
    const speakerEl = screen.getByText(`- ${speakerTest}`);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

test('should call a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote={quoteTest} speaker={speakerTest} onUpdate={callback} />);
    
    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalledTimes(1);
})