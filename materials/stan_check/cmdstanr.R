############ Checking cmdstanr ################
install.packages("cmdstanr", repos = c("https://mc-stan.org/r-packages/", getOption("repos")))
library(cmdstanr)
install_cmdstan()
# Checking the setup of cmdstanr
cmdstan_path()
cmdstan_version()
# Checking estimation using cmdstan
mod <- cmdstan_model('8school.stan')
mod$print()

fit <- mod$sample(
  data = schools_dat,
  seed = 123,
  chains = 4,
  iter_warmup = 1000,
  iter_sampling = 19000)

fit$summary()