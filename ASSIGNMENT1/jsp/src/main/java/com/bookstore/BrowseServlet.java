package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/")
public class BrowseServlet extends HttpServlet {

    private List<Book> books;

    @Override
    public void init() throws ServletException {
        // Initialize the list of books
        books = new ArrayList<>();
        books.add(new Book(1, "Book 1", 10));
        books.add(new Book(2, "Book 2", 15));
        books.add(new Book(3, "Book 3", 20));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute("books", books);
        request.getRequestDispatcher("/WEB-INF/jsp/browse.jsp").forward(request, response);
    }
}
