package com.gazpacho.springcollider.controller.api

import com.gazpacho.springcollider.service.SuperColliderService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:5173"])
@RequestMapping("/api")
class ApiController (
    val superColliderService: SuperColliderService
) {
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
        superColliderService.sendSynthMessage("/synth/create", listOf("test", 440))
        return mapOf("message" to "it was tight indeed")
    }
}