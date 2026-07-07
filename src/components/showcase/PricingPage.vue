<script setup lang="ts">
import {
    Panel,
    PanelHeader,
    PanelContent,
    PanelFooter,
    Button,
    Separator,
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
} from "@dlbcodes/ui";
import {
    PhCube,
    PhPlant,
    PhCheck,
    PhRocket,
    PhMegaphone,
} from "@phosphor-icons/vue";

const plans = [
    {
        name: "Free",
        icon: PhPlant,
        price: "$0",
        cadence: "forever",
        tagline: "Everything you need to start building.",
        cta: "Start for free",
        ctaVariant: "secondary" as const,
        features: [
            "Up to 3 projects",
            "Community support",
            "1 GB storage",
            "Core components",
            "MIT licensed",
        ],
    },
    {
        name: "Pro",
        icon: PhRocket,
        price: "$12",
        cadence: "per month",
        tagline: "For teams shipping serious work.",
        cta: "Upgrade to Pro",
        ctaVariant: "primary" as const,
        features: [
            "Unlimited projects",
            "Priority support",
            "100 GB storage",
            "Advanced components & themes",
            "Team licensing",
            "Early access to new releases",
        ],
    },
];

const faqs = [
    {
        q: "Is team pricing available?",
        a: "Yes. A single Pro plan covers your whole team — buy one license and share it across every seat, no per-developer fees.",
    },
    {
        q: "Can I switch plans later?",
        a: "Anytime. Upgrade or downgrade from your dashboard; changes take effect immediately and we prorate the difference.",
    },
    {
        q: "What happens when I cancel?",
        a: "You keep Pro access until the end of your billing period, then drop back to Free. Your projects and data stay intact — nothing is deleted.",
    },
    {
        q: "Do you offer a discount for students or open source?",
        a: "We do. Verified students and maintainers of public open-source projects get Pro free — reach out and we'll set you up.",
    },
    {
        q: "Which payment methods do you accept?",
        a: "All major cards via Stripe, plus invoicing for annual team plans. Every payment is processed securely; we never store card details.",
    },
];

const footerColumns = [
    { title: "Product", links: ["Features", "Pricing", "Changelog"] },
    { title: "Company", links: ["About", "Blog", "Careers"] },
    { title: "Resources", links: ["Docs", "Support", "Status"] },
];
</script>

<template>
    <div class="flex min-h-full w-full flex-col gap-y-20 bg-bg-base">
        <!-- Nav -->
        <header class="sticky top-4 z-10 mx-auto w-full max-w-2xl px-4">
            <Panel class="backdrop-blur-xs">
                <PanelHeader
                    class="flex items-center justify-center gap-2 text-xs text-text-secondary"
                >
                    <PhMegaphone
                        class="size-4 shrink-0"
                        weight="thin"
                        aria-hidden="true"
                    />
                    New: Pro now includes team licensing.
                </PanelHeader>
                <PanelContent class="flex items-center justify-between p-3">
                    <div class="flex items-center gap-2">
                        <div
                            class="flex size-8 items-center justify-center rounded-lg bg-brand-200 text-text-inverse"
                        >
                            <PhCube
                                class="size-5"
                                weight="fill"
                                aria-hidden="true"
                            />
                        </div>
                        <span
                            class="text-lg font-semibold tracking-tight text-text-primary"
                        >
                            ACME
                        </span>
                    </div>
                    <nav class="flex items-center gap-2" aria-label="Primary">
                        <Button variant="secondary" size="sm">Sign in</Button>
                        <Button variant="primary" size="sm">Get started</Button>
                    </nav>
                </PanelContent>
            </Panel>
        </header>
        <!-- End Nav -->

        <main class="flex flex-col gap-y-20">
            <!-- Pricing -->
            <div class="mx-auto flex w-full max-w-3xl flex-col gap-y-8 px-4">
                <div class="flex flex-col gap-y-1 text-center">
                    <h1
                        class="font-serif text-4xl tracking-wide text-text-primary"
                    >
                        Simple, honest pricing
                    </h1>
                    <p
                        class="font-serif text-lg tracking-wide text-text-secondary"
                    >
                        Start free. Upgrade when you're ready to scale.
                    </p>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                    <Panel
                        v-for="plan in plans"
                        :key="plan.name"
                        :class="plan.name === 'Pro' && 'ring-2 ring-brand-200'"
                    >
                        <PanelContent class="flex flex-col p-6">
                            <component
                                :is="plan.icon"
                                class="size-10 text-text-secondary"
                                weight="thin"
                                aria-hidden="true"
                            />

                            <div class="mt-4">
                                <h2
                                    class="font-serif text-3xl tracking-wide text-text-primary"
                                >
                                    {{ plan.name }}
                                </h2>
                                <p class="text-sm text-text-secondary">
                                    {{ plan.tagline }}
                                </p>
                            </div>

                            <div class="mt-4 flex items-baseline gap-x-1.5">
                                <span
                                    class="font-serif text-4xl tracking-wide text-text-primary"
                                >
                                    {{ plan.price }}
                                </span>
                                <span class="text-sm text-text-tertiary">
                                    {{ plan.cadence }}
                                </span>
                            </div>

                            <Button
                                :variant="plan.ctaVariant"
                                class="mt-5 w-full justify-center"
                            >
                                {{ plan.cta }}
                            </Button>

                            <Separator class="my-5" />

                            <ul class="flex flex-col gap-y-2.5">
                                <li
                                    v-for="feature in plan.features"
                                    :key="feature"
                                    class="flex items-center gap-x-2 text-sm text-text-secondary"
                                >
                                    <PhCheck
                                        class="size-4 shrink-0 text-brand-200"
                                        weight="bold"
                                        aria-hidden="true"
                                    />
                                    {{ feature }}
                                </li>
                            </ul>
                        </PanelContent>
                    </Panel>
                </div>
            </div>
            <!-- End Pricing -->

            <!-- FAQ -->
            <div class="mx-auto flex w-full max-w-3xl flex-col gap-y-8 px-4">
                <div class="flex flex-col gap-y-1 text-center">
                    <h2
                        class="font-serif text-4xl tracking-wide text-text-primary"
                    >
                        Frequently asked questions
                    </h2>
                    <p
                        class="font-serif text-lg tracking-wide text-text-secondary"
                    >
                        Everything else you might be wondering.
                    </p>
                </div>

                <div class="flex flex-col">
                    <Disclosure v-for="(faq, i) in faqs" :key="i">
                        <DisclosureTrigger
                            class="font-serif text-lg tracking-wide"
                        >
                            {{ faq.q }}
                        </DisclosureTrigger>
                        <DisclosureContent>{{ faq.a }}</DisclosureContent>
                    </Disclosure>
                </div>
            </div>
            <!-- End FAQ -->
        </main>

        <!-- Footer -->
        <footer class="mx-auto flex w-full max-w-5xl flex-col px-4 pt-20 pb-10">
            <Panel>
                <PanelContent
                    class="flex w-full flex-col justify-between gap-y-10 px-10 py-16 md:flex-row md:gap-x-20"
                >
                    <!-- Brand  -->
                    <div class="flex max-w-xs flex-col gap-y-4">
                        <div class="flex items-center gap-2">
                            <div
                                class="flex size-8 items-center justify-center rounded-lg bg-brand-200 text-text-inverse"
                            >
                                <PhCube class="size-5" weight="fill" />
                            </div>
                            <span
                                class="text-lg font-semibold tracking-tight text-text-primary"
                            >
                                ACME
                            </span>
                        </div>
                        <p class="text-sm text-text-secondary">
                            A Vue 3 component library you theme with your own
                            design tokens — accessible by default, yours to
                            brand.
                        </p>
                    </div>
                    <!-- End Brand  -->

                    <!-- Link columns -->
                    <div class="flex gap-x-16">
                        <div
                            v-for="col in footerColumns"
                            :key="col.title"
                            class="flex flex-col gap-y-3"
                        >
                            <span class="text-sm font-medium text-text-primary">
                                {{ col.title }}
                            </span>
                            <a
                                v-for="link in col.links"
                                :key="link"
                                href="#"
                                class="text-sm text-text-secondary transition-colors hover:text-text-primary"
                            >
                                {{ link }}
                            </a>
                        </div>
                    </div>
                    <!-- End Link columns -->
                </PanelContent>

                <PanelFooter
                    class="flex flex-col items-center justify-between gap-y-2 px-6 py-3 md:flex-row"
                >
                    <div class="flex gap-x-6">
                        <a
                            href="#"
                            class="font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            class="font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Terms and Conditions
                        </a>
                    </div>
                    <div class="font-mono text-xs text-text-tertiary">
                        © {{ new Date().getFullYear() }} ACME. All rights
                        reserved.
                    </div>
                </PanelFooter>
            </Panel>
        </footer>
        <!-- End Footer -->
    </div>
</template>
