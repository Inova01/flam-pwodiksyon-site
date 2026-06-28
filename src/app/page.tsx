import Link from "next/link";

export default function RootPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-6 text-center text-charcoal">
      <div>
        <h1 className="font-display text-5xl font-black">Flam Pwodiksyon</h1>
        <p className="mt-4 text-ash">Redirection vers la version française du site.</p>
        <Link className="mt-6 inline-flex rounded-full bg-charcoal px-5 py-3 font-black text-cream" href="/fr/">
          Ouvrir le site
        </Link>
        <meta httpEquiv="refresh" content="0; url=/fr/" />
      </div>
    </main>
  );
}
