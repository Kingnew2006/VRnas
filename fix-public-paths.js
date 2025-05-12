import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx", ".html", ".css", ".json"];
const PROJECT_DIR = __dirname;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function fixPaths(filePath) {
  const ext = path.extname(filePath);
  if (!TARGET_EXTENSIONS.includes(ext)) return;

  let content = fs.readFileSync(filePath, "utf8");
  const originalContent = content;

  // Заменяем '/...' → '/...'
  content = content.replace(/(["'`])public\/([^"'`\s\\]+)/g, '$1/$2');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Исправлено в файле: ${filePath}`);
  }
}

walkDir(PROJECT_DIR, fixPaths);
