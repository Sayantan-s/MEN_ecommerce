import React from 'react'
import Sample from './Sample.component'
import { render, fireEvent } from '@testing-library/react'

let component, ele;

describe('COMPONENT SAMPLE', () => {
    
    beforeAll(() => {
        component = render(<Sample />)
        const { getByTestId } = component;
        ele = getByTestId(/happ/i);
    })

    it("Should render <Sample /> component having test-id = `happy` and children", () => {
        expect(ele.dataset.testid).toBe("happy")
        expect(ele.children).toBeTruthy()
    })

    it("Should render Sample's h1 having textContent Sample", () => {
        component = render(<Sample />)
        const { getByRole } = component;
        ele = getByRole("h1");        
        expect(ele.textContent).toBe("Sample")        
    })

    it("Should have button", () => {
        component = render(<Sample />)
        const { getByRole } = component;
        const myBtn = getByRole('button')
    })

})

 