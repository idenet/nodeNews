-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-09-09 11:51:35
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpnews`
--

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE `category` (
  `id` int(8) NOT NULL COMMENT '自动增加',
  `content` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻分类';

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `content`) VALUES
(1, '精选'),
(2, '百家'),
(3, '本地'),
(4, '娱乐'),
(5, '社会'),
(6, '军事'),
(7, '女人'),
(8, '搞笑'),
(9, '互联网'),
(10, '科技'),
(11, '更多'),
(12, '生活'),
(13, '国际'),
(14, '国内'),
(15, '体育'),
(16, '汽车'),
(17, '财经'),
(18, '房产'),
(19, '时尚'),
(20, '教育'),
(21, '游戏'),
(22, '旅游'),
(23, '人文'),
(24, '创意');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL COMMENT '自动增加',
  `title` varchar(100) NOT NULL,
  `poster` varchar(200) NOT NULL,
  `createAt` date NOT NULL,
  `hot` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `updateAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `poster`, `createAt`, `hot`, `category`, `updateAt`) VALUES
(30, '234', '1473350809026.jpeg', '2016-09-09', '2444', '1', '2016-09-09'),
(31, '33535', '1473403500189.jpeg', '2016-09-09', '2423432', '2', '2016-09-09'),
(32, 'werwew', '1473403517696.jpeg', '2016-09-09', 'werwr', '3', '2016-09-09'),
(34, '3', '1473414426774.jpeg', '2016-09-09', '3242342', '4', '2016-09-09');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT '自动增加',
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(1, 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `newstitle` (`title`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`name`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '自动增加', AUTO_INCREMENT=25;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增加', AUTO_INCREMENT=35;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增加', AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
