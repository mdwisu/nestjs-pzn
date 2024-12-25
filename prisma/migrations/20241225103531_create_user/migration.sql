/*
  Warnings:

  - You are about to drop the column `name_name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `name_name`,
    ADD COLUMN `last_name` VARCHAR(100) NULL;
