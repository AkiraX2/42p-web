<template>
  <v-container class="portal" fluid fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12 md4>
        <div class="text-xs-center">
          <img height="150px" max-width="450px" id="title" :src="src" nop_tag class="elevation-2">
          <!-- <h3>{{ src }}</h3> -->
          <div class="caption">{{ title }}</div>
          <div class="caption text-xs-center grey--text pt-1 pb-3">
            <a :href="link" target="_blank">{{ link }}</a>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md5 offset-md2>
        <v-list subheader two-line>
          <v-subheader>Hot Posts
            <v-spacer />
            <v-flex xs2 class="caption">SORT BY </v-flex>
            <v-flex xs2>
              <v-select class="sort" :items="sortings" color="" value="Pts" height="18" flat dense/>
            </v-flex>
            <!-- <v-icon class="icon"   color="primary"> fas fa-sort </v-icon> -->
          </v-subheader>
          <template v-for="(post, index) in posts">
            <v-list-tile avatar class="list__tile__m" v-bind:style="score(post)" :key="index" @click="">
              <v-list-tile-action>
                <div class="like-box">
                  <div v-if="post.like > 10" class="text primary--text"> {{ post.like }} </div>
                  <div v-else class="text"> {{ post.like }} </div>
                  <div class="caption">pts</div>
                </div>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="author caption">
                  <span>{{ post.author }}</span>
                  <span class="date">{{ post.date }}</span>
                </v-list-tile-title>
                <v-list-tile-sub-title class="content caption" v-html="post.content"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>#{{ index+1 }}</v-list-tile-action-text>
                <v-spacer></v-spacer>
                <div>
                  <v-btn icon small color="">
                    <v-icon class="icon" color="primary" @click="like(post)">fas fa-smile-beam</v-icon>
                  </v-btn>
                  <v-btn icon small color="">
                    <v-icon class="icon" color="grey  " @click="dislike(post)">fas fa-frown-open</v-icon>
                  </v-btn>
                </div>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < posts.length"></v-divider>
          </template>
          <v-spacer />
          <template>
            <div class="pager text-xs-center mt-3 mb-2">
              <v-pagination v-model="page" :length="15" total-visible="7" circle></v-pagination>
            </div>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
  name: 'Portal',
  data() {
    return {
      not_hover: false,
      title: "未知图片来源",
      link: "http://42port.com/",
      page: 1,
      msg: 'This is portal home page',
      src: 'unknown.png',
      sortings: ["Pts", "New", "Old"],
      posts: [{
        content: "→_→，<code class='elevation-3'>5bf709196926321edce0a24c05bcaa33a8d219de</code>",
        author: "喜欢开车的斜眼仔",
        date: "3 hr",
        like: 506,
        diss: 5 
      }, {
        content: "第一名给的车牌是假的，这个目前没有资源，喜欢的可以看下这个<code class='elevation-3'>bcaa33a8d219de5bf709194c056926321edce0a2</code>不是我的菜下不去手啊！",
        author: "龙哥在江湖",
        date: "15 min",
        like: 12,
        diss: 0 
      }, {
        content: "楼好生安",
        author: "匿名",
        date: "30 min",
        like: 2,
        diss: 0 
      }, {
        content: "GIF里面的这个美女俯卧撑做错了，而且没有做到全程。嗯…我活该单身（手动狗头）！\nPS:谁有这个资源啊",
        author: "TT.t0",
        date: "1 day",
        like: 0,
        diss: 0 
      }, {
        content: "老司机在哪里！！还不滚过来开车！！",
        author: "愤怒的御姐Lol",
        date: "1 day",
        like: 0,
        diss: 0 
      }, {
        content: "超级喜欢这个，前几天也上榜了……",
        author: "快到缸里来",
        date: "7 hr",
        like: 0,
        diss: 0 
      }]
    }
  },
  computed: {
    // score: ()=>{ return 0;}

  },

  methods: {
    score: (post) => {
      let s = post.like / 600;
      return `{background: -webkit-linear-gradient(left,rgba(0,96,88,0.2) ${s-0.01} ,rgba(0,96,88,0) ${s} ); }`;
    },
        like: (post) => {
       post.like+=1;
    },
        dislike: (post) => {
      post.like-=1;
    }
  },
  created() {
    console.log(this.$route);
    var media = this.$route.query.media;
    var title = this.$route.query.title;
    var source = this.$route.query.source;
    // console.log(media);
    if (media) {

      this.src = decodeURI(media);
      window.resizeTo(680, 800);
    }
    if (title) {
      this.title = decodeURI(title);
    }
    if (source) {
      this.link = decodeURI(source);
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.portal {}

.content {
  white-space: pre-wrap !important;
  overflow: visible !important;
  text-overflow: ellipsis;
  -webkit-transition: .3s cubic-bezier(.25, .8, .5, 1);
  transition: .3s cubic-bezier(.25, .8, .5, 1);
  width: 100%;
  color: #333 !important;
  line-height: 20px;
  display: block !important;
}

</style>
<style type="text/css">
code {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis;
  max-width: 60px !important;
  display: inline-block !important;
  /*max-height: 18px;*/
  /*line-height: 22px;*/
  vertical-align: middle;
  margin: 4px;
}

.icon {
  font-size: 14px;
}

.like-box {
  margin: auto;
}

.like-box .text {}



.list__tile__m a {
  height: fit-content !important;
  padding: 10px;
}

.list__tile__m {

  /*background: -webkit-linear-gradient(left,rgba(0,96,88,0.2) 29% ,rgba(0,96,88,0) 30% );*/
}

.list__tile__m,
.list__tile,
.list__tile--link,
.list__tile--avatar {
  height: fit-content !important;
  color: #999 !important;
  z-index: 10;
  background: transparent !important;

}

.author .date {
  margin-left: 8px;
}

.sort {

}

.theme--light.v-select .v-select__selections {
  color: rgba(0,0,0, 0.65);
  font-size: 14px !important;
}

</style>
