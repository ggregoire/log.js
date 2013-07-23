Documentation
=============

Simple logging with descriptions and colors. Tested in Chrome and Firebug. Version 0.2

##Examples

###Simple:
```javascript
log(user);
```
![simple](https://raw.github.com/ggregoire/log.js/master/img/01.png)

###With a description:
```javascript
log('new user', user);
log('firstname', user.firstname);
log('firstname length', user.firstname.length);
log('test the length > 3', user.firstname.length > 3);
```
![with a description](https://raw.github.com/ggregoire/log.js/master/img/02.png)

###With an other text color:

```javascript
log('new user', user, 'yellow');
log('new user', user, 'orange');
log('new user', user, 'red');
log('new user', user, 'magenta');
log('new user', user, 'violet');
log('new user', user, 'blue');
log('new user', user, 'cyan');
log('new user', user, 'green');
```
![with an other text color 1](https://raw.github.com/ggregoire/log.js/master/img/03.png)

Or

```javascript
log_settings.color = 'yellow';
log('new user', user);
```
![with an other text color 2](https://raw.github.com/ggregoire/log.js/master/img/04.png)

###With an other background color:

```javascript
log_settings = { background: 'dark', color: 'yellow' };
log('new user', user);
```
![with an other background color](https://raw.github.com/ggregoire/log.js/master/img/05.png)
