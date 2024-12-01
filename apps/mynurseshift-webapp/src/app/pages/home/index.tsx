import { Button } from '@mynurseshift/ui';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Trouvez votre prochain poste d'infirmier
            </h1>
            <p className="text-xl text-white/90 mb-8">
              MyNurseShift vous connecte avec les meilleurs établissements de santé.
              Trouvez des opportunités qui correspondent à vos compétences et à vos disponibilités.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/jobs">Voir les offres</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/register">S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir MyNurseShift ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Flexibilité totale</h3>
              <p className="text-muted-foreground">
                Choisissez vos horaires et vos missions selon vos disponibilités.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Rémunération attractive</h3>
              <p className="text-muted-foreground">
                Bénéficiez de taux horaires compétitifs et de primes attractives.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Processus simplifié</h3>
              <p className="text-muted-foreground">
                Une plateforme intuitive pour postuler et gérer vos missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à commencer votre prochaine mission ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'infirmiers et trouvez des opportunités
            qui correspondent à vos attentes.
          </p>
          <Button asChild size="lg">
            <Link to="/register">Créer un compte</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
