<template>
  <div>
    <van-nav-bar ref="navbar"
                 :title="path" left-text="选择" @click-left="onClickLeft" fixed="true"
    />

    <van-grid square style="margin-top: 4rem">
      <van-grid-item v-for="(item,index) in fileList" :key="item.absolutePath">
        <van-image
          :width="imageWith"
          :height="imageWith"
          fit="cover"
          :src="encodeURI(baseURL+'photo/downloadThumbnail?path='+item.absolutePath)"
          @click="clickImage(index)"
        />
      </van-grid-item>
    </van-grid>


    <van-image-preview v-model="show" :images="images" :startPosition="startPosition" @change="onChange" closeable="true" className="AAA">
    </van-image-preview>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar title="标题" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>
import config from '../../api/config';

<script>
  import config from "../../api/config";

  export default {
    name: "PhotoList",
    data() {
      return {
        clientWidth: '',
        wrapHeight: '',
        imageWith: '',
        path: '请选择路径',
        fileList: [],
        show: false,
        imageIndex: 0,
        images: [],
        startPosition: 0,
        closeable: true,
        baseURL: '',
        showPicker: false,
        columns: [],
        rootPath: '',
      }
    },
    computed: {},
    mounted() {
      this.baseURL = config.baseURL;
      this.clientWidth = document.documentElement.clientWidth - 40;
      this.imageWith = this.clientWidth / 4;
      this.folders();
    },
    methods: {
      folders() {
        let that = this;
        this.$fetch(this.$api.url.folders2, {}).then(res => {
          if (res.success) {
            that.columns = res.result;
            that.rootPath = res.info;
          }
        })
      },
      files(path) {
        let that = this;
        this.$fetch(this.$api.url.files, {
          path: path
        }).then(res => {
          console.log(res);
          if (res.success) {
            that.fileList = res.result;
            that.images = [];
            that.fileList.forEach(function (element) {
              that.images.push(encodeURI(that.baseURL + 'photo/download?path=' + element.absolutePath))
            });
          }
        })
      },
      onChange(index) {
        this.index = index;
      },
      clickImage(index) {
        this.startPosition = index;
        this.show = true;
      },
      onClickLeft() {
        this.showPicker = !this.showPicker;
      },
      onConfirm(value) {
        this.fileList = [];
        this.images = [];
        this.path = value[0] + "/" + value[1];
        this.showPicker = false;
        this.files(this.rootPath + "/" + this.path);
      },

    }
  }
</script>

