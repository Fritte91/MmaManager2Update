import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, MessageCircle, ExternalLink } from "lucide-react"

export default function Community() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Community Resources
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our community and follow us on social media for updates and discussions!
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Facebook Card */}
        <div className="social-card before:bg-gradient-to-br before:from-blue-600 before:to-blue-800 overflow-hidden group">
          <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
            <div className="social-icon mb-6 group-hover:scale-110 transition-transform">
              <Facebook className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Facebook</h3>
            <p className="text-white/80 mb-6">
              Join our Facebook group with over 10,000 members to share your achievements and connect with other
              players.
            </p>
            <div className="mt-auto pt-4">
              <Link
                href="https://www.facebook.com/groups/935480524053924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full backdrop-blur-sm transition-colors"
              >
                Join Group
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Facebook className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>

        {/* Discord Card */}
        <div className="social-card before:bg-gradient-to-br before:from-indigo-600 before:to-indigo-900 overflow-hidden group">
          <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
            <div className="social-icon mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Discord</h3>
            <p className="text-white/80 mb-6">
              Chat in real-time, find opponents, and get instant help from experienced players on our active Discord
              server.
            </p>
            <div className="mt-auto pt-4">
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full backdrop-blur-sm transition-colors"
              >
                Join Server
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <MessageCircle className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>

        {/* Instagram Card */}
        <div className="social-card before:bg-gradient-to-br before:from-pink-600 before:to-purple-600 overflow-hidden group">
          <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
            <div className="social-icon mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
            <p className="text-white/80 mb-6">
              Get the latest visual updates, fighter showcases, and event announcements on our Instagram page.
            </p>
            <div className="mt-auto pt-4">
              <Link
                href="https://www.instagram.com/mma.manager2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full backdrop-blur-sm transition-colors"
              >
                Follow
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Instagram className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>

        {/* Twitter Card */}
        <div className="social-card before:bg-gradient-to-br before:from-sky-400 before:to-sky-600 overflow-hidden group">
          <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
            <div className="social-icon mb-6 group-hover:scale-110 transition-transform">
              <Twitter className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Twitter</h3>
            <p className="text-white/80 mb-6">
              Stay updated with the latest news, updates, and community events on our Twitter feed.
            </p>
            <div className="mt-auto pt-4">
              <Link
                href="https://x.com/preystudiosmma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full backdrop-blur-sm transition-colors"
              >
                Follow
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Twitter className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Official Game Developer</h2>
        <div className="relative mx-auto w-64 h-64 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
            <Image
              src="/images/preylogo.png"
              alt="Prey Studios Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-8">
            MMA Manager 2 is developed by Prey Studios. This fanpage is created by the community to help players get the
            most out of their gaming experience.
          </p>
          <Link
            href="https://preystudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full transition-colors"
          >
            Visit Official Website
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Community Events</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-md">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Weekly Tournament</h3>
                  <p className="text-sm text-muted-foreground">Every Week</p>
                </div>
              </div>
              <p className="mb-4">
                Join our weekly community tournament where players compete for prizes and glory. All skill levels
                welcome!
              </p>
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-md">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Strategy Sessions</h3>
                  <p className="text-sm text-muted-foreground">24/7 in the Discord chat</p>
                </div>
              </div>
              <p className="mb-4">
                Expert players share their strategies and tips in our discord chat strategy sessions. Perfect for improving
                your game!
              </p>
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
