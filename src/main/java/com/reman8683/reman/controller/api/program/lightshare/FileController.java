package com.reman8683.reman.controller.api.program.lightshare;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;

@RestController
public class FileController {
    @PostMapping("/lightshare/upload")
    public String saveFile(@RequestParam("file") MultipartFile file) {
        // 파일 업로드 처리 로직
        if (!file.isEmpty()) {
            try {
                System.out.println(file.getOriginalFilename());
                return file.getOriginalFilename() + " uploaded successfully!";
            } catch (Exception e) {
                e.printStackTrace();
                return "File upload failed!";
            }
        } else {
            return "No file selected!";
        }
    }

    public static void saveToFile(byte[] bytes, String filePath) {
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            fos.write(bytes);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
