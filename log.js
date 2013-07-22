function log() {
  var colors = {'yellow': 'b58900','orange': 'cb4b16','red': 'dc322f','magenta': 'd33682','violet': '6c71c4','blue': '268bd2','cyan': '2aa198','green': '859900'};
  var color = arguments[2] || (typeof logColor === 'undefined' ? null : logColor) || 'blue';
  return !arguments[1] ? console.log(arguments[0]) : console.log('%c ' + arguments[0] + ' ', 'background: #eee8d5; color: #' + colors[color] + '; border: 1px solid #' + colors[color] + ';', arguments[1]);
}
