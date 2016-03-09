#!/usr/local/bin/jsc

// load raw data 'item_data'
load("../donjon/monster_data.js")

var data = monster_data

var records = []

for (var key in data) {
  if (data.hasOwnProperty(key)) {
    records.push(data[key])
  }
}

var dataJson = JSON.stringify(records)

print(dataJson)