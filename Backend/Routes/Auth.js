const expr = require("express")
const Router = expr.Router()
const { body, validationResult } = require("express-validator")
const User = require("../Modal/User")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
const JWT_SECRET = "Iamdevesh"
const nodemailer = require("nodemailer")


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prajapatidevesh205@gmail.com',
      pass: 'kdbslzuffazyfipu'
    }
  });
  
 

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

            //when user created sent mail on users mail 
            var mailOptions = {
                from: 'prajapatidevesh205@gmail.com',
                to: req.body.Email,
                subject: 'Welcome to our Website!',
                html: `<pre>Hi ${req.body.name},

                Welcome to Amazon! We're glad you're here.
                
                We wanted to take a moment to thank you for creating an account with us. We hope you enjoy shopping our wide selection of products.
                
                As a new member, we'd like to offer you a special welcome gift: a 10% discount on your next purchase. Just use the code WELCOME10 at checkout.
                
                

                We hope to see you again soon!
                
                Sincerely,
                Technical-Rocks
                
                </pre>`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } 
              });

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

            var mailOptions = {
                from: 'prajapatidevesh205@gmail.com',
                to: req.body.Email,
                subject: 'Welcome back to Amazon',
                html: `<pre>Hi ${user.name},

                Welcome back to Amazon! We're glad to see you again.
                
                We hope you enjoyed your last visit. If you have any questions, please don't hesitate to contact us.
                
                We also wanted to let you know about a few new things that have been added to our website since you were last here:
                
                One Plus Nord 3 (16,256Gb)
                Iphone 15 
                We hope you'll check them out!
                
                Thanks for being a member of our website. We're excited to have you back.
                
                Sincerely,
                Technical-Rocks
                </pre>`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } 
              });

            //pass authtoken in response

            res.json({success: success, authtoken:authtoken,name:user.name })

        }
        catch (error) {
            res.json({ success: success, Error: "Internal server error" })
        }
    })

module.exports = Router