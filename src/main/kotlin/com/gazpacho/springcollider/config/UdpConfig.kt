package com.gazpacho.springcollider.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.integration.ip.udp.UnicastSendingMessageHandler
import org.springframework.messaging.MessageHandler


@Configuration
class UdpConfig {
    @Bean
    fun udpMessageHandler(): MessageHandler {
        return UnicastSendingMessageHandler("localhost", 57120)
    }

}