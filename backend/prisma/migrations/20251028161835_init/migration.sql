/*
  Warnings:

  - You are about to drop the column `descricao` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `name` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "descricao",
DROP COLUMN "nome",
DROP COLUMN "preco",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
