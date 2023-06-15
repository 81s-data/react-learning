// import { hello } from "../app.js"; // ES6
const { hello, sum, getData } = require('../app') // CommonJS

// it('description', function() { })
// it est une fonction de la librairie jest
it('la fonction hello retourne hello', () => {
    // ici sont les tests
    // si execution de la fonction hello() => doit retourner 'hello'
    expect(hello()).toBe('hello')
})

it('sum should return 3', () => {
    // ici sont les tests
    // si execution de la fonction hello() => doit retourner 'hello'
    expect(sum(1,2)).toBe(3)
})

it('sum should return 3', () => {
    // ici sont les tests
    // si execution de la fonction hello() => doit retourner 'hello'
    expect(sum("1",2)).toBe(3)
})

it('getData is notEmpty', () => {
    expect(getData()).not.toEqual([])
    for (const item of getData()) {
        expect(typeof item).toBe('number')
    }
})