var merge = require('merge'), original, cloned;

exports.home = function(req, res) {
  res.render('home', { title: 'Beer Fridge', fridgeData: fridgeData })
};

exports.get_data = function(req, res) {
  res.json(fridgeData);
};

exports.post_data = function(req, res) {
  var floatTemp = req.body['temp'];
  var prevDiff = fridgeData['diff'];
  Object.keys(req.body).map(function(key, i) {
    req.body[key] = parseInt(req.body[key]);
  });
  fridgeData = merge(fridgeData, req.body);
  fridgeData['floatTemp'] = floatTemp;
  if(typeof(req.body['diff']) != undefined)
    fridgeData['diff'] = prevDiff + parseInt(req.body['diff']);
  res.json(fridgeData);
};
