# Problem

With `moduleResolution: Bundler`, `declare module '<path to module>'` is not resolved if `<path to module>` is extensionless and contains slashes.

## Reproduction

```shell
# Error
npx tsc --noEmit --project tsconfig.bundler.json

# OK, we only changed "moduleResolution" to "Node10"
npx tsc --noEmit --project tsconfig.node10.json
```

In particular, this causes `vue-router@3` Vue augmentations not to work:

```shell
pnpm i vue-router@3.6.5
```

Then go to `index.ts` and uncomment the code related to `vue-router`. Observe the error about `$route` being an unknown property.

## Workaround

Add explicit `.d.ts` extension in the end of `<path to module>` like this:

```ts
declare module 'vue/types/vue.d.ts' {
  ...
}
```

### Resolution traces

You can view the output `--traceResolution` in regards to the module in question in .txt files.
