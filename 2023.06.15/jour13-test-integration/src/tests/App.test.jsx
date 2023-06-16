import App from "../App"
import { render, unmountComponentAtNode } from 'react-dom'

describe('App', function() {
    test('test than App contains "App" in a div', () => {
        act(() => {
            render(<App/>, container);
            const div = container.querySelector('div');
            expect(div.innerText).toBe('App');
        })
    })
})
