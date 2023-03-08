/*
  Warnings:

  - You are about to drop the `HiraType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pagar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Upad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pagar` DROP FOREIGN KEY `Pagar_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `Upad` DROP FOREIGN KEY `Upad_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_typeId_fkey`;

-- DropTable
DROP TABLE `HiraType`;

-- DropTable
DROP TABLE `Pagar`;

-- DropTable
DROP TABLE `Upad`;

-- CreateTable
CREATE TABLE `hiraTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` CHAR(255) NOT NULL,
    `bhav` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `hira` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `employeeId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `upads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `upad` INTEGER NOT NULL,
    `employeeId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `hiraTypes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `hiraTypes` ADD CONSTRAINT `hiraTypes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagars` ADD CONSTRAINT `pagars_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagars` ADD CONSTRAINT `pagars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `upads` ADD CONSTRAINT `upads_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `upads` ADD CONSTRAINT `upads_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
