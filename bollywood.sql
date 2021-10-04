-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2021 at 06:51 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bollywood`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `cart_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `cart_id`, `user_id`, `product_id`, `quantity`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
(6, NULL, '15', '12', '45', 0, '2021-10-02 09:06:12', '2021-10-02 09:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_category` varchar(255) DEFAULT NULL,
  `slugs` varchar(255) DEFAULT NULL,
  `descriptions` varchar(255) DEFAULT NULL,
  `featured` varchar(255) DEFAULT NULL,
  `for` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `createdby` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0,
  `status` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `parent_category`, `slugs`, `descriptions`, `featured`, `for`, `url`, `image`, `level`, `createdby`, `is_deleted`, `status`, `createdAt`, `updatedAt`) VALUES
(6, 'super stars', '', 'slugs', 'for all the salman fans', 'super stars', 'super stars', 'https://i.ibb.co/GcTyHYB/oyeti.png', 'oyeti.png', 0, NULL, 0, 1, '2021-10-02 10:38:52', '2021-10-02 10:38:52'),
(7, 'hollywood super stards', '6', 'slugs', 'for all the salman fans', 'super stars', 'super stars', 'https://i.ibb.co/GcTyHYB/oyeti.png', 'oyeti.png', 0, NULL, 0, 1, '2021-10-02 10:41:46', '2021-10-02 10:41:46'),
(8, 'bollywood super star', '7', 'slugs', 'for all the salman fans', 'super stars', 'super stars', 'https://i.ibb.co/GcTyHYB/oyeti.png', 'oyeti.png', 0, NULL, 0, 1, '2021-10-02 10:42:35', '2021-10-02 10:42:35'),
(9, 'Celebs', '', 'slugs', 'for all the salman fans', 'super stars', 'super stars', 'https://i.ibb.co/GcTyHYB/oyeti.png', 'oyeti.png', 0, NULL, 0, 1, '2021-10-02 10:56:49', '2021-10-02 10:56:49'),
(10, 'Celebs Bollywood', '9', 'slugs', 'for all the salman fans', 'super stars', 'super stars', 'https://i.ibb.co/GcTyHYB/oyeti.png', 'oyeti.png', 0, NULL, 0, 1, '2021-10-02 10:57:46', '2021-10-02 10:57:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `role` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `contact_number`, `status`, `role`, `token`, `otp`, `createdAt`, `updatedAt`) VALUES
(7, 'maksood aalam', 'maksoodaaslam121@gmail.com', '$2a$10$gNKEy.zeXcV3vmuf9k0b/euEIwkTDp.7EJZ5XKHeJumRBxGL.Cqtq', '70620139342', 0, 'user', NULL, NULL, '2021-09-30 13:13:22', '2021-10-01 12:02:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
