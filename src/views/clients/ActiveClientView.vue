<template>
  <ClientTable />
  <!-- блок кнопок 
  <a-row>
    <a-col :span="9">
      <a-space>
        <a-button @click="showDrawer">
        <PlusOutlined />
        Создать
      </a-button>
      <a-button  :disabled="!hasOneSelected" @click="showDrawer">
        <PlusOutlined />
        Редактировать
      </a-button>
      <a-button :disabled="!hasOneSelected" @click="showDrawer">
        <PlusOutlined />
        Просмотреть
      </a-button>
      
      <a-button  :disabled="!hasSelected" :loading="loading" @click="start">
        <PlusOutlined />
        Проверить
      </a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${selectedRowKeys.length} items` }}
        </template>
      </span>
    
      </a-space>
    </a-col>
  </a-row>
  <br/>
  <!-- таблица -->
  <!-- <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
    />  -->
  <!-- слайдер для создания и редактирования -->
  <a-drawer title="Создать нового клиента" :width="920" :visible="visible" :body-style="{ paddingBottom: '80px' }"
    @close="onClose">
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Name" name="name">
            <a-input v-model:value="form.name" placeholder="Please enter user name" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Url" name="url">
            <a-input v-model:value="form.url" style="width: 100%" addon-before="http://" addon-after=".com"
              placeholder="please enter url" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Owner" name="owner">
            <a-select placeholder="Please a-s an owner" v-model:value="form.owner">
              <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
              <a-select-option value="mao">Maomao Zhou</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Type" name="type">
            <a-select placeholder="Please choose the type" v-model:value="form.type">
              <a-select-option value="private">Private</a-select-option>
              <a-select-option value="public">Public</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Approver" name="approver">
            <a-select placeholder="Please choose the approver" v-model:value="form.approver">
              <a-select-option value="jack">Jack Ma</a-select-option>
              <a-select-option value="tom">Tom Liu</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="DateTime" name="dateTime">
            <a-date-picker v-model:value="form.dateTime" style="width: 100%"
              :get-popup-container="getPopupContainer" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Description" name="description">
            <a-textarea v-model:value="form.description" :rows="4" placeholder="please enter url description" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div :style="{
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e9e9e9',
      padding: '10px 16px',
      background: '#fff',
      textAlign: 'right',
      zIndex: 1,
    }">
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </div>
  </a-drawer>
  <!--  -->
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { computed, defineComponent, reactive, toRefs, ref } from 'vue';
import ClientTable from '@/components/clients/ClientTable.vue';

type Key = string;

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

interface Client {
  key: Key; // Уникальный идентификатор клиента
  name: string; // Имя клиента
  age: number;
  email: string; // Email клиента
  phone?: string; // Телефон (опционально)
  status: string;
  address: string; // Адрес клиента
  registrationDate: string; // Дата создания записи
}


const columns = [
{
      "title": "Имя",
      "dataIndex": "name",
      "key": "name",
      "width": 150
    },
    {
      "title": "Возраст",
      "dataIndex": "age",
      "key": "age",
      "width": 80
    },
    {
      "title": "Адрес",
      "dataIndex": "address",
      "key": "address",
      "width": 250
    },
    {
      "title": "Телефон",
      "dataIndex": "phone",
      "key": "phone",
      "width": 150
    },
    {
      "title": "Email",
      "dataIndex": "email",
      "key": "email",
      "width": 200
    },
    {
      "title": "Статус",
      "dataIndex": "status",
      "key": "status",
      "width": 100
    },
    {
      "title": "Дата регистрации",
      "dataIndex": "registrationDate",
      "key": "registrationDate",
      "width": 150
    }
];

const data: Client[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i.toString(),
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    phone: "+7 9" + i + "9 " + i + "34567",
    email: i + "@bb.ru",
    status: "Active",
    registrationDate: '2023-01-15',
  });
}

export default defineComponent({
  components: {
    PlusOutlined,
    ClientTable
  },
  setup() {
    const form = reactive({
      name: '',
      url: '',
      owner: '',
      type: '',
      approver: '',
      dateTime: '',
      description: '',
    });

    const rules = {
      name: [{ required: true, message: 'Please enter user name' }],
      url: [{ required: true, message: 'please enter url' }],
      owner: [{ required: true, message: 'Please select an owner' }],
      type: [{ required: true, message: 'Please choose the type' }],
      approver: [{ required: true, message: 'Please choose the approver' }],
      dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
      description: [{ required: true, message: 'Please enter url description' }],
    };

    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
// -------------------
const state = reactive<{
      selectedRowKeys: Key[];
      loading: boolean;
    }>({
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    });
    const hasSelected = computed(() => state.selectedRowKeys.length > 0);
    const hasOneSelected = computed(() => state.selectedRowKeys.length == 1);

    const start = () => {
      state.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        state.loading = false;
        state.selectedRowKeys = [];
      }, 1000);
    };
    const onSelectChange = (selectedRowKeys: Key[]) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
    };
// -----------

    // ---------------------
    return {
      form,
      rules,
      visible,
      showDrawer,
      onClose,

      data,
      columns,
      hasSelected,
      hasOneSelected,
      ...toRefs(state),

      // func
      start,
      onSelectChange,

    };
  },
  methods: {
    getPopupContainer(trigger: HTMLElement) {
      return trigger.parentNode as HTMLElement;
    }
  }
});
</script>
<style>
.ant-btn-primary {
  position: relative;
}
</style>
