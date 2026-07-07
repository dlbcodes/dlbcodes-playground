<script setup lang="ts">
import LoginForm from "./LoginForm.vue";
import { Panel, PanelContent } from "@dlbcodes/ui";
import { PhCube } from "@phosphor-icons/vue";
</script>

<template>
    <div class="flex min-h-full w-full items-stretch">
        <div class="flex w-full overflow-hidden rounded-2xl bg-bg-base">
            <!-- Form side -->
            <div
                class="flex flex-col w-full items-center justify-center p-8 md:w-1/2 md:p-12"
            >
                <Panel class="w-full max-w-lg">
                    <PanelContent class="py-6 px-8">
                        <LoginForm />
                    </PanelContent>
                </Panel>
            </div>
            <!-- End Form side -->

            <!-- Branded side  -->
            <div class="hidden w-1/2 p-6 md:flex">
                <!-- Inner card: the dark surface, inset with rounded corners -->
                <div
                    class="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-bg-inverse p-12"
                >
                    <!-- Image -->
                    <img
                        src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        class="pointer-events-none absolute inset-0 size-full object-cover opacity-60"
                    />
                    <!-- End Image -->

                    <div
                        class="pointer-events-none absolute inset-0 bg-linear-to-t from-bg-inverse via-bg-inverse/40 to-transparent"
                    />

                    <!-- Logo -->
                    <div class="relative flex items-center gap-2">
                        <div
                            class="flex size-8 items-center justify-center rounded-lg bg-brand-200 text-text-inverse"
                        >
                            <PhCube class="size-5" weight="fill" />
                        </div>
                        <span
                            class="text-lg font-semibold tracking-tight text-text-inverse"
                        >
                            my-design-system
                        </span>
                    </div>
                    <!-- End Logo -->

                    <div class="relative">
                        <p
                            class="text-2xl font-semibold leading-snug text-text-inverse text-pretty"
                        >
                            Build accessible interfaces, themed with your own
                            tokens.
                        </p>
                        <p class="mt-3 text-sm text-text-inverse/70">
                            Every component here restyles live — change a token
                            and watch.
                        </p>
                        <p class="mt-6 text-xs text-text-inverse/50">
                            © 2026 dlbcodes
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Branded side  -->
        </div>
    </div>
</template>
