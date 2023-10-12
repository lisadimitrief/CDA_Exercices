import {render} from '@testing-library/react';

test('renders all input', () => { 
    const {getByTestID} = render(<Register />);

    expect(getByTestID('userName')).toBeInTheDocument()
    expect(getByTestID('email')).toBeInTheDocument()
    expect(getByTestID('tel')).toBeInTheDocument()
    expect(getByTestID('password')).toBeInTheDocument()
    expect(getByTestID('confirmPassword')).toBeInTheDocument()
})