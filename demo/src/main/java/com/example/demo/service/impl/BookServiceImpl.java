package com.example.demo.service.impl;

import com.example.demo.dao.BookDao;
import com.example.demo.entity.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public int add(Book book) {
        return bookDao.add(book);
    }

    @Override
    public int update(Book book) {
        return bookDao.update(book);
    }

    @Override
    public int delete(Long id) {
        return bookDao.delete(id);
    }

    @Override
    public int batchDelete(List<Book> list) {
        return bookDao.batchDelete(list);
    }

    @Override
    public Book findBookById(Long id) {
        return bookDao.findBookById(id);
    }

    @Override
    public List<Book> findBookList(Book book) {
//        Integer pageNow = book.getPageNow() == null ? 1 : book.getPageNow();
//        Integer pageSize = book.getPageSize() == null ? 1000 : book.getPageSize();

        return bookDao.findBookList(book);
    }
}