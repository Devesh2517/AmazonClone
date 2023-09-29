const expr = require("express")
const Router = expr.Router()
const { body, validationResult } = require("express-validator")
const User = require("../Modal/User")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
const JWT_SECRET = "Iamdevesh"
const nodemailer = require("nodemailer")



  
 

//Route-1 create a user using POST method 
Router.post('/createuser', [body('name', "enter valid name").isLength({ min: 3 }),
body('Email', "enter valid email").isEmail(),
body('Password', "password length must be 5").isLength({ min: 5 })],
    async (req, res) => {
        let success = false
        //check the validation is proper or not  if not proper than give error
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ success: success, Error: error.array() })
        }

        //create user

        try {

            //check wether user is already exists or not
            let user = await User.findOne({ Email: req.body.Email })
            if (user) {
                return res.status(400).json({ success: success, Error: "User already exists please provide different email" })
            }

            //create user 

            // create hashed password
            const salt = await bcrypt.genSalt(10)
            let securepass = await bcrypt.hash(req.body.Password, salt)

            user = await User.create({
                name: req.body.name,
                Email: req.body.Email,
                Password: securepass
            })

            //now create auth-token for new generated user
            const data = { user: { id: user.id } }
            const authtoken = JWT.sign(data, JWT_SECRET)
            success = true

           

            res.json({ success: success, authtoken:authtoken,name:user.name })
        }
        catch (error) {
            res.status(500).json({ success: success, Error: "Some Internal server error" })
        }

    })


//Router-2 for login user by Post method 
Router.post("/login", [body('Email', "enter valid email").isEmail(),
body('Password', "password length must be 5").isLength({ min: 5 })],
    async (req, res) => {
        let success = false
        //check there is no any error in input field 
        const error = validationResult(req)
        if (!error.isEmpty()) { return res.status(400).json({ success: success, Error: error.array() }) }

        try {
            //check the user exists or not 

            let user = await User.findOne({ Email: req.body.Email })
            if (!user) { return res.status(400).json({ success: success, Error: "Invalid credentials" }) }

            //match the password with db
            const password = await bcrypt.compare(req.body.Password, user.Password)
            if (!password) {
                return res.status(400).json({ success: success, Error: "Inavlid credentials please provide valid" })
            }

            //fetch the user and generate the auth token
            const data = { user: { id: user.id } }
            const authtoken = JWT.sign(data, JWT_SECRET)
            success = true

            //when user login on the website again send mail

          

            //pass authtoken in response

            res.json({success: success, authtoken:authtoken,name:user.name })

        }
        catch (error) {
            res.json({ success: success, Error: "Internal server error" })
        }
    })

module.exports = Router