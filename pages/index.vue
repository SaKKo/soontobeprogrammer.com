<template>
  <div class="index-page">
    <div class="youtube-subscribe-container">
      <div id="youtube-subscribe"></div>
    </div>
    <div style="text-align: center; color: white; font-size: 14px">
      โดย เจ้าของ
      <a
        href="https://youtube.com/sakkosama"
        target="_blank"
        style="text-decoration: underline"
      >
        Youtube Channel SaKKosama
      </a>
    </div>
    <h1 style="text-align: center">หนังสือ สอน Javascript</h1>
    <h2 style="text-align: center; color: white">พื้นฐานการเขียนโปรแกรม</h2>
    <h3 style="text-align: center; color: white">
      เหมาะสำหรับผู้เริ่มต้นอยากเขียนโปรแกรม
    </h3>
    <div style="text-align: center">
      <img
        src="/soon-to-be-programmer-logo-book-cover-small.png"
        alt="soon-to-be-programmer-book-cover"
        style="width: 200px"
        @click="tableOfContentModal = true"
      />
    </div>
    <div style="text-align: center">
      <Button class="green-black-button" @click="tableOfContentModal = true"
        >ดูสารบัญ</Button
      >
    </div>
    <BuyBook style="margin-top: 20px"></BuyBook>
    <Divider>รายละเอียดหนังสือ</Divider>
    <div class="book-intro">
      <p>
        ผมเขียนเขียนหนังสือเล่มนี้เพื่อให้ผู้ที่อยากเริ่มต้นเขียนโปรแกรมทุกคน
        ได้เข้าถึงการเขียนโปรแกรมได้โดยง่าย ผู้อ่านจะสามารถใช้ computer
        ส่วนตัวที่เป็น Windows 10 หรือ MacOS เพื่อหัดเขียนโค้ด
        และสามารถนำความรู้ไปต่อยอดการเขียนโปรแกรมอื่นๆได้อีกเช่น
      </p>
      <div style="text-align: center; margin: 14px 0">
        <b class="red">Frontend Web Development :</b>
        <br />
        <span>VueJS, ReactJS, AngularJS, JQuery, etc..</span>
        <br />
        <b class="red">Backend Web Development :</b>
        <br />
        <span>Express, Meteor, Sequelize, etc..</span>
        <br />
        <b class="red">Others :</b>
        <br />
        <span>React-Native Mobile Application, IoT, etc..</span>
        <br />
      </div>
      <p>
        เมื่ออ่านหนังสือเล่มนี้จบแล้ว ผมหวังว่าผู้อ่านจะสามารถไปเขียนโปรแกรม
        VueJS/NuxtJS ต่อได้โดยศึกษาจากวีดีโอ ที่ผมทำไว้ใน
      </p>
      <div style="text-align: center">
        <a
          href="https://www.youtube.com/watch?v=k20Srsf2r7k&list=PLXm-UJjVcJCMd24NIQTPcqHhfnK-QbPmD"
          target="_blank"
          style="text-decoration: underline"
          >Youtube Channel Vue/NuxtJS Playlist</a
        >
      </div>
      <p>
        หรือเมื่อเข้าใจวิธีเขียนโปรแกรมแล้ว
        ยังสามารถนำความรู้ไปต่อยอดเขียนภาษาอื่นๆได้อีกมากมาย เนื่องจากว่า
        Javascript นั้นมีความคล้ายกับภาษา C
        ซึ่งเป็นภาษาที่นำพื้นฐานไปต่อยอดได้ง่าย หากสนใจภาษา Ruby หรือ Ruby on
        Rails สามารถดูวีดีโอสอนฟรีได้ที่
      </p>
      <div style="text-align: center">
        <a
          href="https://www.youtube.com/watch?v=CxFAU6x9gso&list=PLXm-UJjVcJCPxawSeVSYP1bsP_0_iMpQJ"
          target="_blank"
          style="text-decoration: underline"
          >Youtube Channel Ruby on Rails Playlist</a
        >
      </div>
      <p style="text-align: center">
        หวังว่าจะได้เจอโปรแกรมเมอร์หน้าใหม่เยอะขึ้นเรื่อยๆนะครับ
      </p>
      <p style="text-align: center">ขอบคุณครับ</p>
    </div>
    <Divider>ดูวีดีโอแนะนำ</Divider>
    <client-only>
      <div class="youtube">
        <youtube ref="youtube" video-id="N48mE656U0c" width="100%"> </youtube>
      </div>
    </client-only>
    <Modal
      v-model="tableOfContentModal"
      title="สารบัญ"
      class="table-of-content-modal"
      :styles="{ top: '20px', marginBottom: '20px' }"
    >
      <SoonToBeProgrammerTableOfContent></SoonToBeProgrammerTableOfContent>
      <div slot="footer">
        <Button class="green-black-button" @click="tableOfContentModal = false">
          ปิดสารบัญ
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import BuyBook from '~/components/BuyBook';
import SoonToBeProgrammerTableOfContent from '~/components/SoonToBeProgrammerTableOfContent';

export default {
  components: {
    BuyBook,
    SoonToBeProgrammerTableOfContent,
  },
  data() {
    return {
      tableOfContentModal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      const script = document.createElement('script');
      const scripts = document.getElementsByTagName('script')[0];
      script.src = 'https://apis.google.com/js/platform.js';
      scripts.parentNode.insertBefore(script, scripts);

      setTimeout(() => {
        window.gapi.ytsubscribe.render(
          document.getElementById('youtube-subscribe'),
          {
            channel: 'saklism',
            layout: 'full',
            theme: 'dark',
            count: 'default',
          }
        );
      }, 3000);
    }, 1000);
  },
  methods: {
    playVideo() {
      this.$refs.youtube.player.playVideo();
    },
  },
  head() {
    const title =
      'หนังสือ Javascript สำหรับมือใหม่ | เกิดอยากจะเป็น โปรแกรมเมอร์';
    const description =
      'สำหรับผู้เริ่มต้นและต้องการเรียนรู้พื้นฐานโปรแกรมมิ่ง มีคอมเครื่องเดียวก็ทำได้';
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://soontobeprogrammer.com',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://soontobeprogrammer.com/soon-to-be-programmer-youtube-cover.png',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'เกิดอยากจะเป็นโปรแกรมเมอร์',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.youtube {
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
}
.youtube-subscribe-container {
  text-align: center;
  margin: 10px auto 0px auto;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
}
.book-intro {
  color: white;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 600px;
}
.book-intro p {
  margin-top: 10px;
}
.red {
  color: #c91b00;
}
.green-black-button {
  border-color: #00c200;
  background-color: black;
}
</style>

<style media="screen">
.index-page .ivu-divider-inner-text {
  color: white;
}
.table-of-content-modal .ivu-modal-header,
.table-of-content-modal .ivu-modal-body,
.table-of-content-modal .ivu-modal-footer {
  background-color: #1a1a1a;
}
.table-of-content-modal .ivu-modal-header-inner,
.table-of-content-modal .ivu-modal-body-inner,
.table-of-content-modal .ivu-modal-footer-inner {
  color: #00c200;
}
</style>
