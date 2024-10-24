import { fireEvent, render, screen } from '@testing-library/react'
import GoogleSignInButton from '@/components/NavigationBar/SignInButton'
import { signIn } from "next-auth/react"

jest.mock("next-auth/react")

describe('SigInButton', () => {
    it("renders a button", () => {
        render(<GoogleSignInButton />)
        const button = screen.getByRole("button", { name: "LOGIN" })
        expect(button).toBeInTheDocument()
    })

    it("triggers google signin when clicked", () => {
        const { getByText } = render(<GoogleSignInButton />)
        const button = getByText("LOGIN")
        fireEvent.click(button)
        expect(signIn).toHaveBeenCalledWith("google")
    })
})
