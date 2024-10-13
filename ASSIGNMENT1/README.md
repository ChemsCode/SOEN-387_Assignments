# Assignment 1: Online Bookstore with Servlet, JSP, and Node.js

## Overview

This project involves implementing an online bookstore and shopping cart using three different technologies: Java Servlets, JSP, and Node.js (Express.js). Each project provides the same functionality: allowing users to browse books, add them to a shopping cart, update cart items, and proceed to checkout.

## Project Structure

Assignment1/ 
├── servlet/ # Java Servlet-based implementation 
├── jsp/ # JSP-based implementation 
└── nodejs/ # Node.js (Express.js) implementation


Each folder contains the necessary files, source code, and configuration to run the project in the corresponding technology.

## Features

- Browse books and view details.
- Add books to the shopping cart.
- Update the quantity of books in the cart or remove them.
- Proceed to checkout.

# Java Servlet Project

## Overview

The Servlet-based project uses Java Servlets to handle HTTP requests and responses. It serves pages for browsing books, managing the shopping cart, and checking out.

## How to Run

 Build with Maven:

```bash
mvn clean install
```

### Deploy to Tomcat:
- Copy the .war file from target/ to the Tomcat webapps/ folder.
- Start Tomcat and access the app at http://localhost:8080/bookstore.
### Key Files
**Servlets:** `BrowseServlet`, `CartServlet`, `AddToCartServlet`, `CheckoutServlet`, `RemoveFromCartServlet`, `UpdateCartServlet`

**Static Resources:** `src/main/webapp/css/styles.css`, `src/main/webapp/images/cart-icon.png`

# JSP Project

## Overview

This project uses JSP pages to render dynamic HTML content, with Servlets handling business logic such as form submissions. It provides the same bookstore functionality as the other versions.

## How to Run

### Build with Maven:

```bash
mvn clean install
```

### Deploy to Tomcat:
- Copy the .war file from target/ to the Tomcat webapps/ folder.
- Start Tomcat and access the app at http://localhost:8080/bookstore.
### Key Files

**JSP Pages:** `browse.jsp`, `cart.jsp`, `checkout.jsp`

**Servlets:** `BrowseServlet`, `CartServlet`, `AddToCartServlet`, `CheckoutServlet`, `RemoveFromCartServlet`, `UpdateCartServlet`

**Static Resources:** `src/main/webapp/css/styles.css`, `src/main/webapp/images/cart-icon.png`

# Node.js Bookstore Project

## Overview

This project is a Node.js implementation of an online bookstore, using Express.js for routing and middleware to serve static files. The app allows users to browse books, manage their shopping cart, and proceed to checkout, offering the same functionality as the other versions of the bookstore.

## How to Run

### Install Dependencies

```bash
cd nodejs/
npm install
```

### Start the Server
```bash
node app.js
```

### Access the Application:
-  http://localhost:3000/.

### Key Files

**NodeJS** `app.js`

**Static Resources:** `public/css/styles.css`, `public/images/cart-icon.png`
