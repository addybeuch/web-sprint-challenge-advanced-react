import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(firstName, 'Brennan');
    userEvent.type(lastName, 'Smith');
    userEvent.type(address, '1234 West 1200 South');
    userEvent.type(city, 'Salt Lake City');
    userEvent.type(state, 'UT');
    userEvent.type(zip, '12345');
    const button = screen.getByRole('button');
    userEvent.click(button);
    const success = screen.queryByText(/You have ordered some plants!/)
    expect(success).toBeInTheDocument;
});
