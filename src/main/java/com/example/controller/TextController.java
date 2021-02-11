package com.example.controller;

import com.example.domain.Text;
import com.example.repo.TextRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
@AllArgsConstructor
public class TextController {

    @Autowired
    private TextRepo textRepo;



    @GetMapping ("/script_text")
    public String script_text (@RequestParam(required = false) String filter, Model model) {
        Iterable <Text> texts = textRepo.findAll();
//        if (filter !=null && !filter.isEmpty()){
//            texts = textRepo.findBytextIgnoreCaseContaining(filter);
//        } else {
//            textRepo.findAll();
//        }
        model.addAttribute("texts", texts);
//        model.addAttribute("filter", filter);

        return "script_text";
    }
}
