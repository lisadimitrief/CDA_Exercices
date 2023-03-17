CREATE DATABASE  IF NOT EXISTS `test_promo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test_promo`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: test_promo
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `adresse`
--

DROP TABLE IF EXISTS `adresse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adresse` (
  `adresse_id` int NOT NULL AUTO_INCREMENT,
  `ville_id` int NOT NULL,
  `code_postal_id` int NOT NULL,
  `apprenant_id` int NOT NULL,
  PRIMARY KEY (`adresse_id`),
  KEY `fk_adresse_ville_idx` (`ville_id`),
  KEY `fk_adresse_apprenant_idx` (`apprenant_id`),
  KEY `fk_adresset_code_postal_idx` (`code_postal_id`),
  CONSTRAINT `fk_adresse_apprenant` FOREIGN KEY (`apprenant_id`) REFERENCES `apprenant` (`apprenant_id`),
  CONSTRAINT `fk_adresset_code_postal` FOREIGN KEY (`code_postal_id`) REFERENCES `code_postal` (`code_postal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adresse`
--

LOCK TABLES `adresse` WRITE;
/*!40000 ALTER TABLE `adresse` DISABLE KEYS */;
INSERT INTO `adresse` VALUES (1,1,1,1),(2,2,2,2),(3,3,3,3),(4,4,4,4),(5,5,5,5),(6,2,2,6),(7,6,6,7),(8,2,2,8),(9,7,7,9),(10,8,8,10),(11,2,1,11),(12,1,1,12),(13,1,1,13),(14,9,9,14),(15,10,10,15),(16,11,11,16);
/*!40000 ALTER TABLE `adresse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apprenant`
--

DROP TABLE IF EXISTS `apprenant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apprenant` (
  `apprenant_id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `materiel_id` int NOT NULL,
  `promo_id` int NOT NULL,
  PRIMARY KEY (`apprenant_id`),
  KEY `fk_apprenantt_promo_idx` (`promo_id`),
  KEY `fk_apprenant_materiel_idx` (`materiel_id`),
  CONSTRAINT `fk_apprenant_materiel` FOREIGN KEY (`materiel_id`) REFERENCES `materiel` (`materiel_id`),
  CONSTRAINT `fk_apprenantt_promo` FOREIGN KEY (`promo_id`) REFERENCES `promo` (`promo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apprenant`
--

LOCK TABLES `apprenant` WRITE;
/*!40000 ALTER TABLE `apprenant` DISABLE KEYS */;
INSERT INTO `apprenant` VALUES (1,'Dehan','Angelika',28,1,1),(2,'Vandingenen','Anne-Sophie',30,1,1),(3,'Mellon','Anthony',37,1,1),(4,'Zellal','Benoit',32,2,1),(5,'Mouelhi','Bessem',30,1,1),(6,'Torrin','Cedric',37,2,1),(7,'Regnier','David',34,1,1),(8,'Hafsi','Faouzilha',41,1,1),(9,'Bouille','James',45,2,1),(10,'Lespinasse','Laurie',23,2,1),(11,'Dimitrief-Dontcheff','Lisa',23,1,1),(12,'Kasai','Marie-Claire',26,1,1),(13,'Munoz Almansa','Matthias',28,1,1),(14,'Estaque','Remi',20,1,1),(15,'Cilia','Romain',31,1,1),(16,'Sich','Zuzanna',39,2,1);
/*!40000 ALTER TABLE `apprenant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `code_postal`
--

DROP TABLE IF EXISTS `code_postal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `code_postal` (
  `code_postal_id` int NOT NULL AUTO_INCREMENT,
  `code_postal` varchar(45) NOT NULL,
  PRIMARY KEY (`code_postal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `code_postal`
--

LOCK TABLES `code_postal` WRITE;
/*!40000 ALTER TABLE `code_postal` DISABLE KEYS */;
INSERT INTO `code_postal` VALUES (1,'06100'),(2,'06600'),(3,'15926'),(4,'06270'),(5,'06220'),(6,'06530'),(7,'06130'),(8,'06510'),(9,'06560'),(10,'06730'),(11,'06740');
/*!40000 ALTER TABLE `code_postal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiel`
--

DROP TABLE IF EXISTS `materiel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiel` (
  `materiel_id` int NOT NULL,
  `nom` varchar(45) NOT NULL,
  PRIMARY KEY (`materiel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiel`
--

LOCK TABLES `materiel` WRITE;
/*!40000 ALTER TABLE `materiel` DISABLE KEYS */;
INSERT INTO `materiel` VALUES (1,'dsi'),(2,'perso');
/*!40000 ALTER TABLE `materiel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promo`
--

DROP TABLE IF EXISTS `promo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promo` (
  `promo_id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(3) NOT NULL,
  PRIMARY KEY (`promo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promo`
--

LOCK TABLES `promo` WRITE;
/*!40000 ALTER TABLE `promo` DISABLE KEYS */;
INSERT INTO `promo` VALUES (1,'CDA');
/*!40000 ALTER TABLE `promo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transport`
--

DROP TABLE IF EXISTS `transport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transport` (
  `nom` varchar(45) DEFAULT NULL,
  `apprenant_id` int DEFAULT NULL,
  KEY `fk_transport_apprenant_idx` (`apprenant_id`),
  CONSTRAINT `fk_transport_apprenant` FOREIGN KEY (`apprenant_id`) REFERENCES `apprenant` (`apprenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transport`
--

LOCK TABLES `transport` WRITE;
/*!40000 ALTER TABLE `transport` DISABLE KEYS */;
/*!40000 ALTER TABLE `transport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ville`
--

DROP TABLE IF EXISTS `ville`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ville` (
  `ville_id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  PRIMARY KEY (`ville_id`),
  CONSTRAINT `fk_ville_adresse` FOREIGN KEY (`ville_id`) REFERENCES `adresse` (`ville_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ville`
--

LOCK TABLES `ville` WRITE;
/*!40000 ALTER TABLE `ville` DISABLE KEYS */;
INSERT INTO `ville` VALUES (1,'nice'),(2,'antibes'),(3,'monaco'),(4,'villeneuv-loubet'),(5,'vallauris'),(6,'saint-cezaire-sur-siagne'),(7,'grasse'),(8,'carros'),(9,'valbonne'),(10,'sain-andre-de-la-roche'),(11,'chateauneuf-grasse');
/*!40000 ALTER TABLE `ville` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17 13:59:46
