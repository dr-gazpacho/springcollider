package com.gazpacho.springcollider.service

import org.springframework.messaging.Message
import org.springframework.messaging.MessageHandler
import org.springframework.messaging.support.GenericMessage
import org.springframework.stereotype.Service

@Service
class UdpService (
    val udpMessageHandler: MessageHandler
) {
    fun sendMessge(symbol: String, values: List<Any>) {
        val message = GenericMessage(values)
    }
}