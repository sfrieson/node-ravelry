var Ravelry = require('../');
var rav = Ravelry.basic({
  ravAccessKey: process.env.RAV_ACCESS_KEY,
  ravPersonalKey: process.env.RAV_PERSONAL_KEY
});

rav.misc.currentUser()
.then(function (data) {
  console.log(`Good job ${data.user.username}. You are authorized.`);
})
.catch(function (err) {
  console.log(err);
});
