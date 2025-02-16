import { Vue } from 'vue-property-decorator';
import { message } from 'ant-design-vue';
import { httpClient } from '@/plugins/axios';
export default class ClientTable extends Vue {
    state = {
        selectedRowKeys: [],
        loading: false,
    };
    clients = [];
    columns = [
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
    rowSelection = {
        selectedRowKeys: this.state.selectedRowKeys,
        onChange: (selectedRowKeys) => {
            this.state.selectedRowKeys = selectedRowKeys;
        },
    };
    async mounted() {
        this.state.loading = true;
        try {
            const response = await this.loadClients();
            if (response && response.data) {
                this.clients = response.data;
            }
        }
        catch (error) {
            console.error('Error loading clients:', error);
        }
        finally {
            this.state.loading = false;
        }
    }
    async loadClients() {
        try {
            return await httpClient.get('/admin/client/all');
        }
        catch (error) {
            message.error('Error loading clients');
        }
    }
    showDrawer() {
        //this.visible.value = true;
    }
    //computed method
    get hasOneSelected() {
        return this.state.selectedRowKeys.length == 1;
    }
    get hasSelected() {
        return this.state.selectedRowKeys.length > 0;
    }
    start() {
        this.state.loading = true;
        // ajax request after empty completing
        setTimeout(() => {
            this.state.loading = false;
            this.state.selectedRowKeys = [];
        }, 1000);
    }
    editClient(record) {
        // Логика редактирования клиента
        console.log('Edit client:', record);
    }
    deleteClient(key) {
        // Логика удаления клиента
        console.log('Delete client with key:', key);
    }
    viewClient(record) {
        // Логика просмотра клиента
        console.log('View client:', record);
    }
    exportClient(record) {
        // Логика экспорта клиента
        console.log('Export client:', record);
    }
    __VLS_template = () => {
        const __VLS_ctx = {};
        let __VLS_components;
        let __VLS_directives;
        // CSS variable injection 
        // CSS variable injection end 
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_0 = {}.ARow;
        /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = {}.ACol;
        /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            span: ((9)),
        }));
        const __VLS_8 = __VLS_7({
            span: ((9)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = {}.ASpace;
        /** @type { [typeof __VLS_components.ASpace, typeof __VLS_components.aSpace, typeof __VLS_components.ASpace, typeof __VLS_components.aSpace, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = {}.AButton;
        /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            ...{ 'onClick': {} },
        }));
        const __VLS_20 = __VLS_19({
            ...{ 'onClick': {} },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        let __VLS_24;
        const __VLS_25 = {
            onClick: (__VLS_ctx.showDrawer)
        };
        let __VLS_21;
        let __VLS_22;
        __VLS_23.slots.default;
        var __VLS_23;
        const __VLS_26 = {}.AButton;
        /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
            ...{ 'onClick': {} },
            disabled: ((!__VLS_ctx.hasOneSelected)),
        }));
        const __VLS_28 = __VLS_27({
            ...{ 'onClick': {} },
            disabled: ((!__VLS_ctx.hasOneSelected)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        let __VLS_32;
        const __VLS_33 = {
            onClick: (__VLS_ctx.showDrawer)
        };
        let __VLS_29;
        let __VLS_30;
        __VLS_31.slots.default;
        var __VLS_31;
        const __VLS_34 = {}.AButton;
        /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
            ...{ 'onClick': {} },
            disabled: ((!__VLS_ctx.hasOneSelected)),
        }));
        const __VLS_36 = __VLS_35({
            ...{ 'onClick': {} },
            disabled: ((!__VLS_ctx.hasOneSelected)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_35));
        let __VLS_40;
        const __VLS_41 = {
            onClick: (__VLS_ctx.showDrawer)
        };
        let __VLS_37;
        let __VLS_38;
        __VLS_39.slots.default;
        var __VLS_39;
        const __VLS_42 = {}.AButton;
        /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
            ...{ 'onClick': {} },
            disabled: ((!__VLS_ctx.hasSelected)),
            loading: ((__VLS_ctx.state.loading)),
        }));
        const __VLS_44 = __VLS_43({
            ...{ 'onClick': {} },
            disabled: ((!__VLS_ctx.hasSelected)),
            loading: ((__VLS_ctx.state.loading)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        let __VLS_48;
        const __VLS_49 = {
            onClick: (__VLS_ctx.start)
        };
        let __VLS_45;
        let __VLS_46;
        __VLS_47.slots.default;
        var __VLS_47;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ style: ({}) },
        });
        if (__VLS_ctx.hasSelected) {
            const __VLS_50 = {}.ABadge;
            /** @type { [typeof __VLS_components.ABadge, typeof __VLS_components.aBadge, ] } */ ;
            // @ts-ignore
            const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
                count: ((__VLS_ctx.state.selectedRowKeys.length)),
                numberStyle: (({
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                })),
            }));
            const __VLS_52 = __VLS_51({
                count: ((__VLS_ctx.state.selectedRowKeys.length)),
                numberStyle: (({
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                })),
            }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        }
        __VLS_17.slots.default;
        var __VLS_17;
        __VLS_11.slots.default;
        var __VLS_11;
        __VLS_5.slots.default;
        var __VLS_5;
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        const __VLS_56 = {}.ATable;
        /** @type { [typeof __VLS_components.ATable, typeof __VLS_components.aTable, ] } */ ;
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
            columns: ((__VLS_ctx.columns)),
            dataSource: ((__VLS_ctx.clients)),
            rowSelection: ((__VLS_ctx.rowSelection)),
            loading: ((__VLS_ctx.state.loading)),
        }));
        const __VLS_58 = __VLS_57({
            columns: ((__VLS_ctx.columns)),
            dataSource: ((__VLS_ctx.clients)),
            rowSelection: ((__VLS_ctx.rowSelection)),
            loading: ((__VLS_ctx.state.loading)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        var __VLS_slots;
        var $slots;
        let __VLS_inheritedAttrs;
        var $attrs;
        const __VLS_refs = {};
        var $refs;
        var $el;
        return {
            attrs: {},
            slots: __VLS_slots,
            refs: $refs,
            rootEl: $el,
        };
        let __VLS_self;
    };
}
; /* PartiallyEnd: #3632/script.vue */
