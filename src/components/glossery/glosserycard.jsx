"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import React from "react";

export default function ComponentCard({ title, category, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="perspective-1000"
    >
      <Card className="bg-slate-950/80 border-slate-800 backdrop-blur-xl">
        <CardHeader>
          <Badge className="mb-2 w-fit bg-cyan-500/10 text-cyan-400">
            {category}
          </Badge>
          <CardTitle className="text-xl text-white">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-slate-300">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}
