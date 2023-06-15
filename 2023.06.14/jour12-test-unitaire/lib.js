const generateTitle = (date) => {
    return `<h1>article publié le ${new Intl.DateTimeFormat("fr-FR").format(date)}</h1>`
}

const fizzBuzz = (number) => {
    let magicWord = '';
    if (number % 3 === 0) magicWord = 'fizz';
    if (number % 5 === 0) magicWord += 'buzz';
    return magicWord;
}

const getArticle = (tab, id) => {
    return tab.filter(item => {
        return item.id === id;
    })[0]
}

const priceTaxInclude = (price, vat) => {
    if (typeof price !== 'number') {
        throw new Error('Price must be a number');
    }
    if (typeof vat !== 'number') {
        throw new Error('VAT must be a number');
    }
    return price * vat;
}

const anagram = (word1, word2) => {
    if(word2.length !== word1.length) return false;
    for(let i = 0; i < word1.length; i++) {
        if (!word2.toLowerCase().includes(word1[i].toLowerCase())) {
            return false;
        }
    }
    return true
}

const convertRomanToArabic = (roman) => {
    let arabic = 0;
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < roman.length; i++) {
        // TODO implements the translation
    }
}

// Cas de test de fonction appelant une autre fonction

const getUser = () => {
    return {id: 1, nom: 'auteur'}
}

const getArticleByUser = (getUser) => {
    return {
        id : 1 ,
        titre : "article1",
        auteur : getUser()
    }
}

module.exports.generateTitle = generateTitle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.getArticle = getArticle;
module.exports.priceTaxInclude = priceTaxInclude;
module.exports.anagram = anagram;
module.exports.convertRomanToArabic = convertRomanToArabic;
module.exports.getArticleByUser = getArticleByUser;