package com.example.controller;

import com.example.domain.Pull;
import com.example.repo.PullRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PullController {

    @Autowired

    private PullRepo pullRepo;

    @GetMapping("/pull")
    public String filter_pull(@RequestParam (required = false) Integer filter_pull, Model model){
        Iterable <Pull> pull = null;
        if (filter_pull !=null){
            pull = pullRepo.findByNumber(filter_pull);
        } else {
            pullRepo.findByNumber(filter_pull);
        }
        model.addAttribute("pull", pull);
        model.addAttribute("filter_pull", filter_pull);
        return "pull";
    }
}
