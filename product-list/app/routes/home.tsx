import type { Route } from "./+types/home";
import { ProductList } from "../components/productList";
import { ShoppingCart } from "../components/shoppingCart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Desserts Menu" },
    { name: "description", content: "Browse our delicious desserts!" },
  ];
}

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4 flex flex-col lg:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-6">Desserts</h1>
        <div>
          <ProductList />
        </div>
      </div>
      <div className="w-full lg:w-64">
        <ShoppingCart />
      </div>
    </main>
  );
}
