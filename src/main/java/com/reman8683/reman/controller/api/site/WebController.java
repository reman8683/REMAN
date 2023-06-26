package com.reman8683.reman.controller.api.site;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {
            "",
            "/api/**",
            "/program/**",
            "/mod/**",
            "/repo/**"

    })
    public String forward() {
        return "forward:/index.html";
    }
}