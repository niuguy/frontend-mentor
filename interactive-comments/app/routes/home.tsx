import type { Route } from "./+types/home";
import CommentsSection from "../components/CommentsSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Interactive Comments Section" },
    { name: "description", content: "Interactive comments section challenge from Frontend Mentor" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <CommentsSection />
    </div>
  );
}
