require 'dotenv/load'
require 'json'
require 'aws-sdk'

Dotenv.load('.env', './config/var_app')

event = JSON.parse(STDIN.read)
puts event