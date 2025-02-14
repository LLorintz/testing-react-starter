import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import Greet from '../components/Greet'
import '@testing-library/jest-dom/vitest'


describe('Greet component', () => {
    it('should render Hello when the name is provided', () => {
        render(<Greet name='Boby'/>)
        //screen.debug()
        const header = screen.getByRole('heading')
        expect(header).toBeInTheDocument()
        expect(header).toHaveTextContent(/boby/i)

    })

    it('should render Login button when the name is NOT provided', () => {
        render(<Greet name=''/>)
        //screen.debug()
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)

    })
})