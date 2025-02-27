import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "country/:code", file: "routes/country.$code.tsx" }
] satisfies RouteConfig;
