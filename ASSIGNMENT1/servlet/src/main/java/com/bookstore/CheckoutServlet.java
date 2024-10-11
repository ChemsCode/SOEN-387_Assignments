package com.bookstore;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/checkout")
public class CheckoutServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.invalidate(); // Clear the cart after checkout

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><head><title>Checkout Complete</title><link rel='stylesheet' type='text/css' href='css/styles.css'></head><body>");
        out.println("<h1>Checkout Complete!</h1>");
        out.println("<p>Thank you for shopping with us.</p>");
        out.println("</body></html>");
    }
}
