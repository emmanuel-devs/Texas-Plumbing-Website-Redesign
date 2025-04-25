"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Clock,
  Star,
  MapPin,
  Droplet,
  Wrench,
  ShowerHead,
  PlugIcon as PipeValve,
  Thermometer,
  Waves,
  Check,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Menu,
  X,
  CreditCard,
} from "lucide-react"
import { useState } from "react"

// Navigation data structure
const navigationData = {
  mainItems: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
      megaMenu: true,
      categories: [
        {
          name: "Bathroom & Kitchen",
          items: [
            { name: "Toilets", href: "#toilets" },
            { name: "Faucets", href: "#faucets" },
            { name: "Sinks", href: "#sinks" },
            { name: "Showers & Bathtubs", href: "#showers" },
          ],
        },
        {
          name: "Repairs",
          items: [
            { name: "Leaks", href: "#leaks" },
            { name: "Slab Repairs", href: "#slab-repairs" },
            { name: "Re-piping", href: "#re-piping" },
            { name: "Garbage Disposals", href: "#garbage-disposals" },
          ],
        },
        {
          name: "Drains",
          items: [
            { name: "Drain Cleaning", href: "#drain-cleaning" },
            { name: "Yard Drains", href: "#yard-drains" },
          ],
        },
        {
          name: "Water Heaters",
          items: [
            { name: "Tankless", href: "#tankless" },
            { name: "Traditional", href: "#traditional" },
          ],
        },
        {
          name: "Gas Line Services",
          items: [{ name: "Gas Line Services", href: "#gas-line-services" }],
        },
        {
          name: "Water Solutions",
          items: [
            { name: "Filtration", href: "#filtration" },
            { name: "Softeners", href: "#softeners" },
          ],
        },
      ],
    },
    { name: "Products", href: "#products" },
    { name: "Specials", href: "#specials" },
    {
      name: "About",
      href: "#about",
      dropdown: true,
      items: [
        { name: "Our Story", href: "#our-story" },
        { name: "Reviews", href: "#reviews" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Service Areas", href: "#areas" },
        { name: "Recent Projects", href: "#projects" },
        { name: "FAQs", href: "#faqs" },
        { name: "Plumbing Terminology", href: "#terminology" },
      ],
    },
  ],
}

// Navigation component
function Navigation() {
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const toggleMegaMenu = (name: string) => {
    setOpenMegaMenu(openMegaMenu === name ? null : name)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
    setOpenMegaMenu(null)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setMobileSubmenu(null)
  }

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-32 ml-2">
              <Image
                src="https://www.texasqualityplumbing.com/wp-content/uploads/2024/06/Header_Logo.webp"
                alt="Texas Quality Plumbing Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationData.mainItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.megaMenu ? (
                  <button
                    onClick={() => toggleMegaMenu(item.name)}
                    className={`flex items-center px-3 py-2 text-sm font-medium hover:text-teal-600 transition-colors ${
                      openMegaMenu === item.name ? "text-teal-600" : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center px-3 py-2 text-sm font-medium hover:text-teal-600 transition-colors ${
                      openDropdown === item.name ? "text-teal-600" : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium hover:text-teal-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.megaMenu && openMegaMenu === item.name && (
                  <div className="absolute left-0 mt-2 w-screen max-w-7xl bg-white shadow-lg rounded-b-lg border-t border-gray-200 z-50">
                    <div className="grid grid-cols-3 gap-8 p-8">
                      {item.categories?.map((category) => (
                        <div key={category.name}>
                          <h3 className="text-sm font-semibold text-teal-700 mb-3">{category.name}</h3>
                          <ul className="space-y-2">
                            {category.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                                  onClick={() => setOpenMegaMenu(null)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact and CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium">(346) 636-2418</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Book Now</Button>

            {/* Mobile menu button */}
            <Button variant="outline" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container px-4 py-4">
            <nav className="space-y-1">
              {navigationData.mainItems.map((item) => (
                <div key={item.name} className="py-1">
                  {item.megaMenu || item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-900"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${mobileSubmenu === item.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      {mobileSubmenu === item.name && (
                        <div className="mt-2 space-y-2 pl-4">
                          {item.megaMenu &&
                            item.categories?.map((category) => (
                              <div key={category.name} className="py-2">
                                <h4 className="text-sm font-semibold text-teal-700 mb-2">{category.name}</h4>
                                <ul className="space-y-2 pl-2">
                                  {category.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-gray-600 hover:text-teal-600"
                                        onClick={toggleMobileMenu}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                          {item.dropdown &&
                            item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-sm text-gray-600 hover:text-teal-600"
                                onClick={toggleMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-base font-medium text-gray-900 hover:text-teal-600"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Now</Button>
              <div className="mt-4 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium">(346) 636-2418</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800/95 to-teal-700/95 z-10" />
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-teal-900"
              style={{
                backgroundImage:
                  "url('https://www.texasqualityplumbing.com/wp-content/uploads/2023/10/plumbing-hero-background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container relative z-20 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-white">
                <div>
                  <Badge className="bg-orange-500 text-white hover:bg-orange-600 mb-4">Family-Owned Since 2007</Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                    Professional Plumbing Services in Houston
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                    From emergency repairs to complete bathroom remodels, our licensed experts deliver quality service
                    you can trust.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button className="bg-orange-500 hover:bg-orange-600 transition-transform hover:scale-105">
                    Book Now
                  </Button>
                  <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                    View Services
                  </Button>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg w-fit">
                  <div className="relative h-12 w-20 flex items-center justify-center bg-white rounded-md shadow-sm">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">4.9 Star Rating</p>
                    <p className="text-white/80">Based on 200+ Reviews</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative w-full rounded-lg overflow-hidden shadow-xl" style={{ paddingBottom: "75%" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent z-10" />
                  <Image
                    src="https://www.texasqualityplumbing.com/wp-content/uploads/2024/06/about-van.webp"
                    alt="Texas Quality Plumbing Van"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
                      <h3 className="font-bold text-white text-xl mb-2">Licensed & Insured Professionals</h3>
                      <p className="text-white/90">TX Master License #M-40546</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl">
                Professional plumbing services for residential and commercial properties in the Greater Houston area.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: <Droplet className="h-8 w-8" />, name: "Drains" },
                { icon: <PipeValve className="h-8 w-8" />, name: "Toilets" },
                { icon: <Wrench className="h-8 w-8" />, name: "Plumbing" },
                { icon: <ShowerHead className="h-8 w-8" />, name: "Bathroom Remodels" },
                { icon: <Thermometer className="h-8 w-8" />, name: "Water Heaters" },
                { icon: <Waves className="h-8 w-8" />, name: "Sewer Services" },
              ].map((service, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="rounded-full bg-teal-50 p-3 text-teal-600">{service.icon}</div>
                    <h3 className="font-medium">{service.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-teal-600" />
                <span className="text-lg font-medium">(346) 636-2418</span>
                <Button className="bg-orange-500 hover:bg-orange-600 ml-4">Book Now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-teal-800">About Texas Quality Plumbing</h2>
                <h3 className="text-xl font-semibold">New Look, Same Great Service</h3>
                <p className="text-muted-foreground">
                  At Texas Quality Plumbing, our mission has always been to provide top-tier plumbing services to the
                  Houston area. Our family-owned business takes pride in our work and stands behind every job we
                  complete.
                </p>
                <p className="text-muted-foreground">
                  We've been serving the Greater Houston area since 2007, building our reputation on reliability,
                  quality workmanship, and exceptional customer service. Our team of licensed professionals is ready to
                  tackle any plumbing issue, big or small.
                </p>
                <div className="flex items-center gap-5 bg-teal-50 p-5 rounded-lg border border-teal-100 my-6">
                  <div className="relative h-24 w-24 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2010%2C%202025%2C%2011_41_54%20AM-XWhmTuLakXhMKwfkhaorI5qPE0X3z1.png"
                      alt="Certification Badge"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-800">Licensed & Insured Professionals</h4>
                    <p className="text-muted-foreground">TX Master License #M-40546</p>
                    <p className="text-muted-foreground mt-1">Fully bonded and insured for your protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-teal-600" />
                  <span className="text-lg font-medium">(346) 636-2418</span>
                  <Button className="bg-orange-500 hover:bg-orange-600 ml-4">Book Now</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://www.texasqualityplumbing.com/wp-content/uploads/2025/02/tx-quality-pumbling-team.webp"
                  alt="Texas Quality Plumbing Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Customer Reviews</h2>
              <p className="text-muted-foreground max-w-2xl">
                Don't just take our word for it. See what our customers have to say about our services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Mary S.",
                  review:
                    "I have been completely blown away by the professionalism, quality of work, and customer service provided by Texas Quality Plumbing. They were prompt, courteous, and fixed our issue quickly.",
                  rating: 5,
                },
                {
                  name: "John D.",
                  review:
                    "Excellent service! The technician was knowledgeable and explained everything clearly. They completed the work efficiently and left the area clean. I would definitely use their services again.",
                  rating: 5,
                },
              ].map((review, index) => (
                <Card key={index} className="bg-teal-50 border-none">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="italic">"{review.review}"</p>
                    <div className="font-medium">{review.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="sm" className="rounded-full">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Review Us On Google
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Review Us On Facebook
              </Button>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-teal-600 to-teal-700 text-white border-none shadow-lg">
                <CardContent className="p-10 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500 rounded-full opacity-30"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500 rounded-full opacity-20"></div>

                  {/* Content with improved layout */}
                  <div className="relative z-10">
                    <div className="inline-block bg-orange-500 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
                      Limited Time Offer
                    </div>
                    <h3 className="text-3xl font-bold mb-3">Special Discount</h3>
                    <div className="flex items-baseline gap-3 mb-5">
                      <div className="text-6xl font-bold">10%</div>
                      <div className="text-3xl font-bold">OFF</div>
                    </div>
                    <div className="bg-white/15 p-4 rounded-lg mb-6 backdrop-blur-sm">
                      <p className="text-white/95 text-lg">Valid for purchases up to $400</p>
                      <p className="text-white/80 text-sm mt-1">*Terms and conditions apply</p>
                    </div>
                    <Button className="bg-white text-teal-700 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 font-bold px-8 py-3 text-lg h-auto">
                      Claim Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-none shadow-lg">
                <CardContent className="p-10 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>

                  {/* Content with improved layout */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <CreditCard className="h-5 w-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-700">Payment Solutions</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Financing Options</h3>
                    <p className="text-gray-600 mb-6">Flexible payment plans available to fit your budget.</p>

                    <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="relative h-12 w-full">
                          <Image
                            src="https://www.texasqualityplumbing.com/wp-content/uploads/2024/06/goodleap-1.webp"
                            alt="GoodLeap Financing"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-12 w-full">
                          <Image
                            src="https://www.texasqualityplumbing.com/wp-content/uploads/2024/06/turns-1.webp"
                            alt="TUNS Financing"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-12 w-full">
                          <Image
                            src="https://www.texasqualityplumbing.com/wp-content/uploads/2024/06/service-1.webp"
                            alt="Service Financing"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:shadow-lg">
                      Explore Options
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Maintenance Plan Section */}
        <section id="maintenance" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Maintenance Plan</h2>
              <p className="text-muted-foreground max-w-2xl">
                Join our VIP Home Protection Plan and enjoy priority service and exclusive benefits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Your VIP Home Protection Plan Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Annual Free Basic Preventative Home Inspection Service",
                    "Guaranteed Appointment Within 24 Hours",
                    "Never Charged Overtime",
                    "10% Off All Repairs (Discount Not Valid With Other Discounts Or Coupons)",
                    "Never Pay Trip Charge ($89 Value)",
                    "Service Fee Is Waived",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-teal-700 hover:bg-teal-800 mt-4">Sign Up Today</Button>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Items That Will Be Checked:</h3>
                <ul className="space-y-3">
                  {[
                    "Check And Eliminate All Visible Leaks At Fixtures And Exposed Plumbing",
                    "Inspect All Toilets",
                    "Exposed Water Lines Are Examined",
                    'Garbage Disposal Checked For Proper                    "Exposed Water Lines Are Examined',
                    "Garbage Disposal Checked For Proper Operation And Leaks",
                    "Faucets And Shower Heads Are Thoroughly Checked",
                    "Water Heater Inspected For Safety, Leaks And Proper Operation",
                    "Washing Machine Hoses & Valves Are Thoroughly Checked",
                    "Main Water Pressure Checked For Safety, Leaks And Proper Operation",
                    "Water Softener, Filtration, Filter Checked For Leaks & Proper Operation In Home",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section id="areas" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Service Areas</h2>
              <p className="text-muted-foreground max-w-2xl">
                We proudly serve the Greater Houston area and surrounding communities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Areas We Serve:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Houston",
                    "Spring",
                    "Cypress",
                    "Katy",
                    "Tomball",
                    "The Woodlands",
                    "Humble",
                    "Kingwood",
                    "Atascocita",
                    "Richmond",
                    "Sugar Land",
                    "Pearland",
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-teal-600" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  We service all major makes and models. If you don't see your area listed, please contact us.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222382.1856112149!2d-95.73058295!3d29.78100975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1712559887!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Houston Service Area Map"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">Ready to schedule your service?</h2>
                <p className="text-xl text-white/90 max-w-md">
                  Our team of licensed professionals is standing by to help with all your plumbing needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Book Now
                </Button>
                <Button variant="outline" className="border-white text-white bg-teal-500/20 hover:bg-teal-500/40">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Column 1: Company Info */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative h-12 w-32 ml-2">
                    <Image
                      src="https://www.texasqualityplumbing.com/wp-content/uploads/2024/06/Header_Logo.webp"
                      alt="Texas Quality Plumbing Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="mb-4">Family-owned plumbing company serving the Greater Houston area since 2007.</p>
                <div className="flex items-center gap-4 mb-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Column 2: Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <p>12345 Main Street, Houston, TX 77001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <p>(346) 636-2418</p>
                      <p className="text-sm text-gray-400">Monday to Friday: 8am - 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <p>24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="#services" className="hover:text-white">
                    Services
                  </Link>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                  <Link href="#reviews" className="hover:text-white">
                    Reviews
                  </Link>
                  <Link href="#maintenance" className="hover:text-white">
                    Maintenance Plan
                  </Link>
                  <Link href="#areas" className="hover:text-white">
                    Service Areas
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} Texas Quality Plumbing. All rights reserved. TX Master License #M-40546
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
