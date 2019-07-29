const locationApi = require('./location.js')
const usersApi = require('./user.js')
const productApi = require('./product.js')

//shop locations
const buckhead = {
    neighborhood: "Buckhead"
}

const midtown = {
    neighborhood: "Midtown"
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
    colors: 'Teal???',
    image: './../src/components/images/tealOutfits.jpg'
}


locationApi.deleteAllLocations()
    .then(() => usersApi.())
    .then(() => shopApi.deleteAllShops())
    .then(() => locationApi.addLocation(buckhead))
    .then((buckhead) => {
        anotherBrokenEgg.locationId = buckhead._id
        lululemon.locationId = buckhead._id
        let brokenEgg = foodApi.addFood(anotherBrokenEgg)
        let lulu = shopApi.addShop(lululemon)
        return Promise.all([brokenEgg, lulu])
    })
    .then(() => locationApi.addLocation(midtown))
    .then((midtown) => {
        papisCubanGrill.locationId = midtown._id
        modernMystic.locationId = midtown._id
        let papis = foodApi.addFood(papisCubanGrill)
        let mystic = shopApi.addShop(modernMystic)
        return Promise.all([papis, mystic])
    })
    .then(() => locationApi.addLocation(downtown))
    .then((downtown) => {
        foodShoppe.locationId = downtown._id
        executiveShop.locationId = downtown._id
        let shoppe = foodApi.addFood(foodShoppe)
        let execShop = shopApi.addShop(executiveShop)
        return Promise.all([shoppe, execShop])
    })
    .then(() => {
        console.log('about to exit')
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })