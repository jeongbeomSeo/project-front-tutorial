package com.example.backend.exception;

public enum ErrorCode {
    USER_NOT_FOUND(400, "ACCOUNT-001", "계정을 못찾은 경우"),
    DUPLICATE_LOGIN_ID(400, "ACCOUNT-002", "계정명이 중복된 경우");

    private final int status;
    private final String code;
    private final String description;

    private ErrorCode(int status, String code, String description) {
        this.status = status;
        this.code = code;
        this.description = description;
    }

    public int getStatus() {
        return status;
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }
}
