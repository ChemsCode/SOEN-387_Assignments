package com.bookstore;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class CheckoutServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();
        session.invalidate(); // Clear the cart after checkout

        String contextPath = request.getContextPath();

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html lang='en'><head><meta charset='UTF-8'>");
        out.println("<title>Checkout Complete</title>");
        out.println("<link rel='stylesheet' href='" + contextPath + "/css/styles.css'>");
        out.println("</head><body>");
        out.println("<h1>Checkout Complete!</h1>");
        out.println("<p>Thank you for shopping with us!</p>");
        out.println("</body></html>");
    }
}
