import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ArcoResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver
} from 'unplugin-vue-components/resolvers'

// icon 插件
import Icons from "unplugin-icons/vite"
// icon 自动引入解析器
import IconsResolver from "unplugin-icons/resolver"
// icon 加载 loader
import { FileSystemIconLoader } from "unplugin-icons/loaders"

// Unocss 插件
import Unocss from 'unocss/vite'
// Unocss 默认预设
import presetUno from '@unocss/preset-uno'
// Unocss 属性模式预设
import presetAttributify from '@unocss/preset-attributify'
// Unocss 指令转换插件
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      imports:['vue','pinia','vue-router','@vueuse/core'],
      resolvers: [ArcoResolver()]
    }),
    Components({
      dirs: ["src/components/", "src/view/","@vueuse/core"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ArcoResolver({
          sideEffect: true
        }),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        IconsResolver({
          prefix:"icon",
          customCollections:["user","home"],
        })
      ]
    }),
    Icons({
      compiler:"vue3",
      customCollections: {
        // user图标集，给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
        user: FileSystemIconLoader('src/assets/svg/user', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
        // home 模块图标集
        home: FileSystemIconLoader('src/assets/svg/home', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      },
      autoInstall: true
    }),
    // 新增一个 Unocss 插件配置
    Unocss({
      // 预设
      presets: [presetUno(), presetAttributify()],
      // 指令转换插件
      transformers: [transformerDirective()],
      // 自定义规则
      rules: []
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
