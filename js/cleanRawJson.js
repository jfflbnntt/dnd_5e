#!/usr/local/bin/jsc

// load raw data 'item_data'
load("../donjon/item_data.js")

var data = item_data

var records = []

for (var key in data) {
  if (data.hasOwnProperty(key)) {
    records.push(data[key])
  }
}

var dataJson = JSON.stringify(records)

print(dataJson)