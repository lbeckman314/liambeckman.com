---
layout: my-default
title: tutorials and guides
---

```R
#------------------------------------------------------------------------------------------------
# PURPOSE --------- This program outputs a bar graph for lab GE-14 uv radiation exposure
# AUTHOR ---------- liam beckman
# DATE ------------ 24 april 2017 monday
#------------------------------------------------------------------------------------------------
energy_setting <- c(0, 0.8, 1.6, 2.4, 3.2, 4.0, 4.8)
log10_survivor_concentration <- c(log(1.64*10^7), 0, 0, 0, 0, 0, 0)	

x <- energy_setting
y <- log10_survivor_concentration

barplot(y, main="log(survivor concentration) vs exposure energy", xlab="exposure energy (\U00B5J/cm^2)", ylab="log(survivor concentration)", ylim=c(0,20), names.arg = energy_setting)
```
