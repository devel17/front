import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    setup() {
        const state = reactive({
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            openKeys: ['sub1'],
            selectedKeys: [],
        });
        const onOpenChange = (openKeys) => {
            const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
            if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                state.openKeys = openKeys;
            }
            else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        };
        return {
            ...toRefs(state),
            onOpenChange,
        };
    },
    components: {
        MailOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        MailOutlined,
        AppstoreOutlined,
        SettingOutlined,
    };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.AMenu;
    /** @type { [typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onOpenChange': {} },
        ...{ style: ({}) },
        mode: ("inline"),
        openKeys: ((__VLS_ctx.openKeys)),
        selectedKeys: ((__VLS_ctx.selectedKeys)),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onOpenChange': {} },
        ...{ style: ({}) },
        mode: ("inline"),
        openKeys: ((__VLS_ctx.openKeys)),
        selectedKeys: ((__VLS_ctx.selectedKeys)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onOpenChange: (__VLS_ctx.onOpenChange)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        key: ("sub1"),
    }));
    const __VLS_10 = __VLS_9({
        key: ("sub1"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_13.slots;
        const __VLS_14 = {}.MailOutlined;
        /** @type { [typeof __VLS_components.MailOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_13.slots;
    }
    const __VLS_20 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        key: ("1"),
    }));
    const __VLS_22 = __VLS_21({
        key: ("1"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_25.slots.default;
    var __VLS_25;
    const __VLS_26 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
        key: ("2"),
    }));
    const __VLS_28 = __VLS_27({
        key: ("2"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_31.slots.default;
    var __VLS_31;
    const __VLS_32 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        key: ("3"),
    }));
    const __VLS_34 = __VLS_33({
        key: ("3"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_37.slots.default;
    var __VLS_37;
    const __VLS_38 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
        key: ("4"),
    }));
    const __VLS_40 = __VLS_39({
        key: ("4"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_43.slots.default;
    var __VLS_43;
    var __VLS_13;
    const __VLS_44 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        key: ("sub2"),
    }));
    const __VLS_46 = __VLS_45({
        key: ("sub2"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_49.slots;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_49.slots;
        const __VLS_50 = {}.AppstoreOutlined;
        /** @type { [typeof __VLS_components.AppstoreOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
        const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    }
    const __VLS_56 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        key: ("5"),
    }));
    const __VLS_58 = __VLS_57({
        key: ("5"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_61.slots.default;
    var __VLS_61;
    const __VLS_62 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({
        key: ("6"),
    }));
    const __VLS_64 = __VLS_63({
        key: ("6"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    __VLS_67.slots.default;
    var __VLS_67;
    const __VLS_68 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        key: ("sub3"),
        title: ("Submenu"),
    }));
    const __VLS_70 = __VLS_69({
        key: ("sub3"),
        title: ("Submenu"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({
        key: ("7"),
    }));
    const __VLS_76 = __VLS_75({
        key: ("7"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    __VLS_79.slots.default;
    var __VLS_79;
    const __VLS_80 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        key: ("8"),
    }));
    const __VLS_82 = __VLS_81({
        key: ("8"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    __VLS_85.slots.default;
    var __VLS_85;
    __VLS_73.slots.default;
    var __VLS_73;
    var __VLS_49;
    const __VLS_86 = {}.ASubMenu;
    /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({
        key: ("sub4"),
    }));
    const __VLS_88 = __VLS_87({
        key: ("sub4"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_91.slots;
        const __VLS_92 = {}.SettingOutlined;
        /** @type { [typeof __VLS_components.SettingOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
        const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_91.slots;
    }
    const __VLS_98 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({
        key: ("9"),
    }));
    const __VLS_100 = __VLS_99({
        key: ("9"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    __VLS_103.slots.default;
    var __VLS_103;
    const __VLS_104 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        key: ("10"),
    }));
    const __VLS_106 = __VLS_105({
        key: ("10"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    __VLS_109.slots.default;
    var __VLS_109;
    const __VLS_110 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({
        key: ("11"),
    }));
    const __VLS_112 = __VLS_111({
        key: ("11"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    __VLS_115.slots.default;
    var __VLS_115;
    const __VLS_116 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
        key: ("12"),
    }));
    const __VLS_118 = __VLS_117({
        key: ("12"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    __VLS_121.slots.default;
    var __VLS_121;
    var __VLS_91;
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
