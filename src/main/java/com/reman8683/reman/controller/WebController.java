package com.reman8683.reman.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {
            "",
            "/api",
            "/program",

            //links
            "/youtube",
            "/twitch",
            "/github",
            "/discord",
            "/instagram",

            "/api/test/pixivstealer",

            "/program/lightshare"

    })
    public String forward() {
        return "forward:/index.html";
    }
}