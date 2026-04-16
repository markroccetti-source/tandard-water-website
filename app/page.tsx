export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-6">
          Standard Water
        </p>

        <h1 className="max-w-5xl mx-auto text-4xl md:text-6xl font-bold leading-tight md:leading-[1.1] mb-6">
          Elimina batteri, biofilm e contaminazioni nell’acqua e negli impianti
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
          ClorOX2 è la soluzione professionale a base di biossido di cloro per
          la disinfezione di acqua, superfici e impianti in ambito civile,
          industriale e zootecnico.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-8 py-4 font-medium shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5"
          >
            Richiedi una consulenza
          </a>

          <a
            href="#applicazioni"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 font-medium transition hover:bg-slate-50"
          >
            Scopri le applicazioni
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm">
            <p className="font-semibold mb-2">Acqua</p>
            <p className="text-sm text-slate-600">
              Trattamento e disinfezione professionale.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm">
            <p className="font-semibold mb-2">Impianti</p>
            <p className="text-sm text-slate-600">
              Riduzione del rischio microbiologico e del biofilm.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm">
            <p className="font-semibold mb-2">Superfici</p>
            <p className="text-sm text-slate-600">
              Supporto per protocolli di sanificazione efficaci.
            </p>
          </div>
        </div>
      </section>

      <section id="applicazioni" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
            Applicazioni
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Dove interveniamo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Settore civile</h3>
            <p className="text-slate-600 leading-relaxed">
              Trattamento acqua, sanificazione e supporto operativo per
              strutture, ambienti e reti idriche.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Settore industriale</h3>
            <p className="text-slate-600 leading-relaxed">
              Soluzioni per impianti, linee, circuiti e gestione professionale
              della disinfezione.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Settore zootecnico</h3>
            <p className="text-slate-600 leading-relaxed">
              Applicazioni dedicate alla qualità dell’acqua e alla riduzione
              del rischio microbiologico negli allevamenti.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-3">
              Vantaggi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Perché scegliere Standard Water
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-3">Approccio concreto</h3>
              <p className="text-slate-300 leading-relaxed">
                Soluzioni pensate per esigenze operative reali, senza teoria
                inutile.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-3">Supporto professionale</h3>
              <p className="text-slate-300 leading-relaxed">
                Ti accompagniamo nella scelta e nell’applicazione corretta del
                prodotto.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold mb-3">Versatilità d’uso</h3>
              <p className="text-slate-300 leading-relaxed">
                Un sistema adatto ad acqua, superfici, impianti e protocolli di
                disinfezione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
          Contatti
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          Vuoi capire se ClorOX2 è adatto alla tua attività?
        </h2>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Contattaci per ricevere informazioni commerciali e applicative sulle
          soluzioni Standard Water.
        </p>

        <a
          href="mailto:info@standardwater.it"
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-8 py-4 font-medium shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5"
        >
          Scrivici ora
        </a>
        <section className="bg-slate-50 border-t border-slate-200">
  <div className="max-w-6xl mx-auto px-6 py-20">

    <div className="max-w-3xl mb-12">
      <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
        Il problema
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Il vero rischio non è visibile
      </h2>

      <p className="text-lg text-slate-600">
        Batteri, biofilm e contaminazioni nell’acqua e negli impianti non si vedono,
        ma creano problemi reali: inefficienze, rischi sanitari e costi nascosti.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold mb-3">Biofilm negli impianti</h3>
        <p className="text-slate-600 text-sm">
          Strati invisibili di batteri che resistono ai trattamenti tradizionali
          e riducono l’efficacia della disinfezione.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold mb-3">Acqua contaminata</h3>
        <p className="text-slate-600 text-sm">
          Presenza di microrganismi che può compromettere qualità, sicurezza e
          continuità operativa.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold mb-3">Costi nascosti</h3>
        <p className="text-slate-600 text-sm">
          Manutenzioni frequenti, inefficienze e problemi ricorrenti che
          aumentano i costi nel tempo.
        </p>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}