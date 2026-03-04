import { cn } from "@/src/lib/utils";

interface GridBackgroundProps {
  className?: string;
  variant?: "basic" | "orb";
}

export const GridBackground = ({ className, variant = "basic" }: GridBackgroundProps) => {
  if (variant === "orb") {
    return (
      <div
        className={cn("absolute inset-0 z-0 pointer-events-none", className)}
        style={{
          background: "#050505",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),
            radial-gradient(circle at 50% 40%, rgba(65,105,225,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
    );
  }

  return (
    <div
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        background: "#000000",
        backgroundImage: `
          linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
};
