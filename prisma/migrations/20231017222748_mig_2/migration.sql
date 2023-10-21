/*
  Warnings:

  - You are about to drop the column `data` on the `Log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3);
