package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class BrowseServlet extends HttpServlet {

    private List<Book> books;

    @Override
    public void init() throws ServletException {
        // Initialize the list of books (this could be fetched from a database)
        books = new ArrayList<>();
        books.add(new Book(1, "Book 1", 10));
        books.add(new Book(2, "Book 2", 15));
        books.add(new Book(3, "Book 3", 20));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String contextPath = request.getContextPath();

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html lang='en'><head><meta charset='UTF-8'>");
        out.println("<title>Browse Books</title>");
        out.println("<link rel='stylesheet' href='" + contextPath + "/css/styles.css'>");
        out.println("</head><body>");

        out.println("<h1>Online Book Store</h1>");
        out.println("<div class='cart-icon'>");
        out.println("<a href='" + contextPath + "/cart'>Items in Cart");
        out.println("<img src='" + contextPath + "/images/cart-icon.png' alt='Cart' class='cart-image'>");
        out.println("</a></div>");

        out.println("<ul class='book-list'>");

        for (Book book : books) {
            out.println("<li class='book-item'>");
            out.println("<span class='book-title'>" + book.getTitle() + "</span><br>");
            out.println("<span class='book-price'>$" + book.getPrice() + "</span><br>");
            out.println("<form action='" + contextPath + "/add-to-cart' method='POST'>");
            out.println("<input type='hidden' name='id' value='" + book.getId() + "'>");
            out.println("<button type='submit'>Add to Cart</button>");
            out.println("</form>");
            out.println("</li>");
        }

        out.println("</ul>");
        out.println("</body></html>");
    }
}
