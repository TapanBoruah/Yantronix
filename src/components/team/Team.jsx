"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

import {
  facultyCoordinator,
  president,
  coreTeam,
  members,
} from "./team-data"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const cardHover =
  "hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-300"

export default function TeamPage() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-30 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-24"
      >
        <Card className={`bg-zinc-900/80 backdrop-blur border-zinc-700 w-full max-w-md text-center ${cardHover}`}>
          <CardContent className="pt-10">
            <Avatar className="w-32 h-32 mx-auto ring-2 ring-blue-500/40">
              <AvatarImage src={facultyCoordinator.image} />
              <AvatarFallback>FC</AvatarFallback>
            </Avatar>
            <h2 className="mt-5 text-white text-2xl font-semibold">
              {facultyCoordinator.name}
            </h2>
            <p className="text-md text-blue-400 tracking-wide">
              {facultyCoordinator.role}
            </p>
            <p className="text-sm text-blue-400/80 tracking-wide">
              {facultyCoordinator.designation}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex justify-center mb-20"
      >
        <Card className={`bg-zinc-900/80 backdrop-blur border-zinc-800 w-full max-w-sm text-center ${cardHover}`}>
          <CardContent className="pt-8">
            <Avatar className="w-28 h-28 mx-auto ring-2 ring-purple-500/40">
              <AvatarImage src={president.image} />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-white text-xl font-medium">
              {president.name}
            </h3>
            <p className="text-sm text-purple-400">
              {president.role}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <Separator className="my-20 bg-zinc-800" />

      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Core Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coreTeam.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className={`bg-zinc-900/70 backdrop-blur border-zinc-800 text-center ${cardHover}`}>
                <CardContent className="pt-7">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>CT</AvatarFallback>
                  </Avatar>
                  <h4 className="mt-4 text-white">{member.name}</h4>
                  <p className="text-sm text-zinc-400">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Separator className="my-20 bg-zinc-800" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Members
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Card className={`bg-zinc-900/60 backdrop-blur border-zinc-800 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                <CardContent className="pt-6">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <p className="mt-3 text-sm text-white">
                    {member.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
