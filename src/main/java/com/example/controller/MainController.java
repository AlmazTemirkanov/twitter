package com.example.controller;

import com.example.domain.Message;
import com.example.repo.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@Controller
public class MainController {
    @Autowired
    private MessageRepo messageRepo;

    @GetMapping ("/")
    public String main(Model model){
        return "main";
    }

    @GetMapping ("/main")
    public String main_(Model model){
        return "/";
    }

    @GetMapping("/map")
    public String map (@RequestParam (required = false) String filter, Model model) {
        Iterable <Message> messages = messageRepo.findAll();
        if (filter !=null && !filter.isEmpty()){
           messages = messageRepo.findBySeloIgnoreCaseContaining(filter);
        } else {
            messageRepo.findAll();
        }
        model.addAttribute("messages", messages);
        model.addAttribute("filter", filter);

        return "map";
    }


    @GetMapping("/admin")
    public String admin (@RequestParam (required = false) String filterAd, Model model) {
        Iterable <Message> messages = null;
        if (filterAd !=null && !filterAd.isEmpty()){
            messages = messageRepo.findBySeloIgnoreCaseContaining(filterAd);
        } else {
            messageRepo.findAll();
        }
        model.addAttribute("messages", messages);
        model.addAttribute("filterAd", filterAd);

        return "admin";
    }

    @GetMapping ("/calc")
    public String calc(Model model){
        return "calc";
    }

    @GetMapping ("/game_one")
    public String game_one(Model model){
        return "game_one";
    }

    @GetMapping ("/game_two")
    public String game_two(Model model){
        return "game_two";
    }


    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Integer id, Map<String, Object> model) {
        messageRepo.deleteById(id);
        return "redirect:/admin";
    }



    @GetMapping("/add")
    public String add (Map<String, Object> model) {
        Iterable <Message> messages = messageRepo.findAll();
        model.put("message",messages);
        return "add";
    }


    @PostMapping ("/add_new")
    public String add_new(@RequestParam String area, @RequestParam String district,
                            @RequestParam String region, @RequestParam String selo,
                            @RequestParam String voice, @RequestParam String WCDMA,
                      @RequestParam String LTE,
                       Model model){
        Message message = new Message(area, district, region, selo, voice, WCDMA, LTE);
        messageRepo.save(message);
        return "admin";
    }

    @GetMapping("/edit/{id}")
    public String editId(@PathVariable Integer id, Model model ) {
        Iterable <Message> messages = messageRepo.findAllById(id);

        model.addAttribute("id", messages);
        model.addAttribute("area", messages);
        model.addAttribute("district", messages);
        model.addAttribute("region", messages);
        model.addAttribute("selo", messages);
        model.addAttribute("voice", messages);
        model.addAttribute("WCDMA", messages);
        model.addAttribute("LTE", messages);

        return "edit";
    }

    @PostMapping ("/update")
    public String update (@RequestParam (value = "id", required = false) Integer id,
                          @ModelAttribute Message message){
        messageRepo.findAllById(id);
        messageRepo.save(message);

        return "admin";
    }
    @GetMapping("/vip")
    public String vip(Map<String, Object> model) {
        return "vip";
    }
    @GetMapping("/script")
    public String script(Map<String, Object> model) {
        return "script";
    }
    @GetMapping("/office")
    public String office(Map<String, Object> model) {
        return "office";
    }
    @GetMapping("/internet")
    public String internet(Map<String, Object> model) {
        return "internet";
    }
    @GetMapping("/fraud")
    public String fraud(Map<String, Object> model) {
        return "fraud";
    }
    @GetMapping("/perebros")
    public String perebros(Map<String, Object> model) {
        return "perebros";
    }
    @GetMapping("/perebros_ds")
    public String perebros_ds(Map<String, Object> model) {
        return "/perebros_ds";
    }

}


