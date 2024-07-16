import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Todo Component', () => {
  const todo = {
    _id: '1',
    text: 'Write code',
    done: false,
  };

  it('renders todo correctly', () => {
    const { getByText } = render(<Todo todo={todo} />);
    expect(getByText(todo.text)).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = jest.fn();
    const { getByText } = render(<Todo todo={todo} onDelete={onDelete} />);
    fireEvent.click(getByText('Delete'));
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(todo);
  });

  it('calls onComplete when set as done button is clicked', () => {
    const onComplete = jest.fn();
    todo.done = false;
    const { getByText } = render(<Todo todo={todo} onComplete={onComplete} />);
    fireEvent.click(getByText('Set as done'));
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenCalledWith(todo);
  });
});
