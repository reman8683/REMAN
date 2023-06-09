package com.reman8683.reman.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

import com.reman8683.reman.RemanApplication;
import org.apache.commons.io.IOUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.core.io.ClassPathResource;

public class JsonReader {
    private String readAll(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp = rd.read();
        while (cp != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }

    public JSONObject fromURL(String url) throws IOException, JSONException {
        InputStream is = new URL(url).openStream();
        try {
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            JSONObject json = new JSONObject(jsonText);
            return json;
        } finally {
            is.close();
        }
    }

    public JSONObject fromFile(String path) throws IOException, JSONException {
        try {
            ClassPathResource staticDataResource = new ClassPathResource(path);
            String staticDataString = IOUtils.toString(staticDataResource.getInputStream(), StandardCharsets.UTF_8);
            JSONObject json = new JSONObject(staticDataString);
            return json;
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return null;
    }
}