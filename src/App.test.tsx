import { render, screen } from '@testing-library/react'
import App from './App'

test('should render properly', () => {
  render(<App />)
  expect(screen.getByText('Trending')).toBeInTheDocument()
})
