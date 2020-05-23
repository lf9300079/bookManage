package com.example.demo.service;

import com.example.demo.entity.Book;

import java.util.List;

public interface BookService {

    int add(Book book);

    int update(Book book);

    int delete(Long id);

    int batchDelete(List<Book> list);

    Book findBookById(Long id);

    List<Book> findBookList(Book book);
}