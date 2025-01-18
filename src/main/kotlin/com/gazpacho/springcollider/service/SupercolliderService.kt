package com.gazpacho.springcollider.service

import com.illposed.osc.OSCMessage
import com.illposed.osc.OSCSerializeException
import com.illposed.osc.transport.OSCPortOut
import org.springframework.stereotype.Service
import java.net.InetAddress

@Service
class SuperColliderService {
    private val oscPort = OSCPortOut(InetAddress.getLocalHost(), 57120)

    fun sendSynthMessage(address: String, args: List<Any>) {
        try {
            val typedArgs = args.map { arg ->
                when (arg) {
                    is String -> arg
                    is Number -> arg.toFloat() // Convert all numbers to Float for SuperCollider
                    else -> throw IllegalArgumentException("Unsupported argument type: ${arg::class}")
                }
            }
            val message = OSCMessage(address, typedArgs)
            oscPort.send(message)
        } catch (e: OSCSerializeException) {
            println("Failed to send OSC message: ${e.message}")
        }
    }

    fun playSimpleSynth() {
        // Example: play a simple sine wave
        sendSynthMessage("default", listOf("freq", 440, "amp", 0.5))
    }
}