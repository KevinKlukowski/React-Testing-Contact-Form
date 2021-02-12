import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

 test('renders without errors', async () => {
     render(<ContactForm />)

    
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  
  userEvent.type(firstNameInput, 'Kaiwen');
  userEvent.type(lastNameInput, 'Klukowski');
  userEvent.type(emailInput, 'kklukowski12@gmail.com');
  userEvent.type(messageInput, 'just me logging in');

  
  const submit = screen.getByRole('button');
  userEvent.click(submit);

  
  const newContact = await screen.findByText("Kevin", { exact: false });
  expect(newContact).toBeInTheDocument();
}); 

 