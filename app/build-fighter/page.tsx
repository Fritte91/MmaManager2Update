"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Dumbbell, Zap, Heart, RefreshCw } from "lucide-react"

const skills = [
  "Punches",
  "Elbows",
  "Knees",
  "High Kicks",
  "Low Kicks",
  "Clinchwork",
  "Takedowns",
  "Ground Grappling",
  "Submission",
  "Strike Def",
  "Knees Def",
  "Kick Def",
  "Takedown Def",
  "Submission Def",
]

const maxTotalPoints = 19000
const maxSkillPoints = 3400

export default function BuildFighter() {
  const [skillPoints, setSkillPoints] = useState(
    skills.reduce((acc, skill) => {
      acc[skill] = 0
      return acc
    }, {}),
  )

  const [coreStats, setCoreStats] = useState({
    Strength: 50,
    Agility: 50,
    Conditioning: 50,
  })

  const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0)

  const handleSkillChange = (skill, value) => {
    const newValue = Number.parseInt(value)
    const oldValue = skillPoints[skill]
    const change = newValue - oldValue

    const newTotalPoints = totalPoints + change

    if (newTotalPoints <= maxTotalPoints && newValue <= maxSkillPoints && newValue >= 0) {
      setSkillPoints((prevState) => ({
        ...prevState,
        [skill]: newValue,
      }))
    }
  }

  const handleCoreStatChange = (stat, value) => {
    setCoreStats((prevState) => ({
      ...prevState,
      [stat]: value[0],
    }))
  }

  const calculateFighterLevel = () => {
    return Math.floor(totalPoints / 1583.33)
  }

  const resetSkills = () => {
    setSkillPoints(
      skills.reduce((acc, skill) => {
        acc[skill] = 0
        return acc
      }, {}),
    )
  }

  // Function to get color based on skill value
  const getSkillColor = (value) => {
    if (value < 500) return "bg-gray-500"
    if (value < 1000) return "bg-blue-500"
    if (value < 2000) return "bg-green-500"
    if (value < 3000) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Fighter Builder
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Create and customize your fighter's skills and attributes
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Left side: Fighter image + level + attributes */}
        <div>
          <Card className="overflow-hidden relative">
            <div className="fighter-level-badge">
              <span>Lvl {calculateFighterLevel()}</span>
            </div>
            <div className="relative h-64 md:h-80">
              <Image src="/images/fighterpic.png" alt="Fighter Model" fill className="object-contain" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" />
                Core Stats
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-red-500" />
                    <div className="flex justify-between w-full">
                      <label className="font-medium">Strength</label>
                      <span>{coreStats.Strength}%</span>
                    </div>
                  </div>
                  
                  <Slider
                    value={[coreStats.Strength]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => handleCoreStatChange("Strength", value)}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">Increases damage output on strikes</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-500" />
                    <div className="flex justify-between w-full">
                      <label className="font-medium">Agility</label>
                      <span>{coreStats.Agility}%</span>
                    </div>
                  </div>
                  
                  <Slider
                    value={[coreStats.Agility]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => handleCoreStatChange("Agility", value)}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">Influences initiative and attacks per fight</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-500" />
                    <div className="flex justify-between w-full">
                      <label className="font-medium">Conditioning</label>
                      <span>{coreStats.Conditioning}%</span>
                    </div>
                  </div>
                  
                  <Slider
                    value={[coreStats.Conditioning]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => handleCoreStatChange("Conditioning", value)}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">Affects health, regeneration, and defense</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side: Skills */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Fighter Skills
              </h3>
              <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                {totalPoints} / {maxTotalPoints} points
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between">
                    <label className="font-medium">{skill}</label>
                    <span
                      className={`text-sm font-bold px-2 py-0.5 rounded-full ${getSkillColor(skillPoints[skill])} text-white`}
                    >
                      {skillPoints[skill]}
                    </span>
                  </div>
                  
                  <Slider
                    value={[skillPoints[skill]]}
                    min={0}
                    max={maxSkillPoints}
                    step={10}
                    onValueChange={(value) => handleSkillChange(skill, value[0])}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Button variant="destructive" onClick={resetSkills} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Reset Skills
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Fighter Stats Overview</h3>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <h4 className="font-bold">Offensive Stats</h4>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Punches:</span>
                    <span className="font-mono">{skillPoints["Punches"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Elbows:</span>
                    <span className="font-mono">{skillPoints["Elbows"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Knees:</span>
                    <span className="font-mono">{skillPoints["Knees"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>High Kicks:</span>
                    <span className="font-mono">{skillPoints["High Kicks"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Low Kicks:</span>
                    <span className="font-mono">{skillPoints["Low Kicks"]}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h4 className="font-bold">Grappling Stats</h4>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Clinchwork:</span>
                    <span className="font-mono">{skillPoints["Clinchwork"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Takedowns:</span>
                    <span className="font-mono">{skillPoints["Takedowns"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ground Grappling:</span>
                    <span className="font-mono">{skillPoints["Ground Grappling"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Submission:</span>
                    <span className="font-mono">{skillPoints["Submission"]}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <h4 className="font-bold">Defensive Stats</h4>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Strike Defense:</span>
                    <span className="font-mono">{skillPoints["Strike Def"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Knees Defense:</span>
                    <span className="font-mono">{skillPoints["Knees Def"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Kick Defense:</span>
                    <span className="font-mono">{skillPoints["Kick Def"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Takedown Defense:</span>
                    <span className="font-mono">{skillPoints["Takedown Def"]}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Submission Defense:</span>
                    <span className="font-mono">{skillPoints["Submission Def"]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Function to get color for skill bars
function getSkillBarColor(value) {
  if (value === 0) return ""
  if (value < 500) return "bg-gradient-to-r from-gray-500/60 to-gray-500"
  if (value < 1000) return "bg-gradient-to-r from-blue-500/60 to-blue-500"
  if (value < 2000) return "bg-gradient-to-r from-green-500/60 to-green-500"
  if (value < 3000) return "bg-gradient-to-r from-yellow-500/60 to-yellow-500"
  return "bg-gradient-to-r from-red-500/60 to-red-500"
}
