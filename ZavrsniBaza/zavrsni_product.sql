-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: zavrsni
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (40,'F1 2021',50.00,'https://s3.gaming-cdn.com/images/products/7541/271x377/f1-2021-cover.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-2.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-4.jpg',20.00,'The new and improved story mode brings back driver, Devon Butler, along with some other engaging characters (Aiden Jackson and Caspar Akerman amongst them), and unlike previous story modes, it introduces the player to a previously unseen glimpse of life off the tracks as well as on them and in the garages.',12,19),(41,'Sniper Ghost Warrior Contracts 2',20.00,'https://s2.gaming-cdn.com/images/products/6718/271x377/sniper-ghost-warrior-contracts-2-cover.jpg','https://s2.gaming-cdn.com/images/products/6718/screenshot/sniper-ghost-warrior-contracts-2-wallpaper-3.jpg','https://s2.gaming-cdn.com/images/products/6718/screenshot/sniper-ghost-warrior-contracts-2-wallpaper-4.jpg','https://s2.gaming-cdn.com/images/products/6718/screenshot/sniper-ghost-warrior-contracts-2-wallpaper-5.jpg',5.00,'The game – a mission-based, stealthy and immersive simulation game with massive maps and high replayability – offers the player plenty of creative chances for observation and curiosity. One of the absolute best bits of the game is the ridiculously long shots – seriously ridiculous! – that you can pull off in this game (see below for details). The ‘bullet cam’ is cheesily dramatic, but great fun, and helps to pull off this satisfyingly sharp precision shooting!',14,20);
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

-- Dump completed on 2021-07-28 16:12:19
