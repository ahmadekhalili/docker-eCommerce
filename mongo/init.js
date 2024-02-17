db = db.getSiblingDB("${MONGO_NAME}");
db.init.insert({"welcome":"hello"})
db.createUser({user: "${MONGO_USER}", pwd:  "${MONGO_PASSWORD}", roles: [{ role:"readWrite", db: "${MONGO_NAME}"}, { role:"read", db: "reporting"}]});
db.createUser({user: "${MONGO_ADMINUSER}", pwd:  "${MONGO_PASSWORD}", roles: [{ role:"root", db: "admin"}]});