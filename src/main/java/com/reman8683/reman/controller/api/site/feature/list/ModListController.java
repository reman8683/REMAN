package com.reman8683.reman.controller.api.site.feature.list;

import com.reman8683.reman.api.CfwidgetApi;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ModListController {
    //new CfwidgetApi().getModList(103159604)
    @GetMapping("api/modlist")
    public String getApiList() throws IOException {
        return new CfwidgetApi().getModList(103159604).toString();
    }
}
