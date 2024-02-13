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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `activated` bit(1) DEFAULT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` enum('MAN','WOMAN') NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,_binary '','2000-01-01','steve12@email.com','MAN','steve','hero','$2a$10$OwPxSnpNBqGL7o6bgeVQ8OR8dcKDMYEpkHFCljgm4JjsuhQ0wyiAG','steve12'),(2,_binary '','2001-01-01','tom12@email.com','MAN','tom','good','$2a$10$h2lkSMR2QJIWBke6pmSHmeR3QS3.IbxCUVj1LctALt7m9C0zSDYZC','tom12'),(3,_binary '','2002-01-01','david12@email.com','MAN','david','cool','$2a$10$77clfomwDan7Nd5Qd5QaEuosEaBDiDfu.42sfVWUy2k6APZ/fTGM2','david12'),(4,_binary '','2000-01-01','admin@email.com','WOMAN','운영자','운영자','$2a$10$fdJolt4ATK4h9.YIsdXWheFMvmB9HaZGpao2LeqSL8iTrrErEBTGa','admin'),(5,_binary '','1996-07-07','name@email.com','WOMAN','kazec0','google','$2a$10$fdJolt4ATK4h9.YIsdXWheFMvmB9HaZGpao2LeqSL8iTrrErEBTGa','kazec0'),(6,_binary '','2000-12-05','hellocreeper@naver.com','MAN','Hyeonseo','Seo12','$2a$10$8JCNE1jn.CREm83EToDlteZ4n0kRiGrOeNU5JJE9osZm03hczcCMO','aros0905'),(7,_binary '','2000-12-05','dasdas@Adasda.com','MAN','Hyeonseo','seo12','$2a$10$QTJ8.vRUygjZxtFIScvoauGFNFoJsIARgWnm2rZh8M4xP.r45GoQa','aros0906'),(8,_binary '','2000-12-05','asdada@naver.com','MAN','Hyeonseo','seo1234','$2a$10$Rf4xXFgLVVrWiaMwq/KTZO3lhDn/.WP1o4JDYJlSETRL8wPIHD9pi','hellocreeper'),(9,_binary '','2000-12-05','seoseo@naver.com','MAN','HyeonSeoMoon','seo1234','$2a$10$D/oIwlK3aJOoOB/iv6LY3.2kwjLBYdFBimjypGIKToxAjXuuRJ1P6','ddokddok'),(10,_binary '','1996-07-06','name@email.com','WOMAN','leeeunhye','grid','$2a$10$NuP3M89o5nciBOMcnGQVTe2lAX/pq4uSXux/lqVlQbvgXbtnJbAQS','kazec0707'),(11,_binary '','2001-11-21','name@email.com','WOMAN','jin','java','$2a$10$9zDv7/S4O/wAinhez35xEeGJvh0wuUIBC6kyBzZCbc4361b6LDbmW','java5');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
