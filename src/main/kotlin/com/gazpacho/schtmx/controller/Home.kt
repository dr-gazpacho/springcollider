package com.gazpacho.schtmx.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.servlet.ModelAndView
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HomeController {
    @GetMapping("/{path:[^\\.]*}", "/error")
    fun homeView(): ModelAndView {
        return ModelAndView("forward:/index.html")
    }
}
