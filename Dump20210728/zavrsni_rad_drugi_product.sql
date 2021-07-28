-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: zavrsni_rad_drugi
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `main_image` varchar(255) NOT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `disscount` decimal(6,2) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `platform_id` int DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_platform_id_idx` (`platform_id`),
  KEY `fk_genre_id_idx` (`genre_id`),
  CONSTRAINT `fk_genre_id` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  CONSTRAINT `fk_platform_id` FOREIGN KEY (`platform_id`) REFERENCES `platform` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Grand theft Auto V',60.00,'https://s1.gaming-cdn.com/images/products/186/271x377/grand-theft-auto-v-cover.jpg','https://s1.gaming-cdn.com/images/products/186/screenshot/grand-theft-auto-v-wallpaper-1.jpg','https://s1.gaming-cdn.com/images/products/186/screenshot/grand-theft-auto-v-wallpaper-5.jpg','https://s1.gaming-cdn.com/images/products/186/screenshot/grand-theft-auto-v-wallpaper-3.jpg',20.00,'In the single-player version of the game Grand Theft Auto V, the characters are tied to a linear storyline which must be worked along fairly straight-forwardly. This is not the case in the online version which offers more freedom – and this can translate into more complexity sometimes – to explore and pick and choose which missions you want to complete, rather than needing to tick-box one’s way through all the scenarios.',3,2),(2,'Minecraft',24.00,'https://s2.gaming-cdn.com/images/products/442/271x377/minecraft-cover.jpg','https://s2.gaming-cdn.com/images/products/442/screenshot/minecraft-wallpaper-2.jpg','https://s2.gaming-cdn.com/images/products/442/screenshot/minecraft-wallpaper-5.jpg','https://s2.gaming-cdn.com/images/products/442/screenshot/minecraft-wallpaper-4.jpg',20.00,'The premise of the game is laughably simple: you arrive in the game with nothing more than your hands and a limited inventory. You mine to gather materials which you then use to make tools and build houses and other buildings.',11,5),(3,'Sims 4',6.00,'https://s3.gaming-cdn.com/images/products/272/271x377/the-sims-4-cover.jpg','https://s3.gaming-cdn.com/images/products/272/screenshot/the-sims-4-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/272/screenshot/the-sims-4-wallpaper-2.jpg','https://s3.gaming-cdn.com/images/products/272/screenshot/the-sims-4-wallpaper-4.jpg',20.00,'As with the other games and expansion packs in the series, you control the life of your Sims completely – or almost completely – as they go through life, buying or building a home, getting a job or getting into the dating scene.',11,6),(4,'NBA 2K21',7.00,'https://s3.gaming-cdn.com/images/products/8720/271x377/nba-2k21-cover.jpg','https://s3.gaming-cdn.com/images/products/8720/screenshot/nba-2k21-wallpaper-1.jpg','https://s3.gaming-cdn.com/images/products/8720/screenshot/nba-2k21-wallpaper-5.jpg','https://s3.gaming-cdn.com/images/products/8720/screenshot/nba-2k21-wallpaper-3.jpg',NULL,NULL,1,14),(34,'F1 2021',63.00,'https://s3.gaming-cdn.com/images/products/7541/271x377/f1-2021-cover.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-2.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-4.jpg',NULL,'The new and improved story mode brings back driver, Devon Butler, along with some other engaging characters (Aiden Jackson and Caspar Akerman amongst them), and unlike previous story modes, it introduces the player to a previously unseen glimpse of life off the tracks as well as on them and in the garages.',2,1),(36,'Orcs Must Die! 3',25.00,'https://s1.gaming-cdn.com/images/products/9060/271x377/orcs-must-die-3-cover.jpg','https://s1.gaming-cdn.com/images/products/9060/screenshot/orcs-must-die-3-wallpaper-2.jpg','https://s1.gaming-cdn.com/images/products/9060/screenshot/orcs-must-die-3-wallpaper-3.jpg','https://s1.gaming-cdn.com/images/products/9060/screenshot/orcs-must-die-3-wallpaper-4.jpg',5.00,'Orcs Must Die! 3 ushers orc-slaying mayhem to a previously unimaginable scale. Solo or with a friend by your side, arm yourself with a massive arsenal of traps and weapons. Slice, burn, toss and zap hordes of repugnant orcs in this long-awaited successor to the award-winning series.',1,1),(37,'Dying Light 2',60.00,'https://s3.gaming-cdn.com/images/products/2672/271x377/dying-light-2-stay-human-cover.jpg','https://s3.gaming-cdn.com/images/products/2672/screenshot/dying-light-2-stay-human-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/2672/screenshot/dying-light-2-stay-human-wallpaper-4.jpg','https://s3.gaming-cdn.com/images/products/2672/screenshot/dying-light-2-stay-human-wallpaper-5.jpg',NULL,'Parkour is still very much a feature, as is the combat, and Aiden Caldwell has a great deal of new tech to help him with his tasks. The parkour is, in fact, vastly improved, with up to twice as many new moves as before. Aiden’s movement about the city are further aided with the addition of a grappling hook so he can get up those highest buildings and a paraglider for speedy and zombie free lateral movements.',1,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-28 13:29:32
