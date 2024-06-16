---
title: Nuxt+Elysia
description: Nuxt+Elysia 是一个基于 Nuxt.js 的 API 网关。
category: Nuxt
outline: 3
tags:
  - nuxt
  - elysia
---

### install `elysia` with `bun`

```sh
bun add elysia
```

### modify `nitro.preset` to `bun` in `nuxt.config.ts`

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'bun'
  }
})
```

### add template route to `server/api/`

```ts
// server/api/test.ts
import { Elysia, t } from 'elysia'

// set prefix for api routes
const app = new Elysia({ prefix: '/api' })
  // path need to match with file name
  .get('/test', () => 'hi')
  .post('/test', ({ body }) => body, {
    body: t.Object(
      {
        name: t.String(),
        age: t.Optional(t.Numeric({ default: 18 }))
      },
      {
        additionalProperties: true
      }
    )
  })

export default fromWebHandler(app.handle)
```

### test api route

```sh
# using httpie
http POST http://localhost:3000/api/test name=John age=25
http GET http://localhost:3000/api/test
```
