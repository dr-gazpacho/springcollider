package com.gazpacho.springcollider.controller.api

import com.gazpacho.springcollider.service.SuperColliderService
import com.gazpacho.springcollider.model.SliderRequest
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
    @GetMapping("/createTest")
    fun hadndleCreateTest(): HttpStatus {
        superColliderService.sendSynthMessage("/synth/create", listOf("frequency", 220))
        return HttpStatus.OK
    }

    @PostMapping("/volume")
    fun handleAdjustVolume(@RequestBody body: SliderRequest): HttpStatus {
        superColliderService.sendSynthMessage("/system/volume", listOf(body.value))
        return HttpStatus.OK
    }

    @GetMapping("/free")
    fun handleFreeTest(): HttpStatus {
        superColliderService.sendSynthMessage("/synth/free", listOf("frequency"))
        return HttpStatus.OK
    }

    @PostMapping("/frequency", consumes = ["application/json"])
    fun handleFrequencyChange(@RequestBody body: SliderRequest): HttpStatus {
        superColliderService.sendSynthMessage("/synth/params", listOf(body.symbol, body.value))
        return HttpStatus.OK
    }
}

