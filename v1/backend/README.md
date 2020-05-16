# Person Site Backend! 

## Note: 
Currently not in use since i'm unsure if its a good idea to build my own blogging platform or use others, i.e. Medium instead. 

## Docker-Compose Quickstart 
### Set Up and Run
```
$ docker-compose up
```


## Local Quickstart
### Installation 
```
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```


### Database Migration and Set Up
```
(env) $ psql -U postgres
psql (12.2 (Ubuntu 12.2-4))
Type "help" for help.

postgres=# create database personalsite;
postgres=# \q
(env) $ python3 makemigrations blogs
(env) $ python3 migrate blogs
```

### Running the Application
```
$ python3 manage.py runserver
```

### Additional Note: 
Make sure postgresql is installed and configured properly!


