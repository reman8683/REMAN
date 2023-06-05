package com.reman8683.reman.controller.api.site;

import com.reman8683.reman.util.JsonReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ProgramListController {
    @GetMapping("api/programlist")
    public String getApiList() throws IOException {
        return new JsonReader().fromFile("com/reman8683/ProgramList.json").getJSONArray("program").toString();
    }
}
