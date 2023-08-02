package com.example.backend.exception;

public class UserNotFoundException extends RuntimeException{

    private ErrorCode errorCode;
    private String message;

    public UserNotFoundException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}
