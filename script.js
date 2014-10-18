// Load native UI library
var gui = require('nw.gui');

// Create a tray icon
var tray = new gui.Tray({ icon: 'img/icon.png', title: 0 });

// Give it a menu
var menu = new gui.Menu();
menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
tray.menu = menu;

// Try notifier
var notifier = require('node-notifier');
var keypress = require('keypress');

var INTERVAL = 10 * 1000;
//var INTERVAL = 60 * 1000;

var maxApm = 0; // TODO: read it from file
var apm = 0;

// calculate the apm per minute
// record min, max, avg

setInterval(function() {
  // update tray
  tray.title = apm;
  notifier.notify({
    title: 'APM',
    message: 'Your apm is 100.',
    sound: 'Glass',
    wait: false
  }, function(err, response) {
    // execute when the notification leaves
    console.log(response);
  });
  apm = 0;
}, INTERVAL); // every 10s

/*keypress(process.stdin);

process.stdin.on('keypress', function(letter, key) {
  console.log(key.name);
});*/
//var keys = 'abcdefghijklmnopqrstuvwxyz'.split('');
//keys.concat(['Shift'])
//var shortcut;

//keys.forEach(function(key) {
  //shortcut = new gui.Shortcut({ key: key });
  //gui.App.registerGlobalHotKey(shortcut);
  //shortcut.on('active', function() {
    //apm++;
    ////console.log('Global desktop keyboard shortcut: ' + this.key + ' active.');
  //});

  //shortcut.on('failed', function(msg) {
    //console.log(msg);
  //});
//});

// Remove the tray
// tray.remove();
// tray = null;
