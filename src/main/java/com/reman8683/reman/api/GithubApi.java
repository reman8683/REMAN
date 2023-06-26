package com.reman8683.reman.api;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.jsoup.Jsoup;

import java.io.IOException;

public class GithubApi {
    public JsonArray getGithubRepoList(String userName) throws IOException {
        JsonArray jsonAllRepoList = getGithubAllRepoList(userName);
        JsonArray compressedRepoList = new JsonArray();

        for (JsonElement repositories: jsonAllRepoList) {
            JsonObject repo = repositories.getAsJsonObject();
            JsonObject compressedRepoListItem = new JsonObject();

            //reman8683이름의 기본 repo는 통과
            if (repo.get("name").getAsString().equals("reman8683"))
                continue;

            compressedRepoListItem.addProperty("id", repo.get("id").getAsLong());
            compressedRepoListItem.addProperty("title", repo.get("name").getAsString());
            compressedRepoListItem.addProperty("url", repo.get("html_url").getAsString());
            compressedRepoListItem.addProperty("lang", repo.get("language").getAsString());
            compressedRepoListItem.addProperty("star", repo.get("stargazers_count").getAsInt());

            compressedRepoList.add(compressedRepoListItem);
        }
        return compressedRepoList;
    }

    public JsonArray getGithubAllRepoList(String userName) throws IOException {
        String allRepoList = Jsoup.connect("https://api.github.com/users/" + userName + "/repos")
                .timeout(5000)
                .ignoreContentType(true)
                .execute().body();

        JsonParser parser = new JsonParser();
        JsonArray jsonAllRepoList = parser.parse(allRepoList).getAsJsonArray();
        return jsonAllRepoList;
    }
}
