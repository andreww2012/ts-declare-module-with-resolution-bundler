interface CustomProperty {};

declare module 'vue/types/vue' {
  interface VueConstructor {
    customProperty: CustomProperty;
  }
}