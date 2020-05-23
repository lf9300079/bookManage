package com.example.demo.dao;

import com.example.demo.entity.Book;
import com.example.demo.mapper.BookMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BookDao extends BookMapper {

    int add(Book book);

    int update(Book book);

    int delete(Long id);

    int batchDelete(@Param("list") List<Book> list);

    Book findBookById(Long id);

    Book findBook(Book book);

    List<Book> findBookList(Book book);
}