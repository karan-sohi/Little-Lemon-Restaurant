import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./../src/components/booking-form/BookingForm"

test('Renders the BookingForm elements', () => {
    render(<BookingForm />);
    const FirstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email");
    const numGuests = screen.getByLabelText("Number of Guests");
    const date = screen.getAllByLabelText("Choose Date")


    expect({FirstName, lastName, email, numGuests, date}).toBeInTheDocument;

})

describe("Form Input Behaivour Check", () => {
    test("User is able to submit the form ", () => {
      const firstNameValue = "John";
      const lastNameValue = "Doe";
      const emailValue = "john@gmail.com";
      const numOfGuestsValue = "3";
      
      render(<BookingForm/>);

  
      const FirstName = screen.getByLabelText("First Name");
      fireEvent.change(FirstName, { target: { value: firstNameValue } });
  

  
      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);

    });
})