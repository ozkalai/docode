import Navigation from "../src/components/navigation";
import PatternList from "../src/components/pattern-list";

export default function Home() {
  return (
    <div className="bg-red-500 w-full h-screen">
      <Navigation />
      <PatternList />
    </div>
  );
}
