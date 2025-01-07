/*
  Warnings:

  - You are about to drop the `DeleteProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `DeleteProfile`;

-- CreateTable
CREATE TABLE `DeletedProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profileId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
    `bio` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DeletedProfile_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
