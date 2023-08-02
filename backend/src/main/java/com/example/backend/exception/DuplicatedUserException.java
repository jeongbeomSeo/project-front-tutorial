package com.example.backend.exception;

public class DuplicatedUserException extends RuntimeException{

    private ErrorCode errorCode;
    private String message;

    public DuplicatedUserException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}
