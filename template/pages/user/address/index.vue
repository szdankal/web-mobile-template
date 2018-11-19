<template>
  <section class="container">
    <div class="address-list-block">
      <dankal-slider-group>
        <dankal-slider>
          <template
            slot="content"
            slot-scope="scope"
          >
            <div class="address-item-block-infos">
              <div>
                <span>收货人：林锦鸿</span>
                <span>13499380000</span>
              </div>
              <p>广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
            </div>
          </template>
          <template
            slot="actions"
            slot-scope="scope"
          >
            <div class="address-item-block-action">
              <span>标为默认</span>
              <span>编辑</span>
              <span>删除</span>
            </div>
          </template>
        </dankal-slider>
        <dankal-slider>
          <template
            slot="content"
            slot-scope="scope"
          >
            <div class="address-item-block-infos">
              <div>
                <span>收货人：林锦鸿</span>
                <span>13499380000</span>
              </div>
              <p>广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
            </div>
          </template>
          <template
            slot="actions"
            slot-scope="scope"
          >
            <div class="address-item-block-action">
              <span>标为默认</span>
              <span>编辑</span>
              <span>删除</span>
            </div>
          </template>
        </dankal-slider>
      </dankal-slider-group>
    </div>
    <div class="address-action-button">
      <span>新建地址</span>
    </div>
    <dankal-modal>
      <div class="model-content">
        <p>是否要删除该地址？</p>
        <div>
          <span>否</span>
          <span>是</span>
        </div>
      </div>
    </dankal-modal>
  </section>
</template>

<script>
import DankalModal from '@/components/dankal-modal';
import DankalSlider from '@/components/dankal-slider';
import DankalSliderGroup from '@/components/dankal-slider-group';

export default {
  data() {
    return {
      update: true,
    };
  },

  components: {
    DankalModal,
    DankalSlider,
    DankalSliderGroup,
  },
};
</script>

<style lang="scss" scope>
.address-item-block-infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 1.8rem;

  padding: 0.24rem 0.24rem;
  background-color: #ffffff;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    span {
      display: inline-block;
      font-size: 0.28rem;
    }

    .defaults {
      display: flex;
      align-items: center;

      span:nth-of-type(1) {
        color: #4a90e2;
        margin-right: 0.24rem;
      }
    }
  }

  p {
    font-size: 0.24rem;
  }
}

.address-item-block-action {
  height: 100%;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #ffffff;
    padding: 0rem 0.2rem;
  }

  span:nth-of-type(1) {
    background-color: #4a90e2;
  }

  span:nth-of-type(2) {
    background-color: #c8c7cd;
  }

  span:nth-of-type(3) {
    background-color: #fe3b31;
  }
}

.address-action-button {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 0.96rem;

  text-align: center;
  font-size: 0.32rem;
  color: #ffffff;
  line-height: 0.96rem;
  background-color: #4a90e2;
}

.model-content {
  width: 5.6rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.08rem;

  p {
    font-size: 0.36rem;
    text-align: center;
    padding: 0.76rem 0rem 0.64rem;
  }

  div {
    display: flex;
    align-items: center;
    border-top: 1px solid #e5e5e5;

    span {
      display: inline-block;
      flex-basis: 50%;
      font-size: 0.36rem;
      text-align: center;
      padding: 0.28rem 0rem;
    }

    span + span {
      border-left: 1px solid #e5e5e5;
    }
  }
}
</style>
