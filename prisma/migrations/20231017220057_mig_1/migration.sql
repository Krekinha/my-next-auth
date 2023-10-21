-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3),
    "message" TEXT NOT NULL,
    "anexo" TEXT,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
