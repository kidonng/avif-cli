const yargs = require("yargs");

const { argv } = yargs
  .usage("Convert images to WEBP")
  .option("input", {
    type: "string",
    default: "*.{jpg,jpeg,tif,tiff,avif,png,gif,svg}",
    description: "Input file name(s), supports globs/wildcards",
  })
  .option("output", {
    type: "string",
    default: "",
    description: "Output directory, default is same directory as input",
  })
  .option("quality", {
    type: "number",
    default: 80,
    description:
      "Quality vs file size, 1 (lowest/smallest) to 100 (highest/largest)",
  })
  .option("alphaQuality", {
    type: "number",
    default: 100,
    description:
      "Quality of alpha layer, 0 (lowest/smallest) to 100 (highest/largest)",
  })
  .option("lossless", {
    type: "boolean",
    default: false,
    description: "Use lossless compression",
  })
  .option("nearLossless", {
    type: "boolean",
    default: false,
    description: "Use near_lossless compression mode",
  })
  .option("smartSubsample", {
    type: "boolean",
    default: false,
    description: "Use high quality chroma subsampling",
  })
  .option("effort", {
    type: "number",
    default: 4,
    description:
      "CPU effort vs file size, 0 (fastest/largest) to 6 (slowest/smallest)",
  })
  .option("loop", {
    type: "number",
    default: 0,
    description:
      "Number of animation iterations, use 0 for infinite animation",
  })
  .option("delay", {
    type: "number",
    default: 0,
    description:
      "Delay(s) between animation frames (in milliseconds)",
  })
  .option("force", {
    type: "boolean",
    default: false,
    description: "Force WebP output, otherwise attempt to use input format",
  })
  .option("overwrite", {
    type: "boolean",
    default: false,
    description: "Allow existing output files to be overwritten",
  })
  .option("append-ext", {
    type: "boolean",
    default: false,
    description:
      "Append .webp to the file name instead of replacing the current extension (foo.jpg => foo.jpg.webp)",
  })
  .option("verbose", {
    type: "boolean",
    default: false,
    description: "Write progress to stdout",
  })
  .help("h")
  .alias("h", "help")
  .version();

module.exports = argv;
