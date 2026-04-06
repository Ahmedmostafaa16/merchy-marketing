import React from 'react';

function Privacy() {
  return (
    <main className="bg-grid min-h-screen">
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-28 lg:px-10">
        <p className="text-sm text-purple-400">Privacy</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          At Merchy, we respect your privacy and treat your data with care.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-card/70 p-5 text-base text-white">
          <p className="font-semibold">
            We do NOT sell, rent, or share customer data with third parties.
          </p>
          <p className="mt-2 font-semibold">
            We do NOT leak or misuse any user or store data.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
            <p className="mt-2 text-sm text-gray-400">
              Store data (Shopify data like products, inventory, sales)
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Email (only if you provide it for notifications)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">How We Use Data</h2>
            <p className="mt-2 text-sm text-gray-400">Forecasting &amp; analytics</p>
            <p className="mt-2 text-sm text-gray-400">Improving app performance</p>
            <p className="mt-2 text-sm text-gray-400">Sending notifications (if enabled)</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Data Protection</h2>
            <p className="mt-2 text-sm text-gray-400">Secure storage</p>
            <p className="mt-2 text-sm text-gray-400">No unauthorized access</p>
            <p className="mt-2 text-sm text-gray-400">Industry-standard practices</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
            <p className="mt-2 text-sm text-gray-400">Shopify APIs</p>
            <p className="mt-2 text-sm text-gray-400">Hosting (e.g. Vercel, Railway)</p>
            <p className="mt-2 text-sm text-gray-400">Email providers (Zoho)</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">User Control</h2>
            <p className="mt-2 text-sm text-gray-400">Users can stop notifications anytime</p>
            <p className="mt-2 text-sm text-gray-400">Can uninstall app → data removed</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-2 text-sm text-gray-400">support@merchyapp.online</p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
