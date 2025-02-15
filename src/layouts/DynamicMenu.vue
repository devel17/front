<template>
    <a-menu mode="inline" :selectedKeys="[currentRouteName]" @click="handleMenuClick" v-model:openKeys="openKeys">
        <!-- Рекурсивный рендеринг пунктов меню -->
        <template v-for="item in filteredMenuItems" :key="item.key">
            <!-- Если есть children, отображаем подменю -->
            <a-sub-menu v-if="item.children && item.children.length > 0" :key="item.key">
                <template #title>
                    <span>
                        <!-- <component v-if="item.icon" :is="item.icon" /> -->
                        <span>{{ item.label }}</span>
                    </span>
                </template>
                <template #icon>
                    <component v-if="item.icon" :is="item.icon" />
                </template>
                <!-- Рекурсивно рендерим children -->
                <dynamic-menu-item v-for="child in item.children" :key="child.key" :item="child" />
                
            </a-sub-menu>

            <!-- Если нет children, отображаем обычный пункт меню -->
            <a-menu-item v-else :key="item.key">
                <template #icon>
                    <component v-if="item.icon" :is="item.icon" />
                </template>
                <span>{{ item.label }}</span>
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
    HomeOutlined, InfoCircleOutlined, SettingOutlined, UserOutlined, LockOutlined,
    PieChartOutlined, LineChartOutlined, DotChartOutlined,
     BarChartOutlined, CalendarOutlined, TeamOutlined, UserSwitchOutlined,
     SnippetsOutlined, WalletOutlined, SendOutlined, FileOutlined, ReadOutlined, 
     UsergroupAddOutlined
} from '@ant-design/icons-vue';
import { useUserStore } from '@/stores/user';

// Определяем интерфейс для пунктов меню
interface MenuItem {
    key: string;
    label: string;
    icon?: any; // Иконка пункта меню
    children?: MenuItem[]; // Подменю (опционально)
    roles?: string[];
}

// Компонент для рекурсивного рендера пунктов меню
const DynamicMenuItem = defineComponent({
    props: {
        item: {
            type: Object as PropType<MenuItem>,
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
        const menuItems = reactive<MenuItem[]>([
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
                roles: ['ROLE_ADMIN','ROLE_EMPLYEE'],
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
        console.log(useUserStore().roles)

        const filteredMenuItems = computed(() => {
            return menuItems.filter(item => {
                if (!item.roles) return true; // Если роли не указаны, пункт доступен всем
                return item.roles.some(role => userRoles.includes(role));
            }).map(item => ({
                ...item,
                children: item.children?.filter(child => {
                    if (!child.roles) return true; // Если роли не указаны, пункт доступен всем
                    return child.roles.some(role => userRoles.includes(role));
                }),
            }));
        });

        // Текущее имя маршрута для выделения активного пункта меню
        const currentRouteName = computed(() => route.name as string);

        // Обработчик клика по пункту меню
        const handleMenuClick = ({ key }: { key: string }) => {
            router.push({ name: key });
        };

        return {
            filteredMenuItems,
            currentRouteName,
            handleMenuClick,
            openKeys: ref<string[]>(['settings', 'statistic']),
        };
    },
});
</script>

<style scoped>
/* Добавьте стили для меню */
</style>