//http://blockchain.info/address/$bitcoin_address?format=json


Watched = new Meteor.Collection('watched');

function findBalance(address){
  var strang = "https://blockchain.info/address/" + address + "?format=json";
  var data = "HTTP.get(" + strang + ", [options], [asyncCallback])";
  return strang;
}

function parseThatData(address){
  var strang = "https://blockchain.info/address/" + address + "?format=json";
  http.get(strang,)
  //var data = "HTTP.get(" + strang + ", [options], [asyncCallback])";
  //var parsedObject = "HTTP.get(" + data + ", [options], [asyncCallback])";
  return json;
}

if (Meteor.isClient) {
  Template.pocket

  Template.wallet.watched  = function(){
     return Watched.find();
   }

  // Template.addWallet.events = {
  //   'click input.add': function() {
  //     var name_new = document.getElementById("name_new").value;
  //     var address_new = document.getElementById("address_new").value;
  //     var alert_new = document.getElementById("alert_new").value;
  //     var report_new = document.getElementById("report_new").value;
  //     Watched.insert({name: name_new, address: address_new, balance: 0, alert: alert_new, report: report_new});
  //   }
  // };

  Template.addWallet.events = {
    'click input.add': function() {
      var name_new = $('#name_new').val();
      var address_new = $('#address_new').val();
      var alert_new = $('#alert_new').val();
      var report_new = $('#report_new').val();
      var balance_new = parseThatData(address_new);
      Watched.insert({name: name_new, address: address_new, balance: balance_new, alert: alert_new, report: report_new});
    }
  };
}

if (Meteor.isServer) {
 // Meteor.startup(function () {
    // code to run on server at startup
  //});

  if (Watched.find().count() === 0) {
    var names = ["floppy1", "floppy2"];
    var addresses = ["1NWr9FsvdnMQ687zBcspBCpLobjAHgNLZv", "1dice9wcMu5hLF4g81u8nioL5mmSHTApw"];
    //var balances = findBalance(addresses);
    var balances = [303203, 3059340];
    var alerts = ["yolo", "nono"];
    var reports = ["not me", "yes me"];
    var json1 ;
    for (var i = 0; i < names.length; i++)
      //json1 = parseThatData(addresses[i]);
      //json1 = $.getJSON("https://blockchain.info/address/" + addresses[i] + "?format=json")
    //  Watched.insert({name: names[i], address: addresses[i], balance: json1.indexOf('address'), alert: alerts[i], report: reports[i]});
      Watched.insert({name: names[i], address: addresses[i], balance: 0, alert: alerts[i], report: reports[i]});
  }
}
