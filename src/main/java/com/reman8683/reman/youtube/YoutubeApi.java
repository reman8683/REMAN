package com.reman8683.reman.youtube;

import com.reman8683.reman.util.JsonReader;

import java.io.IOException;

public class YoutubeApi {
    private final String YOUTUBE_API_KEY = "AIzaSyCYaz3tkSUQrYTSJUzwPVjXCLf04622uro";
    private final String YOUTUBE_CHANNEL = "UCc32hAH7k8gsuFHgPxyyfhw";

    private final String URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=1&channelId=" + YOUTUBE_CHANNEL + "&key=" + YOUTUBE_API_KEY;

    public String getLastVideoThumbnailURL() throws IOException {
        String lastVideoURL = new JsonReader().fromURL(URL).getJSONArray("items").getJSONObject(0).getJSONObject("id").getString("videoId");
        return "https://img.youtube.com/vi/" + lastVideoURL + "/maxresdefault.jpg";
    }
}
