package com.reman8683.reman.api;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.jsoup.Jsoup;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class MojangSkinApi {
    public JsonObject MojangApiSkin() throws IOException {
        String ProfileString = Jsoup.connect("https://sessionserver.mojang.com/session/minecraft/profile/c99ac30664464d4295c48077caec9810")
                .timeout(500)
                .ignoreContentType(true)
                .execute().body();
        JsonParser parser = new JsonParser();
        JsonObject getProfile = parser.parse(ProfileString).getAsJsonObject();
        System.out.println(getProfile.get("properties").getAsJsonArray().get(0).getAsJsonObject().get("value"));

        byte[] decoded = Base64.getDecoder().decode(getProfile.get("properties").getAsJsonArray().get(0).getAsJsonObject().get("value").getAsString());
        JsonObject getTexture = parser.parse(new String(decoded, StandardCharsets.UTF_8)).getAsJsonObject();
        return getTexture.get("textures").getAsJsonObject().get("SKIN").getAsJsonObject();
    }
}
