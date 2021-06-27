-- CreateTable
CREATE TABLE "Association" (
    "relationshipId" SERIAL NOT NULL,
    "person1Id" INTEGER NOT NULL,
    "person2Id" INTEGER NOT NULL,
    "remark" TEXT NOT NULL,

    PRIMARY KEY ("relationshipId")
);
