CREATE DATABASE IF NOT EXISTS `pokemon_cards`;
USE `pokemon_cards`;
DROP TABLE IF EXISTS `trading_cards`;
DROP TABLE IF EXISTS `card_collections`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL UNIQUE,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO users (`user_name`, `password`)
VALUES ('Charles','pwd'),
('Bob','pwd'),
('Peter','pwd');

CREATE TABLE `card_collections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO card_collections (user_id)
VALUES (1);

CREATE TABLE `trading_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `card_id` varchar(45) NOT NULL,
  `image_link` varchar(300) NOT NULL,
  `collection_id` int(11) NOT NULL,  
  PRIMARY KEY (id),
  FOREIGN KEY (collection_id) REFERENCES card_collections(id) ON DELETE CASCADE 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO trading_cards(`name`, `card_id`, `image_link`, `collection_id`)
VALUES("Charizard","base1-4","https://api.pokemontcg.io/v1/cards/base1-4",1);