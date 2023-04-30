package com.reman8683.reman.controller.api;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ThumbnailURLController {
    @GetMapping(value = "api/randomscreenshot", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getThumbnailURL() throws IOException {
        Resource[] images = Foobar.loadResources("com/reman8683/jumbotron/*.png");
        Resource image = images[(int) Math.round(Math.random() * images.length) + 1];
        return image.getContentAsByteArray();
    }

    class Foobar {
        private static ResourceLoader resourceLoader = null;

        public Foobar(ResourceLoader resourceLoader) {
            this.resourceLoader = resourceLoader;
        }

        static Resource[] loadResources(String pattern) throws IOException {
            return ResourcePatternUtils.getResourcePatternResolver(resourceLoader).getResources(pattern);
        }
    }
}
