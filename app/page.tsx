'use client';
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, BookOpen, Dumbbell, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-[url('/images/hero2.jpg')] bg-cover bg-center bg-no-repeat">

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  MMA Manager 2 Fanpage
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Your ultimate resource for guides, tools, and information about the game. Build your fighters, manage
                  your gym, and dominate the competition.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-red-900 hover:bg-gray-100">
                  <Link href="/getting-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/guides">View Guides</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full md:h-[400px] lg:h-[500px]">
                <Image
                  src="/images/mmalogo.png"
                  alt="MMA Manager 2"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-6 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Tools</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enhance your gameplay with these essential resources
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <Dumbbell className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Gym Equipment</CardTitle>
                <CardDescription>Explore all gym equipment and their benefits</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/gym-equipment" className="flex items-center justify-between w-full">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <Award className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Talents</CardTitle>
                <CardDescription>Discover talents to enhance your fighters</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/talents" className="flex items-center justify-between w-full">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <BookOpen className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Guides</CardTitle>
                <CardDescription>Learn strategies and tips from experts</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/guides" className="flex items-center justify-between w-full">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with other players and share tips</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/community-resources" className="flex items-center justify-between w-full">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
<section className="py-12 md:py-24">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Latest Updates
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Stay informed with the newest game updates and community news
        </p>
      </div>
    </div>
    <div className="mx-auto py-12 overflow-y-auto" style={{ maxHeight: '500px' }}>
      <div className="grid gap-8">
        
        {/* Update 1: January Balance Adjustments */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>January Balance Adjustments</CardTitle>
            <CardDescription>Released on January 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Hello Managers, here come the balance adjustments!</p>
            <div id="extra-1" className="hidden mt-4 space-y-2 text-sm text-muted-foreground">
              <h4>GENERIC CHANGES</h4>
              <p>Punches on the ground stance are now slightly stronger (more damage and less initiative penalty upon missing)</p>
              <h4>TALENTS ADJUSTMENTS:</h4>
              <ul className="list-disc list-inside">
                <li>Body Proportions: High kicks and elbows critical damage: 35% → 45%</li>
                <li>Flawless Defense: Maximum kick and knee defense: 40% → 50%</li>
                <li>It's Personal: Maximum damage increase: 50% → 60%</li>
                <li>Surprising Angles: Crit chance per stack: 15% → 20%; Max stacks: 4 → 3</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {
              const extraContent = document.getElementById('extra-1');
              if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                event.target.textContent = 'Read Less';
              } else {
                extraContent.classList.add('hidden');
                event.target.textContent = 'Read More';
              }
            }}>Read More</Button>
          </CardFooter>
        </Card>

        {/* Update 2: Season 32 Champions */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Season 32 Champions</CardTitle>
            <CardDescription>Released on January 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We have new Champions for the 32nd season...</p>
            <div id="extra-2" className="hidden mt-4 text-sm text-muted-foreground">
              <p>Congratulations to the new belt and title holders!</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {
              const extraContent = document.getElementById('extra-2');
              if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                event.target.textContent = 'Read Less';
              } else {
                extraContent.classList.add('hidden');
                event.target.textContent = 'Read More';
              }
            }}>Read More</Button>
          </CardFooter>
        </Card>

        {/* Update 3: Season 31 Champions */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Season 31 Champions</CardTitle>
            <CardDescription>Released on January 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We have new Champions for the 31st season...</p>
            <div id="extra-3" className="hidden mt-4 text-sm text-muted-foreground">
              <p>Congratulations to the new belt and title holders!</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {
              const extraContent = document.getElementById('extra-3');
              if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                event.target.textContent = 'Read Less';
              } else {
                extraContent.classList.add('hidden');
                event.target.textContent = 'Read More';
              }
            }}>Read More</Button>
          </CardFooter>
        </Card>

        {/* Update 4: December 30th Balance Adjustments */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>December 30th Balance Adjustments</CardTitle>
            <CardDescription>Released on December 30, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>New balance update is live!</p>
            <div id="extra-4" className="hidden mt-4 space-y-2 text-sm text-muted-foreground">
              <h4>GENERIC</h4>
              <ul className="list-disc list-inside">
                <li>Escaping clinch is now slightly harder.</li>
                <li>Standing punch moves score a little less points.</li>
                <li>High Kicks have slightly lower base values.</li>
              </ul>
              <h4>TALENTS</h4>
              <ul className="list-disc list-inside">
                <li>Rage fist: Punch damage increased from 10% to 16%, combo chance 10% to 12%</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {
              const extraContent = document.getElementById('extra-4');
              if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                event.target.textContent = 'Read Less';
              } else {
                extraContent.classList.add('hidden');
                event.target.textContent = 'Read More';
              }
            }}>Read More</Button>
          </CardFooter>
        </Card>

        {/* Update 5: Season 30 Champions */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Season 30 Champions</CardTitle>
            <CardDescription>Released on December 29, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We have new Champions for the 30th season...</p>
            <div id="extra-5" className="hidden mt-4 text-sm text-muted-foreground">
              <p>Congratulations to all the winners of the new season!</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {
              const extraContent = document.getElementById('extra-5');
              if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                event.target.textContent = 'Read Less';
              } else {
                extraContent.classList.add('hidden');
                event.target.textContent = 'Read More';
              }
            }}>Read More</Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  </div>
</section>




      {/* CTA Section */}
<section className="py-12 md:py-24 bg-muted/50 bg-cover bg-center" style={{ backgroundImage: 'url("/images/background17.jpg")', backgroundOpacity: 0.9 }}>
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Dominate the Ring?
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Start your journey to becoming the ultimate MMA manager today
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button asChild size="lg">
          <Link href="/getting-started">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/build-fighter">Build Your Fighter</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
