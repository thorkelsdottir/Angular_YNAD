-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 24, 2018 at 08:25 PM
-- Server version: 5.6.28
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dbynad`
--

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `idlocation` int(11) NOT NULL,
  `country` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`idlocation`, `country`, `city`) VALUES
(1, 'Iceland', 'Reykjavik'),
(2, 'Denmark', 'Copenhagen');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `idmedia` int(11) NOT NULL,
  `media` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`idmedia`, `media`) VALUES
(1, 'Drawing'),
(2, 'Painting'),
(3, 'Photography'),
(4, 'Sculpture'),
(5, 'Video'),
(6, 'Print'),
(7, 'Digital'),
(8, 'Interior'),
(9, 'Packaging'),
(10, 'Textile'),
(11, 'Literature'),
(12, 'Ceramics'),
(13, 'Performing'),
(14, 'Architecture'),
(15, 'Mixed Media');

-- --------------------------------------------------------

--
-- Table structure for table `pieces`
--

CREATE TABLE `pieces` (
  `idpieces` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `material` varchar(45) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `status_idstatus` int(11) NOT NULL,
  `year_idyear` int(11) NOT NULL,
  `piece_image` varchar(1000) DEFAULT NULL,
  `users_idusers` int(11) NOT NULL,
  `media_idmedia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pieces`
--

INSERT INTO `pieces` (`idpieces`, `title`, `material`, `description`, `size`, `price`, `status_idstatus`, `year_idyear`, `piece_image`, `users_idusers`, `media_idmedia`) VALUES
(267, 'A horse', 'Painting', 'When painting we...', '135 x 205 cm', '599 $', 1, 4, 'http://www.nordicstylemag.com/wp-content/uploads/2014/02/Jan-30-tal_r__altergang__2011__crayon_on_paper__77_x_94_cm__aros_aarhus_kunstmuseum.jpg', 5, 6),
(268, 'When it rains', 'Painting', 'Maybe one is...', '135 x 205 cm', '479 $', 2, 6, 'http://media2.artspace.com/media/bjarne_melgaard/no_i_medium_pink/bjarne_melgaard_7401_5622657322_1024x768.jpg', 5, 6),
(269, 'Girl Twirl', 'Photography', 'You need to..', '34 x 49 cm', '129 $', 1, 4, 'https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2043-714417099279/10-nordic-artists-you-need-to-know-900x450-c.jpg', 5, 6),
(270, 'Sun ', 'Installation', 'Ólafur is...', '-', '- ', 1, 8, 'http://www.freundevonfreunden.com/wp-content/uploads/olafur-eliasson/Freunde-von-Freunden-olafur-eliasson-the-weather-project-901x1200.jpg', 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `idroles` int(11) NOT NULL,
  `role` int(11) DEFAULT NULL,
  `role_name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`idroles`, `role`, `role_name`) VALUES
(1, 0, 'user'),
(2, 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('C-roN06rNRPfrSvRBrGfSoTwBQoxxsXY', 1526626671, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":{"user_id":5}}}');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `idstatus` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `status_name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`idstatus`, `status`, `status_name`) VALUES
(1, 0, 'pending'),
(2, 1, 'approved'),
(3, 2, 'denied');

-- --------------------------------------------------------

--
-- Table structure for table `thread`
--

CREATE TABLE `thread` (
  `idthread` int(11) NOT NULL,
  `user_1` varchar(45) DEFAULT NULL,
  `user_2` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `profession` varchar(45) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `profile_image` varchar(3000) DEFAULT NULL,
  `phone_number` varchar(12) DEFAULT NULL,
  `instagram_url` varchar(80) DEFAULT NULL,
  `facebook_url` varchar(80) DEFAULT NULL,
  `twitter_url` varchar(80) DEFAULT NULL,
  `roles_idroles` int(11) NOT NULL,
  `location_idlocation` int(11) NOT NULL,
  `thread_idthread` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idusers`, `firstname`, `lastname`, `profession`, `description`, `email`, `password`, `profile_image`, `phone_number`, `instagram_url`, `facebook_url`, `twitter_url`, `roles_idroles`, `location_idlocation`, `thread_idthread`) VALUES
(1, 'Birna', 'Thorkelsdottir', 'Digital Designer', 'My name is Birna Thorkelsdottir and I\'m a Graphic Designer, Web Designer & Developer based in Copenhagen.\nI received my BA in Graphic Design from The Iceland Academy of Arts in 2007. I studied Web Development at The Technical School in Reykjavik and finished a two-year program in 2017. I have just moved to Copenhagen to finish my studies at KEA - Copenhagen School of Design and Technology. \nI am passionate about my art which combines my love for design, photography, style, branding, advertising trends & solutions.', 'thorkelsdottir@gmail.com', '123', 'http://thorkelsdottir.com/CV/images/birna2017e.jpg', '93845259', 'https://www.instagram.com/birnabryndis/', 'https://www.facebook.com/birnabryndis.thorkelsdottir', 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(2, 'BirnaB', 'Sigurdardottir', 'Web Developer', 'My name is Katrin and love the web', '', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p320x320/21558618_1556650337727451_5282452316665504511_n.jpg?_nc_cat=0&oh=75afb6669568e6261269305aab5f2363&oe=5B591EC6', '004593845252', 'https://www.instagram.com/katrinduasig/', NULL, NULL, 1, 2, NULL),
(3, 'BirnaB', 'Særker-Sørensen', 'Web Developer', 'My name is Anne Mai and love the web', '', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(4, 'BirnaB', 'Tryggvi', 'Web Developer', 'My name is Jon and love the web', '', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(5, 'BirnaB', 'Thorkelsdottir', 'dasfghgjh', 'afdsgdhfjghkj', 'a@a.com', '1', 'Birna-cabana.jpg', '234567556', '', 'Birna Thorkelsdottir', '', 2, 1, NULL),
(6, 'BirnaB', 'Særker-Sørensen', 'Web Developer', 'My name is Anne Mai and love the web', '', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(7, 'BirnaB', 'Særker-Sørensen', 'Web Developer', 'My name is Anne Mai and love the web', '', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(8, 'BirnaB', 'Særker-Sørensen', 'Web Developer', 'My name is Anne Mai and love the web', '', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(9, 'BirnaB', 'Særker-Sørensen', 'Web Developer', 'My name is Anne Mai and love the web', 'thorkelsdottir@gmail.com', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(10, 'BirnaB', 'Særker-Sørensen', 'Web Developer', 'My name is Anne Mai and love the web', 'thorkelsdottir@gmail.com', '123', 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/c0.5.320.320/p320x320/18156901_10156189333629698_7999203246869048154_n.jpg?_nc_cat=0&oh=ea6744a58f846b3752644e176ea9c35a&oe=5B5F9343', '004593845257', 'https://www.instagram.com/katrinduasig/', NULL, 'https://www.linkedin.com/in/thorkelsdottir/', 1, 2, NULL),
(11, 'Thorkell', 'Gudbrandsson', '234567', '', 'th@gmail.com', '234567', NULL, '137653345', '', '', '', 1, 2, NULL),
(12, 'Thorkell', 'Gudbrandsson', '234567', '', 'th@gmail.com', '234567', NULL, '137653345', '', '', '', 1, 2, NULL),
(13, 'Trine', 'Sorense', '123', 'something about trine', 'trine@gmail.com', '123', NULL, '23456789', 'asdfgh', 'adsfdgfhg', 'adsfdgfhgj', 1, 2, NULL),
(14, 'Trine', 'Sorense', '123', 'something about trine', 'trine@gmail.com', '123', NULL, '23456789', 'asdfgh', 'adsfdgfhg', 'adsfdgfhgj', 1, 2, NULL),
(15, 'Katarina ', 'Zimmsen', '2134', '', 'k@gmail.com', '2134', NULL, '', '', '', '', 1, 2, NULL),
(16, 'Katarina ', 'Zimmsen', '2134', '', 'k@gmail.com', '2134', NULL, '', '', '', '', 1, 2, NULL),
(17, 'Kata Thorkelsdottir', 'Birna Thorkelsdottir', '123', '', 'thorkelsdottir@gmail.com', '123', NULL, '', '', '', '', 1, 2, NULL),
(18, 'Kata Thorkelsdottir', 'Birna Thorkelsdottir', '123', '', 'thorkelsdottir@gmail.com', '123', NULL, '', '', '', '', 1, 2, NULL),
(19, 'jon', 'tryggvi', '1324534', '', 'a@a.is', '1324534', NULL, '', '', '', '', 1, 2, NULL),
(20, 'jon', 'tryggvi', '1324534', '', 'a@a.is', '1324534', NULL, '', '', '', '', 1, 2, NULL),
(21, 'sigga ', 'Dua', '123', '', 'a@a.is', '123', NULL, '', '', '', '', 1, 2, NULL),
(22, 'sigga ', 'Dua', '123', '', 'a@a.is', '123', NULL, '', '', '', '', 1, 2, NULL),
(23, 'Birna Thorkelsdottir', 'Birna Thorkelsdottir', '123', '', 'thorkelsdottir@gmail.com', '123', NULL, '', '', '', '', 1, 2, NULL),
(24, 'Birna Thorkelsdottir', 'Birna Thorkelsdottir', '123', '', 'thorkelsdottir@gmail.com', '123', NULL, '', '', '', '', 1, 2, NULL),
(25, 'Katrín Dúa', 'Sigurðardóttir', '123', 'Experienced Web Developer with a demonstrated history of working in the web development industry. Skilled in Github, User Experience, PHP, WordPress and more. Strong engineering professional graduated from Vefskólinn. ', 'kata@gmail.com', '123', NULL, '854376576', 'https://www.instagram.com/katrinduasig/', 'https://www.facebook.com/katrinduasig', 'https://www.linkedin.com/in/katr%C3%ADn-d-sigur%C3%B0ard%C3%B3ttir-179249134/', 1, 2, NULL),
(26, 'Katrín Dúa', 'Sigurðardóttir', '123', 'Experienced Web Developer with a demonstrated history of working in the web development industry. Skilled in Github, User Experience, PHP, WordPress and more. Strong engineering professional graduated from Vefskólinn. ', 'kata@gmail.com', '123', NULL, '854376576', 'https://www.instagram.com/katrinduasig/', 'https://www.facebook.com/katrinduasig', 'https://www.linkedin.com/in/katr%C3%ADn-d-sigur%C3%B0ard%C3%B3ttir-179249134/', 1, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `year`
--

CREATE TABLE `year` (
  `idyear` int(11) NOT NULL,
  `year` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `year`
--

INSERT INTO `year` (`idyear`, `year`) VALUES
(1, 2000),
(2, 2001),
(3, 2002),
(4, 2003),
(5, 2004),
(6, 2005),
(7, 2006),
(8, 2007),
(9, 2008),
(10, 2009),
(11, 2010),
(12, 2011),
(13, 2012),
(14, 2013),
(15, 2014),
(16, 2015),
(17, 2016),
(18, 2017),
(19, 2018);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`idlocation`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`idmedia`);

--
-- Indexes for table `pieces`
--
ALTER TABLE `pieces`
  ADD PRIMARY KEY (`idpieces`),
  ADD KEY `fk_pieces_status1_idx` (`status_idstatus`),
  ADD KEY `fk_pieces_year1_idx` (`year_idyear`),
  ADD KEY `fk_pieces_users1_idx` (`users_idusers`),
  ADD KEY `fk_pieces_media1_idx` (`media_idmedia`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idroles`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`idstatus`);

--
-- Indexes for table `thread`
--
ALTER TABLE `thread`
  ADD PRIMARY KEY (`idthread`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`,`email`),
  ADD KEY `fk_users_roles1_idx` (`roles_idroles`),
  ADD KEY `fk_users_location1_idx` (`location_idlocation`),
  ADD KEY `fk_users_thread1_idx` (`thread_idthread`);

--
-- Indexes for table `year`
--
ALTER TABLE `year`
  ADD PRIMARY KEY (`idyear`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `idlocation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `idmedia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `pieces`
--
ALTER TABLE `pieces`
  MODIFY `idpieces` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=271;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `idroles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `idstatus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `thread`
--
ALTER TABLE `thread`
  MODIFY `idthread` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `year`
--
ALTER TABLE `year`
  MODIFY `idyear` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `pieces`
--
ALTER TABLE `pieces`
  ADD CONSTRAINT `fk_pieces_media1` FOREIGN KEY (`media_idmedia`) REFERENCES `media` (`idmedia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pieces_status1` FOREIGN KEY (`status_idstatus`) REFERENCES `status` (`idstatus`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pieces_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pieces_year1` FOREIGN KEY (`year_idyear`) REFERENCES `year` (`idyear`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_location1` FOREIGN KEY (`location_idlocation`) REFERENCES `location` (`idlocation`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_roles1` FOREIGN KEY (`roles_idroles`) REFERENCES `roles` (`idroles`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_thread1` FOREIGN KEY (`thread_idthread`) REFERENCES `thread` (`idthread`) ON DELETE NO ACTION ON UPDATE NO ACTION;
