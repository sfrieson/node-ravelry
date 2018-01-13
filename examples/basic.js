var Ravelry = require('../');
var rav = Ravelry.basic({
  ravAccessKey: process.env.RAV_ACCESS_KEY,
  ravPersonalKey: process.env.RAV_PERSONAL_KEY
});

rav.misc.currentUser()
.then(data => console.log(`Good job ${data.user.username}. You are authorized.`))
.then(() => rav.app.data.set({foo: 'bar'}))
.then(() => rav.app.data.get(['foo']))
.then(res => console.log(`\`foo\` is set to \`${res.data.foo}\``))
.catch(err => console.log('Error:', err));
