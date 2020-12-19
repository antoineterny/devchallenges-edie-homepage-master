///////////////////////////////////////////////////////////////////////////
// Coder coder gulp tutorial https://www.youtube.com/watch?v=-lG0kDeuSJk //
///////////////////////////////////////////////////////////////////////////

// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const postcss = require("gulp-postcss")
const replace = require("gulp-replace")
const sass = require("gulp-sass")
const sourcemaps = require("gulp-sourcemaps")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")

// File path variables
const files = {
	scssPath: "*.scss",
	imgPath: "img/*",
	jsPath: "*.js"
}

// Sass task
function scssTask() {
	return src(files.scssPath)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write("."))
		.pipe(dest("dist"))
}

// JS task
function jsTask() {
	return src("./script.js")
		.pipe(
			babel({
				presets: ["@babel/env"]
			})
		)
		// .pipe(uglify())
		.pipe(dest("dist"))
}

// Cachebusting task
const cbString = new Date().getTime()
function cacheBustTask() {
	return src(["index.html"])
		.pipe(replace(/cb=\d+/g, "cb=" + cbString))
		.pipe(dest("dist"))
}

// Watch task
function watchTask() {
	watch([files.scssPath, "index.html", "script.js"], parallel(scssTask, jsTask, cacheBustTask))
}

// Default task
exports.default = series(scssTask, jsTask, cacheBustTask, watchTask)
