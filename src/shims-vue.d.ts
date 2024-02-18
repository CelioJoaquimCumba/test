declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface ImportMeta {
  readonly env: Record<string, string>;
}
