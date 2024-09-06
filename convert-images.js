import sharp from "sharp";
import fs from "fs";
import path from "path";

// Определите директории
const inputDir = './src/assets/images';
const outputDir = './src/assets/images/webp';

// ANSI escape codes для цветов
const colors = {
  reset: "\x1b[0m",
  blue: "\x1b[34m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m"
};

// Функция для конвертации изображений
const convertToWebp = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`${colors.cyan}Конвертировано: ${colors.blue}${inputPath} -> ${colors.green}${outputPath}${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}Ошибка при конвертации ${inputPath}: ${error.message}${colors.reset}`);
  }
};

// Функция для обработки изображений в папке
const processImagesInDir = async (inputDir, outputDir) => {
  try {
    console.log(`Обработка директории: ${inputDir}`);
    const entries = fs.readdirSync(inputDir, { withFileTypes: true });

    for (const entry of entries) {
      const inputPath = path.join(inputDir, entry.name);
      const outputPath = path.join(outputDir, entry.name);

      if (entry.isDirectory()) {
        // Не обрабатываем папку webp внутри папки webp
        if (entry.name !== path.basename(outputDir)) {
          if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
          }
          await processImagesInDir(inputPath, outputPath);
        }
      } else if (['.png', '.jpg', '.jpeg'].includes(path.extname(entry.name).toLowerCase())) {
        const outputFilePath = path.join(outputDir, path.basename(entry.name, path.extname(entry.name)) + '.webp');
        await convertToWebp(inputPath, outputFilePath);
      }
    }
  } catch (error) {
    console.error(`${colors.red}Ошибка при обработке изображений: ${error.message}${colors.reset}`);
  }
};

// Запуск процесс обработки
console.log(`✨ ${colors.cyan} [image-optiomozation]${colors.reset} - - optimized images successfully:`)
processImagesInDir(inputDir, outputDir);