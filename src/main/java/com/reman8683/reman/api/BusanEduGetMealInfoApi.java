package com.reman8683.reman.api;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.jsoup.Jsoup;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class BusanEduGetMealInfoApi {
    /**
     * @param date [String] 불러올 급식의 날짜 {yyyy/MM/dd}
     * @return [List&lt;String&gt;] 급식 메뉴
     * @throws IOException
     */
    public String fromSchoolURL(String SchoolMainPageURL, String date, boolean allergy) throws IOException {
        String sysId = SchoolMainPageURL
                .replaceAll("((^\\w+:|^)\\/\\/[\\w.]+\\/)", "")
                .replaceAll("\\/.*", "");

        String data = Jsoup.connect(
                        "https://school.busanedu.net/" + sysId + "/dv/dietView/selectDvList.do")
                .data("dietTy", "중식")
                .data("sysId", sysId)
                .data("monthFirst", date)
                .data("monthEnmt", date)
                .post().text();

        Gson gson = new Gson();

        //전송받은 데이터를 [gson] JsonObject 형태로
        JsonArray jsonArray = gson.fromJson(data, JsonArray.class);
        JsonObject jsonMenu = jsonArray.get(jsonArray.size() - 1).getAsJsonObject();

        //불러온 정보가 급식이 아닌경우
        if (jsonMenu.has("bgnde")) {
            return "[\"급식이 없습니다!\"]";
        }

        //메뉴
        String menu = jsonMenu.get("dietCn").getAsString();

        //알레르기 정보 제거, List<String>화
        List<String> allergyRemovedMenuArray = Arrays.stream(
                menu.replaceAll("\\(.*?\\)", "").split("\n")
        ).toList();

        return gson.toJson(allergyRemovedMenuArray);
    }
}
