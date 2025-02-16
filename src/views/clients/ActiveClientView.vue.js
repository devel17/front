import { PlusOutlined } from '@ant-design/icons-vue';
import { computed, defineComponent, reactive, toRefs, ref } from 'vue';
import ClientTable from '@/components/clients/ClientTable.vue';
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
const data = [];
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
        const visible = ref(false);
        const showDrawer = () => {
            visible.value = true;
        };
        const onClose = () => {
            visible.value = false;
        };
        // -------------------
        const state = reactive({
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
        const onSelectChange = (selectedRowKeys) => {
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
        getPopupContainer(trigger) {
            return trigger.parentNode;
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        PlusOutlined,
        ClientTable
    };
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    const __VLS_0 = {}.ClientTable;
    /** @type { [typeof __VLS_components.ClientTable, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.ADrawer;
    /** @type { [typeof __VLS_components.ADrawer, typeof __VLS_components.aDrawer, typeof __VLS_components.ADrawer, typeof __VLS_components.aDrawer, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ 'onClose': {} },
        title: ("Создать нового клиента"),
        width: ((920)),
        visible: ((__VLS_ctx.visible)),
        bodyStyle: (({ paddingBottom: '80px' })),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClose': {} },
        title: ("Создать нового клиента"),
        width: ((920)),
        visible: ((__VLS_ctx.visible)),
        bodyStyle: (({ paddingBottom: '80px' })),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClose: (__VLS_ctx.onClose)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_14 = {}.AForm;
    /** @type { [typeof __VLS_components.AForm, typeof __VLS_components.aForm, typeof __VLS_components.AForm, typeof __VLS_components.aForm, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        model: ((__VLS_ctx.form)),
        rules: ((__VLS_ctx.rules)),
        layout: ("vertical"),
    }));
    const __VLS_16 = __VLS_15({
        model: ((__VLS_ctx.form)),
        rules: ((__VLS_ctx.rules)),
        layout: ("vertical"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        gutter: ((16)),
    }));
    const __VLS_22 = __VLS_21({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
        span: ((12)),
    }));
    const __VLS_28 = __VLS_27({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        label: ("Name"),
        name: ("name"),
    }));
    const __VLS_34 = __VLS_33({
        label: ("Name"),
        name: ("name"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = {}.AInput;
    /** @type { [typeof __VLS_components.AInput, typeof __VLS_components.aInput, ] } */ ;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
        value: ((__VLS_ctx.form.name)),
        placeholder: ("Please enter user name"),
    }));
    const __VLS_40 = __VLS_39({
        value: ((__VLS_ctx.form.name)),
        placeholder: ("Please enter user name"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_37.slots.default;
    var __VLS_37;
    __VLS_31.slots.default;
    var __VLS_31;
    const __VLS_44 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        span: ((12)),
    }));
    const __VLS_46 = __VLS_45({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const __VLS_50 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
        label: ("Url"),
        name: ("url"),
    }));
    const __VLS_52 = __VLS_51({
        label: ("Url"),
        name: ("url"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = {}.AInput;
    /** @type { [typeof __VLS_components.AInput, typeof __VLS_components.aInput, ] } */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        value: ((__VLS_ctx.form.url)),
        ...{ style: ({}) },
        addonBefore: ("http://"),
        addonAfter: (".com"),
        placeholder: ("please enter url"),
    }));
    const __VLS_58 = __VLS_57({
        value: ((__VLS_ctx.form.url)),
        ...{ style: ({}) },
        addonBefore: ("http://"),
        addonAfter: (".com"),
        placeholder: ("please enter url"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_55.slots.default;
    var __VLS_55;
    __VLS_49.slots.default;
    var __VLS_49;
    __VLS_25.slots.default;
    var __VLS_25;
    const __VLS_62 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({
        gutter: ((16)),
    }));
    const __VLS_64 = __VLS_63({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    const __VLS_68 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        span: ((12)),
    }));
    const __VLS_70 = __VLS_69({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({
        label: ("Owner"),
        name: ("owner"),
    }));
    const __VLS_76 = __VLS_75({
        label: ("Owner"),
        name: ("owner"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    const __VLS_80 = {}.ASelect;
    /** @type { [typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, ] } */ ;
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        placeholder: ("Please a-s an owner"),
        value: ((__VLS_ctx.form.owner)),
    }));
    const __VLS_82 = __VLS_81({
        placeholder: ("Please a-s an owner"),
        value: ((__VLS_ctx.form.owner)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = {}.ASelectOption;
    /** @type { [typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ] } */ ;
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({
        value: ("xiao"),
    }));
    const __VLS_88 = __VLS_87({
        value: ("xiao"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    __VLS_91.slots.default;
    var __VLS_91;
    const __VLS_92 = {}.ASelectOption;
    /** @type { [typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ] } */ ;
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        value: ("mao"),
    }));
    const __VLS_94 = __VLS_93({
        value: ("mao"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_97.slots.default;
    var __VLS_97;
    __VLS_85.slots.default;
    var __VLS_85;
    __VLS_79.slots.default;
    var __VLS_79;
    __VLS_73.slots.default;
    var __VLS_73;
    const __VLS_98 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({
        span: ((12)),
    }));
    const __VLS_100 = __VLS_99({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    const __VLS_104 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        label: ("Type"),
        name: ("type"),
    }));
    const __VLS_106 = __VLS_105({
        label: ("Type"),
        name: ("type"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    const __VLS_110 = {}.ASelect;
    /** @type { [typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, ] } */ ;
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({
        placeholder: ("Please choose the type"),
        value: ((__VLS_ctx.form.type)),
    }));
    const __VLS_112 = __VLS_111({
        placeholder: ("Please choose the type"),
        value: ((__VLS_ctx.form.type)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    const __VLS_116 = {}.ASelectOption;
    /** @type { [typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ] } */ ;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
        value: ("private"),
    }));
    const __VLS_118 = __VLS_117({
        value: ("private"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    __VLS_121.slots.default;
    var __VLS_121;
    const __VLS_122 = {}.ASelectOption;
    /** @type { [typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ] } */ ;
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({
        value: ("public"),
    }));
    const __VLS_124 = __VLS_123({
        value: ("public"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    __VLS_127.slots.default;
    var __VLS_127;
    __VLS_115.slots.default;
    var __VLS_115;
    __VLS_109.slots.default;
    var __VLS_109;
    __VLS_103.slots.default;
    var __VLS_103;
    __VLS_67.slots.default;
    var __VLS_67;
    const __VLS_128 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
        gutter: ((16)),
    }));
    const __VLS_130 = __VLS_129({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    const __VLS_134 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({
        span: ((12)),
    }));
    const __VLS_136 = __VLS_135({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    const __VLS_140 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({
        label: ("Approver"),
        name: ("approver"),
    }));
    const __VLS_142 = __VLS_141({
        label: ("Approver"),
        name: ("approver"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    const __VLS_146 = {}.ASelect;
    /** @type { [typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, typeof __VLS_components.ASelect, typeof __VLS_components.aSelect, ] } */ ;
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({
        placeholder: ("Please choose the approver"),
        value: ((__VLS_ctx.form.approver)),
    }));
    const __VLS_148 = __VLS_147({
        placeholder: ("Please choose the approver"),
        value: ((__VLS_ctx.form.approver)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    const __VLS_152 = {}.ASelectOption;
    /** @type { [typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ] } */ ;
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({
        value: ("jack"),
    }));
    const __VLS_154 = __VLS_153({
        value: ("jack"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    __VLS_157.slots.default;
    var __VLS_157;
    const __VLS_158 = {}.ASelectOption;
    /** @type { [typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, typeof __VLS_components.ASelectOption, typeof __VLS_components.aSelectOption, ] } */ ;
    // @ts-ignore
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({
        value: ("tom"),
    }));
    const __VLS_160 = __VLS_159({
        value: ("tom"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    __VLS_163.slots.default;
    var __VLS_163;
    __VLS_151.slots.default;
    var __VLS_151;
    __VLS_145.slots.default;
    var __VLS_145;
    __VLS_139.slots.default;
    var __VLS_139;
    const __VLS_164 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({
        span: ((12)),
    }));
    const __VLS_166 = __VLS_165({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_165));
    const __VLS_170 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({
        label: ("DateTime"),
        name: ("dateTime"),
    }));
    const __VLS_172 = __VLS_171({
        label: ("DateTime"),
        name: ("dateTime"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_171));
    const __VLS_176 = {}.ADatePicker;
    /** @type { [typeof __VLS_components.ADatePicker, typeof __VLS_components.aDatePicker, ] } */ ;
    // @ts-ignore
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({
        value: ((__VLS_ctx.form.dateTime)),
        ...{ style: ({}) },
        getPopupContainer: ((__VLS_ctx.getPopupContainer)),
    }));
    const __VLS_178 = __VLS_177({
        value: ((__VLS_ctx.form.dateTime)),
        ...{ style: ({}) },
        getPopupContainer: ((__VLS_ctx.getPopupContainer)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    __VLS_175.slots.default;
    var __VLS_175;
    __VLS_169.slots.default;
    var __VLS_169;
    __VLS_133.slots.default;
    var __VLS_133;
    const __VLS_182 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({
        gutter: ((16)),
    }));
    const __VLS_184 = __VLS_183({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    const __VLS_188 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({
        span: ((24)),
    }));
    const __VLS_190 = __VLS_189({
        span: ((24)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_189));
    const __VLS_194 = {}.AFormItem;
    /** @type { [typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, typeof __VLS_components.AFormItem, typeof __VLS_components.aFormItem, ] } */ ;
    // @ts-ignore
    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({
        label: ("Description"),
        name: ("description"),
    }));
    const __VLS_196 = __VLS_195({
        label: ("Description"),
        name: ("description"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_195));
    const __VLS_200 = {}.ATextarea;
    /** @type { [typeof __VLS_components.ATextarea, typeof __VLS_components.aTextarea, ] } */ ;
    // @ts-ignore
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({
        value: ((__VLS_ctx.form.description)),
        rows: ((4)),
        placeholder: ("please enter url description"),
    }));
    const __VLS_202 = __VLS_201({
        value: ((__VLS_ctx.form.description)),
        rows: ((4)),
        placeholder: ("please enter url description"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    __VLS_199.slots.default;
    var __VLS_199;
    __VLS_193.slots.default;
    var __VLS_193;
    __VLS_187.slots.default;
    var __VLS_187;
    __VLS_19.slots.default;
    var __VLS_19;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: (({
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
                zIndex: 1,
            })) },
    });
    const __VLS_206 = {}.AButton;
    /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
    // @ts-ignore
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({
        ...{ 'onClick': {} },
        ...{ style: ({}) },
    }));
    const __VLS_208 = __VLS_207({
        ...{ 'onClick': {} },
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    let __VLS_212;
    const __VLS_213 = {
        onClick: (__VLS_ctx.onClose)
    };
    let __VLS_209;
    let __VLS_210;
    __VLS_211.slots.default;
    var __VLS_211;
    const __VLS_214 = {}.AButton;
    /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
    // @ts-ignore
    const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({
        ...{ 'onClick': {} },
        type: ("primary"),
    }));
    const __VLS_216 = __VLS_215({
        ...{ 'onClick': {} },
        type: ("primary"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_215));
    let __VLS_220;
    const __VLS_221 = {
        onClick: (__VLS_ctx.onClose)
    };
    let __VLS_217;
    let __VLS_218;
    __VLS_219.slots.default;
    var __VLS_219;
    __VLS_11.slots.default;
    var __VLS_11;
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
}
;
let __VLS_self;
