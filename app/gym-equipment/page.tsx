// Change the component to use 'use client' for state management
"use client"

// Add React imports for state management
import { useState, useMemo } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Users, Award, TrendingUp, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { CoachesData } from "@/lib/CoachesData"
import { Button } from "@/components/ui/button"

// Equipment data
const equipmentData = [
  {
    name: "Treadmill",
    image: "/images/Treadmill-4.webp",
    description: "Improves fighters' conditioning.",
    category: "cardio",
    boost: "+ Conditioning",
  },
  {
    name: "Bench Press",
    image: "/images/Bench_-4.webp",
    description: "Builds strength.",
    category: "strength",
    boost: "+ Strength",
  },
  {
    name: "Stepper",
    image: "/images/Stepper_Machine-3.webp",
    description: "Enhances agility.",
    category: "cardio",
    boost: "+ Agility",
  },
  {
    name: "Bike",
    image: "/images/Training_Bike-4.webp",
    description: "Boosts conditioning.",
    category: "cardio",
    boost: "+ Conditioning",
  },
  {
    name: "Dumbbells",
    image: "/images/Dumbbell-4.webp",
    description: "Focuses on strength training.",
    category: "strength",
    boost: "+ Strength",
  },
  {
    name: "Speed Bag",
    image: "/images/Speed_Bag-3.webp",
    description: "Improves agility.",
    category: "technique",
    boost: "+ Agility",
  },
  {
    name: "Knee Bag",
    image: "/images/Uppercut_Bag-4.webp",
    description: "Enhances power and technique for knees.",
    category: "technique",
    boost: "+ Knee Power",
  },
  {
    name: "Standing Dummy",
    image: "/images/Free_Standing_Dummy-3.webp",
    description: "Practicing clinchwork and strikes.",
    category: "technique",
    boost: "+ Clinch",
  },
  {
    name: "Punching Bag",
    image: "/images/Punching_Bag-4.webp",
    description: "Develops punching power and technique.",
    category: "technique",
    boost: "+ Punch Power",
  },
  {
    name: "Kick Bag",
    image: "/images/Kick_Bag-3.webp",
    description: "Improves kick strength and accuracy.",
    category: "technique",
    boost: "+ Kick Power",
  },
  {
    name: "Grappling Dummy",
    image: "/images/Grappling_Dummy-2.webp",
    description: "Enhances grappling and submissions.",
    category: "technique",
    boost: "+ Grappling",
  },
  {
    name: "Boxing Ring",
    image: "/images/Panel_Cage_D2-1.webp",
    description: "Train defense, clinchwork, and positioning.",
    category: "facility",
    boost: "+ All Stats",
  },
]

// Function to render star rating
const StarRating = ({ rating }) => {
  // Ensure rating is between 1 and 5
  const validRating = Math.min(5, Math.max(1, rating))

  return (
    <div className="flex">
      {[...Array(validRating)].map((_, i) => (
        <span key={i} className="text-yellow-400">
          ★
        </span>
      ))}
      {[...Array(Math.max(0, 5 - validRating))].map((_, i) => (
        <span key={i} className="text-gray-600">
          ★
        </span>
      ))}
    </div>
  )
}

// Function to get bar color class based on value
const getBarColorClass = (value) => {
  if (value === 0) return ""
  if (value < 500) return "bg-red-500"
  if (value < 1000) return "bg-orange-500"
  if (value < 2000) return "bg-yellow-500"
  if (value < 3000) return "bg-green-500"
  return "bg-blue-500"
}

// Function to get coach specialty icon
const getCoachIcon = (coach) => {
  if (coach.punch > 0 && coach.punch >= Math.max(coach.highKick, coach.lowKick, coach.takedown, coach.submission)) {
    return "🥊"
  } else if (
    (coach.highKick > 0 || coach.lowKick > 0) &&
    Math.max(coach.highKick, coach.lowKick) >= Math.max(coach.punch, coach.takedown, coach.submission)
  ) {
    return "👟"
  } else if (
    coach.takedown > 0 &&
    coach.takedown >= Math.max(coach.punch, coach.highKick, coach.lowKick, coach.submission)
  ) {
    return "🤼"
  } else if (
    coach.submission > 0 &&
    coach.submission >= Math.max(coach.punch, coach.highKick, coach.lowKick, coach.takedown)
  ) {
    return "🥋"
  } else if (
    coach.clinch > 0 &&
    coach.clinch >= Math.max(coach.punch, coach.highKick, coach.lowKick, coach.takedown, coach.submission)
  ) {
    return "👊"
  } else {
    return "🌟"
  }
}

// Function to get coach specialty name
const getCoachSpecialty = (coach) => {
  if (coach.punch > 0 && coach.punch >= Math.max(coach.highKick, coach.lowKick, coach.takedown, coach.submission)) {
    return "Boxing"
  } else if (
    (coach.highKick > 0 || coach.lowKick > 0) &&
    Math.max(coach.highKick, coach.lowKick) >= Math.max(coach.punch, coach.takedown, coach.submission)
  ) {
    return "Kickboxing"
  } else if (
    coach.takedown > 0 &&
    coach.takedown >= Math.max(coach.punch, coach.highKick, coach.lowKick, coach.submission)
  ) {
    return "Wrestling"
  } else if (
    coach.submission > 0 &&
    coach.submission >= Math.max(coach.punch, coach.highKick, coach.lowKick, coach.takedown)
  ) {
    return "Jiu-Jitsu"
  } else if (
    coach.clinch > 0 &&
    coach.clinch >= Math.max(coach.punch, coach.highKick, coach.lowKick, coach.takedown, coach.submission)
  ) {
    return "Muay Thai"
  } else {
    return "MMA"
  }
}

// Function to get coach bonus
const getCoachBonus = (coach) => {
  const specialty = getCoachSpecialty(coach)
  switch (specialty) {
    case "Boxing":
      return "+15% Punch Power"
    case "Kickboxing":
      return "+15% Kick Power"
    case "Wrestling":
      return "+15% Takedown"
    case "Jiu-Jitsu":
      return "+15% Submission"
    case "Muay Thai":
      return "+15% Clinch"
    case "MMA":
      return "+10% All Stats"
    default:
      return ""
  }
}

// Update the component to include pagination and sorting
export default function GymEquipment() {
  // Add state for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const coachesPerPage = 10

  // Sort coaches by star rating
  const sortedFightCoaches = useMemo(() => {
    return [...CoachesData.fightCoaches].sort((a, b) => a.stars - b.stars)
  }, [])

  // Get current coaches for pagination
  const indexOfLastCoach = currentPage * coachesPerPage
  const indexOfFirstCoach = indexOfLastCoach - coachesPerPage
  const currentCoaches = sortedFightCoaches.slice(indexOfFirstCoach, indexOfLastCoach)
  const totalPages = Math.ceil(sortedFightCoaches.length / coachesPerPage)

  // Pagination controls
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24 bg-black text-white">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Gym Equipment
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Upgrade your gym with the right equipment to maximize your fighters' potential
        </p>
      </header>

      {/* Equipment Grid - Smaller cards */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-red-500" />
          Training Equipment
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {equipmentData.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden h-full bg-black border-gray-800 hover:bg-gray-900 transition-all"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded">
                  {item.boost}
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="font-bold text-sm text-white">{item.name}</h3>
                <p className="text-xs text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fight Coaches Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-red-500" />
          Fight Coaches
        </h2>

        <Tabs defaultValue="table" className="w-full">
          <TabsList className="mb-6 bg-black border border-gray-800">
            <TabsTrigger value="table" className="data-[state=active]:bg-gray-900">
              Table View
            </TabsTrigger>
            <TabsTrigger value="cards" className="data-[state=active]:bg-gray-900">
              Card View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table" className="w-full">
            <div className="overflow-x-auto rounded-lg border border-gray-800">
              <table className="w-full border-collapse">
                <thead className="bg-black">
                  <tr>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stars</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Punches
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Elbows</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Knees</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      High Kicks
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Low Kicks
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Clinchwork
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Takedowns
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Ground Grappling
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Submission
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Strike Def
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Knee Def
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Kick Def
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Takedown Def
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Submission Def
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 bg-black">
                  {currentCoaches.map((coach, index) => (
                    <tr key={index} className="hover:bg-gray-900">
                      <td className="p-3 whitespace-nowrap">
                        <StarRating rating={coach.stars} />
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{getCoachIcon(coach)}</span>
                          <div>
                            <div className="font-medium text-white">{coach.name}</div>
                            <div className="text-xs text-gray-400">{getCoachSpecialty(coach)}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.punch)}`}
                            style={{ width: `${(coach.punch / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.punch}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.elbows)}`}
                            style={{ width: `${(coach.elbows / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.elbows}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.knees)}`}
                            style={{ width: `${(coach.knees / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.knees}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.highKick)}`}
                            style={{ width: `${(coach.highKick / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.highKick}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.lowKick)}`}
                            style={{ width: `${(coach.lowKick / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.lowKick}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.clinch)}`}
                            style={{ width: `${(coach.clinch / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.clinch}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.takedown)}`}
                            style={{ width: `${(coach.takedown / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.takedown}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.grappling)}`}
                            style={{ width: `${(coach.grappling / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.grappling}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.submission)}`}
                            style={{ width: `${(coach.submission / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.submission}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.strikeDef)}`}
                            style={{ width: `${(coach.strikeDef / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.strikeDef}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.kneesDef)}`}
                            style={{ width: `${(coach.kneesDef / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.kneesDef}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.kickDef)}`}
                            style={{ width: `${(coach.kickDef / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.kickDef}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.takedownDef)}`}
                            style={{ width: `${(coach.takedownDef / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.takedownDef}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-24 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(coach.submissionDef)}`}
                            style={{ width: `${(coach.submissionDef / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{coach.submissionDef}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-400">
                Showing {indexOfFirstCoach + 1}-{Math.min(indexOfLastCoach, sortedFightCoaches.length)} of{" "}
                {sortedFightCoaches.length} coaches
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="sm"
                  className="bg-black border-gray-800 hover:bg-gray-900"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="sm"
                  className="bg-black border-gray-800 hover:bg-gray-900"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cards" className="w-full">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentCoaches.map((coach, index) => (
                <Card key={index} className="bg-black border-gray-800 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{getCoachIcon(coach)}</div>
                      <div>
                        <h3 className="font-bold text-white">{coach.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{getCoachSpecialty(coach)}</span>
                          <StarRating rating={coach.stars} />
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <span className="text-sm font-medium text-red-500">${coach.stars * 2000 + 3000}</span>
                        <p className="text-xs text-gray-400">{getCoachBonus(coach)}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {coach.punch > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Punches</span>
                            <span className="text-red-500">{coach.punch}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.punch)}`}
                              style={{ width: `${(coach.punch / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.elbows > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Elbows</span>
                            <span className="text-red-500">{coach.elbows}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.elbows)}`}
                              style={{ width: `${(coach.elbows / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.knees > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Knees</span>
                            <span className="text-red-500">{coach.knees}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.knees)}`}
                              style={{ width: `${(coach.knees / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.highKick > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">High Kicks</span>
                            <span className="text-red-500">{coach.highKick}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.highKick)}`}
                              style={{ width: `${(coach.highKick / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.lowKick > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Low Kicks</span>
                            <span className="text-red-500">{coach.lowKick}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.lowKick)}`}
                              style={{ width: `${(coach.lowKick / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.clinch > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Clinchwork</span>
                            <span className="text-red-500">{coach.clinch}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.clinch)}`}
                              style={{ width: `${(coach.clinch / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.takedown > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Takedowns</span>
                            <span className="text-red-500">{coach.takedown}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.takedown)}`}
                              style={{ width: `${(coach.takedown / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.grappling > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Ground Grappling</span>
                            <span className="text-red-500">{coach.grappling}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.grappling)}`}
                              style={{ width: `${(coach.grappling / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.submission > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Submission</span>
                            <span className="text-red-500">{coach.submission}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.submission)}`}
                              style={{ width: `${(coach.submission / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.strikeDef > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Strike Def</span>
                            <span className="text-red-500">{coach.strikeDef}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.strikeDef)}`}
                              style={{ width: `${(coach.strikeDef / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.kneesDef > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Knee Def</span>
                            <span className="text-red-500">{coach.kneesDef}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.kneesDef)}`}
                              style={{ width: `${(coach.kneesDef / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.kickDef > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Kick Def</span>
                            <span className="text-red-500">{coach.kickDef}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.kickDef)}`}
                              style={{ width: `${(coach.kickDef / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.takedownDef > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Takedown Def</span>
                            <span className="text-red-500">{coach.takedownDef}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.takedownDef)}`}
                              style={{ width: `${(coach.takedownDef / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {coach.submissionDef > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Submission Def</span>
                            <span className="text-red-500">{coach.submissionDef}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(coach.submissionDef)}`}
                              style={{ width: `${(coach.submissionDef / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Controls for Cards View */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-400">
                Showing {indexOfFirstCoach + 1}-{Math.min(indexOfLastCoach, sortedFightCoaches.length)} of{" "}
                {sortedFightCoaches.length} coaches
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="sm"
                  className="bg-black border-gray-800 hover:bg-gray-900"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="sm"
                  className="bg-black border-gray-800 hover:bg-gray-900"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Gym Trainers Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-red-500" />
          Gym Trainers
        </h2>

        <Tabs defaultValue="table" className="w-full">
          <TabsList className="mb-6 bg-black border border-gray-800">
            <TabsTrigger value="table" className="data-[state=active]:bg-gray-900">
              Table View
            </TabsTrigger>
            <TabsTrigger value="cards" className="data-[state=active]:bg-gray-900">
              Card View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table" className="w-full">
            <div className="overflow-x-auto rounded-lg border border-gray-800">
              <table className="w-full border-collapse">
                <thead className="bg-black">
                  <tr>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stars</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cost</th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Agility
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Condition
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Strength
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 bg-black">
                  {CoachesData.gymTrainers.map((trainer, index) => (
                    <tr key={index} className="hover:bg-gray-900">
                      <td className="p-3 whitespace-nowrap">
                        <StarRating rating={trainer.stars} />
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">
                            {trainer.agility > trainer.strength && trainer.agility > trainer.condition
                              ? "🏃"
                              : trainer.condition > trainer.strength && trainer.condition > trainer.agility
                                ? "❤️"
                                : "💪"}
                          </span>
                          <div className="font-medium text-white">{trainer.name}</div>
                        </div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="text-red-500 font-medium">${trainer.stars * 1500 + 1500}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-32 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(trainer.agility)}`}
                            style={{ width: `${(trainer.agility / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{trainer.agility}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-32 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(trainer.condition)}`}
                            style={{ width: `${(trainer.condition / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{trainer.condition}</div>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <div className="w-32 bg-gray-900 rounded-full h-2.5 mb-1">
                          <div
                            className={`h-2.5 rounded-full ${getBarColorClass(trainer.strength)}`}
                            style={{ width: `${(trainer.strength / 3500) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-300">{trainer.strength}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="cards" className="w-full">
            <div className="grid gap-4 md:grid-cols-3">
              {CoachesData.gymTrainers.map((trainer, index) => (
                <Card key={index} className="bg-black border-gray-800 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">
                        {trainer.agility > trainer.strength && trainer.agility > trainer.condition
                          ? "🏃"
                          : trainer.condition > trainer.strength && trainer.condition > trainer.agility
                            ? "❤️"
                            : "💪"}
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{trainer.name}</h3>
                        <StarRating rating={trainer.stars} />
                      </div>
                      <div className="ml-auto text-right">
                        <span className="text-sm font-medium text-red-500">${trainer.stars * 1500 + 1500}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-blue-500" />
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Agility</span>
                            <span className="text-red-500">{trainer.agility}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(trainer.agility)}`}
                              style={{ width: `${(trainer.agility / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Condition</span>
                            <span className="text-red-500">{trainer.condition}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(trainer.condition)}`}
                              style={{ width: `${(trainer.condition / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-red-500" />
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Strength</span>
                            <span className="text-red-500">{trainer.strength}</span>
                          </div>
                          <div className="bg-gray-900 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${getBarColorClass(trainer.strength)}`}
                              style={{ width: `${(trainer.strength / 3500) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
