import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TalentsData } from "@/data/TalentsData";




console.log("Loaded TalentsData:", TalentsData);

function TalentCard({ talent }) {
  return (
    <Card className="card-hover overflow-hidden border-t-4" style={{ borderTopColor: talent.color }}>
      <div className="p-4 flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image src={talent.image || "/placeholder.svg"} alt={talent.name} fill className="object-cover rounded-md" />
        </div>
        <div>
          <h3 className="font-bold">{talent.name}</h3>
          <p className="text-sm text-muted-foreground">{talent.description}</p>
        </div>
      </div>
    </Card>
  )
}

function TalentSection({ title, talents }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {talents.map((talent, index) => (
          <TalentCard key={index} talent={talent} />
        ))}
      </div>
    </section>
  )
}

export default function TalentsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Talents in MMA Manager 2</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the various talents available to enhance your fighters' abilities
        </p>
      </header>

      <TalentSection title="Common Talents" talents={TalentsData.commonTalents} />
      <TalentSection title="Rare Talents" talents={TalentsData.rareTalents} />
      <TalentSection title="Epic Talents" talents={TalentsData.epicTalents} />

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>About Talents</CardTitle>
          <CardDescription>Understanding different talent cards is crucial</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 list-disc pl-5">
            <li>The fighter's Talents are available after completing Chapter 14 of the main story.</li>
            <li>
              Fighters unlock talents at levels 3 (common), 5 (rare), and 7 (epic). One talent per rarity can be
              equipped at a time.
            </li>
            <li>
              You receive 5 random talents the first time a fighter reaches each tier. Changing talents costs credits.
            </li>
            <li>Talents are passive effects that influence fights.</li>
            <li>
              Common talent points come from Fight Clubs. Rare ones from Tournaments. Epic talents can be unlocked with
              credits.
            </li>
            <li>Unlocking a new talent allows free switching of that tier for all fighters.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
