import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";
import { existsSync } from "fs";

const CONVERT_TARGETS = [
  {
    dir: "./client/public",
    files: [
      "camera-tower-cropped.jpg",
      "camera-tower.jpg",
      "camera-tower-new.jpg",
      "mining-excavator-bg.jpg",
      "onevision-camera.jpg",
      "solar-camera-bg.jpg",
      "solutions-camera-bg.jpg",
      "onevision-product.png",
    ],
  },
  {
    dir: "./attached_assets",
    files: [
      "4GRouterIndustrial_1764733632211.png",
      "4KCompare_1764740879540.png",
      "AIChipset_1764746384026.png",
      "CaseStudyCommercial_1767080113365.png",
      "CaseStudyLivestock_1767080113365.png",
      "CaseStudyLogistics_1767080113365.png",
      "CaseStudyResidential_1767052634793.png",
      "DayColoutImage_1767000632112.png",
      "iphoneAlert3_1764744194316.png",
      "MonitoringStation_1764733453498.png",
      "NightColourImage_1767000647165.png",
      "OneVisionOranePole_1764930426921.png",
      "RuggedTablet_1764736592557.png",
      "TwowayAudio_1764739561735.png",
    ],
  },
  {
    dir: "./attached_assets/stock_images",
    files: [
      "cloud_computing_stor_8c4901fe.jpg",
      "industrial_construct_b79bc8df.jpg",
      "mining_operations_op_eb042ffe.jpg",
      "solar_panel_energy_r_d5b1e442.jpg",
    ],
  },
];

let converted = 0;
let skipped = 0;
let failed = 0;

for (const target of CONVERT_TARGETS) {
  for (const file of target.files) {
    const inputPath = join(target.dir, file);
    const outputName = basename(file, extname(file)) + ".webp";
    const outputPath = join(target.dir, outputName);

    if (!existsSync(inputPath)) {
      console.log(`SKIP (not found): ${inputPath}`);
      skipped++;
      continue;
    }

    if (existsSync(outputPath)) {
      console.log(`SKIP (already exists): ${outputPath}`);
      skipped++;
      continue;
    }

    try {
      await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
      console.log(`OK: ${inputPath} -> ${outputPath}`);
      converted++;
    } catch (err) {
      console.error(`FAIL: ${inputPath} - ${err.message}`);
      failed++;
    }
  }
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped, ${failed} failed`);
