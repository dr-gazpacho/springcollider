package com.gazpacho.springcollider.model

data class SliderRequest (
    val symbol: String,
    val value: Number,
    val endpoint: String,
    val httpMethod: String,
    val min: Number,
    val max: Number
)