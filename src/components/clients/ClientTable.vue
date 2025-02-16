<template>
    <div>
        <!-- блок кнопок  -->
        <a-row>
            <a-col :span="9">
                <a-space>
                    <a-button @click="showDrawer">

                        Создать
                    </a-button>
                    <a-button :disabled="!hasOneSelected" @click="showDrawer">
                        Редактировать
                    </a-button>
                    <a-button :disabled="!hasOneSelected" @click="showDrawer">
                        Просмотреть
                    </a-button>
                    <a-button :disabled="!hasSelected" :loading="state.loading" @click="start">
                        Проверить
                    </a-button>
                    <span style="margin-left: 8px">
                        <template v-if="hasSelected">
                            <a-badge :count="state.selectedRowKeys.length" :number-style="{
                                backgroundColor: '#fff',
                                color: '#999',
                                boxShadow: '0 0 0 1px #d9d9d9 inset',
                            }" />
                        </template>
                    </span>

                </a-space>
            </a-col>
        </a-row>
        <br />
        <a-table :columns="columns" :data-source="clients" :row-selection="rowSelection" :loading="state.loading" />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Table, Button, message } from 'ant-design-vue';
import { Client, Key } from '@/interfaces/clients/Client';
import { ref } from 'vue';
import { httpClient } from '@/plugins/axios';

export default class ClientTable extends Vue {

    state = {
        selectedRowKeys: [] as Key[],
        loading: false,
    };

    private clients: Client[] = [];
    private columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            width: 150,
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            width: 80,
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
            width: 250,
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 200,
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            width: 100,
        },
        {
            title: 'Регион',
            dataIndex: 'region',
            key: 'region',
            width: 120,
        },
        {
            title: 'Дата регистрации',
            dataIndex: 'registrationDate',
            key: 'registrationDate',
            width: 150,
        }
    ];

    private rowSelection = {
        selectedRowKeys: this.state.selectedRowKeys,
        onChange: (selectedRowKeys: Key[]) => {
            this.state.selectedRowKeys = selectedRowKeys;
        },
    };

    public async mounted() {
        this.state.loading = true;
        try {
            const response = await this.loadClients();
            if (response && response.data) {
                this.clients = response.data;
            }
        } catch (error) {
            console.error('Error loading clients:', error);
        } finally {
            this.state.loading = false;
        }
    }

    private async loadClients() {
        try {
            return await httpClient.get<Client[]>('/admin/client/all');
        } catch (error) {
            message.error('Error loading clients');
        }
    }

    private showDrawer() {
        //this.visible.value = true;
    }

    //computed method
    get hasOneSelected() {
        return this.state.selectedRowKeys.length == 1
    }

    get hasSelected() {
        return this.state.selectedRowKeys.length > 0
    }

    private start() {
        this.state.loading = true;
        // ajax request after empty completing
        setTimeout(() => {
            this.state.loading = false;
            this.state.selectedRowKeys = [];
        }, 1000);
    }

    private editClient(record: Client) {
        // Логика редактирования клиента
        console.log('Edit client:', record);
    }

    private deleteClient(key: string) {
        // Логика удаления клиента
        console.log('Delete client with key:', key);
    }

    private viewClient(record: Client) {
        // Логика просмотра клиента
        console.log('View client:', record);
    }

    private exportClient(record: Client) {
        // Логика экспорта клиента
        console.log('Export client:', record);
    }
}
</script>

<style scoped>
/* Ваши стили здесь */
</style>