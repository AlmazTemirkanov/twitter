package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/", "/main", "/filter", "/prepaid", "/postpaid",
                                        "/filter_postpaid", "/filter_prepaid", "/privet",
                                        "/sms", "/filter_sms", "/filter_pull", "/filter_crmpost", "/crmpost",
                        "/pull", "/map", "/crm", "/filter_crm","/calc", "/css/style.css", "/js/main.min.js",
                        "/img/theme-4.jpg",
                        "/img/font-1.jpg",
                        "/img/psd-1.jpg",
                        "/img/psd-2.jpg",
                        "/img/psd-3.jpg",
                        "/img/ai-1.jpg",
                        "/img/ai-2.jpg",
                        "/img/theme-2.jpg",
                        "img/psd-3.jpg",
                        "/img/font-2.jpg",
                        "/img/font-3.jpg",
                        "/img/icon-font.svg",
                        "/img/icon-themes.svg",
                        "/img/icon-psd.svg",
                        "/img/icon-ai.svg",
                        "/img/icon-premium.svg",
                        "/img/icon-photo.svg",
                        "/img/next.svg",
                        "/img/prev.svg",

                                        "/filter_privet", "/filter_title", "/content", "/filter_content", "/vip").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
                .logout()
                .permitAll();
    }

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails user =
                User.withDefaultPasswordEncoder()
                        .username("admin")
                        .password("3edcVFR$")
                        .roles("USER")
                        .build();
        UserDetails user2 =
                User.withDefaultPasswordEncoder()
                        .username("admin1")
                        .password("admin13edcVFR$")
                        .roles("USER2")
                        .build();
        UserDetails user3 =
                User.withDefaultPasswordEncoder()
                        .username("elaman")
                        .password("elaman4rfvBGT%")
                        .roles("USER2")
                        .build();

        return new InMemoryUserDetailsManager(user, user2, user3);
    }
}