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
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        ArrowUpOutlined,
        ArrowDownOutlined,
        LikeOutlined,
    };
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
    });
    const __VLS_12 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        gutter: ((16)),
    }));
    const __VLS_14 = __VLS_13({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        span: ((12)),
    }));
    const __VLS_20 = __VLS_19({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = {}.ACard;
    /** @type { [typeof __VLS_components.ACard, typeof __VLS_components.aCard, typeof __VLS_components.ACard, typeof __VLS_components.aCard, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = {}.AStatistic;
    /** @type { [typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
        title: ("Feedback"),
        value: ((11.28)),
        precision: ((2)),
        suffix: ("%"),
        valueStyle: (({ color: '#3f8600' })),
        ...{ style: ({}) },
    }));
    const __VLS_32 = __VLS_31({
        title: ("Feedback"),
        value: ((11.28)),
        precision: ((2)),
        suffix: ("%"),
        valueStyle: (({ color: '#3f8600' })),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_35.slots;
        const __VLS_36 = {}.ArrowUpOutlined;
        /** @type { [typeof __VLS_components.ArrowUpOutlined, typeof __VLS_components.arrowUpOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
        const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    }
    var __VLS_35;
    __VLS_29.slots.default;
    var __VLS_29;
    __VLS_23.slots.default;
    var __VLS_23;
    const __VLS_42 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
        span: ((12)),
    }));
    const __VLS_44 = __VLS_43({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    const __VLS_48 = {}.ACard;
    /** @type { [typeof __VLS_components.ACard, typeof __VLS_components.aCard, typeof __VLS_components.ACard, typeof __VLS_components.aCard, ] } */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = {}.AStatistic;
    /** @type { [typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, ] } */ ;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
        title: ("Idle"),
        value: ((9.3)),
        precision: ((2)),
        suffix: ("%"),
        ...{ class: ("demo-class") },
        valueStyle: (({ color: '#cf1322' })),
    }));
    const __VLS_56 = __VLS_55({
        title: ("Idle"),
        value: ((9.3)),
        precision: ((2)),
        suffix: ("%"),
        ...{ class: ("demo-class") },
        valueStyle: (({ color: '#cf1322' })),
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_59.slots;
        const __VLS_60 = {}.ArrowDownOutlined;
        /** @type { [typeof __VLS_components.ArrowDownOutlined, typeof __VLS_components.arrowDownOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
        const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    }
    var __VLS_59;
    __VLS_53.slots.default;
    var __VLS_53;
    __VLS_47.slots.default;
    var __VLS_47;
    __VLS_17.slots.default;
    var __VLS_17;
    __VLS_11.slots.default;
    var __VLS_11;
    const __VLS_66 = {}.ADivider;
    /** @type { [typeof __VLS_components.ADivider, typeof __VLS_components.aDivider, ] } */ ;
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({
        type: ("vertical"),
        ...{ style: ({}) },
    }));
    const __VLS_68 = __VLS_67({
        type: ("vertical"),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const __VLS_72 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
    });
    const __VLS_78 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({
        gutter: ((16)),
    }));
    const __VLS_80 = __VLS_79({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const __VLS_84 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        span: ((12)),
    }));
    const __VLS_86 = __VLS_85({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    const __VLS_90 = {}.AStatistic;
    /** @type { [typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, ] } */ ;
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
        title: ("Feedback"),
        value: ((1128)),
        ...{ style: ({}) },
    }));
    const __VLS_92 = __VLS_91({
        title: ("Feedback"),
        value: ((1128)),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { suffix: __VLS_thisSlot } = __VLS_95.slots;
        const __VLS_96 = {}.LikeOutlined;
        /** @type { [typeof __VLS_components.LikeOutlined, typeof __VLS_components.likeOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
        const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    }
    var __VLS_95;
    __VLS_89.slots.default;
    var __VLS_89;
    const __VLS_102 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({
        span: ((12)),
    }));
    const __VLS_104 = __VLS_103({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    const __VLS_108 = {}.AStatistic;
    /** @type { [typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, ] } */ ;
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
        title: ("Unmerged"),
        value: ((93)),
        ...{ class: ("demo-class") },
    }));
    const __VLS_110 = __VLS_109({
        title: ("Unmerged"),
        value: ((93)),
        ...{ class: ("demo-class") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { suffix: __VLS_thisSlot } = __VLS_113.slots;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    var __VLS_113;
    __VLS_107.slots.default;
    var __VLS_107;
    __VLS_83.slots.default;
    var __VLS_83;
    __VLS_77.slots.default;
    var __VLS_77;
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_114 = {}.ADivider;
    /** @type { [typeof __VLS_components.ADivider, typeof __VLS_components.aDivider, ] } */ ;
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({
        type: ("vertical"),
        ...{ style: ({}) },
    }));
    const __VLS_116 = __VLS_115({
        type: ("vertical"),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    const __VLS_120 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const __VLS_126 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
    const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
    });
    const __VLS_132 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
    const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
    const __VLS_138 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({
        span: ((12)),
    }));
    const __VLS_140 = __VLS_139({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    const __VLS_144 = {}.AStatistic;
    /** @type { [typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, ] } */ ;
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
        title: ("Active Users"),
        value: ((112893)),
        ...{ style: ({}) },
    }));
    const __VLS_146 = __VLS_145({
        title: ("Active Users"),
        value: ((112893)),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    __VLS_143.slots.default;
    var __VLS_143;
    const __VLS_150 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({
        span: ((12)),
    }));
    const __VLS_152 = __VLS_151({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    const __VLS_156 = {}.AStatistic;
    /** @type { [typeof __VLS_components.AStatistic, typeof __VLS_components.aStatistic, ] } */ ;
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
        title: ("Account Balance (CNY)"),
        precision: ((2)),
        value: ((112893)),
    }));
    const __VLS_158 = __VLS_157({
        title: ("Account Balance (CNY)"),
        precision: ((2)),
        value: ((112893)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    __VLS_155.slots.default;
    var __VLS_155;
    __VLS_137.slots.default;
    var __VLS_137;
    __VLS_131.slots.default;
    var __VLS_131;
    __VLS_125.slots.default;
    var __VLS_125;
    const __VLS_162 = {}.ADivider;
    /** @type { [typeof __VLS_components.ADivider, typeof __VLS_components.aDivider, ] } */ ;
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({
        type: ("vertical"),
        ...{ style: ({}) },
    }));
    const __VLS_164 = __VLS_163({
        type: ("vertical"),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    const __VLS_168 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({}));
    const __VLS_170 = __VLS_169({}, ...__VLS_functionalComponentArgsRest(__VLS_169));
    const __VLS_174 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({}));
    const __VLS_176 = __VLS_175({}, ...__VLS_functionalComponentArgsRest(__VLS_175));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
    });
    const __VLS_180 = {}.ARow;
    /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({
        gutter: ((16)),
    }));
    const __VLS_182 = __VLS_181({
        gutter: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    const __VLS_186 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({
        span: ((12)),
    }));
    const __VLS_188 = __VLS_187({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    const __VLS_192 = {}.AStatisticCountdown;
    /** @type { [typeof __VLS_components.AStatisticCountdown, typeof __VLS_components.aStatisticCountdown, ] } */ ;
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({
        ...{ 'onFinish': {} },
        title: ("Countdown"),
        value: ((__VLS_ctx.deadline)),
        ...{ style: ({}) },
    }));
    const __VLS_194 = __VLS_193({
        ...{ 'onFinish': {} },
        title: ("Countdown"),
        value: ((__VLS_ctx.deadline)),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    let __VLS_198;
    const __VLS_199 = {
        onFinish: (__VLS_ctx.onFinish)
    };
    let __VLS_195;
    let __VLS_196;
    var __VLS_197;
    __VLS_191.slots.default;
    var __VLS_191;
    const __VLS_200 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({
        span: ((12)),
    }));
    const __VLS_202 = __VLS_201({
        span: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    const __VLS_206 = {}.AStatisticCountdown;
    /** @type { [typeof __VLS_components.AStatisticCountdown, typeof __VLS_components.aStatisticCountdown, ] } */ ;
    // @ts-ignore
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({
        title: ("Million Seconds"),
        value: ((__VLS_ctx.deadline)),
        format: ("HH:mm:ss:SSS"),
        ...{ style: ({}) },
    }));
    const __VLS_208 = __VLS_207({
        title: ("Million Seconds"),
        value: ((__VLS_ctx.deadline)),
        format: ("HH:mm:ss:SSS"),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    __VLS_205.slots.default;
    var __VLS_205;
    const __VLS_212 = {}.ACol;
    /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
    // @ts-ignore
    const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({
        span: ((24)),
        ...{ style: ({}) },
    }));
    const __VLS_214 = __VLS_213({
        span: ((24)),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_213));
    const __VLS_218 = {}.AStatisticCountdown;
    /** @type { [typeof __VLS_components.AStatisticCountdown, typeof __VLS_components.aStatisticCountdown, ] } */ ;
    // @ts-ignore
    const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({
        title: ("Day Level"),
        value: ((__VLS_ctx.deadline)),
        format: ("[] DD [days] [] HH [hours ] [] mm [Minutes ] [] ss [seconds]"),
    }));
    const __VLS_220 = __VLS_219({
        title: ("Day Level"),
        value: ((__VLS_ctx.deadline)),
        format: ("[] DD [days] [] HH [hours ] [] mm [Minutes ] [] ss [seconds]"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_219));
    __VLS_217.slots.default;
    var __VLS_217;
    __VLS_185.slots.default;
    var __VLS_185;
    __VLS_179.slots.default;
    var __VLS_179;
    __VLS_173.slots.default;
    var __VLS_173;
    ['demo-class', 'demo-class',];
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
