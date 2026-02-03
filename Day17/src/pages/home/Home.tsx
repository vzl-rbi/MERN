import React, { useState } from "react";

const EcommerceLandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredProducts = [
    {
      name: "Shadow Blade Katana",
      price: "$299",
      oldPrice: "$499",
      rating: 4.8,
      keyword: "katana,dark",
    },
    {
      name: "Phoenix Scale Armor",
      price: "$599",
      oldPrice: "$999",
      rating: 5.0,
      keyword: "armor,fantasy",
    },
    {
      name: "Ring of Eternity",
      price: "$149",
      rating: 4.6,
      keyword: "ring,ancient",
    },
    {
      name: "Scroll of Forbidden Arts",
      price: "$89",
      oldPrice: "$150",
      rating: 4.7,
      keyword: "scroll,ancient",
    },
    {
      name: "Elixir of Eternal Youth",
      price: "$199",
      oldPrice: "$350",
      rating: 4.9,
      keyword: "potion,mystic",
    },
    {
      name: "Dragon Heart Artifact",
      price: "$799",
      oldPrice: "$1,299",
      rating: 5.0,
      keyword: "relic,dragon",
    },
    {
      name: "Night Shadow Shuriken",
      price: "$99",
      rating: 4.5,
      keyword: "shuriken",
    },
    {
      name: "Void Walker Gauntlets",
      price: "$249",
      oldPrice: "$399",
      rating: 4.8,
      keyword: "gauntlet,dark",
    },
  ];

  const categories = [
    { name: "Weapons", keyword: "sword,dark" },
    { name: "Armor", keyword: "armor,fantasy" },
    { name: "Accessories", keyword: "jewelry,ancient" },
    { name: "Scrolls", keyword: "scroll,mystic" },
    { name: "Elixirs", keyword: "potion,glowing" },
    { name: "Artifacts", keyword: "relic,ancient" },
  ];

  const testimonials = [
    {
      quote:
        "The finest blades I have ever wielded. Murim truly understands power.",
      name: "Master Chen",
      avatarSig: "1",
    },
    {
      quote: "These elixirs changed my cultivation forever. Unmatched quality.",
      name: "Elder Liu",
      avatarSig: "2",
    },
    {
      quote:
        "Exclusive items you won't find anywhere else. Worth every spirit stone.",
      name: "Disciple Zhao",
      avatarSig: "3",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < fullStars ? "text-amber-400" : "text-gray-600"}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-400">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-xl z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 via-red-600 to-indigo-700 bg-clip-text text-transparent">
            Murim
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-10">
            {["Home", "Shop", "Categories", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="text-lg hover:text-amber-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="hover:text-amber-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* User */}
            <button className="hover:text-amber-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Cart with Badge */}
            <button className="relative hover:text-amber-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden hover:text-amber-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <ul className="container mx-auto px-4 py-6 space-y-6 text-center">
              {["Home", "Shop", "Categories", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xl hover:text-amber-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "ur[](https://source.unsplash.com/random/1920x1080/?dark,fantasy,warrior)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Unleash Your Power
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-gray-300">
            Exclusive collection – up to 50% off
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#"
              className="bg-red-700 hover:bg-red-600 px-10 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-10 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={`https://source.unsplash.com/random/500x500/?${product.keyword}`}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-amber-400">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="ml-3 text-lg text-gray-500 line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  {renderStars(product.rating)}
                  <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="relative rounded-xl overflow-hidden group transition transform hover:scale-105"
              >
                <img
                  src={`https://source.unsplash.com/random/800x600/?${cat.keyword},dark`}
                  alt={cat.name}
                  className="w-full h-80 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-amber-400">
                  {cat.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-bold mb-6">
            Free Shipping on Orders Over $75
          </p>
          <a
            href="#"
            className="inline-block bg-amber-400 text-gray-900 hover:bg-amber-300 px-10 py-4 rounded-lg text-xl font-semibold transition transform hover:scale-105"
          >
            Limited Time Offer
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Voices from the Realm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-800 rounded-xl p-8 shadow-xl"
              >
                <p className="text-lg italic text-gray-300 mb-6">"{t.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={`https://source.unsplash.com/random/100x100/?portrait&sig=${t.avatarSig}`}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-400"
                  />
                  <div>
                    <p className="font-semibold text-amber-400">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
                Murim
              </h3>
              <p className="text-gray-400">
                Discover exclusive artifacts, weapons, and elixirs crafted for
                those who seek true power in the realm.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {["Home", "Shop", "Categories", "About", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-amber-400 transition">
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Customer Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for exclusive offers and updates.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
                />
                <button className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            © 2026 Murim. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceLandingPage;
