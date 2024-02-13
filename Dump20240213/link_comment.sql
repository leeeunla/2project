-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: link
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_at` datetime(6) NOT NULL,
  `text` varchar(3000) NOT NULL,
  `author_user_id` bigint DEFAULT NULL,
  `board_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpvkpr9i2muc7yeg6o5071y4jk` (`author_user_id`),
  KEY `FKlij9oor1nav89jeat35s6kbp1` (`board_id`),
  CONSTRAINT `FKlij9oor1nav89jeat35s6kbp1` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`),
  CONSTRAINT `FKpvkpr9i2muc7yeg6o5071y4jk` FOREIGN KEY (`author_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'2024-02-05 00:00:00.000000','그거 버그에요 다시 해야함',3,9),(2,'2024-02-06 00:00:00.000000','윗분 말 맞음 그거 버그라서 나도 다시 함ㅠ',2,9),(3,'2024-02-06 00:00:00.000000','원래도 톱날이 빠르긴 한데 갑자기 빨라지는 경우도 있어서 문의 해야할 듯',1,10),(4,'2024-02-07 00:00:00.000000','이 게임 버그 많아서 그럼 이해하셈',3,11),(5,'2024-02-07 00:00:00.000000','겜 접는게 답일 듯 아님 문의 해보셈',2,11),(6,'2024-02-08 00:00:00.000000','게임을 끄고 다시 키면 원만하면 다시 됩니다. 물론 처음부터 하는 것은 확정이고요',1,12),(7,'2024-02-09 00:00:00.000000','난 봄 님은 아직임?',3,13),(8,'2024-02-09 00:00:00.000000','봄ㅋㅋㅋㅋ',2,13),(9,'2024-02-09 00:00:00.000000','내 말이 걍 깨지 말라고 만든듯',1,14);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-13 13:46:01
