import { Dumbbell, Award, Users, Zap, BarChart, Target, Shield, Brain, Flame } from "lucide-react"

export default function GettingStarted() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Getting Started with MMA Manager 2
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your guide to understanding the game mechanics and strategies for success.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="glow-card group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Game Currencies</h3>
                <p className="text-sm text-muted-foreground">Managing your resources effectively</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                  <span className="text-xs font-bold">$</span>
                </div>
                <div>
                  <span className="font-semibold block">Cash</span>
                  <span className="text-sm text-muted-foreground">For upgrading gyms and purchasing equipment.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <span className="text-xs font-bold">C</span>
                </div>
                <div>
                  <span className="font-semibold block">Credits</span>
                  <span className="text-sm text-muted-foreground">
                    A premium currency for achievements or purchases.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <span className="text-xs font-bold">F</span>
                </div>
                <div>
                  <span className="font-semibold block">Focus Points</span>
                  <span className="text-sm text-muted-foreground">Vital for fighter training.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                  <span className="text-xs font-bold">P</span>
                </div>
                <div>
                  <span className="font-semibold block">Prestige</span>
                  <span className="text-sm text-muted-foreground">Earned through game progression.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="glow-card group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fighter Stats</h3>
                <p className="text-sm text-muted-foreground">Core attributes for performance</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Strength</span>
                  <span className="text-sm text-primary">Damage Output</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: "85%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Increases damage output on strikes.</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Agility</span>
                  <span className="text-sm text-primary">Initiative</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: "70%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Influences initiative and attacks per fight.</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Condition</span>
                  <span className="text-sm text-primary">Endurance</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: "60%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Affects health, regeneration, and defense.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="glow-card group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Disciplines & Talents</h3>
                <p className="text-sm text-muted-foreground">Key to fighter development</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">BJJ</span>
                </div>
                <div>
                  <span className="font-semibold block">Disciplines</span>
                  <span className="text-sm text-muted-foreground">
                    Fighting styles like Boxing, Muay Thai, or Wrestling that provide passive bonuses.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xs">T</span>
                </div>
                <div>
                  <span className="font-semibold block">Talents</span>
                  <span className="text-sm text-muted-foreground">
                    Passive abilities enhancing fighter stats and providing unique bonuses.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glow-card group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gym Management</h3>
                <p className="text-sm text-muted-foreground">The backbone of your success</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <p className="text-sm">
                  Upgrade gym facilities to increase the quality of training sessions and gain more prestige.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <p className="text-sm">
                  Equip your gym with specialized equipment that boosts specific stats for fighters.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <p className="text-sm">
                  Manage resources to train multiple fighters without overextending your focus points.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glow-card group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Progression Strategy</h3>
                <p className="text-sm text-muted-foreground">Your path to the top</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                <h4 className="font-bold text-green-500 flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center text-xs">
                    1
                  </span>
                  Early Game
                </h4>
                <p className="text-sm mt-1">
                  Focus on recruiting a balanced team of fighters and improving their core stats.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                <h4 className="font-bold text-blue-500 flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center text-xs">
                    2
                  </span>
                  Mid-Game
                </h4>
                <p className="text-sm mt-1">Upgrade your gym and experiment with different disciplines and talents.</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                <h4 className="font-bold text-purple-500 flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-purple-500/10 flex items-center justify-center text-xs">
                    3
                  </span>
                  Late Game
                </h4>
                <p className="text-sm mt-1">Compete in higher leagues and focus on prestige rewards to dominate.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glow-card group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Combat Preparation</h3>
                <p className="text-sm text-muted-foreground">Before every fight</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">Review your opponent's stats and fighting style to identify weaknesses.</p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">
                  Adjust your fighter's tactics, focusing on strengths that exploit the opponent's weaknesses.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Dumbbell className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">Train fighters adequately to ensure peak performance during matches.</p>
              </div>
              <div className="flex items-start gap-3">
                <Flame className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">Choose your fighting style: Aggressive, Defensive, or Balanced.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="glow-card">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tips for Success</h3>
                <p className="text-sm text-muted-foreground">Expert advice to help you dominate</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Focus Your Training</h4>
                <p className="text-sm">
                  Only focus on 1-2 fighters at a time to maximize focus points and get good discipline cards.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Manage Resources</h4>
                <p className="text-sm">
                  Keep an eye on the in-game economy; don't overspend credits or cash on unnecessary upgrades.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Rotate Fighters</h4>
                <p className="text-sm">
                  Regularly rotate your fighters to avoid burnout and keep them progressing at a steady pace.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Community Learning</h4>
                <p className="text-sm">
                  Join online communities or forums to learn from other players and share strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
