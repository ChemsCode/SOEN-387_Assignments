package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class CartServlet extends HttpServlet {

    @SuppressWarnings("unchecked")
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        String contextPath = request.getContextPath();

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html lang='en'><head><meta charset='UTF-8'>");
        out.println("<title>Shopping Cart</title>");
        out.println("<link rel='stylesheet' href='" + contextPath + "/css/styles.css'>");
        out.println("</head><body>");
        out.println("<h1>Your Shopping Cart</h1>");
        out.println("<table>");
        out.println("<thead><tr>");
        out.println("<th>Book</th><th>Quantity</th><th>Price</th><th>Total</th><th>Actions</th>");
        out.println("</tr></thead>");
        out.println("<tbody>");

        if (cart != null && !cart.isEmpty()) {
            for (CartItem item : cart) {
                out.println("<tr>");
                out.println("<td>" + item.getTitle() + "</td>");
                out.println("<td>");
                out.println("<form action='" + contextPath + "/cart/update/" + item.getId() + "' method='POST'>");
                out.println("<input type='number' name='quantity' value='" + item.getQuantity() + "' min='1'>");
                out.println("<button type='submit'>Update</button>");
                out.println("</form>");
                out.println("</td>");
                out.println("<td>$" + item.getPrice() + "</td>");
                out.println("<td>$" + (item.getPrice() * item.getQuantity()) + "</td>");
                out.println("<td>");
                out.println("<form action='" + contextPath + "/cart/remove/" + item.getId() + "' method='POST'>");
                out.println("<button type='submit'>Remove</button>");
                out.println("</form>");
                out.println("</td>");
                out.println("</tr>");
            }
        } else {
            out.println("<tr><td colspan='5'>Your cart is empty.</td></tr>");
        }

        out.println("</tbody></table>");
        out.println("<a href='" + contextPath + "/'>Continue Shopping</a> | ");
        out.println("<a href='" + contextPath + "/checkout'>Checkout</a>");
        out.println("</body></html>");
    }
}
