const { generateTitle,
        fizzBuzz,
        getArticle,
        priceTaxInclude,
        anagram,
        convertRomanToArabic,
        getArticleByUser} = require('../lib')

it('Should return <h1>article publié le 15/06/2023</h1>', () => {
    expect(generateTitle(new Date()))
    .toBe('<h1>article publié le 15/06/2023</h1>')
})

it('Should return <h1>article publié le 14/06/2023</h1>', () => {
    const date = new Date;
    date.setDate(date.getDate() - 1);
    expect(generateTitle(date))
    .toBe('<h1>article publié le 14/06/2023</h1>')
})

it('fizzBuzz should return correct values', () => {
    expect(fizzBuzz(8)).toBe('');

    expect(fizzBuzz(3)).toBe('fizz');

    expect(fizzBuzz(5)).toBe('buzz');

    expect(fizzBuzz(15)).toBe('fizzbuzz');
})

it('getArticle should return the right object', () => {

    const tab = [
        {id: 0, title: "title1"},
        {id: 1, title: "title2"},
        {id: 45, title: "title46"},
        {id: -234, title: "title"}
    ];

    const id = -234;

    expect(getArticle(tab, id)).toHaveProperty("id")
    expect(getArticle(tab, id)).toHaveProperty("title")
    expect(getArticle(tab, id)).toMatchObject({id: -234, title: "title"})
    expect(getArticle(tab, id)).not.toBe({id: -234, title: "title"})
})

describe('priceTaxInclude', function () {

    it('should return VAT price', function() {
        expect(priceTaxInclude(1,1.4)).toBe(1.4)
    })

    it('if parameters are not numbers, should throw error', function() {
        expect(() => priceTaxInclude('1','1.4')).toThrow();
    })
})

describe('anagram', function(){

    it('should return true', function() {
        expect(anagram('Friend', 'finDer')).toBe(true);
    })

    test("mot avec longueurs différentes", function(){
        expect(anagram("a" , "ab") ).toBeFalsy()
    })

    test("mots correctes", function(){
        const listes = [
            {
                mot1 : "finder",
                mot2 : "Friend",
            },
            {
                mot1 : 'Mary',
                mot2 : 'Army',
            }, 
            {
                mot1 : 'nectar',
                mot2 : 'carnet',
            }, 
            {
                mot1 : 'parisien',
                mot2 : 'aspirine',
            }
        ]
        for(let {mot1, mot2} of listes){
            expect(anagram(mot1 , mot2) ).toBeTruthy()
        }

    })
})

describe('getArticleByUser', function(){

    it('Should return an object with id, titre, auteur and auteur an object with id and nom', function() {
        const getUserSimule = jest.fn().mockReturnValue({ id : 123 , nom : "azerty" })

    const resultat = getArticleByUser(getUserSimule)

    expect(resultat).toHaveProperty("id")
    expect(resultat).toHaveProperty("titre")
    expect(resultat).toHaveProperty("auteur")
    expect(resultat.auteur).toHaveProperty("id")
    expect(resultat.auteur).toHaveProperty("nom")
    })
})

