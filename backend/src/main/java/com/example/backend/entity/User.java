package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// @Entity => JPA 의존성 주입을 안해서 해당 어노테이션을 사용 불가
// 추가적으로 application.properties, application.yml 파일에서 데이터베이스 연결 정보 설정 작업 필요
@Entity @Getter @Setter @NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private boolean isManager;

    @Builder
    public User(String email, String name, String pasword, boolean isManager) {
        this.email = email;
        this.name = name;
        this.password = pasword;
        this.isManager = isManager;
    }


}
