package com.reman8683.reman.controller.api.site.feature.list;

import com.reman8683.reman.api.GithubApi;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class GithubRepoListController {
    @GetMapping("api/repolist")
    public String getApiList() throws IOException {
        return new GithubApi().getGithubRepoList("reman8683").toString();
    }
}
