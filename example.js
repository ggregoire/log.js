var user = { firstname: 'Clark', lastname: 'Kent', job: 'Superman' };
  	
log(user);

log('new user', user);
log('firstname', user.firstname);
log('firstname length', user.firstname.length);
log('test the length > 3', user.firstname.length > 3);

log('new user', user, 'yellow');
log('new user', user, 'orange');
log('new user', user, 'red');
log('new user', user, 'magenta');
log('new user', user, 'violet');
log('new user', user, 'blue');
log('new user', user, 'cyan');
log('new user', user, 'green');

log_settings.color = 'yellow';
log('new user', user);

log_settings = { background: 'dark', color: 'yellow' };
log('new user', user);
