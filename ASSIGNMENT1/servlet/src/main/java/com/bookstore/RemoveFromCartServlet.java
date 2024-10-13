package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.List;
import java.util.Iterator;

public class RemoveFromCartServlet extends HttpServlet {

    @SuppressWarnings("unchecked")
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int id = Integer.parseInt(request.getPathInfo().substring(1)); // Get ID from URL

        HttpSession session = request.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        if (cart != null) {
            Iterator<CartItem> iterator = cart.iterator();
            while (iterator.hasNext()) {
                CartItem item = iterator.next();
                if (item.getId() == id) {
                    iterator.remove();
                    break;
                }
            }
        }

        response.sendRedirect(request.getContextPath() + "/cart");
    }
}
