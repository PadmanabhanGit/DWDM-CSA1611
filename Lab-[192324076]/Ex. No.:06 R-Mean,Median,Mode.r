# MEAN
n1 <- c("siri", "mahi", "chiru")
a1 <- c(23, 24, 25)
m1 <- c(88, 78, 25)
df1 <- data.frame(n1, a1, m1)
mean(df1$a1)
write.csv(df1, "datafr_mean.csv")

# MEDIAN
n2 <- c("siri", "mahi", "chiru")
a2 <- c(23, 24, 25)
m2 <- c(88, 78, 25)
df2 <- data.frame(n2, a2, m2)
median(df2$a2)
write.csv(df2, "datafr_median.csv")

# MODE
n3 <- c("siri", "mahi", "chiru")
a3 <- c(23, 24, 25)
m3 <- c(88, 78, 25)
df3 <- data.frame(n3, a3, m3)
mode <- function(x) {
  uniqx <- unique(x)
  uniqx[which.max(tabulate(match(x, uniqx)))]
}
mode(df3$a3)
write.csv(df3, "datafr_mode.csv")
