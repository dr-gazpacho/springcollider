package com.gazpacho.springcollider.controller.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class ApiController {
    @GetMapping("/cakes")
    fun getCakes(): String {
        print("get cake")
        return ""
    }

    @PostMapping("/cakes")
    fun createCake(@RequestBody cake: String): String {
        print("cake post")
        return ""
    }

    @GetMapping("/test")
    fun handleTest(): Map<String, String> {
        print("incoming get was tight dude")
        return mapOf("message" to "it was tight indeed")
    }
}