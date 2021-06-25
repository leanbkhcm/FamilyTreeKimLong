-- CreateTable
CREATE TABLE "Person" (
    "personId" SERIAL NOT NULL,
    "fatherId" INTEGER NOT NULL,
    "motherId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "hintName" TEXT NOT NULL,
    "seqInFamilyId" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "birthDay" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "remark" TEXT NOT NULL,

    PRIMARY KEY ("personId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person.email_unique" ON "Person"("email");
