package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AddToCartServlet extends HttpServlet {

    @SuppressWarnings("unchecked")
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int id = Integer.parseInt(request.getParameter("id"));

        HttpSession session = request.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        if (cart == null) {
            cart = new ArrayList<>();
            session.setAttribute("cart", cart);
        }

        // Find the book by ID (this should ideally be done via a service or DAO)
        Book book = getBookById(id);
        if (book == null) {
            response.sendRedirect(request.getContextPath() + "/");
            return;
        }

        // Add the book to the cart or update quantity if it already exists
        boolean found = false;
        for (CartItem item : cart) {
            if (item.getId() == id) {
                item.setQuantity(item.getQuantity() + 1);
                found = true;
                break;
            }
        }

        if (!found) {
            cart.add(new CartItem(book.getId(), book.getTitle(), book.getPrice(), 1));
        }

        response.sendRedirect(request.getContextPath() + "/");
    }

    private Book getBookById(int id) {
        // In a real application, this would query the database or a service
        // For now, we'll use a hardcoded list as in BrowseServlet
        List<Book> books = new ArrayList<>();
        books.add(new Book(1, "Book 1", 10));
        books.add(new Book(2, "Book 2", 15));
        books.add(new Book(3, "Book 3", 20));

        for (Book book : books) {
            if (book.getId() == id) {
                return book;
            }
        }
        return null;
    }
}
