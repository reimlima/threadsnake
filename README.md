# threadsnake
--------------------------------------------------------------------------------

Microservice written in python

# Notice
--------------------------------------------------------------------------------

threadsnake runs under Python version 2.7.6

## Changelog
--------------------------------------------------------------------------------

* **07/18/2017 - v1** - First Stable Release

## Dependencies
--------------------------------------------------------------------------------

These modules:

os, re, sys, json, time, yaml, logging, sqlite3

socket, threading, urlparse, BaseHTTPServer

## How to Use
--------------------------------------------------------------------------------

### First of All: Config File

Just fill the configuration file with the values as bellow:

| Legend | Description |
|--|--|
| TS_PORT_NUMBER | Port in which the server will run |
| TS_LOG_FILE | Server Log file |
| TS_PIDFILE | Path  and name to the PID File |
| SL_DATABASE | SQLite Database to be used for the server |

```sh
	# Example
	TS_PORT_NUMBER: '8080'
	TS_LOG_FILE: 'threadsnake.log'
	TS_PIDFILE: '/var/run/threadsnake/threadsnake.pid'
	SL_DATABASE: 'threadsnake.db'
```

### Next: threadsnake as a Linux command

Place the file _'threadsnake'_ in one of the directories listed in the $PATH.

```sh
$ echo $PATH
/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```

### Finally: Start

Try to start the server running the _start/stop_ script:

```sh
$ tsd start
```
> **Notice:**
> Maybe you'll need to open a new terminal to run it sucessful
> Make sure you have enough permission to write the pidfile in the local set in TS_PIDFILE

### What Now?

If your Server is Up and Running, now you'll be able to see the _help page_ in the web browser by access the address 'http://[your ip]:[port]'.

#### Example
http://192.16.0.10:8080

And then this page will show you how to use this microservice.

#### Endpoints
| Endpoints | Description |
|--|--|
| / | show this help page |
| /status | show the API status |
| /dados | endpoint to start showing the data |
 
#### Search parameters
| Key | Description |
|--|--|
| search | Search occurrence. Empty = Most recent register |
| total | Amount of occurrence to return. Default: 1 |
| time | Time Interval. Ex.: 1d, 1h, 10m. Default: 5m |
 
### Start Right Now

Use the file _dataexample.txt_ in this repository to start play with this microservice.

Create the SQLite Database file:

```sh
$ sqlite3 threadsnake.db

```
```sql
CREATE TABLE IF NOT EXISTS threadsnakedata ( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, timestamp INTEGER, data TEXT );
```

Insert your data to SQLite like this:

```sh
$ IFS='
> '
$ for i in $(cat dataexample/dataexample.txt); do query="INSERT INTO threadsnakedata(timestamp, data) VALUES( '$(date +%s)', '${i}');" ; sqlite3 threadsnake.db "$query" ; done
```

Now you can see the result this way:

#### Example
http://192.16.0.10:8080/dados?search=Rio2016&total=10&time=1h

> **Notice:**
> Remember to change the IP with the address from where you're running this microsevice, and change the port number you choose.

### Insert and Show your own Data

Once you keep the _timestamp_ field and insert data with timestamp in mind, you can insert and select data as you want.

The _timestamp_ field is important because the script use it to perform searchs based on the query string option _time_.
