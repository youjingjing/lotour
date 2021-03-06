var gulp=require("gulp"),
	less=require("gulp-less"),
	minify=require("gulp-minify-css"),
	connect=require("gulp-connect"),
	rename=require("gulp-rename"),
	concat=require("gulp-concat"),
	rev=require("gulp-rev"),
	revCollector=require("gulp-rev-collector");
	//执行编译css
	gulp.task("less",function(){
		gulp.src("./dev/public/css/gulpStyle.less")
			.pipe(less())//执行编译
			.pipe(minify())//压缩css文件
			.pipe(rename("gulpStyle.min.css"))//重命名
			.pipe(gulp.dest("./dev/public/css/"))
			/*.pipe(rev())//md5加密文件
			.pipe(gulp.dest("./dev/public/css/"))
			.pipe(rev.manifest())//加密后生成一个json文件
			.pipe(gulp.dest("./dev/public/css/"))*/
	})
	//更换html文件中练级的css路劲
/*	gulp.task("revCollector",function(){
		gulp.src(["./dev/public/css/*.json","./dev/index.html"])
			.pipe(revCollector())
			.pipe(gulp.dest("./dev/"))
	})*/
	gulp.task("connect",function(){
		connect.server({
			root:"dev",
			port:"3000",
			livereload:true
		})
	})
	//时时刷新的文件
	gulp.task("reload",function(){
		gulp.src(["./dev/index.html","./dev/public/css/*.less","./dev/public/less/**/*.less"])
			.pipe(connect.reload())
	})
	//整一个检测文件的服务
	gulp.task("watch",function(){
		gulp.watch(["./dev/public/css/*.less","./dev/public/less/**/*.less"],["less"])
		gulp.watch("./dev/index.html")
	})
	gulp.task("default",["less","connect","watch"])