import { fireEvent, render, screen } from '@testing-library/react'
import GoogleSignInButton from '@/components/NavigationBar/SignInButton'
import { signIn } from "next-auth/react"

jest.mock("next-auth/react") // mock the next-auth module

describe('SigInButton', () => {
    it("renders a button", () => {
        render(<GoogleSignInButton />)

        const button = screen.getByRole("button", { name: "LOGIN" })

        expect(button).toBeInTheDocument()
    })

    it("triggers google signin when clicked", () => {
        // render the component
        const { getByText } = render(<GoogleSignInButton />)
        // get a reference to the component
        const button = getByText("LOGIN")
        // simulate a click on the button
        fireEvent.click(button)
        // assert that the (mocked) signIn function was called with the string argument "google"
        expect(signIn).toHaveBeenCalledWith("google")
    })
})
