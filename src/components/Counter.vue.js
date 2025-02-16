import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/counter';
export default defineComponent({
    setup() {
        const counterStore = useCounterStore();
        const increment = () => counterStore.increment();
        const decrement = () => counterStore.decrement();
        return { counterStore, increment, decrement };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ACard;
    /** @type { [typeof __VLS_components.ACard, typeof __VLS_components.aCard, typeof __VLS_components.ACard, typeof __VLS_components.aCard, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        title: ("Counter"),
    }));
    const __VLS_2 = __VLS_1({
        title: ("Counter"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.counterStore.count);
    const __VLS_7 = {}.AButton;
    /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        ...{ 'onClick': {} },
        type: ("primary"),
    }));
    const __VLS_9 = __VLS_8({
        ...{ 'onClick': {} },
        type: ("primary"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_13;
    const __VLS_14 = {
        onClick: (__VLS_ctx.increment)
    };
    let __VLS_10;
    let __VLS_11;
    __VLS_12.slots.default;
    var __VLS_12;
    const __VLS_15 = {}.AButton;
    /** @type { [typeof __VLS_components.AButton, typeof __VLS_components.aButton, typeof __VLS_components.AButton, typeof __VLS_components.aButton, ] } */ ;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        ...{ 'onClick': {} },
        type: ("danger"),
    }));
    const __VLS_17 = __VLS_16({
        ...{ 'onClick': {} },
        type: ("danger"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    let __VLS_21;
    const __VLS_22 = {
        onClick: (__VLS_ctx.decrement)
    };
    let __VLS_18;
    let __VLS_19;
    __VLS_20.slots.default;
    var __VLS_20;
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
