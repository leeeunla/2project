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
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `create_at` datetime(6) NOT NULL,
  `text` varchar(3000) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author_user_id` bigint DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt8vsygfmvtq6i6jqc3d19uk04` (`author_user_id`),
  CONSTRAINT `FKt8vsygfmvtq6i6jqc3d19uk04` FOREIGN KEY (`author_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'notice','2024-02-05 00:00:00.000000','기다리시고 기다리던 그 게임, Link의 모험이 드디어 출시했습니다.','Link 유저분들께 전체 안내',4,NULL),(2,'notice','2024-02-06 00:00:00.000000','안녕하세요 링크의 모험 운영진 입니다.현재 오류가 발생하고 있다는 제보를 받아 현재 확인 중이니 불편하시더라도 조금만 기다려주시면 감사드립니다.','현재 발생중인 오류안내',4,NULL),(3,'notice','2024-02-07 00:00:00.000000','현재 네트워크의 문제로 서버가 불안정합니다. 네트워크의 설정을 확인해보시고 그떄도 불안정할 경우, 다시금 문의 부탁드립니다.','서버 불안정 현상 안내',4,NULL),(4,'update','2024-02-06 00:00:00.000000','서버 업데이트가 진행될 예정이니 참고바랍니다 업데이트시 게임이 실행되지 않음을 미리 안내드립니다.','2.19(월) 업데이트 안내',4,NULL),(5,'update','2024-02-07 00:00:00.000000','지옥같았던 그 3스테이지를 지나, 드디어 라스트 스테이지인 4스테이지가 오픈되었습니다. 많은 관심과 사랑 부탁드립니다.','제 4스테이지 오픈',4,NULL),(6,'update','2024-02-09 00:00:00.000000','안녕하세요. 링크의 모험입니다.조작법이 더 쉽게 개선되었습니다. 즐거운 게임 하시길 바랍니다. 감사합니다','조작법 개선',4,NULL),(7,'update','2024-02-09 00:00:00.000000','시작했을때 캐릭터기 제자리에 있지않고 자꾸 사라지는 현상이 있음을 제보받았습니다. 저희가 확인해본 결과 오류가 맞음으로 수정조치하였으니 확인해보시고 그대로 안 되실 경우 문의해주시면 감사드립니다. 그럼 즐거운 게임되세요 ','캐릭터 사라지는 현상에 관해 안내드립니다.',4,NULL),(8,'update','2024-02-10 00:00:00.000000','스코어 기록이 되지 않는 버그에 관하여 수정 조치하였습니다. 그럼 즐거운 게임 되시길 바랍니다. 감사합니다.','스코어 기록되지 않는 버그 개선',4,NULL),(9,'qna','2024-02-05 00:00:00.000000','재미있다고 해서 시작을 눌렀는데 장애물은 움직이는데 왜 캐릭터는 아무리 해도 안 움직이는데 이거 버그인가요? 아니면 제가 조작키를 잘못 알고 있나요?ㅠㅠ 아시는 분 있나요?ㅠㅠ','이거 안 움직이는데 맞나요?',1,NULL),(10,'qna','2024-02-06 00:00:00.000000','아니 이거 톱날 왜이리 빨라요? 처음보다 빠른 것 같은데 이거 왜 이래','톱날이 너무 빨라요ㅠ',2,NULL),(11,'qna','2024-02-07 00:00:00.000000','코인 먹어도 안 오르는데 이거 버그임? 버그도 이런 버그가 걸려서 안 고쳐지면 겜 접음 ㅅㄱ','스코어가 안 오르고 있는데 이거 버그에요?',3,NULL),(12,'qna','2024-02-08 00:00:00.000000','1층까진 괜찮았는데 왜 2층 넘어가니까 장애물 타이밍도 이상하고 캐릭터 뛰는 것도 이상한데 이거 죽으면 처음부터 해야해야죠?','게임 렉이 심한데... 이거 처음부터 다시 해야하나요?',1,NULL),(13,'qna','2024-02-09 00:00:00.000000','난이도 헬인데 이거 끝이 있긴 한거에요?','이거 끝을 본 사람 있나요ㅠ?',2,NULL),(14,'qna','2024-02-10 00:00:00.000000','아니 이거 깨라고 만든 게임 맞음? 사전테스트 거친 게임 아닌 것 같은데 영자들도 다시 해보라고 하셈 깰 수 있나','이거 난이도 실화인가요?',3,NULL),(15,'walkthrough','2024-02-05 00:00:00.000000','타이밍만 잘 보고 가시면 됩니다.','1층 톱날 공략법',1,NULL),(16,'walkthrough','2024-02-06 00:00:00.000000','숨겨진 코인은 없으니 차분히 먹으시면 됩니다.','모든 코인 얻는법',2,NULL),(17,'walkthrough','2024-02-07 00:00:00.000000','끝에 살짝만 밣고 가세요','톱날에 죽지 않고 살 수 있는법',3,NULL),(18,'walkthrough','2024-02-08 00:00:00.000000','버그일 수 있으니 너무 사용하시진 마시고 최대한 끝부분에서 뛰시면 됩니다.','원 위에서 한번에 블럭으로 점프하는 법',1,NULL),(19,'walkthrough','2024-02-09 00:00:00.000000','코인 잘 먹고 점프를 잘 하시면 쉽게 깰 수 있습니다','2층 완전 공략',2,NULL),(20,'walkthrough','2024-02-10 00:00:00.000000','칼날도 많고 공도 많아서 힘들지만 진짜 길은 왼쪽입니다.','극악의 난이도 3층 공략법(ㅅㅍ 주의)',3,NULL),(21,'free','2024-02-05 00:00:00.000000','점심 뭐 먹을지 추천좀 대신 먹어드림ㅋ','오늘 점심 뭐먹지?',1,NULL),(22,'free','2024-02-06 00:00:00.000000','주말 오려면 2일 남음ㅋㅋㅋ','내가 재미있는 얘기해줄까?',2,NULL),(23,'free','2024-02-07 00:00:00.000000','다이아몬드ㅋㅋㅋㅋㅋㅋㅋㅋㅋ','아몬드가 죽으면?',3,NULL),(24,'free','2024-02-08 00:00:00.000000','난이도 실화냐고 니네도 못 꺠는 게임 우리도 깨라고 하지 마라! 난이도 하향해라!!','운영진들은 난이도 하향해라',1,NULL),(25,'free','2024-02-09 00:00:00.000000','패치한 거 겁나 개 같던데 자게 보긴 한데?','이야 패치한 거 봄?',2,NULL),(33,'gameobject','2024-02-07 00:00:00.000000','코인입니다. 먹으면 점수','코인',4,'/imge/image1.png'),(34,'gameobject','2024-02-10 00:00:00.000000','맞으면 죽어요','톱니바퀴',4,'/imge/Saw.png'),(35,'gameobject','2024-02-10 00:00:00.000000','이동하는 발판으로 밟은 채로 이동합니다','공(올라가는 물체, 발판)',4,'/imge/Circle.png'),(36,'gameobject','2024-02-10 00:00:00.000000','메인캐릭터입니다.','캐릭터',4,'/imge/Link.png'),(37,'gameobject','2024-02-10 00:00:00.000000','캐릭터 가만히 정지하고 있을때 모습입니다.','캐릭터(정지)',4,'/imge/stop.png'),(38,'gameobject','2024-02-10 00:00:00.000000','캐릭터가 이동할때의 모습입니다.','캐릭터 이동',4,'/imge/run.png'),(39,'gameobject','2024-02-10 00:00:00.000000','캐릭터 점프시 모습입니다.','캐릭터 점프',4,'/imge/jump.png'),(40,'gameobject','2024-02-10 00:00:00.000000','별이며, 시작할때의 화면 등장합니다.','별',4,'/imge/ster.png'),(41,'gameobject','2024-02-10 00:00:00.000000','게임 시작하거나 재시작시 등장하는 요소입니다.','문',4,'/imge/moon.png'),(42,'gameobject','2024-02-10 00:00:00.000000','점프맵의 바닥을 꾸며주는 요소이자 닿으면 죽습니다.','바다',4,'/imge/image2.png'),(43,'gameobject','2024-02-10 00:00:00.000000','유저들의 심신의 안정을 도모하고자 넣었으나 닿으면 죽습니다.','페페',4,'/imge/MungSang.png'),(44,'gameobject','2024-02-10 00:00:00.000000','3층 주 블럭이자 블럭 중 봄을 담당하고 있습니다.','길(봄)',4,'/imge/Grass.png'),(45,'gameobject','2024-02-07 10:52:12.287194','2층 주 블럭이자 블럭 중 가을을 담당하고 있습니다.','길(가을)',4,'/imge/Left1.png'),(46,'gameobject','2024-02-07 10:55:06.944891','1층 주 블럭이자 블럭 중 겨울을 담당하고 있습니다.','길(겨울)',4,'/imge/Mid1.png'),(47,'gameobject','2024-02-07 10:55:51.821218','유저들이 먹은 코인의 갯수를 표현해줍니다.','스코어',4,'/imge/Score.png'),(48,'gameobject','2024-02-07 10:56:30.787186','보이는 것처럼 살벌하게 생긴 이 오브젝트는 잘못하면 처음으로 다시 돌아가게 만드는 범인입니다.','철퇴',4,'/imge/Mace.png'),(49,'gameobject','2024-02-07 10:56:56.847203','문과의 비슷한 역할로 UI를 꾸미는 역할입니다.','라인',4,'/imge/UI.png'),(50,'gameobject','2024-02-07 10:57:15.778511','이 게임의 주 중요한 요소 중 하나인 배경입니다.','배경',4,'/imge/Main.png'),(51,'gamemapinfo','2024-02-07 11:00:51.781815','어느길이 진짜 일까요? 잘못 가면 죽음이 기다리는 그 길은 과연 어디일까요?!','1층',4,'/imge/map.png'),(52,'gamemapinfo','2024-02-07 11:01:30.135855','난이도는 보통입니다만, 으음... 깰 수 있을지는 잘 모르겠네요.','2층',4,'/imge/map2.png'),(53,'gamemapinfo','2024-02-07 11:01:53.656340','난이도 매우 어렵습니다 도전하실 분들만 하세요','3층',4,'/imge/map3.png'),(54,'gameinfo','2024-02-07 11:03:54.236643','W,A,S,D이나 화살표로 움직일 수 있습니다.','조작법',4,NULL),(55,'gameinfo','2024-02-07 11:04:06.558480','로그인 후 홈페이지 상단 게임 스타트 버튼으로 시작할 수 있습니다.','게임실행',4,NULL);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
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
