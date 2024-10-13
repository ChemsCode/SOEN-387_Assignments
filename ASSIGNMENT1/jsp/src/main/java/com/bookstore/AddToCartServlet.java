package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/add-to-cart")
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

        // Retrieve the book from the application context
        List<Book> books = (List<Book>) getServletContext().getAttribute("books");
        if (books == null) {
            books = new ArrayList<>();
            books.add(new Book(1, "Book 1", 10));
            books.add(new Book(2, "Book 2", 15));
            books.add(new Book(3, "Book 3", 20));
            getServletContext().setAttribute("books", books);
        }

        Book book = null;
        for (Book b : books) {
            if (b.getId() == id) {
                book = b;
                break;
            }
        }

        if (book == null) {
            response.sendRedirect(request.getContextPath() + "/");
            return;
        }

        // Add to cart or update quantity
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
}
