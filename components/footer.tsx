import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">MMA Manager 2</h3>
            <p className="text-sm text-muted-foreground">A fan-made resource for the MMA Manager 2 mobile game.</p>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/getting-started" className="text-sm text-muted-foreground hover:text-primary">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/build-fighter" className="text-sm text-muted-foreground hover:text-primary">
                  Fighter Builder
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Game Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gym-equipment" className="text-sm text-muted-foreground hover:text-primary">
                  Gym Equipment
                </Link>
              </li>
              <li>
                <Link href="/talents" className="text-sm text-muted-foreground hover:text-primary">
                  Talents
                </Link>
              </li>
              <li>
                <Link href="/disciplines" className="text-sm text-muted-foreground hover:text-primary">
                  Disciplines
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community-resources" className="text-sm text-muted-foreground hover:text-primary">
                  Join Us
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/groups/935480524053924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Facebook Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MMA Manager 2 Fanpage. This is a fan-made site and is not affiliated with
            the official game.
          </p>
        </div>
      </div>
    </footer>
  )
}
