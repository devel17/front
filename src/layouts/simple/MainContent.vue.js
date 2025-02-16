import { defineComponent, reactive, toRefs, watch } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined, } from '@ant-design/icons-vue';
export default defineComponent({
    setup() {
        const state = reactive({
            collapsed: false,
            selectedKeys: ['1'],
            openKeys: ['sub1'],
            preOpenKeys: ['sub1'],
        });
        watch(() => state.openKeys, (val, oldVal) => {
            state.preOpenKeys = oldVal;
        });
        const toggleCollapsed = () => {
            state.collapsed = !state.collapsed;
            state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };
        return {
            ...toRefs(state),
            toggleCollapsed,
        };
    },
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined,
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined,
    };
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
    });
    const __VLS_0 = {}.AMenu;
    /** @type { [typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        mode: ("inline"),
        theme: ("light"),
        inlineCollapsed: ((__VLS_ctx.collapsed)),
        openKeys: ((__VLS_ctx.openKeys)),
        selectedKeys: ((__VLS_ctx.selectedKeys)),
    }));
    const __VLS_2 = __VLS_1({
        mode: ("inline"),
        theme: ("light"),
        inlineCollapsed: ((__VLS_ctx.collapsed)),
        openKeys: ((__VLS_ctx.openKeys)),
        selectedKeys: ((__VLS_ctx.selectedKeys)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        key: ("statistic"),
    }));
    const __VLS_8 = __VLS_7({
        key: ("statistic"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { item: __VLS_thisSlot } = __VLS_11.slots;
        const __VLS_12 = {}.PieChartOutlined;
        /** @type { [typeof __VLS_components.PieChartOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_11.slots;
    }
    const __VLS_18 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        key: ("5"),
    }));
    const __VLS_20 = __VLS_19({
        key: ("5"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_23.slots.default;
    var __VLS_23;
    const __VLS_24 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        key: ("6"),
    }));
    const __VLS_26 = __VLS_25({
        key: ("6"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_29.slots.default;
    var __VLS_29;
    const __VLS_30 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
        key: ("7"),
    }));
    const __VLS_32 = __VLS_31({
        key: ("7"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_35.slots.default;
    var __VLS_35;
    var __VLS_11;
    const __VLS_36 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
        key: ("1"),
    }));
    const __VLS_38 = __VLS_37({
        key: ("1"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_41.slots;
        const __VLS_42 = {}.PieChartOutlined;
        /** @type { [typeof __VLS_components.PieChartOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
        const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    var __VLS_41;
    const __VLS_48 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
        key: ("2"),
    }));
    const __VLS_50 = __VLS_49({
        key: ("2"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_53.slots;
        const __VLS_54 = {}.DesktopOutlined;
        /** @type { [typeof __VLS_components.DesktopOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
        const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    var __VLS_53;
    const __VLS_60 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        key: ("3"),
    }));
    const __VLS_62 = __VLS_61({
        key: ("3"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_65.slots;
        const __VLS_66 = {}.InboxOutlined;
        /** @type { [typeof __VLS_components.InboxOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
        const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    var __VLS_65;
    const __VLS_72 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        key: ("sub1"),
    }));
    const __VLS_74 = __VLS_73({
        key: ("sub1"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_77.slots;
        const __VLS_78 = {}.MailOutlined;
        /** @type { [typeof __VLS_components.MailOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
        const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_77.slots;
    }
    const __VLS_84 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        key: ("5"),
    }));
    const __VLS_86 = __VLS_85({
        key: ("5"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_89.slots.default;
    var __VLS_89;
    const __VLS_90 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
        key: ("6"),
    }));
    const __VLS_92 = __VLS_91({
        key: ("6"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    __VLS_95.slots.default;
    var __VLS_95;
    const __VLS_96 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
        key: ("7"),
    }));
    const __VLS_98 = __VLS_97({
        key: ("7"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_101.slots.default;
    var __VLS_101;
    const __VLS_102 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({
        key: ("8"),
    }));
    const __VLS_104 = __VLS_103({
        key: ("8"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_107.slots.default;
    var __VLS_107;
    var __VLS_77;
    const __VLS_108 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
        key: ("sub2"),
    }));
    const __VLS_110 = __VLS_109({
        key: ("sub2"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_113.slots;
        const __VLS_114 = {}.AppstoreOutlined;
        /** @type { [typeof __VLS_components.AppstoreOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
        const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_113.slots;
    }
    const __VLS_120 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
        key: ("9"),
    }));
    const __VLS_122 = __VLS_121({
        key: ("9"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    __VLS_125.slots.default;
    var __VLS_125;
    const __VLS_126 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({
        key: ("10"),
    }));
    const __VLS_128 = __VLS_127({
        key: ("10"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    __VLS_131.slots.default;
    var __VLS_131;
    const __VLS_132 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
        key: ("sub3"),
        title: ("Submenu"),
    }));
    const __VLS_134 = __VLS_133({
        key: ("sub3"),
        title: ("Submenu"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    const __VLS_138 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({
        key: ("11"),
    }));
    const __VLS_140 = __VLS_139({
        key: ("11"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    __VLS_143.slots.default;
    var __VLS_143;
    const __VLS_144 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
        key: ("12"),
    }));
    const __VLS_146 = __VLS_145({
        key: ("12"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    __VLS_149.slots.default;
    var __VLS_149;
    __VLS_137.slots.default;
    var __VLS_137;
    var __VLS_113;
    __VLS_5.slots.default;
    var __VLS_5;
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
