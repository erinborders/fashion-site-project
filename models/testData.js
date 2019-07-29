// TO DO: FIGURE OUT HOW TO INCLUDE IMAGES FOR PRODUCTS

const locationApi = require('./location.js')
const usersApi = require('./user.js')
const productApi = require('./product.js')

//shop locations
const buckhead = {
    neighborhood: "Buckhead"
}

const downtown = {
    neighborhood: "Downtown"
}

//users
const jonathan = {
    userName: 'Jonathan',
    password: 'password'
}

const bobby = {
    userName: 'Bobby',
    password: 'password'
}

const tan = {
    userName: 'Tan',
    password: 'password'
}

//products
const tealDress = {
    name: 'Teal Dress',
    price: '25.00',
    rating: '4/5',
    description: 'The perfect dress for your hot girl summer.',
    size: 'M',
    colors: 'Teal???'
    // image: {tealOutfits}
}

const halterTop = {
    name: 'Halter Top',
    price: '15.00',
    rating: '5/5',
    description: 'You better give yourself an extra 15 minutes because you will definitely be checking yourself out everytime you pass a mirror.',
    size: 'M',
    colors: 'Steal his soul black'
    // image: {halterTop}
}


locationApi.deleteAllLocations()
    .then(() => usersApi.deleteAllUsers())
    .then(() => productApi.deleteAllProducts())
    .then(() => locationApi.createLocation(buckhead))
    .then((buckhead) => {
        tealDress.locationId = buckhead._id
        let dress = productApi.createProduct(tealDress)
        return Promise.all([dress])
    })
    .then(() => locationApi.createLocation(downtown))
    .then((downtown) => {
        halterTop.locationId = downtown._id
        let shirt = productApi.createProduct(halterTop)
        return Promise.all([shirt])
    })
    .then(() => usersApi.createUser(jonathan))
    .then(() => usersApi.createUser(bobby))
    .then(() => usersApi.createUser(tan))
    .then(() => {
        console.log('about to exit')
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })