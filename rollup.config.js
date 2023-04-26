import vue from "rollup-plugin-vue2";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import cleaner from "rollup-plugin-cleaner";
import scss from "rollup-plugin-scss";

let scssConfig = {
  output: "dist/style.min.css",
};

if (process.env.NODE_ENV === "production") {
  scssConfig.outputStyle = "compressed";
}

let config = {
  input: "src/main.js",
  output: { file: "dist/bundle.min.js", format: "cjs" },
  plugins: [
    cleaner({
      targets: ["dist"],
    }),
    vue(),
    scss(scssConfig),
    // buble(),
    nodeResolve({ browser: true, jsnext: true, main: true }),
    commonjs(),
    process.env.NODE_ENV === "production" ? uglify.uglify() : null,
  ],
};

export default config;
