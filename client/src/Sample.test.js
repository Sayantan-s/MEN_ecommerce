import React from 'react'
import Sample from './Sample.component'
import { render } from '@testing-library/react'

it("Should render Sample as Text", () => {
    const component = render(<Sample />);
    component.debug()
    const text = component.getByText("Sample")

    expect(text).toBeTruthy();
})