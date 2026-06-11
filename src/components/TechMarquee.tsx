import React from "react";

const techStack = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "Rust", slug: "rust" },
  { name: "C++", slug: "cplusplus" },
  { name: "Pascal", slug: "delphi" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React Native", slug: "react" },
  { name: "Vite", slug: "vite" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "Express", slug: "express" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Socket.IO", slug: "socketdotio" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Firebase", slug: "firebase" },
  { name: "Stellar", slug: "stellar" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Postman", slug: "postman" },
  { name: "Stripe", slug: "stripe" },
  { name: "Sentry", slug: "sentry" },
  { name: "TanStack", slug: "reactquery" },
];

export const TechMarquee: React.FC = () => {
  // Color hex from the project's primary color (#004ac6)
  const iconColor = "004ac6";

  return (
    <div className="w-full py-12 overflow-hidden bg-surface relative">
      {/* Gradient Mask for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>

      <div className="flex animate-marquee whitespace-nowrap group hover:[animation-play-state:paused]">
        {/* First set of logos */}
        <div className="flex items-center gap-12 px-6">
          {techStack.map((tech, i) => (
            <div key={`${tech.slug}-${i}`} className="flex items-center gap-3">
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${iconColor}`}
                alt={tech.name}
                className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
              <span className="font-label-mono text-caption text-on-surface-variant font-bold uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 px-6">
          {techStack.map((tech, i) => (
            <div key={`${tech.slug}-dup-${i}`} className="flex items-center gap-3">
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${iconColor}`}
                alt={tech.name}
                className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
              <span className="font-label-mono text-caption text-on-surface-variant font-bold uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
