    var containerCart=[""];
    
// updateCart: function to add or remove products (prodCart) from cart 
// prodCart: user selected product to add to cart   
function updateCart(prodCart) {

    event.preventDefault();
    // find array cell # of product in the cart; if not found = -1
    var i= containerCart.indexOf(prodCart);
    
    if (i == -1) {
    // prodCart not contained in cart - so add to the end of the array
	containerCart.push(prodCart) ;
	console.log("\n The following product are added to the containerCart: " + prodCart);
    } else {
    // prodCart is already in list so remove from list 
	containerCart.splice(i,1) ;
	console.log("\n \nYou removed the following product from the containerCart: " +prodCart);
    }
    // print out summary of containerCart container 
    // first, let's sort this into alphabetical order
    containerCart=containerCart.sort(); 
    // create a function that lists cart container 
    function listCart(prod,index) {console.log(prod)} ;
    console.log("\n \n Cart Container (in alphabetical order): "); 
    containerCart.forEach(listCart); 
}

function capture() {
// traverse the DOM to access the form field
//var name = document.custInfo.name.value
// stops form submit
event.preventDefault()
	var theEmail= document.custInfo.userEmail.value
	console.log("Thank you so much for signing up for our mailing list, " + theEmail )
	confirm(" Thank you for signing up for our mailing list!")
}

function mySignin() {
	// open new window to have user sign in to account
	window.location='signin.html';
}

function myCart() {
// this is just done to print out a message when the user selects CART - spaceholder for future
//	var xCart= "This will take user to their shopping cart - future development";
//      document.getElementById("msg").innerHTML = xCart;
// 	replaced the above active message with a link to a new page	
	window.location='cart.html';
}

// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

