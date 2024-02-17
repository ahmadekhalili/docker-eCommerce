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
