package com.example.demo.entity;

import java.util.Date;
import java.util.List;

public class Book {
    private Long bookId;

    private String bookName;

    private String bookNbr;

    private Date uptime;

    private String status;

    private List<Long> bookIds;

    public List<Long> getBookIds() {
        return bookIds;
    }

    public void setBookIds(List<Long> bookIds) {
        this.bookIds = bookIds;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName == null ? null : bookName.trim();
    }

    public String getBookNbr() {
        return bookNbr;
    }

    public void setBookNbr(String bookNbr) {
        this.bookNbr = bookNbr == null ? null : bookNbr.trim();
    }

    public Date getUptime() {
        return uptime;
    }

    public void setUptime(Date uptime) {
        this.uptime = uptime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }
}