DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;
USE burgers_DB;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

