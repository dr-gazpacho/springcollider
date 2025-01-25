package com.gazpacho.springcollider.controller.api

import com.gazpacho.springcollider.service.SuperColliderService
import com.gazpacho.springcollider.model.SliderRequest
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:5173"])
@RequestMapping("/api")
class ApiController (
    val superColliderService: SuperColliderService
) {
    @GetMapping("/on")
    fun hadndleCreateTest(): HttpStatus {
        superColliderService.sendSynthMessage("/synth/create", listOf("carrier", 220))
        return HttpStatus.OK
    }

    @GetMapping("/off")
    fun handleFreeTest(): HttpStatus {
        superColliderService.sendSynthMessage("/synth/free", listOf("frequency"))
        return HttpStatus.OK
    }

    @PostMapping("/volume")
    fun handleAdjustVolume(@RequestBody body: SliderRequest): HttpStatus {
        superColliderService.sendSynthMessage("/system/volume", listOf(body.value))
        return HttpStatus.OK
    }

    @PostMapping("/frequency/{target}", consumes = ["application/json"])
    fun handleFrequencyChange(
        @RequestBody body: SliderRequest,
        @PathVariable target: String
    ): HttpStatus {
            when (target) {
                "carrier" -> superColliderService.sendSynthMessage("/synth/params", listOf(body.symbol, body.value, "carrier"))
                "carrierRatio" -> superColliderService.sendSynthMessage("/synth/params", listOf(body.symbol, body.value, "carrierRatio"))
                "modulatorRatio" -> superColliderService.sendSynthMessage("/synth/params", listOf(body.symbol, body.value, "modulatorRatio"))
                else -> throw IllegalArgumentException("Unsupported argument")
            }
        
            return HttpStatus.OK
    }
}

