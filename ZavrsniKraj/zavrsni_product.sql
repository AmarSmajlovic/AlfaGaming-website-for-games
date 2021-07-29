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
  `price` decimal(6,0) NOT NULL,
  `main_image` varchar(255) NOT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `disscount` decimal(6,0) DEFAULT NULL,
  `description` varchar(2500) DEFAULT NULL,
  `platform_id` int DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_platform_id_idx` (`platform_id`),
  KEY `fk_genre_id_idx` (`genre_id`),
  CONSTRAINT `fk_genre_id` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  CONSTRAINT `fk_platform_id` FOREIGN KEY (`platform_id`) REFERENCES `platform` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (40,'F1 2021',50,'https://s3.gaming-cdn.com/images/products/7541/271x377/f1-2021-cover.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-2.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/7541/screenshot/f1-2021-wallpaper-4.jpg',20,'The new and improved story mode brings back driver, Devon Butler, along with some other engaging characters (Aiden Jackson and Caspar Akerman amongst them), and unlike previous story modes, it introduces the player to a previously unseen glimpse of life off the tracks as well as on them and in the garages.',12,19),(41,'Sniper Ghost Warrior Contracts 2',20,'https://s2.gaming-cdn.com/images/products/6718/271x377/sniper-ghost-warrior-contracts-2-cover.jpg','https://s2.gaming-cdn.com/images/products/6718/screenshot/sniper-ghost-warrior-contracts-2-wallpaper-3.jpg','https://s2.gaming-cdn.com/images/products/6718/screenshot/sniper-ghost-warrior-contracts-2-wallpaper-4.jpg','https://s2.gaming-cdn.com/images/products/6718/screenshot/sniper-ghost-warrior-contracts-2-wallpaper-5.jpg',20,'The game – a mission-based, stealthy and immersive simulation game with massive maps and high replayability – offers the player plenty of creative chances for observation and curiosity. One of the absolute best bits of the game is the ridiculously long shots – seriously ridiculous! – that you can pull off in this game (see below for details). The ‘bullet cam’ is cheesily dramatic, but great fun, and helps to pull off this satisfyingly sharp precision shooting!',14,20),(42,'Dying Light 2 Stay Human',40,'https://s3.gaming-cdn.com/images/products/2672/271x377/dying-light-2-stay-human-cover.jpg','https://s3.gaming-cdn.com/images/products/2672/screenshot/dying-light-2-stay-human-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/2672/screenshot/dying-light-2-stay-human-wallpaper-4.jpg','https://s3.gaming-cdn.com/images/products/2672/screenshot/dying-light-2-stay-human-wallpaper-5.jpg',0,'Parkour is still very much a feature, as is the combat, and Aiden Caldwell has a great deal of new tech to help him with his tasks. The parkour is, in fact, vastly improved, with up to twice as many new moves as before. Aiden’s movement about the city are further aided with the addition of a grappling hook so he can get up those highest buildings and a paraglider for speedy and zombie free lateral movements.',14,20),(43,'Orcs Must Die! 3',12,'https://s1.gaming-cdn.com/images/products/9060/271x377/orcs-must-die-3-cover.jpg','https://s1.gaming-cdn.com/images/products/9060/screenshot/orcs-must-die-3-wallpaper-3.jpg','https://s1.gaming-cdn.com/images/products/9060/screenshot/orcs-must-die-3-wallpaper-4.jpg','https://s1.gaming-cdn.com/images/products/9060/screenshot/orcs-must-die-3-wallpaper-5.jpg',52,'Orcs Must Die! 3 ushers orc-slaying mayhem to a previously unimaginable scale. Solo or with a friend by your side, arm yourself with a massive arsenal of traps and weapons. Slice, burn, toss and zap hordes of repugnant orcs in this long-awaited successor to the award-winning series.\n\nNew to the series, War Scenarios pit players against the largest orc armies ever assembled. Mountable War Machines give players the essential firepower to heave, stab, carbonize, and disarticulate the abominable intruders.',12,22),(44,'Just Die Already',9,'https://s2.gaming-cdn.com/images/products/8854/271x377/just-die-already-cover.jpg','https://s2.gaming-cdn.com/images/products/8854/screenshot/just-die-already-wallpaper-4.jpg','https://s2.gaming-cdn.com/images/products/8854/screenshot/just-die-already-wallpaper-5.jpg','https://s2.gaming-cdn.com/images/products/8854/screenshot/just-die-already-wallpaper-1.jpg',NULL,'Just Die Already is an old people mayhem sandbox game created by the designers of Goat Simulator. You are an old retired person in a near future where people aren’t having any children. There isn’t anyone to pay for pensions due to those ungrateful millennials who prefer playing video games instead of doing actual work. With no one to cover your living costs, you - just like all other old people in this world - have no other choice but to survive on your own. How will you survive in a world that wants you to Just Die Already? To make things worse, you’ve just been kicked out of your retirement home, and your only option now is to perform dangerous challenges and explore the world for retirement tickets to qualify for free retirement care. So with society wishing you dead, isn’t it finally time to live a little?',14,22),(45,'Diesel Brothers: Truck Building Simulator',4,'https://s3.gaming-cdn.com/images/products/7313/271x377/diesel-brothers-truck-building-simulator-cover.jpg','https://s3.gaming-cdn.com/images/products/7313/screenshot/diesel-brothers-truck-building-simulator-wallpaper-3.jpg','https://s3.gaming-cdn.com/images/products/7313/screenshot/diesel-brothers-truck-building-simulator-wallpaper-4.jpg','https://s3.gaming-cdn.com/images/products/7313/screenshot/diesel-brothers-truck-building-simulator-wallpaper-5.jpg',NULL,'What\'s up, America? Diesel Brothers: Truck Building Simulator is a car tuning simulator with multiplayer and modding. Search for busted four-wheelers and transform them into legendary diesel-drinking monsters! Disassemble the entire car down to the frame and then rebuild it with whatever parts you want. Diesel trucks are a lifestyle and the garage is your new home. Fancy a 12-inch suspension? It\'s all up to you! Invite up to three of your friends to the garage and pick unique characters to compliment your skills. Together you can seek for rare parts on junkyards, completely rebuild trucks from the frame up or race each other. Take advantage of your spray gun and create liquid awesomeness. Finish the truck with our custom decals or make ones yourself, to add your unique touch! Don\'t forget to share your best photos on Social Media. Let the world see your magnum opus! Scavenge junkyards to find rare parts or send your buddies for the hunt. When you seek for car parts, you can find some old rusty wreckage. Don\'t get fooled by its look - that decayed frame can become the next Mega Ram Runner.',12,24),(46,'Battlefield 2042',60,'https://s1.gaming-cdn.com/images/products/6690/271x377/battlefield-2042-cover.jpg','https://s1.gaming-cdn.com/images/products/6690/screenshot/battlefield-2042-wallpaper-3.jpg','https://s1.gaming-cdn.com/images/products/6690/screenshot/battlefield-2042-wallpaper-4.jpg','https://s1.gaming-cdn.com/images/products/6690/screenshot/battlefield-2042-wallpaper-1.jpg',NULL,'As touched on above, the world’s climate has slipped into extremes, causing a large number of people to flee their now untenable homes. These climate refugees are calls No-Pats meaning they are stateless and have ‘no country’. The climate crisis has dramatically worsened, causing the collapse of the EU and heightening tensions between the USA and Russia to the point of war.',13,20);
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

-- Dump completed on 2021-07-30  1:09:43
