package com.reman8683.reman.controller.api.site.feature.api.busanmealinfo;

import com.reman8683.reman.api.BusanEduGetMealInfoApi;
import lombok.SneakyThrows;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BusanEduMealController {
    @SneakyThrows
    @GetMapping(value = "api/busanedu-getmeal/from-school-url", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getImage(@RequestParam String schoolUrl, @RequestParam String date, boolean allergy) {
        return new BusanEduGetMealInfoApi().fromSchoolURL(schoolUrl, date, allergy);
    }
}
