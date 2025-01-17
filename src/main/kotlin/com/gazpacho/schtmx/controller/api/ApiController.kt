package com.gazpacho.schtmx.controller.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

// Separate controller for API endpoints
@RestController
@RequestMapping("/api")  // All API routes go under /api/*
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
}