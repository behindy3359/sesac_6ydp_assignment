const express = require('express');

exports.showMain = ()=>{(req, res) => {
  res.render('index'); 
}};