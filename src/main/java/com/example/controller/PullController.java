package com.example.controller;

import com.example.domain.Pull;
import com.example.model.PullRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class PullController {

    @Autowired
    private PullRepo pullRepo;

    @PostMapping("filter_pull")
    public String filter_pull(@RequestParam Integer filter_pull, Map<String, Object> model){
        Iterable <Pull> pull;
        if (filter_pull !=null){
            pull = pullRepo.findByNumber(filter_pull);
        } else {
            pull = pullRepo.findByNumber(filter_pull);
        }
        model.put("pull", pull);
        return "pull";
    }
}
