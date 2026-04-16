export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Standard Water
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
  Elimina batteri, biofilm e contaminazioni nell’acqua e negli impianti
</h1>

<p className="text-lg md:text-xl text-gray-600 mb-8">
  ClorOX2 è la soluzione professionale a base di biossido di cloro utilizzata
  per la disinfezione di acqua, superfici e impianti in ambito civile,
  industriale e zootecnico.
</p>

<div className="flex flex-col sm:flex-row gap-4">
  <a
    href="#contatti"
    className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-medium"
  >
    Richiedi una consulenza
  </a>

  <a
    href="#applicazioni"
    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 font-medium"
  >
    Dove viene utilizzato
  </a>
</div>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Standard Water sviluppa soluzioni per il trattamento e la
            disinfezione in ambito civile, industriale e zootecnico, con un
            approccio pratico, professionale e orientato ai risultati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-medium"
            >
              Richiedi informazioni
            </a>

            <a
              href="#applicazioni"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 font-medium"
            >
              Scopri le applicazioni
            </a>
          </div>
        </div>
      </section>

      <section id="applicazioni" className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10">Dove interveniamo</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-3">Settore civile</h3>
              <p className="text-gray-600">
                Trattamento acqua, sanificazione e supporto operativo per
                strutture, ambienti e reti idriche.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-3">Settore industriale</h3>
              <p className="text-gray-600">
                Soluzioni per impianti, linee, circuiti e gestione professionale
                della disinfezione.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-3">Settore zootecnico</h3>
              <p className="text-gray-600">
                Applicazioni dedicate alla qualità dell’acqua e alla riduzione
                del rischio microbiologico negli allevamenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10">Perché Standard Water</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <h3 className="font-semibold mb-3">Approccio concreto</h3>
              <p className="text-gray-600">
                Niente teoria inutile: soluzioni applicabili davvero, pensate
                per esigenze operative reali.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <h3 className="font-semibold mb-3">Supporto professionale</h3>
              <p className="text-gray-600">
                Accompagniamo il cliente nella scelta, nell’utilizzo e nella
                corretta applicazione del prodotto.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <h3 className="font-semibold mb-3">Versatilità d’uso</h3>
              <p className="text-gray-600">
                Un sistema adatto a più contesti: acqua, superfici, impianti e
                protocolli di disinfezione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vuoi capire se è adatto alla tua attività?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci per ricevere informazioni commerciali e applicative su
            Aquapure e sulle soluzioni Standard Water.
          </p>

          <a
            href="mailto:info@standardwater.it"
            className="inline-flex items-center justify-center rounded-xl bg-black text-white px-8 py-4 font-medium"
          >
            Scrivici ora
          </a>
        </div>
      </section>
    </main>
  );
}