package com.gazpacho.springcollider.controller.api

import com.gazpacho.springcollider.service.SuperColliderService
import org.springframework.http.HttpStatus
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
    @GetMapping("/test")
    fun handleTest(): HttpStatus {
        superColliderService.sendSynthMessage("/synth/create", listOf("test", 440))
        return HttpStatus.OK
    }

    @PostMapping("/frequency", consumes = ["application/json"])
    fun handleFrequencyChange(@RequestBody body: Any): HttpStatus {
        println(body)
        return HttpStatus.OK
    }
}

