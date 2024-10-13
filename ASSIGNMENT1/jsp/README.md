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