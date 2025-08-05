
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">John Doe</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm John Doe
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Full Stack Developer passionate about creating beautiful and functional web applications. I love turning
              ideas into reality through code.
            </p>
          </div>
          <div className="flex space-x-4">
            <button>
              <a href="#projects">View My Work</a>
            </button>
            <button>
              <a href="#contact">Get In Touch</a>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
