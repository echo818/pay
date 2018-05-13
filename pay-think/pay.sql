/*
 Navicat Premium Data Transfer

 Source Server         : pay
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost
 Source Database       : pay

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : utf-8

 Date: 05/13/2018 17:32:36 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `account`
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '标识',
  `ort` varchar(255) NOT NULL COMMENT 'ort',
  `admin` varchar(255) DEFAULT NULL COMMENT 'admin',
  `seller` varchar(255) DEFAULT NULL COMMENT 'seller',
  `store` varchar(255) DEFAULT NULL COMMENT 'store',
  `product` varchar(255) DEFAULT NULL COMMENT 'product',
  `asin` varchar(255) DEFAULT NULL COMMENT 'asin',
  `price` varchar(100) DEFAULT NULL COMMENT 'price',
  `time` varchar(100) DEFAULT NULL COMMENT 'price',
  `name` varchar(255) DEFAULT NULL COMMENT 'name',
  `orderId` varchar(255) DEFAULT NULL COMMENT 'orderId',
  `paypal` varchar(255) DEFAULT NULL COMMENT 'paypal',
  `review` varchar(255) DEFAULT NULL COMMENT 'review',
  `isPay` tinyint(1) unsigned DEFAULT '0' COMMENT '是否已经支付',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '备注',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='付款用户信息';

SET FOREIGN_KEY_CHECKS = 1;
