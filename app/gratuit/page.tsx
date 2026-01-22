'use client'

import Image from 'next/image'
import { CheckCircle, Users, TrendingUp, Award, BookOpen, Video, MessageCircle } from 'lucide-react'

export default function FormationGratuitePage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-hvc-gold/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Image
              src="/logo-hvc-white.png"
              alt="High Value Capital"
              width={150}
              height={54}
              priority
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hvc-gold/10 border border-hvc-gold/20 rounded-full mb-6">
            <span className="text-hvc-gold text-sm font-semibold">100% GRATUIT</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rejoins la <span className="text-gradient">Formation Gratuite</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvre les fondamentaux du trading Forex et de la méthode ARD.
            Accède à une communauté de 150+ traders francophones actifs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-hvc-gold" />
              <span>150+ Membres Actifs</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-hvc-gold" />
              <span>7+ Funded Traders</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-hvc-gold" />
              <span>20k$+ de Payouts</span>
            </div>
          </div>

          <a
            href="https://www.community.highvaluecapital.club/invitation?code=E573F8#landing-page"
            className="inline-block bg-gradient-gold text-hvc-dark text-lg font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Accéder à la Formation Gratuite
          </a>

          <p className="text-gray-500 text-sm mt-4">Aucune carte bancaire requise • Accès immédiat</p>
        </div>
      </section>

      {/* Ce que tu vas apprendre */}
      <section className="py-16 px-4 bg-hvc-dark/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ce que tu vas <span className="text-gradient">apprendre</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-2xl p-6 hover:border-hvc-gold/40 transition-all">
              <div className="w-12 h-12 bg-hvc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-hvc-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fondamentaux du Forex</h3>
              <p className="text-gray-400">
                Comprends les bases du marché Forex, les paires de devises, et comment fonctionnent les propfirms.
              </p>
            </div>

            <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-2xl p-6 hover:border-hvc-gold/40 transition-all">
              <div className="w-12 h-12 bg-hvc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-hvc-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Méthode ARD</h3>
              <p className="text-gray-400">
                Introduction à la méthode ARD (ICT/SMC) : liquidité, market structure, et concepts clés.
              </p>
            </div>

            <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-2xl p-6 hover:border-hvc-gold/40 transition-all">
              <div className="w-12 h-12 bg-hvc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-hvc-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Communauté Active</h3>
              <p className="text-gray-400">
                Accède à un groupe privé sur Heartbeat avec des traders motivés qui partagent leurs résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Accès <span className="text-gradient">100% Gratuit</span>
          </h2>

          <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-hvc-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Modules de formation</h4>
                  <p className="text-gray-400 text-sm">Vidéos explicatives sur les concepts de base</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-hvc-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Groupe communauté</h4>
                  <p className="text-gray-400 text-sm">Échange avec 150+ traders actifs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-hvc-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Ressources gratuites</h4>
                  <p className="text-gray-400 text-sm">PDFs, checklists, et outils trading</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-hvc-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Support 24/7</h4>
                  <p className="text-gray-400 text-sm">Pose tes questions dans le groupe</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-hvc-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Analyses de marché</h4>
                  <p className="text-gray-400 text-sm">Partages réguliers d'analyses Forex</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-hvc-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Lives & replays</h4>
                  <p className="text-gray-400 text-sm">Sessions live et accès aux replays</p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://www.community.highvaluecapital.club/invitation?code=E573F8#landing-page"
                className="inline-block bg-gradient-gold text-hvc-dark text-lg font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Rejoindre Maintenant
              </a>
              <p className="text-gray-500 text-sm mt-3">Pas de CB • Pas de spam • Accès instantané</p>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats communauté */}
      <section className="py-16 px-4 bg-hvc-dark/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nos membres <span className="text-gradient">réussissent</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Rejoins une communauté qui génère des résultats réels. 7+ membres sont devenus Funded Traders.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-hvc-gold mb-2">7+</div>
              <div className="text-gray-300 font-semibold mb-1">Funded Traders</div>
              <div className="text-gray-500 text-sm">Certifiés par des propfirms</div>
            </div>

            <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-hvc-gold mb-2">20k$+</div>
              <div className="text-gray-300 font-semibold mb-1">Payouts Générés</div>
              <div className="text-gray-500 text-sm">Par nos membres actifs</div>
            </div>

            <div className="bg-hvc-dark/50 border border-hvc-gold/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-hvc-gold mb-2">150+</div>
              <div className="text-gray-300 font-semibold mb-1">Membres Actifs</div>
              <div className="text-gray-500 text-sm">Communauté francophone</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à démarrer ton <span className="text-gradient">parcours trading</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoins High Value Capital gratuitement et commence à apprendre dès aujourd'hui.
          </p>

          <a
            href="https://www.community.highvaluecapital.club/invitation?code=E573F8#landing-page"
            className="inline-block bg-gradient-gold text-hvc-dark text-xl font-bold px-10 py-5 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
          >
            Accéder à la Formation Gratuite
          </a>

          <div className="mt-8 flex flex-wrap gap-6 justify-center items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-hvc-gold" />
              <span>100% Gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-hvc-gold" />
              <span>Aucune CB requise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-hvc-gold" />
              <span>Accès immédiat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-hvc-gold/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 High Value Capital. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
