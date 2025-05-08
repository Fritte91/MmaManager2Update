"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen, Award, DollarSign, Trophy, Users } from "lucide-react"

const Guide = ({ title, content, icon }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleContent = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={`guide-card mb-6 ${isActive ? "active" : ""}`}>
      <div className="cursor-pointer flex items-center justify-between p-6" onClick={toggleContent}>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
          {isActive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </div>
      {isActive && (
        <div className="px-6 pb-6 pt-0">
          <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  )
}

export default function Guides() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Guides in MMA Manager 2
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore various guides to enhance your gameplay
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Guide
          title="Unlock Fighting Moves"
          icon={<Award className="h-5 w-5" />}
          content="<div class='space-y-6'>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Punch</h3>
                      <ul class='space-y-2 grid sm:grid-cols-2 gap-2'>
                        <li class='flex justify-between'><span>Hook</span> <span class='font-mono text-primary'>60 pts</span></li>
                        <li class='flex justify-between'><span>Cross</span> <span class='font-mono text-primary'>150 pts</span></li>
                        <li class='flex justify-between'><span>Clinch hook</span> <span class='font-mono text-primary'>220 pts</span></li>
                        <li class='flex justify-between'><span>Side mount retaliate punch</span> <span class='font-mono text-primary'>420 pts</span></li>
                        <li class='flex justify-between'><span>Full guard back punch</span> <span class='font-mono text-primary'>700 pts</span></li>
                        <li class='flex justify-between'><span>Uppercut</span> <span class='font-mono text-primary'>860 pts</span></li>
                        <li class='flex justify-between'><span>Overhand punch</span> <span class='font-mono text-primary'>1220 pts</span></li>
                        <li class='flex justify-between'><span>Clinch uppercut</span> <span class='font-mono text-primary'>1430 pts</span></li>
                        <li class='flex justify-between'><span>Top mount retaliate punch</span> <span class='font-mono text-primary'>1880 pts</span></li>
                        <li class='flex justify-between'><span>Power punch</span> <span class='font-mono text-primary'>2120 pts</span></li>
                        <li class='flex justify-between'><span>Superman punch</span> <span class='font-mono text-primary'>2380 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Elbow</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>Muaythai clinch elbow</span> <span class='font-mono text-primary'>1450 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Knee</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>Muaythai clinch knee</span> <span class='font-mono text-primary'>450 pts</span></li>
                        <li class='flex justify-between'><span>Aggressive knee</span> <span class='font-mono text-primary'>950 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Low kick</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>Front kick</span> <span class='font-mono text-primary'>150 pts</span></li>
                        <li class='flex justify-between'><span>Push kick</span> <span class='font-mono text-primary'>300 pts</span></li>
                        <li class='flex justify-between'><span>Taekwondo defensive low kick</span> <span class='font-mono text-primary'>600 pts</span></li>
                        <li class='flex justify-between'><span>Muaythai leg kick</span> <span class='font-mono text-primary'>1100 pts</span></li>
                        <li class='flex justify-between'><span>Taekwondo side kick</span> <span class='font-mono text-primary'>1700 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>High kick</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>High kick</span> <span class='font-mono text-primary'>150 pts</span></li>
                        <li class='flex justify-between'><span>Roundhouse kick</span> <span class='font-mono text-primary'>300 pts</span></li>
                        <li class='flex justify-between'><span>Capoeira spinning mid kick</span> <span class='font-mono text-primary'>600 pts</span></li>
                        <li class='flex justify-between'><span>Muaythai axe kick</span> <span class='font-mono text-primary'>1100 pts</span></li>
                        <li class='flex justify-between'><span>Taekwondo bolley high kick</span> <span class='font-mono text-primary'>1700 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Takedown</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>Throw</span> <span class='font-mono text-primary'>200 pts</span></li>
                        <li class='flex justify-between'><span>Single-leg takedown</span> <span class='font-mono text-primary'>500 pts</span></li>
                        <li class='flex justify-between'><span>Whizzer throw</span> <span class='font-mono text-primary'>1200 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Submission</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>Kimura</span> <span class='font-mono text-primary'>500 pts</span></li>
                      </ul>
                    </div>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Ground Grappling</h3>
                      <ul class='space-y-2'>
                        <li class='flex justify-between'><span>Ground sweep reverse</span> <span class='font-mono text-primary'>1000 pts</span></li>
                        <li class='flex justify-between'><span>Great reversal</span> <span class='font-mono text-primary'>1500 pts</span></li>
                      </ul>
                    </div>
                    <p class='text-sm text-muted-foreground text-right italic'>Credit To @Wann</p>
                  </div>"
        />
        <Guide
          title="Just Getting Started Guide"
          icon={<BookOpen className="h-5 w-5" />}
          content="<ol class='list-decimal pl-5 space-y-4'>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>When you first get started, be very careful not to waste any resources, mainly credits and Focus. They are incredibly valuable in the long run and won't come as easily as when you're first starting.</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>Credits can be used to upgrade rings and base stat equipment (+ unlocking talents later). A good rule of thumb is to at least upgrade one ring, one speed bag (Agility), one training bike (Conditioning), and one dumbbell (strength) to the fullest. The shorter training times are such a lifesaver, especially when your fighter gets higher and higher in level, you won't have to wait for 3-5 mins on every training.</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>Mental points need to be saved as much as possible and only invested in your main fighter (at the beginning). There are basically tiers when it comes to the boosts available: Tier 1 (Best): Initiative + Health Tier 2 (Great): Block Chance + Hit Chance. Other boosts come lower, with health regeneration being the least important of them. So when building your main fighter, it's definitely worth it to invest mental points in agility and health first, then you can choose from the rest depending on your build's needs.</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>Don't put all of your eggs in one basket (don't hyper-fixate on upgrading one type of equipment, try to boost your gym gradually).</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>Try to give each fighter a unique build, fighters are divided into these categories:
                        <ul class='list-disc pl-5 mt-2 space-y-2'>
                            <li>A) Ground fighters:
                                <ul class='list-disc pl-5 mt-1'>
                                    <li>Wrestlers</li>
                                    <li>Submission Artists</li>
                                </ul>
                            </li>
                            <li>B) Strikers:
                                <ul class='list-disc pl-5 mt-1'>
                                    <li>Boxers</li>
                                    <li>Kickboxers (High kick + punch or Low Kick + Punch)</li>
                                    <li>Kickers (either low kick or high kick)</li>
                                </ul>
                            </li>
                            <li>C) Clinchers:
                                <ul class='list-disc pl-5 mt-1'>
                                    <li>Punch clinch</li>
                                    <li>Elbow clinch</li>
                                    <li>Knee clinch</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>What to look for in a discipline card?
                        <ul class='list-disc pl-5 mt-2'>
                            <li>Agility (fight winner hands down)</li>
                            <li>Conditioning (better than health boosts since the former also helps with takedown def, clinch def, sub def, and gg)</li>
                            <li>Hit Chance</li>
                            <li>Combo chance</li>
                            <li>Critical chance</li>
                            <li>Critical damage</li>
                        </ul>
                    </li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>Don't spread your points too soon: a lot of people know what their overall build should look like, but they start adding points left and right instead of concentrating them on the main skills of the build.</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>For example, a wrestler at level 12 should have points in gg, takedowns, clinch, sub def, strike def, kick def, and punch/elbows. If you try to spread your points at level 6 for all these categories, you'll be left with an average fighter that gets smashed left and right. It's better to put most of the points in gg and takedowns in the beginning, then slowly and gradually fill out the other skills.</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>Try to get your fighters as high in the pro league as you can. The pro league grants you a lot of valuable rewards, especially the credits as they seriously add up with time (and GC tickets as well). So get your fighters as far in the pro league as you can.</li>
                    <li class='p-3 rounded-lg bg-primary/5 border border-primary/10'>You can train your fighters to lvl 5 easily without needing to wait for stamina, so it's a good starting point to see how you fair in tournaments and pro league.</li>
                </ol>
                <p class='text-sm text-muted-foreground text-right italic mt-4'>Credit To @Slim</p>"
        />
        <Guide
          title="Farming Cash & Prestige"
          icon={<DollarSign className="h-5 w-5" />}
          content="<div class='space-y-6'>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>FARMING CASH AND PRESTIGE</h3>
                      <p>The easiest way to farm Cash and prestige is to finish the campaign and watch ads after you beat your opponent in each stage. Maybe a little boring. But believe me, this will really help us to get Cash and prestige quickly.</p>
                    </div>
                    
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>Farming scrolls</h3>
                      <p class='mb-3'>There are 2 ways to get scrolls for free:</p>
                      <ol class='list-decimal pl-5 space-y-3'>
                          <li><strong class='text-primary'>Daily Quest:</strong> Every day you will get 2 scrolls from the daily quest.</li>
                          <li><strong class='text-primary'>Fight Club:</strong> The number of scrolls you get varies depending on the level of the fighter registered. If you win, you will get:
                              <ul class='list-disc pl-5 mt-2 space-y-1'>
                                  <li>Lv3 - Lv5 = 1 scroll</li>
                                  <li>Lv6 - Lv9 = 2 scrolls</li>
                                  <li>Lv10 - Lv12 = 3 scrolls</li>
                              </ul>
                          </li>
                      </ol>
                      <p class='mt-3'>And not just get the scrolls. You will get Cash and common talent coins (which work to unlock common talents). I suggest using your fighter with full skills and Base points at each level (to have a higher chance to win the fight club).</p>
                    </div>
                    <p class='text-sm text-muted-foreground text-right italic'>Credit To @Wann</p>
                  </div>"
        />
        <Guide
          title="Tournament"
          icon={<Trophy className="h-5 w-5" />}
          content="<div class='space-y-4'>
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <ul class='space-y-3'>
                        <li class='flex items-start gap-2'>
                          <span class='text-primary font-bold'>☆</span>
                          <span><strong>Each player gets 2 tickets every week (Monday at 00:00 UTC+0)</strong></span>
                        </li>
                        <li class='flex items-start gap-2'>
                          <span class='text-primary font-bold'>☆</span>
                          <span>The registration time lasts for 24 hours since registration is open.</span>
                        </li>
                        <li class='flex items-start gap-2'>
                          <span class='text-primary font-bold'>☆</span>
                          <span>Lv5 is the minimum fighter's level to register for a tournament.</span>
                        </li>
                        <li class='flex items-start gap-2'>
                          <span class='text-primary font-bold'>☆</span>
                          <span>In 1 tournament bracket, there are 32 fighters.</span>
                        </li>
                        <li class='flex items-start gap-2'>
                          <span class='text-primary font-bold'>☆</span>
                          <span>Fighters registered in the tournament cannot be trained. But your fighter will get bonus skill points when they go home.</span>
                        </li>
                        <li class='flex items-start gap-2'>
                          <span class='text-primary font-bold'>☆</span>
                          <span><strong>Tournament rewards that are unclaimed at the end of the week get discarded.</strong></span>
                        </li>
                      </ul>
                    </div>
                    
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <p class='font-bold text-lg mb-2 text-primary'>NOTE:</p>
                      <p class='flex items-start gap-2'>
                        <span class='text-primary font-bold'>☆</span>
                        <span>It is very important to increase your Base skill (strength, condition, agility). Every time you increase your level, you must immediately max your Base skill. Otherwise, your fighter will be difficult to win the fight.</span>
                      </p>
                    </div>
                    <p class='text-sm text-muted-foreground text-right italic'>Credit To @Wann</p>
                  </div>"
        />
        <Guide
          title="Different Builds"
          icon={<Users className="h-5 w-5" />}
          content="<div class='space-y-6'>
                    <p>You can always come up with your own build; those are for learning purposes and from a player's point of view.</p>
                
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>1) Clinchers</h3>
                      <div class='pl-4 space-y-4'>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Strong points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>Supported by the majority of the talents</li>
                              <li>Supported by a large number of disciplines</li>
                              <li>Can use lower strike and kick defense due to time spent in the clinch.</li>
                          </ul>
                        </div>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Weak points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>More vulnerable to takedowns than strikers as the clinch facilitates takedowns.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>2) Wrestlers</h3>
                      <div class='pl-4 space-y-4'>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Strong points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>Can use lower strike and kick defense due to time spent on the ground</li>
                              <li>Can use little to no attack points (only the ground matters)</li>
                              <li>Most people have their default gameplans set to offensive or off all-in, which weakens takedown defense and allows you to take advantage further (whether in fight club or pro league)</li>
                          </ul>
                        </div>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Weak points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>Can only seriously hurt opponents on the ground, so if the takedown doesn't come, you're done.</li>
                              <li>Major problems with taking down clinchers, especially when in the clinch. The huge amount of takedown defense boosters makes it really hard for wrestlers in the endgame.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>3) Boxers</h3>
                      <div class='pl-4 space-y-4'>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Strong points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>The punch is the easiest strike to land (70-80% precision) and directly benefits from agility/initiative boosts</li>
                              <li>Supported well by a lot of discipline cards and talents</li>
                              <li>Benefits from every striking boost, whether it's combo chance, critical chance, critical damage, or hit chance.</li>
                              <li>Can land from any position (Standing, ground, clinch)</li>
                              <li>Leaves plenty of points to defenses and consequently doesn't have any major anti-build.</li>
                          </ul>
                        </div>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Weak points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>One dimensional</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>4) Kickers</h3>
                      <div class='pl-4 space-y-4'>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Strong points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>Very high critical damage, can one-shot / two-shot opponents or get a KO at any time</li>
                              <li>Can be content with sitting back and defending / eating shots then unloading a +200 damage attack.</li>
                          </ul>
                        </div>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Weak points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>High loss of initiative after missing</li>
                              <li>Harder to land than punches</li>
                              <li>Susceptible to both takedowns and the clinch</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <h3 class='font-bold text-lg mb-3 text-primary'>5) Kickboxers</h3>
                      <div class='pl-4 space-y-4'>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Strong points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>Combines both boxer and kicker perks, works really well with critical boosts</li>
                              <li>Ability to crack opponents by varied attacks</li>
                              <li>Unpredictability as you can turn them into a kicker or a boxer for any fight</li>
                          </ul>
                        </div>
                        <div>
                          <p class='font-bold text-primary mb-2'>☆ Weak points:</p>
                          <ul class='list-disc pl-5 space-y-1'>
                              <li>Endgame build will have a deficit in strike and kick defense</li>
                              <li>Most fights at level 12 end by decision, so the decreased defense could backfire if you don't get a KO.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                
                    <div class='p-4 rounded-lg bg-primary/5 border border-primary/10'>
                      <p class='mb-3'>There are 10 disciplines in this game. Each discipline has a different passive. Use discipline with a passive that is useful for your fighter. You can unlock disciplines by reaching Chapter 20 in the Manager Journey.</p>
                      
                      <div>
                        <p class='font-bold text-primary mb-2'>Example:</p>
                        <ul class='list-disc pl-5 space-y-1'>
                            <li>a. Boxing (punch) = boxing, kravmaga, karate, sambo</li>
                            <li>b. Taekwondo (high kick) = taekwondo (Required), karate, kravmaga, sambo</li>
                            <li>c. Kickboxing (low kick) = kickboxing, sambo, karate, kravmaga</li>
                            <li>d. Muaythai (clinch) = muaythai, karate, kravmaga, sambo</li>
                            <li>e. BJJ = bjj, wrestling, judo</li>
                            <li>f. Ground N pound = wrestling, judo, boxing (if you use punch attack), sambo</li>
                        </ul>
                      </div>
                      
                      <p class='mt-3'>Each fighter can use 2 discipline cards. So choose the right one...</p>
                      
                      <p class='mt-3'>The discipline effect is only activated when the discipline card reaches level 3. Then each successive level increases the effect.</p>
                      
                      <p class='mt-3'>Higher stats for legendary cards.</p>
                    </div>
                    <p class='text-sm text-muted-foreground text-right italic'>Credit To @Slim</p>
                  </div>"
        />
      </div>
    </div>
  )
}
