package com.sanketh.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class UserController {

    Logger log = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/get")
    public String getUser() {
        log.info("user fetched");

        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);

        return "Fetched User";
    }

}
