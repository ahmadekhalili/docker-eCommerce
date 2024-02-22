db = db.getSiblingDB("${MONGO_DBNAME}");
db.init.insert({"welcome":"hello"})
db.createUser({user: "${MONGO_USERNAME}", pwd:  "${MONGO_PASSWORD}", roles: [{ role:"readWrite", db: "${MONGO_DBNAME}"}, { role:"read", db: "reporting"}]});
db.createUser({user: "${MONGO_ADMINUSER}", pwd:  "${MONGO_USERPASS}", roles: [{ role:"root", db: "admin"}]});