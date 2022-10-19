import { useState, useEffect } from "react";
import check from "./images/icon-check.svg";

function App() {
  const [valor, setValor] = useState(16);
  const [checked, setChecked] = useState(false);

  const MAX = 32;
  const MIN = 0;
  const STEP = 16;

  const handleChange = (e) => {
    setValor(e.target.value);
  };

  const formatearValor = (valor) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(valor);
  };

  const totalDescontar = () => {
    const descuento = valor * 0.25;
    if (checked) {
      setValor(valor - descuento);
    } else {
      setValor(16);
    }
  };

  useEffect(() => {
    totalDescontar();
  }, [checked]);

  return (
    <main className="flex flex-col gap-5 max-w-[350px] sm:max-w-xl w-[500px] sm:gap-10">
      <section className="text-center">
        <h1 className="text-xl font-bold text-cyan-900 ">
          Simple , traffic-based pricing
        </h1>
        <p className="py-4 text-gray-600 text-sm font-semibold">
          Sign-up for our 30-day trial. <br className="sm:hidden"/> No credit card required.
        </p>
      </section>
      <section className="bg-white flex flex-col gap-6 py-6 px-7 rounded-xl shadow-xl md:">
        <article className="range text-center pb-4">
          <div className="sm:grid grid-rows-2 grid-cols-2 items-center">
            <h2 className="font-semibold tracking-wide text-xs text-gray-400 uppercase py-4 sm:justify-self-start">
              100k Pageviews
            </h2>
            <div className="range-container sm:col-span-2">
              <input
                onChange={handleChange}
                type="range"
                className="w-full h-6 bg-gray-500 accent-green-500 hover:accent-green-200"
                max={MAX}
                min={MIN}
                value={valor}
                step={STEP}
              />
            </div>
            <p className="font-bold text-3xl py-4 flex justify-center items-center gap-3 sm:col-start-2 col-end-3 row-start-1 ">
              {formatearValor(valor)}{" "}
              <span className="font-normal text-base text-gray-400">
                / month
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center text-xs text-gray-400 py-4 md:justify-center gap-3">
            <p className="font-light">Monthly Billing</p>
            <input
              type="checkbox"
              id="checkbox"
              onChange={(e) => setChecked(e.target.checked)}
            />
            <div className="toogle-container">
              <label className="toogle" htmlFor="checkbox" />
            </div>
            <p className="font-light">Year Billing</p>
            <small className="badge font-light text-red-500 bg-orange-200 px-1 rounded-xl">
              -25% <span className="hidden sm:inline">discount</span>
            </small>
          </div>
        </article>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:py-5">
        <ul className="flex justify-center flex-col text-center text-gray-400 text-sm gap-3 sm:items-start">
          <li className="icon-li">
            <img src={check} alt="icon image" /> Unlimited wesites
          </li>
          <li className="icon-li">
            <img src={check} alt="icon image" />
            100% data ownership
          </li>
          <li className="icon-li">
            <img src={check} alt="icon image" />
            Email reports
          </li>
        </ul>
        <button className="bg-slate-700 text-sky-200 text-sm py-3 px-6 rounded-3xl hover:text-white">
          Start my trial
        </button>
        </div>
      </section>
    </main>
  );
}

export default App;
