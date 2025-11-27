import DotBackground from "./components/DotBackground";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen relative overflow-hidden">
      <DotBackground />
      <h1 className="text-4xl font-bold z-10">Hello!</h1>
    </div>
  );
}
