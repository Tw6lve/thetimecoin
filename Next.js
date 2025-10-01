export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      {/* Hero Section */}
      <header className="text-center py-20">
        <h1 className="text-6xl font-bold mb-4">$TIME ⏳</h1>
        <p className="text-2xl mb-6">The only coin you can’t print</p>
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          Buy $TIME
        </a>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-6">About $TIME</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          $TIME is the first meme + utility coin backed by the only truly scarce
          resource: time itself. Don’t waste it. Stack it. Spend it wisely.
        </p>
      </section>

      {/* Tokenomics */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 py-16 px-6">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Genesis Supply</h3>
          <p>1,440,000 $TIME (1 year in minutes)</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Emission</h3>
          <p>1 $TIME per minute (capped at 100M)</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Fees</h3>
          <p>1% transaction fee → Time Treasury</p>
        </div>
      </section>

      {/* Utility */}
      <section className="bg-black/30 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Utility</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-white/10 rounded-xl p-6 shadow">
            <h3 className="text-2xl font-bold mb-3">💼 Marketplace</h3>
            <p>Trade $TIME for services (design, dev, coaching...)</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow">
            <h3 className="text-2xl font-bold mb-3">🎥 Creator Tips</h3>
            <p>Support your favorite creators with $TIME.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow">
            <h3 className="text-2xl font-bold mb-3">⏳ Staking</h3>
            <p>Lock your $TIME and earn more $TIME.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow">
            <h3 className="text-2xl font-bold mb-3">🎨 NFTs</h3>
            <p>Collect limited hourglass & clock NFTs.</p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-8">Join the Community</h2>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-purple-400">Twitter</a>
          <a href="#" className="hover:text-purple-400">Telegram</a>
          <a href="#" className="hover:text-purple-400">Discord</a>
        </div>
      </section>

      <footer className="bg-black/60 text-gray-400 text-center py-6">
        <p>⚠️ This is a meme project. Not financial advice.</p>
        <p>$TIME – The Time Coin ⏳</p>
      </footer>
    </div>
  )
}
