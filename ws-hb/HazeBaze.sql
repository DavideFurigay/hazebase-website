-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 28, 2020 at 03:07 PM
-- Server version: 10.3.22-MariaDB-1ubuntu1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HazeBaze`
--

-- --------------------------------------------------------

--
-- Table structure for table `Benutzer`
--

CREATE TABLE `Benutzer` (
  `PK_USER_ID` int(4) NOT NULL AUTO_INCREMENT,
  `Benutzername` varchar(255) NOT NULL,
  `Passwort` CHAR(60) NOT NULL,
  `Email` varchar(255) NOT NULL,
  PRIMARY KEY (PK_USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Kommentare`
--

CREATE TABLE `Kommentare` (
  `PK_COMMENT_ID` int(4) NOT NULL,
  `COMMENT` varchar(10000) NOT NULL,
  `FK_USER_ID` int(4) NOT NULL,
  `FK_PAGES_ID` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Pages`
--

CREATE TABLE `Pages` (
  `PK_PAGES_ID` int(4) NOT NULL,
  `Pagename` varchar(1000) NOT NULL,
  `Text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Kommentare`
--
ALTER TABLE `Kommentare`
  ADD PRIMARY KEY (`PK_COMMENT_ID`),
  ADD KEY `COMMENT/PAGES` (`FK_PAGES_ID`),
  ADD KEY `COMMENT/USERS` (`FK_USER_ID`);

--
-- Indexes for table `Pages`
--
ALTER TABLE `Pages`
  ADD PRIMARY KEY (`PK_PAGES_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Kommentare`
--
ALTER TABLE `Kommentare`
  ADD CONSTRAINT `COMMENT/PAGES` FOREIGN KEY (`FK_PAGES_ID`) REFERENCES `Pages` (`PK_PAGES_ID`),
  ADD CONSTRAINT `COMMENT/USERS` FOREIGN KEY (`FK_USER_ID`) REFERENCES `Benutzer` (`PK_USER_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
