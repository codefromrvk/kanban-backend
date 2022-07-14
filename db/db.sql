
--1
CREATE TABLE boards (
    id BIGINT NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);
--2
CREATE TABLE cards (
    id BIGINT NOT NULL PRIMARY KEY,
    bid BIGINT  NOT NULL  ,
    title VARCHAR(100) NOT NULL
);
--3
INSERT INTO boards (id,title) VALUES (1234,'Planned'),(4321,'In Progress'),(3245,'Completed'),(5432,'Backlogs');
