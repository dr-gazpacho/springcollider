package com.gazpacho.schtmx.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MainView {
    @GetMapping("/")
    fun mainView(): String {
        return "Hello World"
    }
}