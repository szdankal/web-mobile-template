<template>
  <section class="container">
    <div class="textarea-block">
      <div class="textarea-item">
        <textarea
          name="feedback"
          placeholder="* 我们懂得聆听，请在此写下您的建议"
          maxlength="200"
        />
        <p class='text-item'>
          <span style="color: rgba(245, 166, 35, 1);">{{ number }}</span>/<span>200</span>
        </p>
      </div>
      <dankal-image-upload
        class="upload-item"
        :limit="limit"
        :domain="domain"
        :token="token"
        v-model="images"
      />
    </div>
    <div
      class="action-button"
    >
      保存
    </div>
    <dankal-modal>
      <div class="modal-content">
        <img src="../../assets/images/ic-feedback-success.png" >
        <span>反馈成功</span>
      </div>
    </dankal-modal>
  </section>
</template>

<script>
import DankalImageUpload from '../../components/dankal-image-upload';
import DankalModal from '../../components/dankal-modal';

export default {
  head() {
    return {
      title: '意见反馈',
    };
  },

  data() {
    return {
      number: 0,
      images: [],
      limit: 3,
      domain: '',
      token: '',
    };
  },

  components: {
    DankalImageUpload,
    DankalModal,
  },
};
</script>

<style lang="scss" scope>
.container {
  padding-top: 0.2rem;

  .textarea-block {
    background-color: #ffffff;
    margin-bottom: 0.32rem;
    padding: 0.32rem 0.32rem 0.32rem 0.32rem;
  }

  .textarea-item {
    position: relative;
    border-bottom: 1px solid#E5E5E5;
    height: 3rem;

    textarea {
      width: 100%;
      height: 2.88rem;
      box-sizing: border-box;
      margin-bottom: 0.32rem;
      background: rgba(255, 255, 255, 1);
      font-size: 0.28rem;
      color: rgba(174, 174, 174, 1);
      line-height: 0.4rem;
    }

    .text-item {
      position: absolute;
      bottom: 0.18rem;
      right: 0rem;
      display: inline-block;

      font-size: 0.28rem;
      font-family: PingFangSC-Regular;
      color: rgba(74, 74, 74, 1);
      line-height: 0.4rem;
    }
  }

  .upload-item {
    margin-top: 0.24rem;
  }

  .action-button {
    display: block;

    width: 6.76rem;
    height: 0.92rem;
    background: #f5a623;
    border-radius: 0.6rem;
    margin: 0 auto;

    text-align: center;
    font-size: 0.32rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.92rem;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 4.8rem;
    height: 4.2rem;

    background-color: #ffffff;
    border-radius: 0.1rem;

    img {
      width: 2.24rem;
      margin-bottom: 0.32rem;
    }

    text {
      font-size: 0.36rem;
    }
  }
}
</style>
