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