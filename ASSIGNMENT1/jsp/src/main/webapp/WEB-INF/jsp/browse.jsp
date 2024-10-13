<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bookstore.Book" %>
<%@ page import="java.util.List" %>
<%
    List<Book> books = (List<Book>) request.getAttribute("books");
    String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Browse Books</title>
    <link rel="stylesheet" href="<%= contextPath %>/css/styles.css">
</head>
<body>
    <h1>Online Book Store</h1>
    <div class="cart-icon">
        <a href="<%= contextPath %>/cart">
            Items in Cart
            <img src="<%= contextPath %>/images/cart-icon.png" alt="Cart" class="cart-image">
        </a>
    </div>
    <ul class="book-list">
        <% for (Book book : books) { %>
            <li class="book-item">
                <span class="book-title"><%= book.getTitle() %></span><br>
                <span class="book-price">$<%= book.getPrice() %></span><br>
                <form action="<%= contextPath %>/add-to-cart" method="POST">
                    <input type="hidden" name="id" value="<%= book.getId() %>">
                    <button type="submit">Add to Cart</button>
                </form>
            </li>
        <% } %>
    </ul>
</body>
</html>
