package com.gazpacho.schtmx.controller
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import java.time.LocalDateTime

@Controller
class HelloWorldController {

    @GetMapping("/hello")
    fun hello(model: Model): String {
        // Add attributes that will be used in the template
        model.addAttribute("message", "Hello, World!")
        model.addAttribute("now", LocalDateTime.now())
        model.addAttribute("showGreeting", true)

        val items = listOf("Item 1", "Item 2", "Item 3")
        model.addAttribute("items", items)

        // Return the name of the template (hello.html)
        return "helloworld"
    }
}