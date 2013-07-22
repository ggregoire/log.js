Documentation
=============

Simple logging with descriptions and colors. Tested in Chrome. Version 0.1

##Examples

###Simple:
```javascript
log(users);
```
![simple](https://raw.github.com/ggregoire/log.js/master/img/01.png)

###With a description:
```javascript
log('User added in the db', user);
```
![with a description](https://raw.github.com/ggregoire/log.js/master/img/02.png)

###With another color:

```javascript
log('User added in the db', user, 'yellow');
log('User added in the db', user, 'orange');
log('User added in the db', user, 'red');
log('User added in the db', user, 'magenta');
log('User added in the db', user, 'violet');
log('User added in the db', user, 'blue');
log('User added in the db', user, 'cyan');
log('User added in the db', user, 'green');
```
![with another color 1](https://raw.github.com/ggregoire/log.js/master/img/03.png)

Or

```javascript
var logColor = 'yellow';
log('User added in the db', user);

logColor = 'green';
log('User added in the db', user);
```
![with another color 2](https://raw.github.com/ggregoire/log.js/master/img/04.png)
