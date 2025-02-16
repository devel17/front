import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import Header from '@/layouts/Header.vue';
import DynamicMenu from './layouts/DynamicMenu.vue';
import LeftStaticMenu from './layouts/LeftStaticMenu.vue';
import MainContent from './layouts/simple/MainContent.vue';
export default defineComponent({
    name: 'App',
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
        Header,
        DynamicMenu,
        LeftStaticMenu,
        MainContent
    },
    setup() {
        return {
        // selectedKeys1: ref<string[]>(['1']),
        // selectedKeys2: ref<string[]>(['1']),
        // openKeys: ref<string[]>(['sub1','sub2','sub3']),
        };
    },
    data() {
        return {};
    },
    created() {
    },
    methods: {}
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
        Header,
        DynamicMenu,
        LeftStaticMenu,
        MainContent
    };
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ALayout;
    /** @type { [typeof __VLS_components.ALayout, typeof __VLS_components.aLayout, typeof __VLS_components.ALayout, typeof __VLS_components.aLayout, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("layout") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("layout") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.ALayoutHeader;
    /** @type { [typeof __VLS_components.ALayoutHeader, typeof __VLS_components.aLayoutHeader, typeof __VLS_components.ALayoutHeader, typeof __VLS_components.aLayoutHeader, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.Header;
    /** @type { [typeof __VLS_components.Header, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_12.slots.default;
    var __VLS_12;
    const __VLS_19 = {}.ALayoutContent;
    /** @type { [typeof __VLS_components.ALayoutContent, typeof __VLS_components.aLayoutContent, typeof __VLS_components.ALayoutContent, typeof __VLS_components.aLayoutContent, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
        ...{ class: ("container") },
    });
    const __VLS_25 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
        type: ("flex"),
        justify: ("start"),
    }));
    const __VLS_27 = __VLS_26({
        type: ("flex"),
        justify: ("start"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({
        flex: ("16%"),
    }));
    const __VLS_33 = __VLS_32({
        flex: ("16%"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = {}.MainContent;
    /** @type { [typeof __VLS_components.MainContent, ] } */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_36.slots.default;
    var __VLS_36;
    const __VLS_43 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
        flex: ("auto"),
        ...{ style: ({}) },
    }));
    const __VLS_45 = __VLS_44({
        flex: ("auto"),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
    const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_48.slots.default;
    var __VLS_48;
    __VLS_30.slots.default;
    var __VLS_30;
    __VLS_24.slots.default;
    var __VLS_24;
    const __VLS_55 = {}.ALayoutFooter;
    /** @type { [typeof __VLS_components.ALayoutFooter, typeof __VLS_components.aLayoutFooter, typeof __VLS_components.ALayoutFooter, typeof __VLS_components.aLayoutFooter, ] } */ ;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
        ...{ style: ({}) },
    }));
    const __VLS_57 = __VLS_56({
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_60.slots.default;
    var __VLS_60;
    __VLS_5.slots.default;
    var __VLS_5;
    ['layout', 'container',];
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
