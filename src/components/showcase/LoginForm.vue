<script setup lang="ts">
import { ref } from "vue";
import {
    Field,
    FieldLabel,
    FieldContent,
    FieldError,
    Input,
    Button,
    Checkbox,
    Label,
    Separator,
} from "@dlbcodes/ui";
import { PhGoogleLogo, PhGithubLogo } from "@phosphor-icons/vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

const errors = ref<{ email?: string; password?: string }>({});

const validate = (): void => {
    const next: { email?: string; password?: string } = {};
    if (!email.value) {
        next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        next.email = "Enter a valid email address.";
    }
    if (!password.value) {
        next.password = "Password is required.";
    } else if (password.value.length < 8) {
        next.password = "Password must be at least 8 characters.";
    }
    errors.value = next;
};
</script>

<template>
    <div class="flex w-full flex-col gap-6">
        <div>
            <div
                class="text-2xl font-semibold tracking-tight text-text-primary"
            >
                Welcome back
            </div>
            <div class="mt-1 text-sm text-text-secondary">
                Sign in to your account to continue.
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <Button variant="secondary" class="w-full justify-center">
                <PhGoogleLogo class="size-4" aria-hidden="true" />
                Continue with Google
            </Button>
            <Button variant="secondary" class="w-full justify-center">
                <PhGithubLogo class="size-4" aria-hidden="true" />
                Continue with GitHub
            </Button>
        </div>

        <div class="flex items-center gap-3">
            <Separator class="flex-1" />
            <span class="text-xs text-text-tertiary">or</span>
            <Separator class="flex-1" />
        </div>

        <div class="flex flex-col gap-4">
            <Field :invalid="!!errors.email">
                <FieldLabel>Email</FieldLabel>
                <FieldContent>
                    <Input
                        v-model="email"
                        type="email"
                        placeholder="you@example.com"
                    />
                    <FieldError v-if="errors.email">
                        {{ errors.email }}
                    </FieldError>
                </FieldContent>
            </Field>

            <Field :invalid="!!errors.password">
                <FieldLabel>Password</FieldLabel>
                <FieldContent>
                    <Input
                        v-model="password"
                        type="password"
                        placeholder="••••••••"
                    />
                    <FieldError v-if="errors.password">
                        {{ errors.password }}
                    </FieldError>
                </FieldContent>
            </Field>

            <div class="flex items-center justify-between">
                <Label
                    for="showcase-remember"
                    class="flex items-center gap-2 text-sm text-text-secondary"
                >
                    <Checkbox id="showcase-remember" v-model="remember" />
                    Remember me
                </Label>
                <span class="cursor-default text-sm text-brand-200">
                    Forgot password?
                </span>
            </div>

            <Button
                variant="primary"
                class="w-full justify-center"
                @click="validate"
            >
                Sign in
            </Button>
        </div>

        <div class="text-center text-sm text-text-secondary">
            Don't have an account?
            <span class="font-medium text-brand-200">Sign up</span>
        </div>
    </div>
</template>
