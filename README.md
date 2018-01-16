# Hydropi (not yet finished)
[![CircleCI](https://circleci.com/gh/francois-roseberry/hydropi/tree/development.svg?style=shield)](https://circleci.com/gh/francois-roseberry/hydropi/tree/development)

Simple web app to control my hydroponic micro-culture. It runs on a [Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/) with the resin.io image.

## Stack
Back-end is in Javascript, with [nodejs](https://nodejs.org/). Frontend is in Javascript, with [React](https://reactjs.org/).

## Workflow
Code pushed to github, then -> tests run on CircleCI, if tests pass and on master branch, then -> Code push to resin.io, who build an ARM-compatible docker image, which then -> push to the Raspberry Pi

## Components (electronics)
* 3 actuators:
  * Fans (2 PC fans I got from an old PC)
  * Grow light ([USB LED Grow light](https://www.amazon.ca/dp/B0785DRTDH/ref=pe_3034960_236394800_FR_TE_3p_dp_1 "Amazon.ca link"))
  * Air pump ([Aquarium-style 12V diaphragm air pump](https://www.amazon.ca/dp/B00MP4BKL2/ref=pe_3034960_236394800_FR_TE_3p_dp_1 "Amazon.ca link"))
* 3 sensors (actually just 2, but 1 acts as 2):
  * Water temperature ([DS18B20](https://www.amazon.ca/dp/B00KLZQ0P8/ref=pe_3034960_233709270_TE_item "Amazon.ca link"))
  * Air temperature and Humidity ([DHT22](https://www.amazon.ca/dp/B01MR7WEI9/ref=pe_3034960_236394800_FR_TE_3p_dp_1 "Amazon.ca link"))

* Powered by a 350W ATX power supply extracted from an old PC

The micro-culture is inside an old PC case (emptied of course)
