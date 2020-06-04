import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("Form rendered successfully", () => {
  render(<ContactForm />);
});

test("make sure form is submitting", async () => {
  const { getByLabelText, getByRole } = render(<ContactForm />);

  const firstName = getByLabelText(/First Name*/i);
  const lastName = getByLabelText(/Last Name*/i);
  const email = getByLabelText(/Email/i);
  const message = getByLabelText(/Message/i);
  const terms = getByLabelText(/Terms and Conditions*/i)
  const button = getByRole('button');

  fireEvent.change(firstName, { target: { value: "Anh" } });
  fireEvent.change(lastName, { target: { value: "Truong" } });
  fireEvent.change(email, { target: { value: "test@gmail.com" } });
  fireEvent.change(message, { target: { value: "test message" } });
  await act( async() => { fireEvent.click(terms) });
  await act( async() => { fireEvent.click(button) });

  expect(firstName.value).toBe("Anh");
  expect(lastName.value).toBe("Truong");
  expect(email.value).toBe("test@gmail.com");
  expect(message.value).toBe("test message");
  expect(terms.checked).toEqual(true)
});
