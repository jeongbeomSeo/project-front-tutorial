package com.example.backend.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    private ErrorResponse makeErrorResponse(ErrorCode errorCode) {
        return ErrorResponse.builder()
                .code(errorCode.getCode())
                .message(errorCode.getDescription())
                .build();
    }

    @ExceptionHandler(DuplicatedUserException.class)
    public ResponseEntity<ErrorResponse> handleDuplicatedUserException(DuplicatedUserException e) {
        ErrorCode errorCode = e.getErrorCode();
        log.error("handleDuplicatedUserException throw Exception: {}", errorCode.getCode());
        return ResponseEntity
                .status(errorCode.getStatus())
                .body(makeErrorResponse(errorCode));
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UserNotFoundException e) {
        ErrorCode errorCode = e.getErrorCode();
        log.error("handleUserNotFoundException throw Exception: {}", errorCode.getCode());
        final ErrorResponse response = new ErrorResponse(errorCode.getCode(), errorCode.getDescription());
        return new ResponseEntity<>(response, HttpStatus.valueOf(errorCode.getStatus()));
    }

}
