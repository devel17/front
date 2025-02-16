import { defineComponent, computed, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { SettingOutlined, UserOutlined, LockOutlined, PieChartOutlined, LineChartOutlined, DotChartOutlined, BarChartOutlined, CalendarOutlined, TeamOutlined, UserSwitchOutlined, SnippetsOutlined, WalletOutlined, SendOutlined, FileOutlined, ReadOutlined, UsergroupAddOutlined } from '@ant-design/icons-vue';
import { useUserStore } from '@/stores/user';
// Компонент для рекурсивного рендера пунктов меню
const DynamicMenuItem = defineComponent({
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        return { ...props.item };
    },
    template: `
      <a-menu-item :key="item.key">
        <template #icon>
          <component v-if="item.icon" :is="item.icon" />
        </template>
        <span>{{ item.label }}</span>
      </a-menu-item>
    `,
});
export default defineComponent({
    components: {
        DynamicMenuItem,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        // Состояние для хранения данных меню
        const menuItems = reactive([
            {
                key: 'statistic',
                label: 'Статистика',
                icon: PieChartOutlined,
                roles: ['ROLE_ADMIN', 'ROLE_FINANCE', 'ROLE_EMPLYEE'],
                children: [
                    {
                        key: 'allStat',
                        label: 'Административная',
                        icon: BarChartOutlined,
                        roles: ['ROLE_ADMIN']
                    }, {
                        key: 'finStat',
                        label: 'Финансовая',
                        icon: LineChartOutlined,
                        roles: ['ROLE_ADMIN', 'ROLE_FINANCE']
                    }, {
                        key: 'userStat',
                        label: 'Пользовательская',
                        icon: DotChartOutlined,
                        roles: ['ROLE_ADMIN', 'ROLE_EMPLYEE']
                    },
                ],
            },
            {
                key: 'planing',
                label: 'Планинг',
                icon: CalendarOutlined,
            },
            {
                key: 'clients',
                label: 'Клиенты',
                icon: TeamOutlined,
                roles: ['ROLE_ADMIN'],
                children: [
                    {
                        key: 'activeClients',
                        label: 'Активные',
                        icon: UserOutlined,
                        roles: ['user', 'ROLE_ADMIN'],
                    },
                    {
                        key: 'clientsPotencial',
                        label: 'Потенциальные',
                        icon: UserSwitchOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                ],
            },
            {
                key: 'journals',
                label: 'Журналы',
                icon: SnippetsOutlined,
                roles: ['ROLE_ADMIN'],
                children: [
                    {
                        key: 'profile',
                        label: 'Посещаемость',
                        icon: UserOutlined,
                        roles: ['user', 'ROLE_ADMIN'],
                    },
                    {
                        key: 'security',
                        label: 'Успеваемость',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                    {
                        key: 'security',
                        label: 'Питание',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                ],
            },
            {
                key: 'finance',
                label: 'Финансы',
                icon: WalletOutlined,
                roles: ['ROLE_ADMIN', 'ROLE_FINANCE'],
                children: [
                    {
                        key: 'profile',
                        label: 'Поступления',
                        icon: UserOutlined,
                        roles: ['ROLE_FINANCE', 'ROLE_ADMIN'],
                        children: [
                            {
                                key: 'profile',
                                label: 'Детский сад',
                                icon: UserOutlined,
                                roles: ['ROLE_FINANCE', 'ROLE_ADMIN'],
                            },
                            {
                                key: 'security',
                                label: 'Доп занятия',
                                icon: LockOutlined,
                                roles: ['ROLE_FINANCE', 'ROLE_ADMIN'],
                            },
                            {
                                key: 'security',
                                label: 'Индивидуальные',
                                icon: LockOutlined,
                                roles: ['ROLE_FINANCE', 'ROLE_ADMIN'],
                            },
                        ],
                    },
                    {
                        key: 'security',
                        label: 'Касса',
                        icon: LockOutlined,
                        roles: ['ROLE_FINANCE', 'ROLE_ADMIN'],
                    },
                ],
            },
            {
                key: 'telegram',
                label: 'Телеграм',
                icon: SendOutlined,
                roles: ['ROLE_ADMIN'],
                children: [
                    {
                        key: 'telegramSettings',
                        label: 'Настройки бота',
                        icon: UserOutlined,
                        roles: ['user', 'ROLE_ADMIN'],
                    },
                    {
                        key: 'telegramNotify',
                        label: 'Уведомления',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                ],
            },
            {
                key: 'documents',
                label: 'Документы',
                icon: FileOutlined,
            },
            {
                key: 'program',
                label: 'Программа',
                icon: ReadOutlined,
                roles: ['ROLE_ADMIN', 'ROLE_EMPLYEE'],
                children: [
                    {
                        key: 'programDocs',
                        label: 'Методоческие пособия',
                        icon: UserOutlined,
                        roles: ['ROLE_EMPLYEE', 'ROLE_ADMIN'],
                    },
                    {
                        key: 'diary',
                        label: 'Учебный дневник',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN', 'ROLE_EMPLYEE'],
                    },
                ],
            },
            {
                key: 'employees',
                label: 'Сотрудники',
                icon: UsergroupAddOutlined,
                roles: ['ROLE_ADMIN'],
                children: [
                    {
                        key: 'programDocs',
                        label: 'Отделы',
                        icon: UserOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                    {
                        key: 'diary',
                        label: 'Штатные',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                    {
                        key: 'diary',
                        label: 'Самозанятые',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                ],
            },
            {
                key: 'settings',
                label: 'Настройки',
                icon: SettingOutlined,
                children: [
                    {
                        key: 'profile',
                        label: 'Профиль',
                        icon: UserOutlined,
                    },
                    {
                        key: 'security',
                        label: 'Безопасность',
                        icon: LockOutlined,
                    },
                    {
                        key: 'privileges',
                        label: 'Права доступа',
                        icon: LockOutlined,
                        roles: ['ROLE_ADMIN'],
                    },
                ],
            },
        ]);
        const userRoles = useUserStore().roles;
        console.log(useUserStore().roles);
        const filteredMenuItems = computed(() => {
            return menuItems.filter(item => {
                if (!item.roles)
                    return true; // Если роли не указаны, пункт доступен всем
                return item.roles.some(role => userRoles.includes(role));
            }).map(item => ({
                ...item,
                children: item.children?.filter(child => {
                    if (!child.roles)
                        return true; // Если роли не указаны, пункт доступен всем
                    return child.roles.some(role => userRoles.includes(role));
                }),
            }));
        });
        // Текущее имя маршрута для выделения активного пункта меню
        const currentRouteName = computed(() => route.name);
        // Обработчик клика по пункту меню
        const handleMenuClick = ({ key }) => {
            router.push({ name: key });
        };
        return {
            filteredMenuItems,
            currentRouteName,
            handleMenuClick,
            openKeys: ref(['settings', 'statistic']),
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        DynamicMenuItem,
    };
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    const __VLS_0 = {}.AMenu;
    /** @type { [typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        mode: ("inline"),
        selectedKeys: (([__VLS_ctx.currentRouteName])),
        openKeys: ((__VLS_ctx.openKeys)),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        mode: ("inline"),
        selectedKeys: (([__VLS_ctx.currentRouteName])),
        openKeys: ((__VLS_ctx.openKeys)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onClick: (__VLS_ctx.handleMenuClick)
    };
    let __VLS_3;
    let __VLS_4;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredMenuItems))) {
        (item.key);
        if (item.children && item.children.length > 0) {
            const __VLS_9 = {}.ASubMenu;
            /** @type { [typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, typeof __VLS_components.ASubMenu, typeof __VLS_components.aSubMenu, ] } */ ;
            // @ts-ignore
            const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
                key: ((item.key)),
            }));
            const __VLS_11 = __VLS_10({
                key: ((item.key)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_10));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { title: __VLS_thisSlot } = __VLS_14.slots;
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item.label);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_14.slots;
                if (item.icon) {
                    const __VLS_15 = ((item.icon));
                    // @ts-ignore
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
                    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
                }
            }
            for (const [child] of __VLS_getVForSourceType((item.children))) {
                const __VLS_21 = {}.DynamicMenuItem;
                /** @type { [typeof __VLS_components.DynamicMenuItem, typeof __VLS_components.dynamicMenuItem, ] } */ ;
                // @ts-ignore
                const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
                    key: ((child.key)),
                    item: ((child)),
                }));
                const __VLS_23 = __VLS_22({
                    key: ((child.key)),
                    item: ((child)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            }
            var __VLS_14;
        }
        else {
            const __VLS_27 = {}.AMenuItem;
            /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
            // @ts-ignore
            const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
                key: ((item.key)),
            }));
            const __VLS_29 = __VLS_28({
                key: ((item.key)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_28));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_32.slots;
                if (item.icon) {
                    const __VLS_33 = ((item.icon));
                    // @ts-ignore
                    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
                    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
                }
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (item.label);
            var __VLS_32;
        }
    }
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
