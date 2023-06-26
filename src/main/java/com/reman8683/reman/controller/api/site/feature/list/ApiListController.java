package com.reman8683.reman.controller.api.site.feature.list;

import com.reman8683.reman.util.JsonReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ApiListController {
    @GetMapping("api/apilist")
    public String getApiList() throws IOException {
        return new JsonReader().fromFile("com/reman8683/ApiList.json").getJSONArray("api").toString();
    }
}
