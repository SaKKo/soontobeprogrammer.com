<template>
  <div>
    <Layout>
      <div class="header">เกิดอยากจะเป็น โปรแกรมเมอร์</div>
      <Content class="container"><Nuxt /></Content>
      <Footer class="footer">
        <ButtonGroup>
          <Button
            icon="ios-book"
            to="https://leanpub.com/soon-to-be-programmer"
          ></Button>
          <Button
            icon="logo-facebook"
            to="https://www.facebook.com/soon.to.be.programmer"
          ></Button>
          <Button
            icon="ios-people"
            to="https://www.facebook.com/groups/soon.to.be.programmer.book"
          ></Button>
          <Button
            icon="logo-youtube"
            to="https://youtube.com/sakkosama"
          ></Button>
          <Button icon="logo-github" to="https://github.com/sakko"></Button>
        </ButtonGroup>
        <div>by Tanasak Tantitarntong</div>
      </Footer>
    </Layout>
  </div>
</template>

<style lang="css" scoped>
.header {
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  padding: 20px 0 0 0;
}
.container {
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 10px;
  height: 100%;
  min-height: calc(100vh - 64px - 69px);
}
.footer {
  text-align: center;
}
</style>
