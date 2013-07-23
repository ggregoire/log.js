var log_settings = { 'color': null, 'background': null };

function log() {
  var backgrounds = {'light': 'f5f5f5', 'dark': '202020'};
  var colors = {'yellow': 'b58900','orange': 'cb4b16','red': 'dc322f','magenta': 'd33682','violet': '6c71c4','blue': '268bd2','cyan': '2aa198','green': '859900','black': '151515'};
  var background = log_settings.background || 'light';
  var color = arguments[2] || log_settings.color || 'blue';
  return !arguments[1] ? console.log(arguments[0]) : console.log('%c ' + arguments[0] + ' ', 'background:#' + backgrounds[background] + ';color:#' + colors[color] + ';font-family:Verdana;padding:1px 4px 2px 4px;', arguments[1]);
}
