/*
 * @Description:   组件描述
 * @Author: Joker
 * @Date:   2018-11-19 17:10:48
*//*
 * @Description:   上传页面
 * @Author: Joker
 * @Date:   2018-11-19 17:10:27
*/
<template>
	<div class="upload">
		<div class="container">
			<!-- 右侧主区域内容 -->
			<div class="main">
				<!-- 顶部工具栏 -->
				<div class="toolbar">
					<div class="layout clearfix">
						<div class="action-wrap action-wrap-upload">
							<div class="action-item">
								<i class="icon icon-upload-s"></i>
								<span class="act-txt">上传</span>
							</div>
						</div>
						<div class="action-wrap">
							<div class="action-item">
								<i class="icon icon-add"></i>
								<span class="act-txt">新建</span>
							</div>
						</div>
						<div class="action-wrap">
							<div class="action-item">
								<i class="icon icon-trash"></i>
								<span class="act-txt">删除</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 主体内容 -->
				<div class="main-body">
					<div class="hd">
						<div class="right clearfix">
							<div class="action-wrap">
								<div @click="changeShowMode('list')" class="action-item" :class="{act:showMode=='list'}">
									<i class="icon icon-mod-list"></i>
									<span class="act-txt">列表</span>
								</div>
							</div>
							<div class="action-wrap">
								<div @click="changeShowMode('thumb')" class="action-item" :class="{act:showMode=='thumb'}">
									<i class="icon icon-mode-thumb"></i>
									<span class="act-txt">缩略图</span>
								</div>
							</div>
						</div>
						<ul class="breadcrumb clearfix">
							<li class="item all">
								<a href="javascript:void(0)">全部</a>
							</li>
							<li class="item all">
								<i class="icon icon-bread-next"></i>
								<a href="javascript:void(0)">miaov资料</a>
							</li>
							<li class="item cur">
								<i class="icon icon-bread-next"></i>
								<a href="javascript:void(0)" title="视频">视频</a>
							</li>
						</ul>
					</div>
					<div class="list-wrap">
						<!-- 列表头部 -->
						<div class="list-header clearfix">
							<div class="col checkbox">
								<!-- icon-checkbox,icon-checkbox-hover,icon-checkbox-cur -->
								<i class="icon icon-checkbox"></i>
							</div>
							<div class="col col-border name" style="display: block;">
								<strong>名称</strong>
							</div>
							<div class="col col-border info" style="display: none;">已选择 ? 项</div>
						</div>
						<!-- 列表头部end -->
						<!-- 正文，缩略图 -->
						<div v-if="showMode == 'thumb'" class="list-item-wrap list-item-wrap-thumb">
							<ul class="list-item clearfix">
								<li class="item" v-for="file of folderFiles" :key="file.id">
									<div class="inner">
										<i class="icon-wrapper">
											<i class="icon icon-file-l"></i>
										</i>
										<span title="a4" class="txt">{{ file.name }}</span>
									</div>
									<i class="icon checkbox icon-checkbox"></i>
								</li>
							</ul>
							<ul class="figure-item clearfix">
								<li v-for="file of otherFiles" class="figure-list-item" :key="file.id">
									<div class="figure-list-item-inner">
										<i class="icon checkbox icon-checkbox"></i>
										<div class="figure-list-item-pic">
											<div class="img-wrapper">
												<i class="icon icon-l icon-zip-l"></i>
											</div>
										</div>
										<div class="figure-list-item-txt">
											<p class="tit">{{ file.name }}</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<!-- 列表模式 -->
						<div v-else class="list-item-wrap list-item-wrap-list clearfix">
							<div class="row clearfix" v-for="file of folderFiles" :key="file.id">
								<div class="col checkbox-wrap">
									<!-- icon-checkbox,icon-checkbox-hover,icon-checkbox-cur -->
									<i class="icon checkbox icon-checkbox-cur"></i>
								</div>
								<div class="col col-border name">{{ file.name }}</div>
							</div>
							<div class="row clearfix" v-for="file of otherFiles" :key="file.id">
								<div class="col checkbox-wrap">
									<!-- icon-checkbox,icon-checkbox-hover,icon-checkbox-cur -->
									<i class="icon checkbox icon-checkbox-cur"></i>
								</div>
								<div class="col col-border name">{{ file.name }}</div>
							</div>
							<!-- 选中：cur -->
							<!-- <div class="row cur clearfix"> -->
							<!-- <div class="col checkbox-wrap"> -->
							<!--
                &lt;!&ndash;icon-checkbox,icon-checkbox-hover,icon-checkbox-cur,icon-checkbox-cur2(反色)&ndash;&gt;
							-->
							<!-- <i class="icon checkbox icon-checkbox-cur2"></i> -->
							<!-- </div> -->
							<!-- <div class="col col-border name">修改时间</div> -->
							<!-- </div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 画框 -->
		<div class="draw-selector"></div>
	</div>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      appName: "妙味云盘",
      // 显示模式：缩略图、列表
      showMode: "thumb",
      // 显示的文件类型
      showType: "all",
      // 类型与MIME的映射关系
      MIMEMAPS: {
        doc: ["text/html", "text/css"],
        pic: ["image/png", "image/gif"],
        music: ["audio/mp3"],
        video: ["video/mp4"]
      },
      // 所有的文件夹、文件信息
      files: [
        // 每一个对象就是一个文件夹、文件信息
        {
          // 文件夹、文件的名称
          name: "文件夹1",
          // 类型，如果为空，则为文件夹
          type: ""
        },
        {
          name: "文件夹2",
          type: ""
        },
        {
          name: "1.html",
          type: "text/html"
        },
        {
          name: "1.css",
          type: "text/css"
        },
        {
          name: "朋友.mp3",
          type: "audio/mp3"
        },
        {
          name: "vue案例.mp4",
          type: "video/mp4"
        }
      ]
    };
  },
  // 计算属性，存放派生数据
  computed: {
    // 每一个计算属性都是一个函数，函数的返回值就是这个函数对应的属性的值，计算属性使用的时候，使用的是方法对应的属性
    folderFiles() {
      return this.showType == "all"
        ? this.files.filter(file => file.type == "")
        : [];
    },
    otherFiles() {
      // console.log(this.MIMEMAPS[this.showType])
      let otherFiles = this.files.filter(file => file.type != "");
      if (this.showType == "all") {
        return otherFiles;
      } else {
        return otherFiles.filter(file =>
          this.MIMEMAPS[this.showType].includes(file.type)
        );
      }
    }
  },
  // methods，存放所有vue中使用的函数
  methods: {
    changeShowMode(type) {
      this.showMode = type;
    },
    changeShowType(type) {
      this.showType = type;
    }
  }
};
</script>

<style lang="stylus" scoped>
a
	text-decoration none

li
	list-style none

.clearfix:after
	display block
	clear both
	content ''

.icon
	position relative
	top -1px
	display inline-block
	margin 0 14px 0 0
	width 24px
	height 24px
	background-repeat no-repeat
	vertical-align middle

.container
	position relative
	/* padding: 0 0 0 240px; */
	height 100%

.aside
	position absolute
	top 0
	bottom 0
	left 0
	width 240px
	background #F4F4F4

.main
	height calc(100vh)

/* aside */
.aside .header
	text-align center

.aside .header a
	color black
	letter-spacing 10px

/* 图标 */
.icon-all
	background-image url('./images/svg/icon-all.svg')

.cur .icon-all
	background-image url('./images/svg/icon-all-act.svg')

.icon-doc
	background-image url('./images/svg/icon-doc.svg')

.cur .icon-doc
	background-image url('./images/svg/icon-doc-act.svg')

.icon-pic
	background-image url('./images/svg/icon-pic.svg')

.cur .icon-pic
	background-image url('./images/svg/icon-pic-act.svg')

.icon-video
	background-image url('./images/svg/icon-video.svg')

.cur .icon-video
	background-image url('./images/svg/icon-video-act.svg')

.icon-music
	background-image url('./images/svg/icon-music.svg')

.act .icon-music
	background-image url('./images/svg/icon-music-act.svg')

.icon-upload-s
	background-image url('./images/svg/icon-upload-s.svg')

.icon-add
	background-image url('./images/svg/act/icon-add.svg')

.icon-trash
	background-image url('./images/svg/act/icon-trash.svg')

.icon-mod-list
	background-image url('./images/svg/icon-mode-list.svg')

.act .icon-mod-list
	background-image url('./images/svg/icon-mode-list-act.svg')

.icon-mode-thumb
	background-image url('./images/svg/icon-mode-thumb.svg')

.act .icon-mode-thumb
	background-image url('./images/svg/icon-mode-thumb-act.svg')

.icon-checkbox
	background-image url('./images/svg/icon-checkbox.svg')

.icon-checkbox:hover
	background-image url('./images/svg/icon-checkbox-hover.svg')

.icon-checkbox-cur
	background-image url('./images/svg/icon-checkbox-cur.svg')

.icon-checkbox-cur2
	background-image url('./images/svg/icon-checkbox-act.svg')

.icon-sort
	background-image url('./images/svg/icon-sort.svg')

.icon-file-l
	width 100px
	height 80px
	background-image url('./images/svg/doctype/icon-file-l.svg')

/* menu-list */
.menu-list
	margin 0

.menu-list li a
	position relative
	display block
	padding-left 34px
	height 32px
	line-height 32px

.menu-list li.cur a
	background 0 0
	color #2980FF
	text-decoration none
	font-weight 700

.menu-list li a:hover
	background #EAEAEA
	text-decoration none
	transition ease all
	transition-duration 0.3s

.menu-list li.cur a:hover
	background 0 0

.menu-list li.cur a:before
	position absolute
	top 50%
	left 0
	margin -14px 0 0
	width 4px
	height 28px
	background #2980FF
	content ''

.action-wrap
	position relative
	float left
	margin 14px 16px 0 0
	padding 0 20px
	height 34px
	border 1px solid #DBDBDB
	border-radius 2px
	line-height 34px
	cursor pointer

.action-wrap .icon
	margin 0

.action-wrap-upload
	border-color #2980FF
	background-color #2980FF
	color #fff

.action-wrap-upload:hover
	background-color #2977EA

/* 顶部工具栏 */
.toolbar
	border-bottom 1px solid #DBDBDB

.toolbar .layout
	position relative
	z-index 10
	margin-left 50px
	height 64px

/* 主体内容 */
.main-body
	min-width 630px
	height calc(100vh - 64px)

/* 主体头部 */
.main-body .hd
	position relative
	z-index 2
	box-sizing border-box
	padding 0 60px 0 50px
	height 48px
	line-height 48px

/* 主体头部右侧 */
.main-body .right
	float right

.main-body .right .action-wrap
	padding 0
	border none

.main-body .right .action-wrap .act-txt
	position absolute
	left 50%
	display none
	padding 0 8px
	height 22px
	border-radius 2px
	background-color #4D4D4D
	color #fff
	white-space nowrap
	font-size 12px
	line-height 22px
	transform translateX(-50%)

.main-body .right .action-wrap:hover .act-txt
	display block

/* 面包屑 */
.main-body .breadcrumb
	position relative
	left -5px
	display flex
	overflow hidden
	padding 0

.main-body .breadcrumb .item
	display inline-block
	flex-shrink 1
	flex-basis auto
	overflow hidden
	min-width 41px
	color #777
	text-overflow ellipsis
	white-space nowrap
	cursor pointer
	transition flex-shrink 0.3s

.main-body .breadcrumb .item a
	padding 4px 5px
	color #777

.main-body .breadcrumb .item a:hover
	text-decoration underline

.main-body .breadcrumb .item.all
	min-width 38px

.main-body .breadcrumb .item.cur a
	color #000
	font-weight 700

.main-body .breadcrumb .icon-bread-next
	margin 2px 2px 0
	width 7px
	height 12px
	background-image url('./images/svg/icon-bread-next.svg')

/* 内容 */
.list-wrap
	padding 0 80px 0 10px

.list-header
	position relative
	width 100%
	height 40px
	line-height 40px
	cursor pointer

.list-header:hover
	background-color rgb(244, 244, 244)

.list-header .col
	float left

.list-header .col.checkbox
	float left
	padding-left 10px
	width 30px
	height 40px

.list-header .col.checkbox .icon-checkbox
	top 1px
	display none

.list-header:hover .col.checkbox .icon-checkbox
	display inline-block

.col.col-border
	border-bottom 1px solid #D8DCE5

.list-header .col.name
	width calc(100% - 40px)
	text-align left
	font-size 14px

.list-header .col.info
	width calc(100% - 40px)
	font-size 14px

.list-item-wrap
	overflow auto
	margin-left 10px
	padding 10px
	height calc(((100vh - 65px) - 48px) - 40px)

/* 缩略图 */
.list-item-wrap-thumb .list-item .item
	position relative
	display list-item
	float left
	box-sizing border-box
	width 110px
	height 150px
	text-align center
	cursor pointer

.list-item-wrap-thumb .list-item .item.cur, .list-item-wrap-thumb .list-item .item:hover
	background-color rgb(244, 244, 244)

.list-item-wrap-thumb .list-item .item .inner
	position relative
	z-index 3
	display block
	padding-bottom 16px
	cursor default

.list-item-wrap-thumb .list-item .item .icon-wrapper
	position relative
	z-index 0
	display block
	padding-top 80%
	width 100%

.list-item-wrap-thumb .list-item .item .icon-wrapper .icon
	position absolute
	top 50%
	left 50%
	display inline-block
	overflow hidden
	margin -40px 0 0 -50px
	cursor pointer

.list-item-wrap-thumb .list-item .item .inner .txt
	overflow hidden
	margin 0px auto
	max-height 40px
	color rgb(2, 2, 2)
	text-align center
	text-overflow ellipsis
	white-space nowrap
	font-size 14px

.list-item-wrap-thumb .list-item .item .inner .txt:hover
	text-decoration underline

.list-item-wrap-thumb .list-item .item .checkbox
	position absolute
	top 10px
	right 10px
	z-index 9
	display none
	margin 0

.list-item-wrap-thumb .list-item .item.cur .checkbox, .list-item-wrap-thumb .list-item .item:hover .checkbox
	display inline-block

/* figure-item */
.list-item-wrap-thumb .figure-item
	position relative
	z-index 0
	padding 12px 0 0

.list-item-wrap-thumb .figure-list-item
	position relative
	display inline-block
	overflow hidden
	box-sizing border-box
	margin-bottom 10px
	padding-right 1px
	width 150px
	vertical-align top
	cursor default

.list-item-wrap-thumb .figure-list-item:hover, .list-item-wrap-thumb .figure-list-item.cur
	background-color rgb(244, 244, 244)

.list-item-wrap-thumb .figure-list-item-inner
	padding-bottom 16px
	width 100%
	border-radius 2px

.list-item-wrap-thumb .checkbox
	position absolute
	top 10px
	right 0
	z-index 10
	display none
	margin 0
	cursor default

.list-item-wrap-thumb .figure-list-item.cur .figure-list-item-inner .checkbox, .list-item-wrap-thumb .figure-list-item:hover .figure-list-item-inner .checkbox
	display block

/* .list-item-wrap .figure-list-item.cur .figure-list-item-inner .icon-checkbox{ */
/* display: block; */
/* background-image: url(../images/svg/icon-checkbox-cur.svg); */
/* } */
.list-item-wrap-thumb .figure-list-item-pic
	position relative
	z-index 0
	box-sizing border-box
	padding-bottom 1px
	width 100%
	height 150px
	border-radius 2px
	text-align center
	font-size 0

.list-item-wrap-thumb .img-wrapper
	display inline-block
	width 100%
	height 100%
	vertical-align middle

.list-item-wrap-thumb .img-wrapper:before
	display inline-block
	width 0
	height 100%
	content ''
	vertical-align middle

.list-item-wrap-thumb .figure-list-item-pic .icon-l
	position absolute
	top 50%
	left 50%
	display inline-block
	box-sizing border-box
	margin -67px 0 0 -67px
	width 134px
	height 134px
	background-repeat no-repeat
	color transparent
	font-size 0
	cursor pointer

.list-item-wrap-thumb .figure-list-item-pic .icon-l:before
	position absolute
	top 0
	left 0
	width 100%
	height 100%
	background-size cover
	content ''

.list-item-wrap-thumb .figure-list-item-pic .icon-l:after
	display block
	padding-top 100%
	content ''

.list-item-wrap-thumb .figure-list-item .figure-list-item-txt .tit
	overflow hidden
	margin 0 auto
	max-height 40px
	width 84%
	color #020202
	text-align center
	text-overflow ellipsis
	white-space nowrap
	font-size 14px

.list-item-wrap-thumb .icon-zip-l::before
	background-image url('./images/svg/doctype/icon-zip-l.svg')

/* 列表模式 */
.list-item-wrap-list
	margin-left 0
	padding 0 1px 0 0

.list-item-wrap-list .row
	position relative
	line-height 40px

.list-item-wrap-list .row:hover
	background-color rgb(244, 244, 244)

.list-item-wrap-list .row.cur
	background-color #308EFF
	color white

.list-item-wrap-list .col
	float left

.list-item-wrap-list .col.name
	padding 10px 0
	width calc(100% - 40px)
	text-align left

.list-item-wrap-list .checkbox-wrap
	position relative
	top 2px
	float left
	padding 10px 0 10px 10px
	width 30px
	height 40px

.list-item-wrap-list .checkbox-wrap .checkbox
	display none

.list-item-wrap-list .row.cur .checkbox-wrap .checkbox, .list-item-wrap-list .row:hover .checkbox-wrap .checkbox
	display inline-block

/* 画框 */
.draw-selector
	position fixed
	right 0
	bottom 0
	width 0
	height 0
	background-color rgba(100, 100, 100, 0.2)
</style>
