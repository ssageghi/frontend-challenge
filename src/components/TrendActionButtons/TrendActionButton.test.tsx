import { render, act, screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import TrendActionButtons from './index';
interface Props {
    requestPrams: {
        section: string,
        since: string,
        spoken_language_code: string,
        language: string
    };
    setRequestParams: (val: Object) => void;
};
let newProps: Props = {
    requestPrams: {
        section: "repositories",
        since: "",
        spoken_language_code: "",
        language: ""

    },
    setRequestParams: (obj: any) => {
        newProps.requestPrams.section = obj.section
    }
}
it("change state successfully", () => {


    const { container } = render(<TrendActionButtons requestPrams={newProps.requestPrams} setRequestParams={newProps.setRequestParams} />)
    container.querySelectorAll(".toggle-buttons input[type=radio]")?.forEach(el => {
        fireEvent.click(el);
        expect(newProps.requestPrams.section).toBe((el as HTMLInputElement ).value)
    })
})