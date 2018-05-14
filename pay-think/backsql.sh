#!/bin/bash
# Name:backsql.sh
# This is a ShellScript For Auto DB Backup and Delete old Backup
#
backupdir=/mnt/backup
mysqldir=/usr/bin
time=` date +%Y%m%d%H `
$mysqldir/mysqldump -u root -pzrc123123 pay | gzip > $backupdir/pay$time.sql.gz
#
find $backupdir -name "pay*.sql.gz" -type f -mtime +5 -exec rm {} \; > /dev/null 2>&1
