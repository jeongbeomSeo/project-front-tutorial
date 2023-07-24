package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.net.InetAddress;
import java.net.UnknownHostException;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

		try {
			InetAddress ip = InetAddress.getLocalHost();
			System.out.println("Your current IP address: " + ip.getHostAddress());
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
	}

}
