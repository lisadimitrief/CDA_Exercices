CREATE DATABASE  IF NOT EXISTS `dracomicon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dracomicon`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: dracomicon
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
-- Table structure for table `attaque`
--

DROP TABLE IF EXISTS `attaque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attaque` (
  `id_attaque` tinyint NOT NULL AUTO_INCREMENT,
  `puissance` smallint NOT NULL,
  `name_attaque` varchar(15) NOT NULL,
  `physique` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_attaque`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attaque`
--

LOCK TABLES `attaque` WRITE;
/*!40000 ALTER TABLE `attaque` DISABLE KEYS */;
/*!40000 ALTER TABLE `attaque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biome`
--

DROP TABLE IF EXISTS `biome`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biome` (
  `id_biome` tinyint NOT NULL AUTO_INCREMENT,
  `name_biome` varchar(20) NOT NULL,
  `id_weather` tinyint NOT NULL,
  PRIMARY KEY (`id_biome`),
  KEY `fk_biome_weather_idx` (`id_weather`),
  CONSTRAINT `fk_biome_weather` FOREIGN KEY (`id_weather`) REFERENCES `weather` (`id_weather`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biome`
--

LOCK TABLES `biome` WRITE;
/*!40000 ALTER TABLE `biome` DISABLE KEYS */;
/*!40000 ALTER TABLE `biome` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biome_creature`
--

DROP TABLE IF EXISTS `biome_creature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biome_creature` (
  `id_biome_creature` smallint NOT NULL AUTO_INCREMENT,
  `id_biome` tinyint NOT NULL,
  `id_creature` tinyint NOT NULL,
  PRIMARY KEY (`id_biome_creature`),
  KEY `fk_biome-crea_creature_idx` (`id_creature`),
  KEY `fk_biome-crea_biome_idx` (`id_biome`),
  CONSTRAINT `fk_biome-crea_biome` FOREIGN KEY (`id_biome`) REFERENCES `biome` (`id_biome`),
  CONSTRAINT `fk_biome-crea_creature` FOREIGN KEY (`id_creature`) REFERENCES `creature` (`id_creature`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biome_creature`
--

LOCK TABLES `biome_creature` WRITE;
/*!40000 ALTER TABLE `biome_creature` DISABLE KEYS */;
/*!40000 ALTER TABLE `biome_creature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id_categorie` tinyint NOT NULL AUTO_INCREMENT,
  `categorie` varchar(15) NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creature`
--

DROP TABLE IF EXISTS `creature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creature` (
  `id_creature` tinyint NOT NULL AUTO_INCREMENT,
  `name_creature` varchar(25) NOT NULL,
  `lvl_creature` tinyint NOT NULL,
  `capturable` tinyint(1) NOT NULL,
  `id_espece` tinyint NOT NULL,
  `id_element` tinyint NOT NULL,
  `id_attaque1` tinyint NOT NULL,
  `id_attaque2` tinyint NOT NULL,
  `id_attaque3` tinyint NOT NULL,
  `id_attaque4` tinyint NOT NULL,
  `id_attaque5` tinyint NOT NULL,
  PRIMARY KEY (`id_creature`),
  KEY `fk_creature_espece_idx` (`id_espece`),
  KEY `fk_creature_element_idx` (`id_element`),
  KEY `fk_creature_attaque1_idx` (`id_attaque1`),
  KEY `fk_creature_attaque2_idx` (`id_attaque2`),
  KEY `fk_creature_attaque3_idx` (`id_attaque3`),
  KEY `fk_creature_attaque4_idx` (`id_attaque4`),
  KEY `fk_creature_attaque5_idx` (`id_attaque5`),
  CONSTRAINT `fk_creature_attaque1` FOREIGN KEY (`id_attaque1`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_creature_attaque2` FOREIGN KEY (`id_attaque2`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_creature_attaque3` FOREIGN KEY (`id_attaque3`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_creature_attaque4` FOREIGN KEY (`id_attaque4`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_creature_attaque5` FOREIGN KEY (`id_attaque5`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_creature_element` FOREIGN KEY (`id_element`) REFERENCES `element` (`id_element`),
  CONSTRAINT `fk_creature_espece` FOREIGN KEY (`id_espece`) REFERENCES `espece` (`id_espece`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creature`
--

LOCK TABLES `creature` WRITE;
/*!40000 ALTER TABLE `creature` DISABLE KEYS */;
/*!40000 ALTER TABLE `creature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dragon`
--

DROP TABLE IF EXISTS `dragon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dragon` (
  `id_dragon` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `genre_dragon` tinyint(1) NOT NULL,
  `lvl_dragon` tinyint NOT NULL,
  `id_profil` int NOT NULL,
  `id_espece` tinyint NOT NULL,
  `id_stade` int NOT NULL,
  `id_element` tinyint NOT NULL,
  `id_attaque1` tinyint NOT NULL,
  `id_attaque2` tinyint NOT NULL,
  `id_attaque3` tinyint NOT NULL,
  `id_attaque4` tinyint NOT NULL,
  `id_attaque5` tinyint NOT NULL,
  PRIMARY KEY (`id_dragon`),
  KEY `fk_dragon_profil_idx` (`id_profil`),
  KEY `fk_dragon_espece_idx` (`id_espece`),
  KEY `fk_dragon_stade_idx` (`id_stade`),
  KEY `fk_dragon_element_idx` (`id_element`),
  KEY `fk_dragon_attaque1_idx` (`id_attaque1`),
  KEY `fk_dragon_attaque2_idx` (`id_attaque2`),
  KEY `fk_dragon_attaque3_idx` (`id_attaque3`),
  KEY `fk_dragon_attaque4_idx` (`id_attaque4`),
  KEY `fk_dragon_attaque5_idx` (`id_attaque5`),
  CONSTRAINT `fk_dragon_attaque1` FOREIGN KEY (`id_attaque1`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_dragon_attaque2` FOREIGN KEY (`id_attaque2`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_dragon_attaque3` FOREIGN KEY (`id_attaque3`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_dragon_attaque4` FOREIGN KEY (`id_attaque4`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_dragon_attaque5` FOREIGN KEY (`id_attaque5`) REFERENCES `attaque` (`id_attaque`),
  CONSTRAINT `fk_dragon_element` FOREIGN KEY (`id_element`) REFERENCES `element` (`id_element`),
  CONSTRAINT `fk_dragon_espece` FOREIGN KEY (`id_espece`) REFERENCES `espece` (`id_espece`),
  CONSTRAINT `fk_dragon_profil` FOREIGN KEY (`id_profil`) REFERENCES `profil` (`id_profil`),
  CONSTRAINT `fk_dragon_stade` FOREIGN KEY (`id_stade`) REFERENCES `stade` (`id_stade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dragon`
--

LOCK TABLES `dragon` WRITE;
/*!40000 ALTER TABLE `dragon` DISABLE KEYS */;
/*!40000 ALTER TABLE `dragon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drop_table`
--

DROP TABLE IF EXISTS `drop_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drop_table` (
  `id_drop_table` int NOT NULL AUTO_INCREMENT,
  `id_creature` tinyint NOT NULL,
  `id_equipement` smallint NOT NULL,
  `drop_luck` tinyint NOT NULL,
  PRIMARY KEY (`id_drop_table`),
  KEY `fk_drop-table_equipement_idx` (`id_equipement`),
  KEY `fk_drop-table_creature_idx` (`id_creature`),
  CONSTRAINT `fk_drop-table_creature` FOREIGN KEY (`id_creature`) REFERENCES `creature` (`id_creature`),
  CONSTRAINT `fk_drop-table_equipement` FOREIGN KEY (`id_equipement`) REFERENCES `equipement` (`id_equipement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drop_table`
--

LOCK TABLES `drop_table` WRITE;
/*!40000 ALTER TABLE `drop_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `drop_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `element`
--

DROP TABLE IF EXISTS `element`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `element` (
  `id_element` tinyint NOT NULL AUTO_INCREMENT,
  `name_element` varchar(10) NOT NULL,
  PRIMARY KEY (`id_element`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `element`
--

LOCK TABLES `element` WRITE;
/*!40000 ALTER TABLE `element` DISABLE KEYS */;
/*!40000 ALTER TABLE `element` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encyclopedie`
--

DROP TABLE IF EXISTS `encyclopedie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encyclopedie` (
  `id_encyclopedie` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(20) NOT NULL,
  `contenu` text NOT NULL,
  `id_espece` tinyint NOT NULL,
  PRIMARY KEY (`id_encyclopedie`),
  KEY `fk_encyclopedie_espece_idx` (`id_espece`),
  CONSTRAINT `fk_encyclopedie_espece` FOREIGN KEY (`id_espece`) REFERENCES `espece` (`id_espece`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encyclopedie`
--

LOCK TABLES `encyclopedie` WRITE;
/*!40000 ALTER TABLE `encyclopedie` DISABLE KEYS */;
/*!40000 ALTER TABLE `encyclopedie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipement`
--

DROP TABLE IF EXISTS `equipement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipement` (
  `id_equipement` smallint NOT NULL AUTO_INCREMENT,
  `item_level` tinyint NOT NULL,
  `nom_equipement` varchar(25) NOT NULL,
  `id_equipement_type` tinyint NOT NULL,
  PRIMARY KEY (`id_equipement`),
  KEY `fk_equipement_equipement-type_idx` (`id_equipement_type`),
  CONSTRAINT `fk_equipement_equipement-type` FOREIGN KEY (`id_equipement_type`) REFERENCES `equipement_type` (`id_equipement_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipement`
--

LOCK TABLES `equipement` WRITE;
/*!40000 ALTER TABLE `equipement` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipement_dragon`
--

DROP TABLE IF EXISTS `equipement_dragon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipement_dragon` (
  `id_equipement_dragon` int NOT NULL AUTO_INCREMENT,
  `id_equipement` smallint NOT NULL,
  `id_dragon` int NOT NULL,
  PRIMARY KEY (`id_equipement_dragon`),
  KEY `fk_equipement-drag_dragon_idx` (`id_dragon`),
  KEY `fk_equipement-drag_equipement_idx` (`id_equipement`),
  CONSTRAINT `fk_equipement-drag_dragon` FOREIGN KEY (`id_dragon`) REFERENCES `dragon` (`id_dragon`),
  CONSTRAINT `fk_equipement-drag_equipement` FOREIGN KEY (`id_equipement`) REFERENCES `equipement` (`id_equipement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipement_dragon`
--

LOCK TABLES `equipement_dragon` WRITE;
/*!40000 ALTER TABLE `equipement_dragon` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipement_dragon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipement_type`
--

DROP TABLE IF EXISTS `equipement_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipement_type` (
  `id_equipement_type` tinyint NOT NULL AUTO_INCREMENT,
  `type_equipement` varchar(25) NOT NULL,
  PRIMARY KEY (`id_equipement_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipement_type`
--

LOCK TABLES `equipement_type` WRITE;
/*!40000 ALTER TABLE `equipement_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipement_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `espece`
--

DROP TABLE IF EXISTS `espece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `espece` (
  `id_espece` tinyint NOT NULL AUTO_INCREMENT,
  `name_espace` varchar(25) NOT NULL,
  `image` varchar(25) NOT NULL,
  `att_physique` tinyint NOT NULL,
  `def_physique` tinyint NOT NULL,
  `att_magique` tinyint NOT NULL,
  `def_magique` tinyint NOT NULL,
  `vitesse` tinyint NOT NULL,
  `pv` tinyint NOT NULL,
  `jouable` tinyint(1) NOT NULL,
  `resume` varchar(800) NOT NULL,
  `caracteristique` varchar(50) NOT NULL,
  `mythologie` varchar(500) NOT NULL,
  `presence_media` varchar(100) NOT NULL,
  PRIMARY KEY (`id_espece`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `espece`
--

LOCK TABLES `espece` WRITE;
/*!40000 ALTER TABLE `espece` DISABLE KEYS */;
/*!40000 ALTER TABLE `espece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id_message` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(20) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `date_post` timestamp NOT NULL,
  `id_topic` int NOT NULL,
  `id_profil` int NOT NULL,
  PRIMARY KEY (`id_message`),
  KEY `fk_message_topic_idx` (`id_topic`),
  KEY `fk_message_profil_idx` (`id_profil`),
  CONSTRAINT `fk_message_profil` FOREIGN KEY (`id_profil`) REFERENCES `profil` (`id_profil`),
  CONSTRAINT `fk_message_topic` FOREIGN KEY (`id_topic`) REFERENCES `topic` (`id_topic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profil`
--

DROP TABLE IF EXISTS `profil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profil` (
  `id_profil` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(20) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `mineur_majeur` tinyint(1) NOT NULL,
  `password` varchar(256) NOT NULL,
  `age` tinyint NOT NULL,
  `genre_profil` tinyint(1) NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id_profil`),
  KEY `fk_profil_role_idx` (`id_role`),
  CONSTRAINT `fk_profil_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profil`
--

LOCK TABLES `profil` WRITE;
/*!40000 ALTER TABLE `profil` DISABLE KEYS */;
/*!40000 ALTER TABLE `profil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `role` varchar(30) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stade`
--

DROP TABLE IF EXISTS `stade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stade` (
  `id_stade` int NOT NULL AUTO_INCREMENT,
  `name_stade` varchar(10) NOT NULL,
  `lvl_stade` tinyint NOT NULL,
  PRIMARY KEY (`id_stade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stade`
--

LOCK TABLES `stade` WRITE;
/*!40000 ALTER TABLE `stade` DISABLE KEYS */;
/*!40000 ALTER TABLE `stade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_equipement`
--

DROP TABLE IF EXISTS `stock_equipement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_equipement` (
  `id_stock_equipement` int NOT NULL AUTO_INCREMENT,
  `id_profil` int NOT NULL,
  `id_equipement` smallint NOT NULL,
  PRIMARY KEY (`id_stock_equipement`),
  KEY `fk_stock_profil_idx` (`id_profil`),
  KEY `fk_stock_equipement_idx` (`id_equipement`),
  CONSTRAINT `fk_stock_equipement` FOREIGN KEY (`id_equipement`) REFERENCES `equipement` (`id_equipement`),
  CONSTRAINT `fk_stock_profil` FOREIGN KEY (`id_profil`) REFERENCES `profil` (`id_profil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_equipement`
--

LOCK TABLES `stock_equipement` WRITE;
/*!40000 ALTER TABLE `stock_equipement` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock_equipement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topic` (
  `id_topic` int NOT NULL AUTO_INCREMENT,
  `topic` varchar(20) NOT NULL,
  `date_topic` timestamp NOT NULL,
  `id_categorie` tinyint NOT NULL,
  PRIMARY KEY (`id_topic`),
  KEY `fk_topic_categorie_idx` (`id_categorie`),
  CONSTRAINT `fk_topic_categorie` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic`
--

LOCK TABLES `topic` WRITE;
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weather`
--

DROP TABLE IF EXISTS `weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather` (
  `id_weather` tinyint NOT NULL AUTO_INCREMENT,
  `weather` varchar(15) NOT NULL,
  PRIMARY KEY (`id_weather`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather`
--

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;
/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-09 11:52:14
