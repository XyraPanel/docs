---
seo:
  title: Game Server Management Panel
  description: XyraPanel is a modern, open-source game server management panel built with Nuxt.
---

::u-page-hero
#title
XyraPanel

#description
A **open-source** game server management panel built with **Nuxt**.

Designed for performance, simplicity, and scalability. Powered by the community.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /overview/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Documentation
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/xyrapanel
  variant: outline
  ---
  Star on GitHub
  :::

#default
![XyraPanel](/images/panel.png)
::

::u-page-section
---
title: Why XyraPanel?
---
  :::u-page-grid
    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-simple-icons-nuxtdotjs"}
    #title
    Built on the Nuxt Ecosystem

    #description
    Nuxt, Vue, Nitro, and TypeScript. No legacy stack, no technical debt.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-shield-check"}
    #title
    Security as a Priority

    #description
    Redis sessions, scoped CORS, per-route rate limiting. Locked down by default.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-plug-zap"}
    #title
    Wings Compatible

    #description
    Works with your existing Pterodactyl Wings nodes. No daemon changes required.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-languages"}
    #title
    Localized by Default

    #description
    Ships with i18n built in. Community translations via Crowdin.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-container"}
    #title
    Isolated by Design

    #description
    Each game server runs in its own Wings container with separate credentials and resource limits.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-clipboard-list"}
    #title
    Audit Logging

    #description
    Every admin and user action is tracked and searchable.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-bot"}
    #title
    Multi-Captcha Support

    #description
    Cloudflare Turnstile, reCAPTCHA, or hCaptcha. Pick what fits your setup.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-key-round"}
    #title
    Scoped API Keys

    #description
    Set read, write, and delete permissions per resource on each key. Servers, nodes, users, eggs, and more.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-mail"}
    #title
    Email Template Management

    #description
    Customize every transactional email from the admin panel. No code changes needed.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-terminal"}
    #title
    Built-in CLI

    #description
    Seed, migrate, and configure from the command line without touching the UI.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-heart-handshake"}
    #title
    Open Source

    #description
    MIT licensed. Built in public, maintained by the community.
    ::::

    ::::u-page-card{spotlight class="col-span-2 md:col-span-1 transition hover:-translate-y-1" icon="i-lucide-refresh-cw"}
    #title
    Zero-Downtime Restarts

    #description
    PM2 cluster mode with graceful reload. No dropped connections on process restarts.
    ::::
  :::
::

::u-page-section
---
title: Get started in seconds
description: Ubuntu 22.04 / 24.04, run as root.
---

#default
```bash
bash <(curl -fsSL https://xyrapanel.com/install)
```
