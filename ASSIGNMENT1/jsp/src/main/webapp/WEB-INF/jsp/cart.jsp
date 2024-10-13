<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bookstore.CartItem" %>
<%@ page import="java.util.List" %>
<%
    List<CartItem> cart = (List<CartItem>) request.getAttribute("cart");
    String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="<%= contextPath %>/css/styles.css">
</head>
<body>
    <h1>Your Shopping Cart</h1>
    <table>
        <thead>
            <tr>
                <th>Book</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <% if (cart != null && !cart.isEmpty()) { %>
                <% for (CartItem item : cart) { %>
                    <tr>
                        <td><%= item.getTitle() %></td>
                        <td>
                            <form action="<%= contextPath %>/cart/update/<%= item.getId() %>" method="POST">
                                <input type="number" name="quantity" value="<%= item.getQuantity() %>" min="1">
                                <button type="submit">Update</button>
                            </form>
                        </td>
                        <td>$<%= item.getPrice() %></td>
                        <td>$<%= item.getPrice() * item.getQuantity() %></td>
                        <td>
                            <form action="<%= contextPath %>/cart/remove/<%= item.getId() %>" method="POST">
                                <button type="submit">Remove</button>
                            </form>
                        </td>
                    </tr>
                <% } %>
            <% } else { %>
                <tr>
                    <td colspan="5">Your cart is empty.</td>
                </tr>
            <% } %>
        </tbody>
    </table>
    <a href="<%= contextPath %>/">Continue Shopping</a> | <a href="<%= contextPath %>/checkout">Checkout</a>
</body>
</html>
