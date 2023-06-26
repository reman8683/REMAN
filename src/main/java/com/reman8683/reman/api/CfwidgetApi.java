package com.reman8683.reman.api;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.jsoup.Jsoup;

import java.io.IOException;

public class CfwidgetApi {
    public JsonArray getModList(long userId) throws IOException {
        JsonArray modProjectList = getUserInfo(userId).get("projects").getAsJsonArray();
        JsonArray compressedModList = new JsonArray();

        for (JsonElement mod : modProjectList) {
            JsonObject compressedModListItem = new JsonObject();

            JsonObject ModInfo = getModInfo(mod.getAsJsonObject().get("id").getAsLong());

            compressedModListItem.addProperty("id", ModInfo.get("id").getAsLong());
            compressedModListItem.addProperty("title", ModInfo.get("title").getAsString());
            compressedModListItem.addProperty("description", ModInfo.get("summary").getAsString());
            compressedModListItem.addProperty("thumbnail", ModInfo.get("thumbnail").getAsString());
            compressedModListItem.addProperty("url", ModInfo.get("urls").getAsJsonObject().get("project").getAsString());
            compressedModListItem.addProperty("created_at", ModInfo.get("created_at").getAsString());
            compressedModListItem.addProperty("downloads", ModInfo.get("downloads").getAsJsonObject().get("total").getAsInt());

            compressedModList.add(compressedModListItem);
        }

        return compressedModList;
    }

    public JsonObject getUserInfo(long userId) throws IOException {
        String modList = Jsoup.connect("https://api.cfwidget.com/author/" + userId)
                .timeout(5000)
                .ignoreContentType(true)
                .execute().body();

        JsonParser parser = new JsonParser();
        JsonObject jsonModList = parser.parse(modList).getAsJsonObject();
        return jsonModList;
    }
    //https://api.cfwidget.com/
    public JsonObject getModInfo(long modId) throws IOException {
        String modInfo = Jsoup.connect("https://api.cfwidget.com/" + modId)
                .timeout(5000)
                .ignoreContentType(true)
                .execute().body();

        JsonParser parser = new JsonParser();
        JsonObject jsonModInfo = parser.parse(modInfo).getAsJsonObject();
        return jsonModInfo;
    }
}
