import React, { useState } from "react";
import ProductContext from "./ProductContext";


const ProductState = (props) => {


  //state for getting the product details from data base
  const [electronics, setElectronics] = useState([])
  const [Groceries, setGroceries] = useState([])
  const [Clothes, setClothes] = useState([])


  //fetch all items from database 

  //1.electronics get electronics product GET method
  const getElectronics = async () => {
    //Api Call
    try {
      const response = await fetch(`http://localhost:5000/Routes/Product/electronics`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }

      });
      const json = await response.json()

      setElectronics(json)
    }
    //error occured in server
    catch (error) {
      console.error("some error occured")
    }
  }

  //2.groceries get groceries product by GET method
  const getGroceries = async () => {
    //Api Call
    try {
      const response = await fetch(`http://localhost:5000/Routes/Product/Groceries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }

      });
      const json = await response.json()

      setGroceries(json)
    }
    //error occured in server
    catch (error) {
      console.error("some error occured")
    }
  }

  //2.groceries get groceries product by GET method
  const getClothes = async () => {
    //Api Call
    try {
      const response = await fetch(`http://localhost:5000/Routes/Product/Clothes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }

      });
      const json = await response.json()

      setClothes(json)
    }
    //error occured in server
    catch (error) {
      console.error("some error occured")
    }
  }





  //Logic on bucket for backend and also frontend

  //1. creating function for add to bucket
  const addToBucket = async (Title, Image, Price) => {
    const response = await fetch(`http://localhost:5000/Routes/Product/Addproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

      body: JSON.stringify({ Title, Image, Price })
    });
    const json = await response.json()
    console.log(json)


  }

  //2. Get the bucket data for user loginned 

  //create a cart state
  const bucket = []
  const [cart, setCart] = useState(bucket)

  const GetBucket = async () => {
    const response = await fetch(`http://localhost:5000/Routes/Product/Getbucket`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

    });
    const usercart = await response.json()
    setCart(usercart)
  }


  //3. delete item from bucket and update the bucket for loggedin user
  const DeleteItem = async (id) => {
    const response = await fetch(`http://localhost:5000/Routes/Product/deleteitem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

    });
    const json = await response.json()
    console.log(json)
    //update the bucket
    const Newcart = cart.filter((item) => { return item._id !== id })
    setCart(Newcart)
  }


  //get the price total of item saved in cart of user 
  const getTotalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].Price
    }
    return sum
  }

  //checkout function when user checkout clear the bucket
  const DeleteAllitems = async () => {
    const response = await fetch(`http://localhost:5000/Routes/Product/deleteallitems`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

    });
    const json = await response.json()

    //set cart to empty for front end
    setCart(json)
  }


  return (
    <ProductContext.Provider value={{ electronics, Groceries, getElectronics, getGroceries, addToBucket, GetBucket, cart, DeleteItem, getTotalPrice, DeleteAllitems ,getClothes ,Clothes }}>
      {props.children}
    </ProductContext.Provider>
  )
}
export default ProductState
