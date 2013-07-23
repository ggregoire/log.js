function log() {
  var colors = {'yellow': 'b58900','orange': 'cb4b16','red': 'dc322f','magenta': 'd33682','violet': '6c71c4','blue': '268bd2','cyan': '2aa198','green': '859900'};
  var color = arguments[2] || (typeof logColor === 'undefined' ? null : logColor) || 'cyan';
  return !arguments[1] ? console.log(arguments[0]) : console.log('%c ' + arguments[0] + ' ', 'background:#' + colors[color] + ';color:#fff;font-family:Verdana;padding:1px 4px 2px 4px;border-radius:5px', arguments[1]);
}
