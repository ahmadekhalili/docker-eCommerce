first create `.env` file in root of project with this structure:
```
SECRET_KEY=-l(24ils3ph2mp0%cguxdq!i%8cfjfldw*1ugu+a@9wk^2x^-e  # replace your project secret key
POSTGRES_MY_HOST=127.0.0.1
POSTGRES_DBNAME=
POSTGRES_USER_NAME=
POSTGRES_USER_PASS=
POSTGRES_ADMINUSER=
MONGO_HOST=127.0.0.1
MONGO_NAME=
MONGO_SOURCE=
MONGO_USER=
MONGO_PASSWORD=
MONGO_ADMINUSER=
```

- `SECRET_KEY` is django settings/SECRET_KEY. provided default value works fine but recommended to replace with your project SECRET_KEY. 
- `MONGO_SOURCE` in most cases is: admin  


### run project
To run project in port **0.0.0.0:8000** just run dockerized project with:
```
docker compose up
```

It has to download about 2GB, so could take long time.

**Note:** It's recomended create `mongo` and `postgres` volume before starting dockerized project.

**Project file permission:** You should change project file permission (after cloning) if you are using Virtual machine:
```
sudo chown -R username:username docker-eCommerce/
```

Change `username` with your linux user name.
