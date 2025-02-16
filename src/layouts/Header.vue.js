import { Vue } from 'vue-property-decorator';
import keycloakService from '@/plugins/keycloak-service';
import { httpClient } from '@/plugins/axios';
export default class Header extends Vue {
    menuItems = [];
    loading = true;
    username = '';
    selectedKeys = ['1'];
    created() {
        this.username = keycloakService.getKeycloakInstance().tokenParsed?.preferred_username || 'Гость';
        keycloakService.setRoles();
        this.loadMenuItems();
    }
    async loadMenuItems() {
        try {
            const items = await this.fetchMenuItemsFromAPI();
            this.menuItems = items;
        }
        catch (error) {
            console.error('Error loading menu items:', error);
        }
        finally {
            this.loading = false;
        }
    }
    async fetchMenuItemsFromAPI() {
        try {
            const response = await httpClient.get('/system/menu/header'); // Замените на ваш URL API
            return response.data.map((item, index) => ({
                key: index.toString(),
                label: item,
            }));
        }
        catch (error) {
            console.error('Error fetching menu items:', error);
            return [];
        }
    }
    handleLogout() {
        keycloakService.logout(); // Вызов функции выхода
    }
    handleMenuClick({ key }) {
        console.log('Menu item clicked:', key);
        if (key === '4') {
            this.handleLogout();
        }
    }
    __VLS_template = () => {
        const __VLS_ctx = {};
        let __VLS_components;
        let __VLS_directives;
        // CSS variable injection 
        // CSS variable injection end 
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({
            ...{ class: ("logo") },
        });
        const __VLS_0 = {}.ARow;
        /** @type { [typeof __VLS_components.ARow, typeof __VLS_components.aRow, typeof __VLS_components.ARow, typeof __VLS_components.aRow, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            type: ("flex"),
        }));
        const __VLS_2 = __VLS_1({
            type: ("flex"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = {}.ACol;
        /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            flex: ("auto"),
        }));
        const __VLS_8 = __VLS_7({
            flex: ("auto"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = {}.ASpin;
        /** @type { [typeof __VLS_components.ASpin, typeof __VLS_components.aSpin, typeof __VLS_components.ASpin, typeof __VLS_components.aSpin, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            spinning: ((__VLS_ctx.loading)),
        }));
        const __VLS_14 = __VLS_13({
            spinning: ((__VLS_ctx.loading)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = {}.AMenu;
        /** @type { [typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            ...{ 'onClick': {} },
            theme: ("dark"),
            mode: ("horizontal"),
            ...{ style: (({ lineHeight: '64px' })) },
            items: ((__VLS_ctx.menuItems)),
            selectedKeys: ((__VLS_ctx.selectedKeys)),
        }));
        const __VLS_20 = __VLS_19({
            ...{ 'onClick': {} },
            theme: ("dark"),
            mode: ("horizontal"),
            ...{ style: (({ lineHeight: '64px' })) },
            items: ((__VLS_ctx.menuItems)),
            selectedKeys: ((__VLS_ctx.selectedKeys)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        let __VLS_24;
        const __VLS_25 = {
            onClick: (__VLS_ctx.handleMenuClick)
        };
        let __VLS_21;
        let __VLS_22;
        var __VLS_23;
        __VLS_17.slots.default;
        var __VLS_17;
        __VLS_11.slots.default;
        var __VLS_11;
        const __VLS_26 = {}.ACol;
        /** @type { [typeof __VLS_components.ACol, typeof __VLS_components.aCol, typeof __VLS_components.ACol, typeof __VLS_components.aCol, ] } */ ;
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
            flex: ("150px"),
        }));
        const __VLS_28 = __VLS_27({
            flex: ("150px"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        const __VLS_32 = {}.ADropdown;
        /** @type { [typeof __VLS_components.ADropdown, typeof __VLS_components.aDropdown, typeof __VLS_components.ADropdown, typeof __VLS_components.aDropdown, ] } */ ;
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
            ...{ 'onClick': {} },
        }));
        const __VLS_34 = __VLS_33({
            ...{ 'onClick': {} },
        }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        let __VLS_38;
        const __VLS_39 = {
            onClick: (__VLS_ctx.)
        };
        let __VLS_35;
        let __VLS_36;
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ class: ("ant-dropdown-link") },
            href: ("#"),
        });
        (__VLS_ctx.username);
        const __VLS_40 = {}.AAvatar;
        /** @type { [typeof __VLS_components.AAvatar, typeof __VLS_components.aAvatar, ] } */ ;
        // @ts-ignore
        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
            size: ((40)),
            src: ("https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"),
            alt: ("User Avatar"),
        }));
        const __VLS_42 = __VLS_41({
            size: ((40)),
            src: ("https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"),
            alt: ("User Avatar"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_41));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { overlay: __VLS_thisSlot } = __VLS_37.slots;
            const __VLS_46 = {}.AMenu;
            /** @type { [typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, ] } */ ;
            // @ts-ignore
            const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
                ...{ 'onClick': {} },
            }));
            const __VLS_48 = __VLS_47({
                ...{ 'onClick': {} },
            }, ...__VLS_functionalComponentArgsRest(__VLS_47));
            let __VLS_52;
            const __VLS_53 = {
                onClick: (__VLS_ctx.)
            };
            let __VLS_49;
            let __VLS_50;
            const __VLS_54 = {}.AMenuItem;
            /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
            // @ts-ignore
            const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
                key: ("1"),
            }));
            const __VLS_56 = __VLS_55({
                key: ("1"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_55));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            __VLS_59.slots.default;
            var __VLS_59;
            const __VLS_60 = {}.AMenuItem;
            /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
            // @ts-ignore
            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
                key: ("2"),
            }));
            const __VLS_62 = __VLS_61({
                key: ("2"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_61));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ onClick: (__VLS_ctx.handleLogout) },
            });
            __VLS_65.slots.default;
            var __VLS_65;
            __VLS_51.slots.default;
            var __VLS_51;
        }
        var __VLS_37;
        __VLS_31.slots.default;
        var __VLS_31;
        __VLS_5.slots.default;
        var __VLS_5;
        ['logo', 'ant-dropdown-link',];
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
