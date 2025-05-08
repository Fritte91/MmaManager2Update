"use client";
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { disciplinesData } from "@/data/DisciplinsData";



// Function to get color based on rarity
function getRarityColor(rarity) {
  switch (rarity) {
    case "common":
      return "text-gray-400"
    case "epic":
      return "text-purple-500"
    case "legendary":
      return "text-amber-500"
    default:
      return ""
  }
}

// Function to get background based on rarity
function getRarityBg(rarity) {
  switch (rarity) {
    case "common":
      return "from-gray-800 to-gray-900"
    case "epic":
      return "from-purple-900 to-purple-950"
    case "legendary":
      return "from-amber-900 to-amber-950"
    default:
      return ""
  }
}

// Function to get border based on rarity
function getRarityBorder(rarity) {
  switch (rarity) {
    case "common":
      return "border-gray-600"
    case "epic":
      return "border-purple-600"
    case "legendary":
      return "border-amber-600"
    default:
      return ""
  }
}

function DisciplineCard({ name, image, stars, bonus, description, rarity }) {
  const rarityColor = getRarityColor(rarity)
  const rarityBg = getRarityBg(rarity)
  const rarityBorder = getRarityBorder(rarity)

  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${rarityBorder} bg-gradient-to-br ${rarityBg} shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-${rarityColor}/20 hover:-translate-y-1`}
    >
      <div className="p-4">
        <div className="w-full h-80 relative rounded-lg overflow-hidden mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className={`font-bold text-xl ${rarityColor}`}>{name}</h3>
            <div className="star-rating">
              {"★".repeat(stars)}
              {"☆".repeat(5 - stars)}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-m font-medium bg-${rarityColor.replace("text-", "")}/10 ${rarityColor} text-white`}
          >
            {bonus}
          </div>

          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function DisciplinesPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Fighter Disciplines
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Browse the different disciplines available in MMA Manager 2
        </p>
      </header>

      <Tabs defaultValue="common" className="mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3 p-1 rounded-xl bg-secondary/80 backdrop-blur-sm">
            <TabsTrigger
              value="common"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-gray-400 data-[state=active]:shadow-md transition-all"
            >
              <span className="text-gray-400 font-semibold">Common</span>
            </TabsTrigger>
            <TabsTrigger
              value="epic"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-purple-500 data-[state=active]:shadow-md transition-all"
            >
              <span className="text-purple-500 font-semibold">Epic</span>
            </TabsTrigger>
            <TabsTrigger
              value="legendary"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-amber-500 data-[state=active]:shadow-md transition-all"
            >
              <span className="text-amber-500 font-semibold">Legendary</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="common" className="mt-0">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {disciplinesData.common.map((item, idx) => (
              <DisciplineCard key={idx} {...item} rarity="common" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="epic" className="mt-0">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {disciplinesData.epic.map((item, idx) => (
              <DisciplineCard key={idx} {...item} rarity="epic" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="legendary" className="mt-0">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {disciplinesData.legendary.map((item, idx) => (
              <DisciplineCard key={idx} {...item} rarity="legendary" />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Disciplines Information</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="unlocking" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Unlocking</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Disciplines are available after completing chapter 7 of the main story.</li>
                  <li>
                    Disciplines are cards representing martial arts that, when equipped to a fighter, grant them bonus
                    effects and fighting statistics.
                  </li>
                  <li>
                    Each fighter will individually unlock the ability to equip a discipline when reaching fighter level
                    4. The fighters unlock the ability to equip a second discipline when reaching fighter level 8.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="drawing" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Drawing</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Discipline cards are obtained at random by using knowledge scrolls. When drawing a discipline card,
                    it can be of rarity: common, epic, or legendary.
                  </li>
                  <li>
                    Knowledge scrolls can be bought for Credits or obtained through Daily Tasks, Fight Club rewards,
                    Tournament rewards.
                  </li>
                  <li>
                    After using 100 knowledge scrolls, you earn a legendary knowledge scroll. When using it, you are
                    guaranteed to draw a legendary card.
                  </li>
                  <li>
                    All cards drawn can be browsed in the collection, where you can recycle, upgrade, or equip them.
                  </li>
                  <li>Epic and legendary cards can also be bought from the discipline store.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recycling" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Recycling</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Discipline cards can be recycled, deleting them but granting discipline points based on the card
                    star level.
                  </li>
                  <li>Recycling a legendary card grants reroll tokens.</li>
                  <li>Discipline points are used to upgrade cards of the same rarity.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="upgrade" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Upgrade</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Upgrading discipline cards is vital for your fighter's success.</li>
                  <li>Common, Epic, and Legendary cards can be upgraded to levels 3, 4, and 5, respectively.</li>
                  <li>Each upgrade gives the card a new random statistic.</li>
                  <li>Rerolling a card at max level lets you choose one stat to replace with a new random one.</li>
                  <li>Common and Epic rerolls cost credits; Legendary rerolls cost reroll tokens.</li>
                  <li>Legendary cards can be boosted by increasing one stat at max level, using boost tokens.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="equipping" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Equipping</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Each discipline card can be equipped to a single fighter. The effect and statistics will take effect
                    in all fights.
                  </li>
                  <li>Discipline cards below level 3 do not provide their discipline effect, only the stats.</li>
                  <li>A fighter cannot have two cards of the same discipline equipped.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="maxStats" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Max Attribute Stats
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Agility</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "14%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">14%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Condition</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "14%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">14%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Strength</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "14%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">14%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Health</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">25%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Takedown Skill</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "10%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">10%</span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="attributeBoost" className="border-b border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Attribute Boost</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Agility Boost</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "0.4%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">0.4% MAX</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Condition Boost</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "0.4%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">0.4% MAX</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Strength Boost</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "0.4%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">0.4% MAX</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Health Boost</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "1%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">1% MAX</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="font-semibold">Takedown Skill Boost</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "0.3%" }}></div>
                      </div>
                      <span className="text-primary font-bold text-sm">0.3% MAX</span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
