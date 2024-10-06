import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(<p></p>);
// });

it("renders without crashing",()=>{
  const div = document.createElement("div");
  render(<App/>, div);
})