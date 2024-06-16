---
title: Nuxt+Elysia
description: Nuxt+Elysia 是一个基于 Nuxt.js 的 API 网关。
category: Nuxt
outline: 3
tags:
  - nuxt
  - elysia
---

### 使用 `bun` 安装 `elysia`

```sh
bun add elysia
```

### 在 `nuxt.config.ts` 中修改 `nitro.preset` 为 `bun`

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'bun'
  }
})
```

### 添加一个 api 路由到 `server/api/`目录

```ts
// server/api/test.ts
import { Elysia, t } from 'elysia'

// 设置`prefix`为`/api`
const app = new Elysia({ prefix: '/api' })
  // 路由`path`需要和文件名保持一致
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

### 测试 api

```sh
# using httpie
http POST http://localhost:3000/api/test name=John age=25
http GET http://localhost:3000/api/test
```
