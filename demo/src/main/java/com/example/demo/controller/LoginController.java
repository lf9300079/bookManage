package com.example.demo.controller;

import com.example.demo.entity.Book;
import com.example.demo.entity.User;
import com.example.demo.service.BookService;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private BookService bookService;

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        if (user == null) {
            throw new NullPointerException("参数错误，信息必须传入");
        }

        return loginService.findUser(user);
    }

    @PostMapping("/save")
    public int save(@RequestBody Book book) {
        if (book == null) {
            throw new NullPointerException("参数错误，信息必须传入");
        }
        System.out.println(book.toString());

        return bookService.add(book);

    }

    @GetMapping("/delete/{bookId}")
    public int delete(@PathVariable Long bookId) {
        return bookService.delete(bookId);
    }

    @GetMapping("/findBookById/{bookId}")
    public Book findBookById(@PathVariable Long bookId) {
        return bookService.findBookById(bookId);
    }

    @PostMapping("/batchDelete")
    public int batchDelete(@RequestBody Book book) {
        if (book == null && !book.getBookIds().isEmpty()) {
            throw new NullPointerException("参数错误，信息必须传入");
        }
        System.out.println(book.toString());
        List<Book> list = new ArrayList<>();
        for(Long bookId : book.getBookIds()) {
            Book b = new Book();
            b.setBookId(bookId);
            b.setStatus("3");

            list.add(b);
        }
        return bookService.batchDelete(list);
    }


    @PostMapping("/update")
    public int update(@RequestBody Book book) {
        if (book == null) {
            throw new NullPointerException("参数错误，信息必须传入");
        }
        System.out.println(book.toString());
        return bookService.update(book);
    }

    @PostMapping("getBookList")
    public List<Book> getBookList(@RequestBody Book book) {
        return bookService.findBookList(book);
    }

}
