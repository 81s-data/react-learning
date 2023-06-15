const generateTitle = (date) => {
    return `<h1>article publié le ${new Intl.DateTimeFormat("fr-FR").format(date)}</h1>`
}

module.exports.generateTitle = generateTitle;