import React from "react";
import { motion } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react";

export const Education: React.FC = () => {
  const courses = [
    { name: "Data Structures & Algorithms", score: "A+" },
    { name: "Object-Oriented Programming", score: "A" },
    { name: "Database Management Systems", score: "A+" },
    { name: "Computer Networks", score: "A" },
    { name: "Software Architecture", score: "A" },
    { name: "Distributed Systems", score: "A" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Hero Title */}
      <section className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-display text-5xl font-bold mb-4"
        >
          Education & Academy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          Building a solid theoretical foundation in computer science and software design at Vietnam - Korea University of IT and Communications.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Academic Profile */}
        <div className="lg:col-span-7 space-y-8">
          <BentoCard className="p-8">
            <div className="flex gap-4 items-start mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-label-mono text-caption text-primary uppercase font-bold tracking-wider">
                  Degree Program
                </span>
                <h3 className="font-headline-lg text-headline-lg text-2xl font-bold mt-1 text-on-surface">
                  Bachelor of Software Engineering
                </h3>
                <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Vietnam - Korea University of Information and Communication Technology (VKU)
                </p>
                <div className="flex items-center gap-2 mt-4 font-label-mono text-caption text-on-surface-variant">
                  <Clock className="w-4 h-4 text-primary" /> 2021 — 2025 (Expected)
                </div>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Focused on core system design principles, concurrent network programming, database efficiency, and decentralized systems. Actively participating in competitive programming events representing the university.
            </p>
          </BentoCard>

          {/* Academic Courses */}
          <BentoCard className="p-8">
            <h3 className="font-headline-md text-headline-md font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div 
                  key={course.name} 
                  className="flex justify-between items-center p-4 bg-surface rounded-lg border border-outline-variant/40"
                >
                  <span className="font-body-md text-on-surface font-medium">{course.name}</span>
                  <span className="font-label-mono text-caption bg-primary-container text-on-primary-container font-bold px-2 py-0.5 rounded">
                    {course.score}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* GPA & Activities */}
        <div className="lg:col-span-5 space-y-gutter">
          {/* GPA Card */}
          <BentoCard className="p-8 text-center flex flex-col items-center justify-center">
            <span className="font-label-mono text-caption text-on-surface-variant font-bold uppercase tracking-wider mb-2">
              Cumulative GPA
            </span>
            <div className="text-display font-display text-primary text-6xl font-bold mb-2">3.65<span className="text-on-surface-variant text-xl">/4.0</span></div>
            <p className="font-caption text-on-surface-variant leading-relaxed max-w-xs">
              Consistently ranked in the top 5% of the Software Engineering cohort.
            </p>
          </BentoCard>

          {/* Activities Card */}
          <BentoCard className="p-8">
            <h3 className="font-headline-md text-headline-md font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" /> University Engagements
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-body-md text-on-surface font-semibold">VKU Competitive Programming Club</h4>
                  <p className="text-caption text-on-surface-variant leading-relaxed mt-0.5">
                    Coaching freshman cohorts on dynamic programming and graph structures.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-body-md text-on-surface font-semibold">Academic Lab Assistant</h4>
                  <p className="text-caption text-on-surface-variant leading-relaxed mt-0.5">
                    Assisting faculty in designing lab sessions for Database Systems coursework.
                  </p>
                </div>
              </li>
            </ul>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};
