package com.example.controller;

import com.example.domain.SMS;
import com.example.model.SMSRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class SMSController {

    @Autowired
    private SMSRepo smsRepo;

    @PostMapping("/filter_sms")
    public String filter_sms (@RequestParam String filter_sms, Map<String, Object> model ) {
        Iterable <SMS> sms;
        if (filter_sms !=null && !filter_sms.isEmpty()){
            sms = smsRepo.findByDateIgnoreCaseContaining(filter_sms);
        } else {
            sms = smsRepo.findAll();
        }
        model.put("sms", sms);
        return "sms";
    }

    @PostMapping("/filter_sms_admin")
    public String filter_sms_admin (@RequestParam String filter_sms_admin, Map<String, Object> model ) {
        Iterable <SMS> sms;
        if (filter_sms_admin !=null && !filter_sms_admin.isEmpty()){
            sms = smsRepo.findByDateIgnoreCaseContaining(filter_sms_admin);
        } else {
            sms = smsRepo.findAll();
        }
        model.put("sms", sms);
        return "sms_admin";
    }

    @GetMapping("/add_sms")
    public String add_sms (Map<String, Object> model) {
        Iterable <SMS> sms = smsRepo.findAll();
        model.put("sms",sms);
        return "add_sms";
    }

    @PostMapping("add_sms")
    public String add_sms_new (@RequestParam String date, @RequestParam String topic,
                               @RequestParam String initiator, @RequestParam String text_topic,
                               @RequestParam String pull, @RequestParam String comments,
                               Model model){
        SMS sms = new SMS (date, topic, initiator, text_topic, pull, comments);
        smsRepo.save(sms);
        return "sms_admin";
    }

    @GetMapping("/delete_sms/{id}")
    public String delete_sms(@PathVariable Integer id, Map<String, Object> model) {
        smsRepo.deleteById(id);
        return "redirect:/sms_admin";
    }

    @GetMapping("/sms_admin")
    public String sms_admin(Map<String, Object> model) {
        return "sms_admin";
    }




}
