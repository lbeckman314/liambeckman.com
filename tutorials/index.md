---
layout: my-default
title: tutorials and guides
---

```R
#setwd("/home/liam/Documents/uo2017Spring/microbioLab_BI331")
#colonyData <- read.csv(file='test.csv',sep=',',header=T)

time_min <- c(0, 20, 40, 60, 80, 100, 120)
log10_concentration <- c(7.477, 7.869, 8.061, 8.202, 8.242, 8.736, 8.736)	
od_readings <- c(0.060, 0.089, 0.122, 0.177, 0.234, 0.325, 0.435)	

x <- time_min
y <- log10_concentration

plot(x, y, xlim=range(x), ylim=range(y), xlab="Time (min)", ylab="log[10](averaged concentration)", main="Time vs Concentration")
lines(x[order(x)], y[order(x)], xlim=range(x), ylim=range(y), pch=16)

y <- od_readings

plot(x, od_readings, xlim=range(x), ylim=range(od_readings), xlab="Time (min)", ylab="OD-readings", main="Time vs OD-readings")
lines(x[order(x)], y[order(x)], xlim=range(x), ylim=range(y), pch=16)
```