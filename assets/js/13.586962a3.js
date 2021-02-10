(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{395:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[a("img",{attrs:{src:"logo.png",alt:""}})]),e._v(" "),a("p",[e._v("So it's that time of year again, a new version of macOS has been released and the age-old question will be asked once again:")]),e._v(" "),a("p",[a("strong",[e._v("What GPUs are supported with macOS 11 Big Sur?")])]),e._v(" "),a("p",[e._v("Well you've come to the right place, I'll give a quick rundown on the situation and go into more detail on exact GPUs we recommend.")]),e._v(" "),a("h2",{attrs:{id:"a-quick-refresher-with-nvidia-and-webdrivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-refresher-with-nvidia-and-webdrivers"}},[e._v("#")]),e._v(" A quick refresher with Nvidia and WebDrivers")]),e._v(" "),a("p",[a("img",{attrs:{src:"WebDrivers.gif",alt:"WebDrivers"}})]),e._v(" "),a("p",[e._v("Well currently as of the time of writing, we've gone a full OS cycle without official drivers from Nvidia for their Maxwell, Pascal or Turing GPUs. What this means is that users of these GPUs have no support for Mojave, Catalina or Big Sur so are stuck with macOS 10.13 High Sierra. Who's to blame? Well it's 2 giant, egotistical companies who both refuse to work together so the blame can go both ways. Do keep in mind that the WebDrivers have a VRAM leakage issue that they've yet to address, so a theory to why Apple refuses Nvidia drivers in macOS may be due to how Nvidia refuses to hand over the driver stack. Think it's a coincidence that both AMD and Intel have open-sourced drivers? Well, either wa/y, it doesn't change the fact there's no support.")]),e._v(" "),a("p",[e._v("Users with Kepler based GPUs are in the clear though, they utilize Apple's native drivers")]),e._v(" "),a("p",[e._v("And for those who want some reading to do: "),a("a",{attrs:{href:"https://devtalk.nvidia.com/default/topic/1042520/drivers/-when-will-the-nvidia-web-drivers-be-released-for-macos-mojave-10-14-/post/5358999/#5358999",target:"_blank",rel:"noopener noreferrer"}},[e._v("When will the Nvidia Web Drivers be released for macOS Mojave 10.14 "),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Great read as it shows how even upper management doesn't have a good answer for customers")]),e._v(" "),a("h2",{attrs:{id:"so-if-my-gpu-is-natively-supported-why-do-i-need-lilu-and-whatevergreen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-if-my-gpu-is-natively-supported-why-do-i-need-lilu-and-whatevergreen"}},[e._v("#")]),e._v(" So if my GPU is natively supported, why do i need Lilu and WhateverGreen?")]),e._v(" "),a("p",[e._v("This is a question comes up quite a bit in the Hackintosh community, and for good reason as to why in the world would these GPUs work out of the box on a mac and not a Hackintosh? Well, the reason being is that PCs and Macs have different internal wiring and so the ACPI layouts in a PC don't work well with Macs in different scenarios. To get around this, we use "),a("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen"),a("OutboundLink")],1),e._v(" and it's companion "),a("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu"),a("OutboundLink")],1),e._v(" to patch different parts of our Hackintosh like renaming devices, assisting in framebuffer connections, patching audio connectors, allowing modifications to aty_config, aty_properties, cail_properties via ACPI and so much more. With such a large feature set and developed by someone who knows what they're doing, there's no reason not to use it")]),e._v(" "),a("h2",{attrs:{id:"so-what-are-my-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-what-are-my-options"}},[e._v("#")]),e._v(" So what are my options?")]),e._v(" "),a("p",[e._v("So there’s still 2 routes for discrete GPUs you can go, either AMD or Nvidia(Yes, there’s actually natively supported Nvidia cards in Catalina). So I’ll be going over what GPUs are compatible and what features/drawbacks they hold.")]),e._v(" "),a("p",[e._v("Things to remember:")]),e._v(" "),a("ul",[a("li",[e._v("macOS does not support either SLI, Crossfire or GPUs will multiple main cores(like the Radeon Pro Duo). This may change with the release of the Radeon Pro Vega II Duo in the Mac Pro")]),e._v(" "),a("li",[e._v("Getting audio through HDMI/DisplayPort may require extra work with both AppleALC.kext and some other IO-REG edits")]),e._v(" "),a("li",[e._v("GPU Overclocking is limited to Vega 10 GPUs with "),a("a",{attrs:{href:"https://github.com/corpnewt/PyVega",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyVega"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Running supported GPUs alongside unsupported GPUs can have weird consequences as unsupported GPUs run off VESA drivers which have the issue in which it can break sleep and other functions in macOS. Please refer to the "),a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/extras/spoof.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disabling unsupported GPUs Guide"),a("OutboundLink")],1),e._v(" for more info")])]),e._v(" "),a("h2",{attrs:{id:"can-i-run-an-unsupported-gpu-in-my-hack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-run-an-unsupported-gpu-in-my-hack"}},[e._v("#")]),e._v(" Can I run an unsupported GPU in my hack?")]),e._v(" "),a("p",[e._v("So something to keep in mind when running an unsupported GPU in macOS is will fall back on VESA drivers when no real drivers are present. These are very simple, CPU based drivers that are used as a stop-gap while you wait to install the correct drivers but many basic functions of macOS are broken when running this way including sleep and general stability. And since these GPUs have no drivers even outside of Apple, we need some way to stop the unsupported GPU from being recognized in macOS. So what do we do? Well I'm glad you ask. With my patent pending "),a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/extras/spoof.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to disable your unsupported GPU for macOS Guide"),a("OutboundLink")],1),e._v(", even a simpleton like you can experience the glories of Mojave and beyond!")]),e._v(" "),a("blockquote",[a("p",[e._v("But can I render macOS on my iGPU but use the video outs on my unsupported GPU?")])]),e._v(" "),a("p",[e._v("Unfortunately not, and the reason being is actually quite similar to how Nvidia's Optimus technology functions. You would first need a way to grab/encode the iGPU's signal, send it towards the discrete GPU, then have said GPU decode the signal and display it. One small problem, decoding the signal would require proper GPU acceleration which your unsupported GPU doesn't have. So you will need to use your motherboard's video out ports no matter what")])])}),[],!1,null,null,null);t.default=o.exports}}]);