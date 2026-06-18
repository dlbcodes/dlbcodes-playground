<script setup lang="ts">
import LoginForm from "./LoginForm.vue";
import EmptyState from "./EmptyState.vue";
import SecuritySettingsShowcase from "./SecuritySettingsShowcase.vue";
import WorkspaceSwitcher from "./WorkspaceSwitcher.vue";
import NotificationsShowcase from "./NotificationsShowcase.vue";
import ContactShowcase from "./ContactShowcase.vue";
import ShortcutShowcase from "./ShortcutShowcase.vue";
import TeamMembersShowcase from "./TeamMembersShowcase.vue";
import UsageShowcase from "./UsageShowcase.vue";
import VerificationShowcase from "./VerificationShowcase.vue";
import NewProjectShowcase from "./NewProjectShowcase.vue";
import TabsShowcase from "./TabsShowcase.vue";
import DropdownShowcase from "./DropdownShowcase.vue";
import PermissionsShowcase from "./PermissionsShowcase.vue";
import SidebarFooterShowcase from "./SidebarFooterShowcase.vue";

const columns = [
    [LoginForm, WorkspaceSwitcher, SidebarFooterShowcase],
    [SecuritySettingsShowcase, NotificationsShowcase, ShortcutShowcase],
    [EmptyState, ContactShowcase, PermissionsShowcase],
    [UsageShowcase, DropdownShowcase, VerificationShowcase],
    [TeamMembersShowcase, NewProjectShowcase, TabsShowcase],
];
</script>

<template>
    <div class="relative z-10 flex w-max gap-8 p-10">
        <div
            v-for="(column, c) in columns"
            :key="c"
            class="flex w-90 shrink-0 flex-col gap-8"
        >
            <div
                v-for="(card, i) in column"
                :key="i"
                class="flex w-full items-center justify-center rounded-2xl border border-border-subtle bg-bg-raised p-8"
            >
                <component :is="card" />
            </div>
        </div>
    </div>
</template>
