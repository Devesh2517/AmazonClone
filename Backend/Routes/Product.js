const expr = require("express")
const router = expr.Router()
const electronics = require("../Modal/Electronics")
const bucket = require("../Modal/Bucket")
const fetchuser = require("../Middleware/fetchuser")
const User = require("../Modal/User")
const nodemailer = require("nodemailer")
const Groceries = require("../Modal/Groceries")
const Clothes = require("../Modal/Clothes")

//transporter for mail when user checkout for ordering 

  

//Route for fetch initial data of items
//Route-1 for getting the products of electronics
router.get("/electronics", async (req, res) => {
   try {
      const electronic = await electronics.find({})
      res.json(electronic)
   } catch (error) {
      res.status(500).json({ error: "Some internal error occured" })
   }
})


//Route-2 for getting the products of Groceries
router.get("/Groceries", async (req, res) => {
   try {
      const Grocerie = await Groceries.find({})
      res.json(Grocerie)
   } catch (error) {
      res.status(500).json({ error: "Some internal error occured" })
   }
})


//Route-3 for getting the products of Clothes
router.get("/Clothes", async (req, res) => {
   try {
      const Clothe = await Clothes.find({})
      res.json(Clothe)
   } catch (error) {
      res.status(500).json({ error: "Some internal error occured" })
   }
})



//Routes for performing operation on users bucket

// Route-1 for adding the products to the bucket
router.post("/Addproduct", fetchuser, async (req, res) => {

   //add the product to the specific user bucket use fetchuser middleware
   try {


      const cart = new bucket({
         Title: req.body.Title,
         Image: req.body.Image,
         Price: req.body.Price,
         user: req.user.id
      })
      cart.save().then(()=>console.log("data saved"))
      res.json(cart)

   }
   catch {
      console.log("some error occured")
   }
})

//Route-2 get the cart products for specific user by GET method authentication need

router.get("/Getbucket", fetchuser, async (req, res) => {
   try {
      //find the bucket data for user who's loginned
      const Cart = await bucket.find({ user: req.user.id })
      res.json(Cart)
   } catch (error) {
      res.status(500).json({ error: "Some internal error occured" })
   }
})


// Route-3 For delete the item from bucket by DELETE mthod authentication need

router.delete("/deleteitem/:id", fetchuser, async (req, res) => {

   //pass the item id to delete the item in data base
   try {

      //check the product is exists or note
      let item = await bucket.findById(req.params.id)

      if (!item) {
         return res.status(404).json({ Error: "Not Found" })
      }

      // check the user loggedin and removeing item from db is same or not
      if (item.user.toString() !== req.user.id) {
         return res.status(401).json({ error: "Not Allowed to remove" })
      }

      //remove item from db
      item = await bucket.findByIdAndDelete(req.params.id)
      res.json({ item })

   }


   catch (error) {
      res.status(500).json({ error: error })

   }


})

// Route-4 For delete all items from bucket by DELETE mthod authentication need
router.delete("/deleteallitems", fetchuser, async (req, res) => {
   //by auth-token fetchuser middleware find user id 
   try {
      //find user for mailing to the user
      const user = await User.findById(req.user.id)
      //find the all product of the user who's loggedin 
      const items = await bucket.find({ user: (req.user.id) })
      var cartItem = []

      //delete the item from data base
      items.map(async (element) => {
         cartItem = await bucket.findByIdAndDelete(element._id)
      })
      
      
      //when user checkout order is confirm mail sent to the user
     
      res.json(cartItem)
   }
   catch (error) {
      res.status(500).json({ error: error })
   }
})
module.exports = router