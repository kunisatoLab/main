############ Checking Rstan ################
library(rstan)
# Checking the C++ Toolchain
pkgbuild::has_build_tools(debug = TRUE)

# Checking estimation using Rstan
options(mc.cores = parallel::detectCores())
schools_dat <- list(J = 8, 
                    y = c(28,  8, -3,  7, -1,  1, 18, 12),
                    sigma = c(15, 10, 16, 11,  9, 11, 10, 18))

s_time<-proc.time()

fit <- stan(file = '8school.stan', 
            data = schools_dat,
            chains = 4,
            warmup = 1000, 
            iter = 20000, )
# Time to estimate
time_rstan <- proc.time() - s_time

print(fit)

############ Checking cmdstanr ################
library(cmdstanr)
# Checking the setup of cmdstanr
cmdstan_path()
cmdstan_version()
# Checking estimation using cmdstan
mod <- cmdstan_model('8school.stan')
mod$print()

s_time<-proc.time()

fit <- mod$sample(
  data = schools_dat,
  seed = 123,
  chains = 4,
  iter_warmup = 1000,
  iter_sampling = 19000)
# Time to estimate
time_cmdstan <- proc.time() - s_time

fit$summary()

# How many times faster is cmdstanr than Rstan?
time_rstan[3] / time_cmdstan[3]