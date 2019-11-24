# Hydropi
[![CircleCI](https://circleci.com/gh/francois-roseberry/hydropi/tree/development.svg?style=shield)](https://circleci.com/gh/francois-roseberry/hydropi/tree/development)

Simple web app to control my hydroponic micro-culture. It runs on a [Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/) with the [balena.io](https://balena.io/) image.

<img src="https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png" alt="Powered by Raspberry PI" height="40" />&nbsp;&nbsp;&nbsp;<img src="http://cdn.shopify.com/s/files/1/0027/8432/9794/files/balena_logo_google_drive_1200x1200.png?v=1539785824" alt="Balena.io" height="40">&nbsp;&nbsp;&nbsp;<img src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" alt="Docker" height="40">

## Stack
Back-end is in Javascript, with [nodejs](https://nodejs.org/). Frontend is in Javascript, with [React](https://reactjs.org/).

## Workflow
Code pushed to github, then -> tests run on CircleCI, if tests pass and on master branch, then -> Code push to balena.io, who build an ARM-compatible docker image, which then -> push to the Raspberry Pi

## Components (electronics)
* 3 actuators:
  * Fans (1 PC fan I got from an old PC)
  * Grow light ([USB LED Grow light](https://www.amazon.ca/dp/B0785DRTDH/ref=pe_3034960_236394800_FR_TE_3p_dp_1 "Amazon.ca link"))
  * Air pump ([Aquarium-style 12V diaphragm air pump](https://www.amazon.ca/dp/B00MP4BKL2/ref=pe_3034960_236394800_FR_TE_3p_dp_1 "Amazon.ca link"))
* 3 sensors (actually just 2, but 1 acts as 2):
  * Water temperature ([DS18B20](https://www.amazon.ca/dp/B00KLZQ0P8/ref=pe_3034960_233709270_TE_item "Amazon.ca link"))
  * Air temperature and Humidity ([DHT22](https://www.amazon.ca/dp/B01MR7WEI9/ref=pe_3034960_236394800_FR_TE_3p_dp_1 "Amazon.ca link"))

* Powered by a 350W ATX power supply extracted from an old PC (which can supply both 5V and 12V. I know it offers way too much power, but I had it lying around)

The micro-culture is inside an old PC case (emptied of course)
