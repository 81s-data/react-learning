const { generateTitle } = require('../lib')

it('Should return <h1>article publié le 15/06/2023</h1>', () => {
    expect(generateTitle(new Date()))
    .toBe('<h1>article publié le 15/06/2023</h1>')
})

it('Should return <h1>article publié le 14/06/2023</h1>', () => {
    let date = new Date;
    date.setDate(date.getDate() - 1);
    expect(generateTitle(date))
    .toBe('<h1>article publié le 14/06/2023</h1>')
})

