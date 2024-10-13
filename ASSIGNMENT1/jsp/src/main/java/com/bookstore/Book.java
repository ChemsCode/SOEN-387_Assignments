package com.bookstore;

public class Book {
    private int id;
    private String title;
    private int price;

    public Book(int id, String title, int price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    public int getId() { return id; }
    public String getTitle() { return title; }
    public int getPrice() { return price; }
}
