import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-8">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Hello World
      </p>
      <h1 className="z-10 text-xl text-muted-foreground">
        Hover over the elements below
      </h1>
      <Button className="cursor-target z-10 rounded-full bg-primary px-6 py-2 text-primary-foreground transition-opacity hover:opacity-90">
        Click me!
      </Button>
      <div className="cursor-target z-10 rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
        Hover target
      </div>
    </div>
  );
}
