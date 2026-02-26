-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "pageTitle" TEXT,
ADD COLUMN     "pageUrl" TEXT,
ADD COLUMN     "referrer" TEXT,
ADD COLUMN     "userAgent" TEXT;

-- CreateIndex
CREATE INDEX "leads_pageUrl_idx" ON "leads"("pageUrl");

-- CreateIndex
CREATE INDEX "leads_createdAt_idx" ON "leads"("createdAt");
