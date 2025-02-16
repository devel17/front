import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value = ref();
        const getListData = (value) => {
            let listData;
            switch (value.date()) {
                case 8:
                    listData = [
                        { type: 'warning', content: 'This is warning event.' },
                        { type: 'success', content: 'This is usual event.' },
                    ];
                    break;
                case 10:
                    listData = [
                        { type: 'warning', content: 'This is warning event.' },
                        { type: 'success', content: 'This is usual event.' },
                        { type: 'error', content: 'This is error event.' },
                    ];
                    break;
                case 15:
                    listData = [
                        { type: 'warning', content: 'This is warning event' },
                        { type: 'success', content: 'This is very long usual event。。....' },
                        { type: 'error', content: 'This is error event 1.' },
                        { type: 'error', content: 'This is error event 2.' },
                        { type: 'error', content: 'This is error event 3.' },
                        { type: 'error', content: 'This is error event 4.' },
                    ];
                    break;
                default:
            }
            return listData || [];
        };
        const getMonthData = (value) => {
            if (value.month() === 8) {
                return 1394;
            }
        };
        return {
            value,
            getListData,
            getMonthData,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['events', 'notes-month',];
    // CSS variable injection 
    // CSS variable injection end 
    const __VLS_0 = {}.ACalendar;
    /** @type { [typeof __VLS_components.ACalendar, typeof __VLS_components.aCalendar, typeof __VLS_components.ACalendar, typeof __VLS_components.aCalendar, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        value: ((__VLS_ctx.value)),
    }));
    const __VLS_2 = __VLS_1({
        value: ((__VLS_ctx.value)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dateCellRender: __VLS_thisSlot } = __VLS_5.slots;
        const { current: value } = __VLS_getSlotParam(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: ("events") },
        });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.getListData(value)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: ((item.content)),
            });
            const __VLS_7 = {}.ABadge;
            /** @type { [typeof __VLS_components.ABadge, typeof __VLS_components.aBadge, ] } */ ;
            // @ts-ignore
            const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
                status: ((item.type)),
                text: ((item.content)),
            }));
            const __VLS_9 = __VLS_8({
                status: ((item.type)),
                text: ((item.content)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { monthCellRender: __VLS_thisSlot } = __VLS_5.slots;
        const { current: value } = __VLS_getSlotParam(__VLS_thisSlot);
        if (__VLS_ctx.getMonthData(value)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("notes-month") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
            (__VLS_ctx.getMonthData(value));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
    }
    var __VLS_5;
    ['events', 'notes-month',];
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
