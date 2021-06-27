-- CreateTable
CREATE TABLE "Marriage" (
    "marriageId" SERIAL NOT NULL,
    "maleId" INTEGER NOT NULL,
    "femaleId" INTEGER NOT NULL,
    "marriageDate" TIMESTAMP(3) NOT NULL,
    "remark" TEXT NOT NULL,

    PRIMARY KEY ("marriageId")
);
