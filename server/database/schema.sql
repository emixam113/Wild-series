create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

CREATE TABLE item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category(
  id INT PRIMARY KEY,
  name VARCHAR(150) NOT NULL
);


CREATE TABLE program (
    id INT PRIMARY KEY,
    title varchar(100), 
    synopsis TEXT NOT NULL, 
    poster  TEXT NOT NULL, 
    country VARCHAR(150), 
    year INT,
    category_id  INT, 
    FOREIGN KEY (category_id) REFERENCES category(id)
);

