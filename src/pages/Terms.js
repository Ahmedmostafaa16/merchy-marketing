import React from 'react';

function Terms() {
  return (
    <main className="bg-grid min-h-screen">
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-28 lg:px-10">
        <p className="text-sm text-purple-400">Terms</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          By using Merchy, you agree to these terms and understand how the service is intended to be used.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white">Use of Service</h2>
            <p className="mt-2 text-sm text-gray-400">For analytics and forecasting only</p>
            <p className="mt-2 text-sm text-gray-400">You are responsible for final inventory decisions</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">No Guarantees</h2>
            <p className="mt-2 text-sm text-gray-400">Forecasts are estimates, not exact predictions</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Account Responsibility</h2>
            <p className="mt-2 text-sm text-gray-400">You are responsible for your Shopify store and data</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-2 text-sm text-gray-400">
              Merchy is not liable for losses or business decisions
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Termination</h2>
            <p className="mt-2 text-sm text-gray-400">We can suspend misuse</p>
            <p className="mt-2 text-sm text-gray-400">Users can uninstall anytime</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Changes</h2>
            <p className="mt-2 text-sm text-gray-400">Terms may be updated</p>
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

export default Terms;
