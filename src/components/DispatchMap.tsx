import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { AREAS, SHOP, km, waLink, type Lang } from "../content";

const W = 540;
const H = 560;
const LON = [77.03, 77.14];
const LAT = [28.392, 28.502];
const proj = (lat: number, lon: number) => [((lon - LON[0]) / (LON[1] - LON[0])) * W, H - ((lat - LAT[0]) / (LAT[1] - LAT[0])) * H] as const;

// Approximate traces of the arterial roads, drawn as context only.
const ROADS = [
  [[28.5, 77.1015], [28.465, 77.1005], [28.43, 77.0995], [28.418, 77.098]],
  [[28.418, 77.098], [28.405, 77.083], [28.394, 77.066]],
  [[28.502, 77.072], [28.47, 77.06], [28.44, 77.047], [28.41, 77.035]],
  [[28.4348, 77.04], [28.4348, 77.0839], [28.437, 77.1]],
];

export function DispatchMap({ lang, t }: { lang: Lang; t: { distTitle: string; distBody: string; distUnit: string; distAsk: string; distWa: (a: string) => string; googleReview: string } }) {
  const [id, setId] = useState("dlf5");
  const reduced = useReducedMotion();
  const area = AREAS.find((a) => a.id === id)!;
  const d = km(SHOP, area);
  const [sx, sy] = proj(SHOP.lat, SHOP.lon);
  const [ax, ay] = proj(area.lat, area.lon);
  const mx = (sx + ax) / 2 - (ay - sy) * 0.18;
  const my = (sy + ay) / 2 + (ax - sx) * 0.18;
  const route = `M ${sx} ${sy} Q ${mx} ${my} ${ax} ${ay}`;
  const name = lang === "hi" ? area.hi : area.en;

  return (
    <section className="relative mx-auto grid max-w-[1240px] gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:py-36">
      <div>
        <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.01em] text-balance uppercase">{t.distTitle}</h2>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-2">{t.distBody}</p>

        <div role="radiogroup" aria-label={t.distTitle} className="mt-8 flex flex-wrap gap-2">
          {AREAS.filter((a) => a.id !== "s52").map((a) => {
            const on = a.id === id;
            return (
              <button
                key={a.id}
                role="radio"
                aria-checked={on}
                onClick={() => setId(a.id)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-[15px] font-medium transition-colors duration-200 active:scale-[0.97] ${
                  on ? "border-water bg-water text-night" : "border-line bg-night-2/60 text-ink-2 hover:border-water/50 hover:text-ink"
                }`}
              >
                {lang === "hi" ? a.hi : a.en}
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-end gap-4 border-t border-line pt-6">
          <motion.span
            key={id}
            initial={reduced ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(4rem,9vw,6rem)] font-semibold leading-[0.85] tabular-nums text-water"
          >
            {d.toFixed(1)}
          </motion.span>
          <span className="pb-2 text-ink-2">
            {t.distUnit}
            <br />
            <span className="text-ink">{name}</span>
          </span>
        </div>
        <a
          href={waLink(t.distWa(name))}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3.5 text-[16px] font-semibold text-[#062a14] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <WhatsappLogo size={20} weight="fill" />
          {t.distAsk}
        </a>
      </div>

      <div className="relative overflow-hidden rounded-[14px] border border-line bg-night-2/70">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={`${name}: ${d.toFixed(1)} km`}>
          <defs>
            <pattern id="g" width="27" height="28" patternUnits="userSpaceOnUse">
              <path d="M27 0H0V28" fill="none" stroke="rgb(255 255 255 / 0.05)" />
            </pattern>
            <radialGradient id="halo">
              <stop offset="0" stopColor="#42c6ff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#42c6ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width={W} height={H} fill="url(#g)" />
          {ROADS.map((r, i) => (
            <polyline key={i} points={r.map(([la, lo]) => proj(la, lo).join(",")).join(" ")} fill="none" stroke="rgb(200 200 196 / 0.2)" strokeWidth={i === 0 ? 5 : 3} strokeLinecap="round" strokeLinejoin="round" />
          ))}
          <circle cx={sx} cy={sy} r={90} fill="url(#halo)" />
          {AREAS.filter((a) => a.id !== "s52").map((a) => {
            const [x, y] = proj(a.lat, a.lon);
            const on = a.id === id;
            return (
              <g key={a.id} onClick={() => setId(a.id)} className="cursor-pointer">
                <circle cx={x} cy={y} r={on ? 7 : 4.5} fill={on ? "#42c6ff" : "#8c8b87"} />
                <text x={x + 11} y={y + 4} fontSize="13" fill={on ? "#f1f0ed" : "#8c8b87"} fontFamily="Mukta, sans-serif">
                  {lang === "hi" ? a.hi : a.en}
                </text>
              </g>
            );
          })}
          <motion.path
            key={id}
            d={route}
            fill="none"
            stroke="#42c6ff"
            strokeWidth={3.5}
            strokeLinecap="round"
            initial={reduced ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <g>
            <circle cx={sx} cy={sy} r={11} fill="#111213" stroke="#42c6ff" strokeWidth={3} />
            <circle cx={sx} cy={sy} r={4} fill="#42c6ff" />
            <text x={sx - 14} y={sy + 30} fontSize="14" fontWeight="600" fill="#f1f0ed" textAnchor="end" fontFamily="Mukta, sans-serif">
              {lang === "hi" ? "गणेश जी की दुकान" : "Ganesh's shop"}
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
