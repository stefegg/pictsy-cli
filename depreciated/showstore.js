#!/usr/bin/env node
const mongoose = require('mongoose');
const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('../config/database');
const showFile = require('../lib/show2.js');

showFile.show(process.argv[2])
