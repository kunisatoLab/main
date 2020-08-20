############ Checking Rstan ################
library(rstan)
# Checking the C++ Toolchain
pkgbuild::has_build_tools(debug = TRUE)

# Checking estimation using Rstan
options(mc.cores = parallel::detectCores())
schools_dat <- list(J = 8, 
                    y = c(28,  8, -3,  7, -1,  1, 18, 12),
                    sigma = c(15, 10, 16, 11,  9, 11, 10, 18))

fit <- stan(file = '8school.stan', 
            data = schools_dat,
            chains = 4,
            warmup = 1000, 
            iter = 20000, )

print(fit)