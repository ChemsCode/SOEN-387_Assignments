package com.bookstore;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/browse")
public class BrowseServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Book> books = new ArrayList<>();
        books.add(new Book(1, "Book 1", 10));
        books.add(new Book(2, "Book 2", 15));
        books.add(new Book(3, "Book 3", 20));

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><head><title>Browse Books</title><link rel='stylesheet' type='text/css' href='css/styles.css'></head><body>");
        out.println("<h1>Online Book Store</h1><div class='cart-icon'><a href='/cart'>Items in Cart</a></div>");
        out.println("<ul class='book-list'>");

        for (Book book : books) {
            out.println("<li class='book-item'>" +
                    "<span class='book-title'>" + book.getTitle() + "</span><br>" +
                    "<span class='book-price'>$" + book.getPrice() + "</span><br>" +
                    "<form action='/cart' method='POST'>" +
                    "<input type='hidden' name='id' value='" + book.getId() + "'>" +
                    "<button type='submit'>Add to Cart</button>" +
                    "</form></li>");
        }

        out.println("</ul></body></html>");
    }
}
