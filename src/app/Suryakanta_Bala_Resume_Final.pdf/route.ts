import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const basePath = join(process.cwd(), "src", "data", "resume-chunks");
  const base64 = ["part1.txt", "part2.txt", "part3.txt", "part4.txt"]
    .map((file) => readFileSync(join(basePath, file), "utf8").trim())
    .join("");

  const pdf = Buffer.from(base64, "base64");

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Suryakanta_Bala_Resume_Final.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
