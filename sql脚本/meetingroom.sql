/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : localhost:3306
 Source Schema         : meetingroom

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 21/11/2021 14:54:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `room_id` int UNSIGNED NOT NULL,
  `data` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tInterval` int NOT NULL,
  `reason` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `state` int NULL DEFAULT 1,
  `applytime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  INDEX `data`(`data`) USING BTREE,
  INDEX `room_id_idx`(`room_id`) USING BTREE,
  CONSTRAINT `room_id` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES (1, 10005, 1, '2020-06-26', 0, NULL, 2, '2020-07-02 20:10:16');
INSERT INTO `item` VALUES (2, 10005, 2, '2020-06-23', 1, NULL, 2, '2020-06-22 10:00:26');
INSERT INTO `item` VALUES (3, 10005, 3, '2020-06-24', 0, 'sflaskdjf;as', 3, '2020-07-02 20:10:22');
INSERT INTO `item` VALUES (4, 10005, 2, '2020-06-25', 0, NULL, 0, '2020-06-24 12:50:16');
INSERT INTO `item` VALUES (6, 10005, 1, '2020-06-25', 1, NULL, 3, '2020-07-02 20:11:06');
INSERT INTO `item` VALUES (7, 10005, 1, '2020-06-25', 0, NULL, 0, '2020-06-24 21:06:54');
INSERT INTO `item` VALUES (8, 10005, 3, '2020-06-25', 2, '666555', 3, '2020-07-02 20:11:06');
INSERT INTO `item` VALUES (9, 10005, 2, '2020-06-25', 0, '888', 3, '2020-07-02 20:11:07');
INSERT INTO `item` VALUES (10, 10005, 1, '2020-07-04', 0, '123123', 0, '2020-07-02 20:12:20');
INSERT INTO `item` VALUES (11, 10005, 3, '2020-07-03', 0, 'kls;lkfjalskdjf', 2, '2020-07-02 20:16:56');
INSERT INTO `item` VALUES (12, 10005, 2, '2020-07-03', 0, '', 3, '2020-07-02 20:16:57');
INSERT INTO `item` VALUES (13, 10005, 5, '2020-07-03', 1, '654', 3, '2020-07-02 20:16:59');
INSERT INTO `item` VALUES (14, 10005, 9, '2020-07-11', 1, '', 2, '2020-07-02 20:16:58');
INSERT INTO `item` VALUES (15, 10005, 1, '2020-07-04', 0, '', 2, '2020-07-03 16:27:35');

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice`  (
  `noticeId` int NOT NULL AUTO_INCREMENT,
  `createUser` bigint UNSIGNED NULL DEFAULT NULL,
  `noticeTitle` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `noticeText` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`noticeId`) USING BTREE,
  INDEX `userId_idx`(`createUser`) USING BTREE,
  CONSTRAINT `userId` FOREIGN KEY (`createUser`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES (9, 10006, '公告五', '65+65+65+65565111的发射点发射点发生大神打算带发的发生的呵时代呵时代发的发', '2020-07-01 23:01:13');
INSERT INTO `notice` VALUES (10, 10006, '公告六', '5454阿三打发士大夫速度发士大夫阿萨大乏撒旦发生发生65465465爱是大范德萨', '2020-07-01 23:02:21');
INSERT INTO `notice` VALUES (11, 10006, '5465465', 'jkhhjgjh', '2020-07-03 16:30:53');

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `room_num` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `room_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `place` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `introduction` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `capacity` int NULL DEFAULT NULL,
  `imgurl` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `room_num_UNIQUE`(`room_num`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE,
  FULLTEXT INDEX `fuzzy`(`room_num`, `room_name`, `place`, `introduction`) WITH PARSER `ngram`
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES (1, 'FWY101', '敷文园101', '敷文园101', '敷文园101会议室', 50, NULL);
INSERT INTO `room` VALUES (2, 'FWY102', '敷文园102', '敷文园102', '敷文园102会议室', 100, NULL);
INSERT INTO `room` VALUES (3, 'FWY103', '敷文园103', '敷文园103', '敷文园103会议室', 75, NULL);
INSERT INTO `room` VALUES (5, 'GB105', '高博楼105', '高博楼105', '高博楼105会议室', 120, NULL);
INSERT INTO `room` VALUES (9, 'GB205', '高博楼205', '高博楼205', '撒旦发射点发生打发士大夫阿斯顿发生地方', 150, '/MeetingRoomImg/2840532f-9470-49df-b893-272e596ee952.png');
INSERT INTO `room` VALUES (10, 'GB107', '高博107', '高博107会议室', '烧烤工具爱丽丝的距离噶即使到了现场v哦 哦就告诉到公安机关哦阿姐送给就奥i国际奥i机构i就犯得上发射点发俩号', 200, '/MeetingRoomImg/63534954-05a7-47b6-8428-4069ce66ce92.png');
INSERT INTO `room` VALUES (11, 'FWY111', 'uiu', 'jkhkj', 'jhg', 200, '/MeetingRoomImg/43dea231-b2a6-43cb-b5b8-a07c5e2464e8.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role` int NULL DEFAULT 0,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `noticelastread` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE,
  UNIQUE INDEX `phone_UNIQUE`(`phone`) USING BTREE,
  UNIQUE INDEX `email_UNIQUE`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10006 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (10005, '张三', '123456', '15578820890', 'test@t.com', 0, '2020-06-08 22:49:15', '2021-04-21 12:29:33');
INSERT INTO `user` VALUES (10006, 'admin', '123456', NULL, NULL, 1, '2020-06-08 22:51:14', '2020-06-28 12:53:57');

SET FOREIGN_KEY_CHECKS = 1;
