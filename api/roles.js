const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("student")
 .readOwn("category")
 .updateOwn("category")
 
ac.grant("tutor")
 .extend("student")
 .readAny("category")
 
ac.grant("admin")
 .extend("student")
 .extend("tutor")
 .updateAny("category")
 .deleteAny("category")
 
return ac;
})();