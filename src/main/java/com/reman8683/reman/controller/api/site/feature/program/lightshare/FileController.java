package com.reman8683.reman.controller.api.site.feature.program.lightshare;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

@RestController
public class FileController {
    @PostMapping("/lightshare/upload")
    public String saveFile(@RequestParam("file") MultipartFile file) {
        // 파일 업로드 처리 로직
        if (!file.isEmpty()) {
            try {
                System.out.println(file.getOriginalFilename());
                //saveToFile(file, "/resource/lightshare/temp/");
                return file.getOriginalFilename() + " uploaded successfully!";
            } catch (Exception e) {
                e.printStackTrace();
                return "File upload failed!";
            }
        } else {
            return "No file selected!";
        }
    }

    public static void saveToFile(MultipartFile file, String filePath) {
        File upload = new File(filePath);
        if(!upload.exists()) {
            upload.mkdirs();
        }
        try (FileOutputStream fos = new FileOutputStream(filePath + UUID.randomUUID() + "-" + file.getOriginalFilename())) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
