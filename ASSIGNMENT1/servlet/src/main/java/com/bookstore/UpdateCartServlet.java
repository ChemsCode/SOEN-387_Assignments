package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class UpdateCartServlet extends HttpServlet {

    @SuppressWarnings("unchecked")
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int id = Integer.parseInt(request.getPathInfo().substring(1)); // Get ID from URL
        int quantity = Integer.parseInt(request.getParameter("quantity"));

        HttpSession session = request.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        if (cart != null) {
            for (CartItem item : cart) {
                if (item.getId() == id) {
                    item.setQuantity(quantity);
                    break;
                }
            }
        }

        response.sendRedirect(request.getContextPath() + "/cart");
    }
}
