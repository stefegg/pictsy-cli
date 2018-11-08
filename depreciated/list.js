#!/usr/bin/env node
const mongoose = require('mongoose');
const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('../config/database');
const listFile = require('../lib/find2.js');

listFile.list()
