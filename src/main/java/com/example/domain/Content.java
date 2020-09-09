package com.example.domain;


import lombok.*;

import javax.persistence.*;

@Data
@Entity
public class Content {
    @Id
    @SequenceGenerator(name="seq_Con", initialValue=10000, allocationSize=1)
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="seq_Con")

    private Integer id;
    private String number;
    private String type;
    private String service;
    private String provider;
    private String tariff;
    private String rounding;

    public Content(String number, String type, String service, String provider, String tariff, String rounding) {
        this.number = number;
        this.type = type;
        this.service = service;
        this.provider = provider;
        this.tariff = tariff;
        this.rounding = rounding;
    }


    public Content() {
    }

}
