import { render, act, screen } from '@testing-library/react'
import TrendContainer from './index';
it('Renders with a className equal to the variant', () => {
    const { container } = render(<TrendContainer />)
    expect(container.getElementsByClassName('trends-container').length).toBe(1);
});
it('Render Properly', () => {
    const { container } = render(<TrendContainer />)
    expect(container.querySelector('.trends-container .trends-container__content ')?.textContent?.toLowerCase()).toBe("no data");

});