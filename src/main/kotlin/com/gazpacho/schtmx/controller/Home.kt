package com.gazpacho.schtmx.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

//this should return some template eventually, but later
@RestController
class HomeController {

    @GetMapping("/")
    fun homeView(): String {
        return "Hello Worm"
    }
}