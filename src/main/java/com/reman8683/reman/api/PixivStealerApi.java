package com.reman8683.reman.api;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;

import java.net.SocketTimeoutException;

public class PixivStealerApi {
    public static JsonArray getImage(String tag, int count) throws Exception {
        //string -> hexString
        byte[] tagBytes = tag.getBytes("utf-8");
        String tagUTF8 = "";
        for (byte tagByte : tagBytes) {
            tagUTF8 += "%".concat(Integer.toHexString(tagByte).replace("ffffff", ""));
        }


        String baseURI = "https://www.pixiv.net/ajax/search/illustrations/" + tagUTF8 + "?word=" + tagUTF8 + "&order=date_d&mode=all&p=1&s_mode=s_tag_full&type=illust_and_ugoira&lang=ko";
        JsonArray Images = new JsonArray();

        for (int i = 0; i < count; i++) {
            JsonObject Image = new JsonObject();
            for (int retry = 0; retry < 10; retry++) {
                try {
                    String js = Jsoup.connect(baseURI)
                            .timeout(500)
                            .ignoreContentType(true)
                            .execute().body();
                    JsonParser jsonParser = new JsonParser();
                    JsonArray jsDataArray = jsonParser.parse(js)
                            .getAsJsonObject().get("body")
                            .getAsJsonObject().get("illust")
                            .getAsJsonObject().get("data").getAsJsonArray();

                    int random = (int) (Math.random() * jsDataArray.size());
                    JsonObject jsData = jsDataArray.get(random).getAsJsonObject();

                    Image.addProperty("id", jsData.get("id").getAsInt());
                    Image.addProperty("title", jsData.get("title").getAsString());
                    Image.addProperty("url", jsData.get("url").getAsString()
                            //url의 이름을 바꿔 높은화질의 masterImageUrl로 변경
                            .replace("/c/250x250_80_a2", "")
                            .replace("square", "master")
                            .replace("/custom-thumb", "/img-master")
                            .replace("custom", "master")
                    );
                    break;
                } catch (HttpStatusException e) {
                    e.printStackTrace();
                } catch (SocketTimeoutException e) {
                    e.printStackTrace();
                }
            }
            if (Image.size() > 0) {
                Images.add(Image);
            }
        }
        return Images;
    }
}
