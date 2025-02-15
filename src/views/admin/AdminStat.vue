<template>
  
    <a-row >
        <a-col>
            <div style="background: #ececec; padding: 30px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <arrow-down-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
        </a-col>
        <a-divider type="vertical" style="background-color: #fff" />
        <a-col>
            <div style="background: #ececec; padding: 30px">
            <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template #suffix>
          <like-outlined />
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="12">
      <a-statistic title="Unmerged" :value="93" class="demo-class">
        <template #suffix>
          <span>/ 100</span>
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</div>
        </a-col>
    </a-row>
    <a-divider type="vertical" style="background-color: #fff" />
    <a-row >
        <a-col>
            <div style="background: #ececec; padding: 30px">
                <a-row>
    <a-col :span="12">
      <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
    </a-col>
    <a-col :span="12">
      <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
    </a-col>
  </a-row>
            </div>
        </a-col>
    </a-row>
    <a-divider type="vertical" style="background-color: #fff" />
    <a-row >
        <a-col>
            <div style="background: #ececec; padding: 30px">
                <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </a-col>
    <a-col :span="12">
      <a-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </a-col>
    <a-col :span="24" style="margin-top: 32px">
      <a-statistic-countdown title="Day Level" :value="deadline" format="[] DD [days] [] HH [hours ] [] mm [Minutes ] [] ss [seconds]" />
    </a-col>
  </a-row>
            </div>

        </a-col>
    </a-row>

    
</template>
<script lang="ts">
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
    LikeOutlined,
  },
});
</script>

