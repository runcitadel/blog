---
title: "The current status of Citadel"
date: 2022-10-16
authorName: Aaron Dewes
authorLink: https://twitter.com/AaronDewes
---

In this blog post, I'll try to explain why the next update is taking so long to develop, and provide more information about the current state of Citadel.

## Current development status

Currently, I am the only one actively working on Citadel's code. This means that if you compare Citadel to other open source projects, you'll see a slower speed of development, because these other projects have more developers. Especially compared to commercial projects like Umbrel or Embassy OS, development is a lot slower with Citadel, because I am doing all of the development in my free time.

This year, I also have to spend a lot more time at school, which results in me having less time for Citadel.

However, I am trying to still continue developing Citadel actively. I am also really thankful to DTV Electronics for supporting the development of Citadel.

These are the changes I have been working on recently, and that are planned to be rolled out during the next few weeks.

### New app system

All app-related tools and systems have been replaced with one, new tool: [The Citadel app CLI](https://github.com/runcitadel/app-cli). We previously had multiple tools that all tried to parse our app.yml format, but all had slight differences which could lead to incompatibilities and bugs.

The app-cli replaces all these tools with one new tool written in Rust. It can be used by developers to validate their apps, as part of our automated update checks, and is used on Citadel to convert app.yml files to docker-compose.yml.

This also extended our app system with more capabilities for developers, including "virtual apps", a concept that will allow multiple apps that implement the same API to be used interchangeably. For example, this will allow us to move Electrs and Fulcrum to the app store, and apps to just access them as "Electrum Server", without having to worry about different implementations. With app-cli, this can be done without impacting the security of our app system.

### Deno

![Deno artwork](https://deno.land/v1.png)

I'm currently rewriting large parts of Citadel's Node.js services, most notably [manager](https://github.com/runcitadel/manager) and [middleware](https://github.com/runcitadel/middleware).

Deno is a more modern node alternative and makes development much easier, while also increasing the speed of our API.

In addition, Deno will make it cheaper to deploy Citadel in the cloud (on a VPS for example). I'll share more details about that in a future post.

### Faster update process

Together with the new app system, the update process is also getting some updates. Useless steps were removed, which should cause updates to be much faster and less likely to fail on future versions.

### DTV Electronics

<svg
   viewBox="0 0 7640.2949 2284.623"
   fill="none"
   version="1.1"
   id="svg203"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
<defs
     id="defs207">
</defs>
<g
     id="g858"
     transform="translate(264.74203,-2.8272096e-5)">
<g
       id="g332"
       transform="translate(3987.8977,-123.35938)">
<path
         d="m 1853.923,841.6749 144,-82.2852 v 128.0002 l -144,82.285 z"
         fill="#40607d"
         id="path173" />
<path
         d="m 2165.923,953.6709 -24,16 v -128 l 24,-16.0001 z"
         fill="#40607d"
         id="path175" />
<path
         d="m 1601.8451,985.7159 140.0799,-80.045 v 128 l -28.016,16.009 z"
         fill="#40607d"
         id="path177" />
<path
         d="m 1717.923,1209.6709 24,-16 v -52.211 l 88,50.947 v -46.736 l 24,-16 144,82.4 v -274.4 l -256,148.21 v -20.21 l -24,16 z"
         fill="#40607d"
         id="path179" />
<path
         d="m 2277.923,1081.6709 167.999,-96 v 443.935 c 0,71.771 -38.457,138.04 -100.772,173.648 l -347.227,198.417 v -560.001 l 168,-95.999 v 127.999 l 112,-63.999 z"
         fill="#40607d"
         id="path181" />
<path
         d="m 1997.923,887.3899 144,82.285 v -128 l -144,-82.2852 z"
         fill="#6891aa"
         id="path183" />
<path
         d="m 1853.923,969.6709 -24,-16 V 825.6708 l 24,16.0001 z"
         fill="#6891aa"
         id="path185" />
<path
         d="m 1717.923,1081.6709 -167.9998,-96 v 443.935 c 0,71.771 38.4572,138.04 100.7718,173.648 l 347.228,198.417 v -560.001 l -168,-95.999 v 127.999 l -112,-63.999 z"
         fill="#6891aa"
         id="path187" />
<path
         d="m 2253.922,1193.6709 24,16 v -128 l -24,-16 v 20.21 l -255.999,-148.21 v 274.4 l 144,-82.4 24,16 v 46.736 l 87.999,-50.947 z"
         fill="#6891aa"
         id="path189" />
<path
         d="m 2281.938,1049.6799 -28.016,-16.009 v -128 l 140.08,80.045 z"
         fill="#6891aa"
         id="path191" />
<path
         d="m 1997.923,759.2709 144,82.4 24,-16.0001 -168,-95.9999 -168,95.9999 24,16.0001 z"
         fill="#a2bece"
         id="path193" />
<path
         d="m 1829.923,953.6709 24,16 144,-82.281 144,82.285 24,-16.004 87.999,50.285 v 29.715 l 28.016,16.009 112.144,-64.009 -140.16,-80 24,-16 168,96 -168,96 -24,-16 v 20.21 l -255.999,-148.21 -256,148.21 v -20.21 l -24,16 -167.9998,-96 167.9998,-96 24,16 -140.1599,80 112.1459,64.009 28.016,-16.009 v -29.716 z"
         fill="#a2bece"
         id="path195" />
<path
         d="m 2141.923,1129.6709 24,16 -168,95.999 -168,-95.999 24,-16 144,82.4 z"
         fill="#a2bece"
         id="path197" />
<path
         d="m 1741.923,1141.4599 88,50.947 v 81.263 l -112,-63.999 24,-16 z"
         fill="#a2bece"
         id="path199" />
<path
         d="m 2277.922,1209.6709 -111.999,63.999 v -81.263 l 87.999,-50.947 v 52.211 z"
         fill="#a2bece"
         id="path201" />
</g>
<g
       id="g705"
       transform="matrix(3.8088982,0,0,3.8088982,-2297.2735,-3298.0335)">
<path
         d="m 824.88271,1309.042 h -44.01 v -59.06 h 43.38 v 15.76 h -25.85 v 6.31 h 19.88 v 14.59 h -19.88 v 6.64 h 26.48 z"
         id="path4"
         fill="currentColor" />
<path
         d="m 873.05271,1309.042 h -40.14 v -59.06 h 17.53 v 42.29 h 22.62 v 16.77 z"
         id="path6"
         fill="currentColor" />
<path
         d="m 925.68271,1309.042 h -44.01 v -59.06 h 43.38 v 15.76 h -25.85 v 6.31 h 19.88 v 14.59 h -19.88 v 6.64 h 26.48 z"
         id="path8"
         fill="currentColor" />
<path
         d="m 945.68271,1305.992 c -4.71,-2.76 -8.41,-6.49 -11.12,-11.2 -2.7,-4.71 -4.06,-9.85 -4.06,-15.43 0,-5.6 1.35,-10.74 4.06,-15.41 2.7,-4.67 6.41,-8.36 11.12,-11.08 4.71,-2.72 9.93,-4.08 15.68,-4.08 3.75,0 7.33,0.61 10.72,1.83 3.39,1.22 6.45,2.96 9.16,5.23 l -9.88,13.37 c -1.32,-1.04 -2.88,-1.91 -4.69,-2.61 -1.81,-0.7 -3.58,-1.05 -5.32,-1.05 -2.27,0 -4.41,0.61 -6.41,1.83 -2,1.22 -3.61,2.89 -4.83,5 -1.22,2.12 -1.83,4.45 -1.83,7 0,2.55 0.61,4.89 1.83,7.02 1.22,2.13 2.83,3.81 4.83,5.04 2,1.23 4.14,1.85 6.41,1.85 1.93,0 3.63,-0.26 5.09,-0.78 1.46,-0.52 3.14,-1.51 5.04,-2.96 l 9.75,13.45 c -2.69,2.27 -5.74,4.02 -9.14,5.25 -3.4,1.23 -6.98,1.85 -10.74,1.85 -5.73,0.02 -10.96,-1.36 -15.67,-4.12 z"
         id="path10"
         fill="currentColor" />
<path
         d="m 1017.9027,1309.042 h -17.57 v -42.75 h -14.91999 v -16.31 h 47.41999 v 16.31 h -14.92 v 42.75 z"
         id="path12"
         fill="currentColor" />
<path
         d="m 1091.4627,1309.042 h -19.76 l -8.62,-18.2 h -1.09 -3.66 v 18.2 h -17.53 v -59.06 h 26.23 c 4.09,0 7.73,0.87 10.93,2.61 3.19,1.74 5.68,4.15 7.46,7.25 1.78,3.1 2.67,6.62 2.67,10.57 0,3.62 -0.72,6.74 -2.17,9.37 -1.44,2.63 -3.45,4.81 -6.03,6.52 z m -33.12,-43.25 v 9.75 h 7.06 c 0.9,0 1.72,-0.24 2.48,-0.71 0.76,-0.48 1.35,-1.11 1.79,-1.89 0.43,-0.78 0.65,-1.61 0.65,-2.48 0,-1.48 -0.48,-2.63 -1.45,-3.45 -0.97,-0.82 -2.07,-1.22 -3.3,-1.22 z"
         id="path14"
         fill="currentColor" />
<path
         d="m 1108.7027,1305.992 c -4.71,-2.76 -8.41,-6.49 -11.12,-11.2 -2.7,-4.71 -4.06,-9.85 -4.06,-15.43 0,-5.6 1.35,-10.74 4.06,-15.41 2.7,-4.67 6.41,-8.36 11.12,-11.08 4.71,-2.72 9.93,-4.08 15.68,-4.08 5.69,0 10.88,1.36 15.57,4.08 4.69,2.72 8.39,6.41 11.1,11.08 2.7,4.67 4.06,9.8 4.06,15.41 0,5.58 -1.35,10.72 -4.06,15.43 -2.7,4.71 -6.4,8.44 -11.1,11.2 -4.69,2.76 -9.89,4.14 -15.57,4.14 -5.75,0 -10.98,-1.38 -15.68,-4.14 z m 22.06,-14.52 c 1.99,-1.23 3.58,-2.91 4.77,-5.02 1.19,-2.12 1.79,-4.46 1.79,-7.04 0,-2.55 -0.6,-4.88 -1.81,-7 -1.21,-2.12 -2.8,-3.78 -4.79,-5 -1.99,-1.22 -4.11,-1.83 -6.35,-1.83 -2.27,0 -4.41,0.61 -6.41,1.83 -2,1.22 -3.61,2.89 -4.83,5 -1.22,2.12 -1.83,4.45 -1.83,7 0,2.55 0.61,4.89 1.83,7.02 1.22,2.13 2.83,3.81 4.83,5.04 2,1.23 4.14,1.85 6.41,1.85 2.28,0 4.4,-0.62 6.39,-1.85 z"
         id="path16"
         fill="currentColor" />
<path
         d="m 1180.1127,1309.042 h -16.98 v -59.06 h 17.53 l 17.57,29.26 v -29.26 h 17.02 v 59.06 h -15.85 l -19.29,-31.48 z"
         id="path18"
         fill="currentColor" />
<path
         d="m 1243.3827,1309.042 h -17.53 v -59.06 h 17.53 z"
         id="path20"
         fill="currentColor" />
<path
         d="m 1266.5427,1305.992 c -4.71,-2.76 -8.41,-6.49 -11.12,-11.2 -2.71,-4.71 -4.06,-9.85 -4.06,-15.43 0,-5.6 1.35,-10.74 4.06,-15.41 2.7,-4.67 6.41,-8.36 11.12,-11.08 4.71,-2.72 9.93,-4.08 15.68,-4.08 3.75,0 7.33,0.61 10.72,1.83 3.39,1.22 6.45,2.96 9.16,5.23 l -9.88,13.37 c -1.32,-1.04 -2.88,-1.91 -4.69,-2.61 -1.81,-0.7 -3.58,-1.05 -5.32,-1.05 -2.27,0 -4.41,0.61 -6.41,1.83 -2,1.22 -3.62,2.89 -4.83,5 -1.22,2.12 -1.83,4.45 -1.83,7 0,2.55 0.61,4.89 1.83,7.02 1.22,2.13 2.83,3.81 4.83,5.04 2,1.23 4.14,1.85 6.41,1.85 1.93,0 3.63,-0.26 5.09,-0.78 1.46,-0.52 3.14,-1.51 5.04,-2.96 l 9.75,13.45 c -2.69,2.27 -5.74,4.02 -9.14,5.25 -3.4,1.23 -6.99,1.85 -10.74,1.85 -5.74,0.02 -10.97,-1.36 -15.67,-4.12 z"
         id="path22"
         fill="currentColor" />
<path
         d="m 1304.2027,1299.292 11.05,-11.6 c 2.35,2.1 4.6,3.66 6.75,4.69 2.14,1.02 4.35,1.53 6.62,1.53 3.39,0 5.09,-0.95 5.09,-2.86 0,-0.59 -0.15,-1.12 -0.44,-1.6 -0.29,-0.48 -1.06,-1.04 -2.29,-1.7 -1.23,-0.66 -3.15,-1.38 -5.76,-2.17 -4.48,-1.4 -8.4,-3.56 -11.75,-6.47 -3.35,-2.92 -5.02,-7.09 -5.02,-12.53 0,-3.14 0.67,-6.05 2,-8.74 1.33,-2.69 3.5,-4.88 6.52,-6.56 3.01,-1.68 6.91,-2.52 11.71,-2.52 4.65,0 8.76,0.74 12.32,2.23 3.56,1.49 6.87,3.63 9.92,6.43 l -9.79,12.06 c -1.37,-1.26 -3.13,-2.38 -5.28,-3.36 -2.14,-0.98 -4.28,-1.47 -6.41,-1.47 -1.29,0 -2.18,0.22 -2.67,0.67 -0.49,0.45 -0.74,1.09 -0.74,1.93 0,0.42 0.22,0.8 0.65,1.13 0.43,0.34 1.08,0.69 1.93,1.07 0.85,0.38 2.23,0.93 4.14,1.66 l 1.22,0.46 c 3.92,1.46 7.16,3.03 9.71,4.73 2.55,1.7 4.49,3.72 5.82,6.07 1.33,2.35 2,5.16 2,8.41 0,3.81 -0.9,7.17 -2.71,10.09 -1.81,2.92 -4.41,5.19 -7.8,6.81 -3.39,1.62 -7.36,2.44 -11.9,2.44 -9.59,0.01 -17.89,-3.6 -24.89,-10.83 z"
         id="path24"
         fill="currentColor" />
<path
         d="m 781.51271,1228.352 v -206.32 h 77.68 c 19.97,0 38.25,4.5 54.85,13.51 16.59,9.01 29.71,21.37 39.35,37.08 9.64,15.71 14.46,33.21 14.46,52.5 0,19.29 -4.8,36.81 -14.39,52.57 -9.6,15.76 -22.66,28.15 -39.21,37.15 -16.55,9.01 -34.75,13.51 -54.63,13.51 z m 79.88,-50.08 c 10.08,0 19.14,-2.25 27.17,-6.75 8.03,-4.5 14.32,-10.79 18.87,-18.87 4.55,-8.08 6.83,-17.25 6.83,-27.53 0,-10.18 -2.28,-19.28 -6.83,-27.31 -4.55,-8.03 -10.87,-14.32 -18.94,-18.87 -8.07,-4.55 -17.16,-6.83 -27.24,-6.83 h -26.88 v 106.17 h 27.02 z"
         id="path28"
         fill="currentColor" />
<path
         d="m 1086.5027,1228.352 h -52.86 v -157.13 h -55.35999 v -49.19 h 163.72999 v 49.19 h -55.51 z"
         id="path30"
         fill="currentColor" />
<path
         d="m 1275.3427,1228.352 h -44.05 l -79,-206.31 h 56.53 l 44.2,131.72 h 0.59 l 44.05,-131.72 h 56.68 z"
         id="path32"
         fill="currentColor" />
<path
         class="st0"
         d="m 1654.5727,1183.152 -131.53,-49.7 v -55.94 l 115.42,43.61 c 9.69,3.66 16.11,12.95 16.11,23.31 z"
         id="path36"
         style="fill:#2d2d2b" />
<path
         class="st1"
         d="m 1391.5127,1183.152 131.53,-49.7 v -55.94 l -115.42,43.61 c -9.69,3.66 -16.11,12.95 -16.11,23.31 z"
         id="path38"
         style="fill:#3c3c3b" />
<path
         class="st0"
         d="m 1654.5727,1254.122 -131.53,-49.7 v -55.94 l 115.42,43.61 c 9.69,3.66 16.11,12.95 16.11,23.31 z"
         id="path40"
         style="fill:#2d2d2b" />
<path
         class="st1"
         d="m 1391.5127,1254.122 131.53,-49.7 v -55.94 l -115.42,43.61 c -9.69,3.66 -16.11,12.95 -16.11,23.31 z"
         id="path42"
         style="fill:#3c3c3b" />
<circle
         class="st2"
         cx="1523.0427"
         cy="1113.972"
         r="103.1"
         id="circle44"
         style="fill:#f29221" />
<g
         id="g50"
         transform="translate(675.07271,981.782)">
<path
   class="st3"
   d="m 844.18,42.82 c 2.51,0 5.03,0 7.54,0 0.39,0.08 0.77,0.19 1.16,0.23 1.48,0.13 2.96,0.17 4.43,0.35 2.54,0.31 5.09,0.6 7.61,1.08 6.86,1.3 13.48,3.41 19.84,6.29 12.02,5.45 22.33,13.19 30.95,23.17 7.53,8.72 13.15,18.56 16.88,29.46 1.7,4.98 2.95,10.07 3.72,15.27 0.33,2.2 0.54,4.41 0.73,6.63 0.13,1.5 0.12,3.02 0.2,4.53 0.02,0.36 0.13,0.72 0.2,1.08 0,0.86 0,1.71 0,2.57 -0.07,0.33 -0.17,0.66 -0.19,0.99 -0.07,1.45 -0.11,2.91 -0.18,4.36 -0.15,3.05 -0.56,6.08 -1.1,9.08 -1.61,8.99 -4.51,17.55 -8.75,25.66 -3.07,5.87 -6.73,11.34 -11.02,16.38 -6.7,7.88 -14.51,14.46 -23.47,19.64 -7.73,4.47 -15.94,7.73 -24.66,9.72 -3.53,0.81 -7.09,1.42 -10.69,1.8 -2.29,0.24 -4.61,0.32 -6.92,0.4 -4.71,0.15 -9.41,-0.05 -14.09,-0.67 -2.97,-0.4 -5.91,-0.91 -8.82,-1.59 -8.82,-2.05 -17.13,-5.38 -24.93,-9.98 -9.65,-5.7 -17.95,-12.95 -24.89,-21.74 -5.49,-6.95 -9.85,-14.55 -13.06,-22.8 -2.36,-6.05 -4.05,-12.29 -5.02,-18.72 -0.52,-3.41 -0.9,-6.84 -0.98,-10.29 -0.11,-5.2 -0.03,-10.39 0.71,-15.54 0.56,-3.9 1.31,-7.75 2.36,-11.55 2.14,-7.78 5.26,-15.14 9.39,-22.06 5.4,-9.04 12.18,-16.89 20.33,-23.54 10.2,-8.32 21.67,-14.1 34.42,-17.37 3.04,-0.78 6.11,-1.37 9.21,-1.84 1.52,-0.23 3.05,-0.39 4.58,-0.53 1.22,-0.11 2.45,-0.13 3.67,-0.22 0.3,-0.06 0.57,-0.17 0.84,-0.25 z m 3.73,164.07 c 40.64,0.18 74.66,-32.7 74.81,-74.39 0.15,-41.36 -33.19,-74.98 -74.78,-74.96 -41.42,0.02 -74.59,33.37 -74.71,74.43 -0.14,42.11 34.12,75.06 74.68,74.92 z"
   id="path46"
   style="fill:#ffffff" />

    		<path
                class="st3"
                d="m 838.96,88.94 c 3.93,0 7.71,0 11.58,0 0.02,-0.38 0.06,-0.71 0.06,-1.04 0,-4.08 0,-8.17 0,-12.25 0,-0.23 0,-0.46 0,-0.69 0,-0.35 0.17,-0.53 0.53,-0.52 0.17,0 0.34,0 0.51,0 3.03,0 6.06,0 9.09,0 0.2,0 0.4,0 0.6,0.01 0.27,0.01 0.42,0.16 0.43,0.43 0.01,0.23 0.01,0.46 0.01,0.69 0,4.11 0,8.22 0,12.34 0,0.37 0,0.74 0,1.17 0.35,0.09 0.63,0.2 0.93,0.24 1.67,0.19 3.35,0.31 5.01,0.55 3.63,0.53 7.15,1.43 10.45,3.08 4.75,2.37 7.56,6.21 8.63,11.37 0.44,2.16 0.63,4.35 0.5,6.55 -0.41,7.2 -3.92,12.42 -10.25,15.81 -1.92,1.03 -3.93,1.83 -6.01,2.46 -0.3,0.09 -0.59,0.24 -0.89,0.36 0.01,0.07 0.02,0.13 0.03,0.2 0.9,0.2 1.81,0.38 2.71,0.6 3.27,0.79 6.39,1.92 9.24,3.75 4.65,2.99 7.44,7.24 8.44,12.66 0.28,1.51 0.47,3.06 0.49,4.59 0.05,4 -0.43,7.92 -2.22,11.57 -2.1,4.28 -5.49,7.15 -9.86,8.93 -2.92,1.18 -5.95,1.98 -9.07,2.4 -2.45,0.34 -4.92,0.58 -7.38,0.85 -0.63,0.07 -0.71,0.12 -0.73,0.79 -0.01,0.29 0,0.57 0,0.86 0,3.97 0,7.94 0,11.91 0,0.2 0,0.4 0,0.6 -0.02,0.72 -0.05,0.76 -0.8,0.77 -3.17,0.01 -6.34,0.01 -9.52,0 -0.83,0 -0.85,-0.03 -0.86,-0.88 0,-4.14 0,-8.28 0,-12.42 0,-0.37 0,-0.74 0,-1.08 -0.64,-0.23 -10.12,-0.31 -11.59,-0.1 -0.02,0.31 -0.05,0.64 -0.05,0.97 0,4.06 0,8.11 0,12.17 0,0.14 0,0.29 0,0.43 -0.01,0.93 -0.01,0.93 -0.98,0.93 -3.09,0 -6.17,0 -9.26,0 -0.93,0 -0.93,-0.01 -0.93,-0.98 0,-4.03 0,-8.05 0,-12.08 0,-0.45 0,-0.9 0,-1.45 -0.44,-0.03 -0.8,-0.07 -1.16,-0.07 -6.8,0 -13.6,0 -20.4,0 -1.24,0 -1.29,0.16 -1.28,-1.24 0.01,-2.71 0,-5.43 0,-8.14 0,-0.92 0.04,-0.95 0.97,-0.96 1.31,-0.01 2.63,0.04 3.94,-0.01 1.59,-0.06 3.19,-0.13 4.76,-0.46 1.72,-0.36 2.73,-1.38 3.01,-3.08 0.19,-1.12 0.36,-2.26 0.37,-3.39 0.04,-4.74 0.02,-9.48 0.02,-14.22 0,-12.31 0,-24.62 0,-36.93 0,-1.35 -0.06,-2.68 -0.36,-4 -0.08,-0.36 -0.2,-0.71 -0.32,-1.07 -0.3,-0.9 -0.91,-1.54 -1.8,-1.81 -0.87,-0.26 -1.76,-0.53 -2.66,-0.58 -2.22,-0.13 -4.45,-0.14 -6.68,-0.19 -0.23,-0.01 -0.46,-0.01 -0.69,0 -0.4,0.01 -0.57,-0.19 -0.57,-0.57 0,-0.17 -0.01,-0.34 -0.01,-0.51 0,-2.71 0,-5.43 0,-8.14 0,-0.2 0,-0.4 0.01,-0.6 0.01,-0.31 0.17,-0.47 0.48,-0.48 0.26,-0.01 0.51,-0.01 0.77,-0.01 6.8,0 13.6,0 20.4,0 1.17,0 1.17,0 1.17,-1.19 0,-4.08 0,-8.17 0,-12.25 0,-0.23 0,-0.46 0.01,-0.69 0.01,-0.27 0.16,-0.42 0.43,-0.43 0.17,-0.01 0.34,-0.01 0.51,-0.01 3.09,0 6.17,0 9.26,0 0.17,0 0.34,0 0.51,0.01 0.27,0.01 0.42,0.17 0.43,0.43 0.01,0.23 0.01,0.46 0.01,0.69 0,4.08 0,8.17 0,12.25 0.03,0.31 0.03,0.64 0.03,1.1 z m 0.05,76.14 c 0.43,0 0.74,0 1.05,0 1.91,0 3.83,-0.01 5.74,0 3.37,0.01 6.73,0.03 10.07,-0.51 1.92,-0.31 3.81,-0.7 5.62,-1.42 3.38,-1.33 5.64,-3.72 6.7,-7.19 1.06,-3.48 1.14,-7.02 0.28,-10.55 -0.94,-3.88 -3.35,-6.47 -7.08,-7.84 -2.53,-0.93 -5.18,-1.35 -7.85,-1.58 -2.04,-0.18 -4.1,-0.26 -6.15,-0.3 -2.45,-0.05 -4.91,-0.02 -7.37,-0.01 -0.33,0 -0.66,0.07 -1.01,0.12 0,9.78 0,19.47 0,29.28 z M 839,125.23 c 0.17,0.06 0.28,0.12 0.39,0.14 0.2,0.03 0.4,0.05 0.6,0.05 4.22,-0.01 8.44,0.09 12.65,-0.43 1.99,-0.25 3.93,-0.66 5.81,-1.37 3.34,-1.26 5.38,-3.64 6.21,-7.08 0.66,-2.76 0.7,-5.54 0.13,-8.32 -0.69,-3.37 -2.55,-5.8 -5.81,-7.08 -0.45,-0.18 -0.91,-0.34 -1.37,-0.49 -3.07,-0.98 -6.26,-1.22 -9.45,-1.33 -2.74,-0.09 -5.48,-0.03 -8.22,-0.02 -0.3,0 -0.6,0.06 -0.93,0.09 -0.01,8.67 -0.01,17.22 -0.01,25.84 z"
style="fill:#ffffff" />
    	</g>
      <path
         class="st4"
         d="m 1391.5127,1144.082 0.23,-3.47 c 1.62,5.78 3.7,8.09 9.25,9.94 l 122.05,43.23 v 55.94 l -115.42,-43.61 c -9.69,-3.66 -16.11,-12.95 -16.11,-23.31 z"
         style="fill:#b96616" />
      <path
         class="st4"
         d="m 1391.5127,1215.052 0.23,-3.47 c 1.62,5.78 3.7,8.09 9.25,9.94 l 122.05,43.23 v 55.94 l -115.42,-43.61 c -9.69,-3.66 -16.11,-12.95 -16.11,-23.31 z"
         id="path56"
         style="fill:#b96616" />
      <path
         class="st5"
         d="m 1654.5727,1144.082 -0.23,-3.47 c -1.62,5.78 -3.7,8.09 -9.25,9.94 l -122.05,43.23 v 55.94 l 115.42,-43.61 c 9.69,-3.66 16.11,-12.95 16.11,-23.31 z"
         style="fill:#e57f0d" />
      <path
         class="st5"
         d="m 1654.5727,1215.052 -0.23,-3.47 c -1.62,5.78 -3.7,8.09 -9.25,9.94 l -122.05,43.23 v 55.94 l 115.42,-43.61 c 9.69,-3.66 16.11,-12.95 16.11,-23.31 z"
         style="fill:#e57f0d" />
    </g>
    <text
       xml:space="preserve"
       style="font-size:866.901px;line-height:1.25;font-family:FreeSerif;-inkscape-font-specification:FreeSerif;stroke-width:21.6725"
       x="4551.0137"
       y="1373.1798"
       fill="currentColor"><tspan
         x="4551.0137"
         y="1373.1798"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:FreeSerif;-inkscape-font-specification:'FreeSerif Bold';stroke-width:21.6725" fill="currentColor">+</tspan></text>
  </g>
</svg>

Finally, I want to clarify the relationship of Citadel and DTV Electronics.

DTV Electronics is a company focused on building Bitcoin hardware and software services. While it is supporting Citadel financially, Citadel is completely independent from DTV Electronics.

I do not work for DTV Electronics and DTV Electronics does not own any copyright over any of Citadel's code.

I am still very grateful for their support.

### Donations

Even though we are partially supported by DTV Electronics, Citadel still needs donations to operate. We're now on Open Collective, and you can donate using Fiat or Bitcoin. Everything we spend is tracked publicly there, meaning you'll know where your donations go.

[Citadel on Open Collective](https://opencollective.com/runcitadel)

### Beta testing

The next update for Citadel is currently in beta and being tested by users.

I hope to be able to publish this update soon and will try to be more active in the support chats and development over the next weeks.
