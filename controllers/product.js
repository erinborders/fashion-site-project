/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const productApi = require('../models/product.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const productRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
productRouter.get('/', (req, res) => {
  productApi.getAllProducts()
    .then(products => {
      res.json(products)
    })
    .catch(err => {
      console.log(err)
    })
})

productRouter.get('/:productId', (req, res) => {
  productApi.getProduct(req.params.locationId)
    .then(product => {
      res.json(product)
    })
    .catch(err => {
      console.log(err)
    })
})

productRouter.post('/', (req, res) => {
  productApi.createProduct(req.body)
    .then(newProduct => {
      res.json(newProduct)
    })
    .catch(err => {
      console.log(err)
    })
})

productRouter.put('/:productId', (req, res) => {
  productApi.updateProduct(req.params.locationId, req.body)
    .then(updatedProduct => {
      res.json(updatedProduct)
    })
    .catch(err => {
      console.log(err)
    })
})

productRouter.delete('/:productId', (req, res) => {
  productApi.deleteProduct(req.params.locationId)
    .then(deletedProduct => {
      res.json(deletedProduct)
    })
    .catch(err => {
      console.log(err)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  productRouter
}
