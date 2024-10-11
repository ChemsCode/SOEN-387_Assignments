package com.bookstore;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));

        HttpSession session = request.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        if (cart == null) {
            cart = new ArrayList<>();
            session.setAttribute("cart", cart);
        }

        boolean found = false;
        for (CartItem item : cart) {
            if (item.getId() == id) {
                item.setQuantity(item.getQuantity() + 1);
                found = true;
                break;
            }
        }

        if (!found) {
            cart.add(new CartItem(id, "Book " + id, id * 10, 1));
        }

        response.sendRedirect("/cart");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><head><title>Shopping Cart</title><link rel='stylesheet' type='text/css' href='css/styles.css'></head><body>");
        out.println("<h1>Your Shopping Cart</h1>");
        out.println("<table><tr><th>Book</th><th>Quantity</th><th>Price</th><th>Total</th><th>Actions</th></tr>");

        if (cart != null) {
            for (CartItem item : cart) {
                out.println("<tr>" +
                        "<td>" + item.getTitle() + "</td>" +
                        "<td>" + item.getQuantity() + "</td>" +
                        "<td>$" + item.getPrice() + "</td>" +
                        "<td>$" + (item.getPrice() * item.getQuantity()) + "</td>" +
                        "<td><form action='/cart/remove' method='POST'>" +
                        "<input type='hidden' name='id' value='" + item.getId() + "'>" +
                        "<button type='submit'>Remove</button></form></td></tr>");
            }
        }

        out.println("</table>");
        out.println("<a href='/browse'>Continue Shopping</a> | <a href='/checkout'>Checkout</a>");
        out.println("</body></html>");
    }
}
