package com.example.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class Text {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String text;

    public Text() {

    }
}
