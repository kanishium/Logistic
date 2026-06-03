import React, { useState, useMemo, useEffect } from 'react';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';

/* ─── Topology ─── */
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* ─── SVG viewBox ─── */
const W = 960;
const H = 680;

/* ─── Project colors ─── */
const COL = {
    bg: '#0F0F0F',
    card: '#1A1A1A',
    orange: '#FF6B00',
    orangeLight: '#FF8C33',
    white: '#FFFFFF',
    muted: '#B0B0B0',
    cyan: '#00C8FF',
    grid: '#1E1E1E',
};

/* ─── Categories ─── */
const CATEGORIES = [
    {
        id: 'truckload',
        label: 'Truckload Services',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M3 12h1l2-7h8l2 7h1a2 2 0 012 2v3h-1.5a2.5 2.5 0 01-5 0h-3a2.5 2.5 0 01-5 0H3v-3a2 2 0 012-2z"
                    stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <circle cx="7.5" cy="17" r="1.5" fill="currentColor" />
                <circle cx="16.5" cy="17" r="1.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'drayage',
        label: 'Drayage/Grounding Facilities + Container Yards',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'distribution',
        label: 'Distribution Centers',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
        ),
    },
];

/* ═══ TRUCKLOAD — route hubs & connections ═══ */
const HUBS = {
    seattle: [-122.33, 47.61], portland: [-122.68, 45.52], losAngeles: [-118.24, 34.05],
    phoenix: [-112.07, 33.45], denver: [-104.99, 39.74], kansasCity: [-94.58, 39.1],
    dallas: [-96.8, 32.78], houston: [-95.37, 29.76], memphis: [-90.05, 35.15],
    chicago: [-87.63, 41.88], indianapolis: [-86.16, 39.77], nashville: [-86.78, 36.16],
    atlanta: [-84.39, 33.75], charlotte: [-80.84, 35.23], jacksonville: [-81.66, 30.33],
    philadelphia: [-75.17, 39.95], newark: [-74.17, 40.74], minneapolis: [-93.27, 44.98],
    stLouis: [-90.2, 38.63], elPaso: [-106.44, 31.76], saltLake: [-111.89, 40.76],
    reno: [-119.81, 39.53], sanAntonio: [-98.49, 29.42], albuquerque: [-106.65, 35.08],
};

const ROUTES = [
    ['seattle', 'portland'], ['portland', 'reno'], ['reno', 'losAngeles'], ['reno', 'saltLake'],
    ['losAngeles', 'phoenix'], ['phoenix', 'elPaso'], ['elPaso', 'sanAntonio'], ['elPaso', 'albuquerque'],
    ['albuquerque', 'denver'], ['saltLake', 'denver'], ['denver', 'kansasCity'], ['kansasCity', 'dallas'],
    ['dallas', 'houston'], ['dallas', 'sanAntonio'], ['kansasCity', 'stLouis'], ['stLouis', 'memphis'],
    ['memphis', 'dallas'], ['memphis', 'nashville'], ['kansasCity', 'minneapolis'], ['minneapolis', 'chicago'],
    ['chicago', 'indianapolis'], ['indianapolis', 'nashville'], ['nashville', 'atlanta'],
    ['atlanta', 'jacksonville'], ['atlanta', 'charlotte'], ['charlotte', 'philadelphia'],
    ['philadelphia', 'newark'], ['chicago', 'kansasCity'], ['seattle', 'minneapolis'],
    ['losAngeles', 'dallas'], ['houston', 'jacksonville'], ['indianapolis', 'philadelphia'],
];

const HUB_CITIES = Object.entries(HUBS).map(([k, c]) => ({
    id: `t-${k}`, name: k.replace(/([A-Z])/g, ' $1').toUpperCase().trim(), coordinates: c,
}));

/* ═══ DRAYAGE ═══ */
const DRAYAGE = [
    { id: 'd1', name: 'INDIANAPOLIS', coordinates: [-86.16, 39.77] },
    { id: 'd2', name: 'DALLAS', coordinates: [-96.8, 32.78] },
    { id: 'd3', name: 'RENO', coordinates: [-119.81, 39.53] },
    { id: 'd4', name: 'SAVANNAH', coordinates: [-81.1, 32.08] },
    { id: 'd5', name: 'NEWARK', coordinates: [-74.17, 40.74] },
    { id: 'd6', name: 'CHARLESTON', coordinates: [-79.93, 32.78] },
    { id: 'd7', name: 'LONG BEACH', coordinates: [-118.19, 33.77] },
    { id: 'd8', name: 'NORFOLK', coordinates: [-76.29, 36.85] },
    { id: 'd9', name: 'OAKLAND', coordinates: [-122.27, 37.8] },
    { id: 'd10', name: 'TACOMA', coordinates: [-122.44, 47.25] },
    { id: 'd11', name: 'HOUSTON', coordinates: [-95.37, 29.76] },
    { id: 'd12', name: 'MIAMI', coordinates: [-80.19, 25.76] },
];

/* ═══ DISTRIBUTION ═══ */
const DISTRO = [
    { id: 'dc1', name: 'COLUMBUS', coordinates: [-82.99, 39.96] },
    { id: 'dc2', name: 'LOUISVILLE', coordinates: [-85.76, 38.25] },
    { id: 'dc3', name: 'SALT LAKE CITY', coordinates: [-111.89, 40.76] },
    { id: 'dc4', name: 'CHARLOTTE', coordinates: [-80.84, 35.23] },
    { id: 'dc5', name: 'MINNEAPOLIS', coordinates: [-93.27, 44.98] },
    { id: 'dc6', name: 'ST. LOUIS', coordinates: [-90.2, 38.63] },
    { id: 'dc7', name: 'EL PASO', coordinates: [-106.44, 31.76] },
    { id: 'dc8', name: 'ALBUQUERQUE', coordinates: [-106.65, 35.08] },
    { id: 'dc9', name: 'JACKSONVILLE', coordinates: [-81.66, 30.33] },
    { id: 'dc10', name: 'SAN ANTONIO', coordinates: [-98.49, 29.42] },
    { id: 'dc11', name: 'DENVER', coordinates: [-104.99, 39.74] },
    { id: 'dc12', name: 'PHOENIX', coordinates: [-112.07, 33.45] },
];

/* ─── Curved line helper ─── */
function makeCurve(p1, p2) {
    if (!p1 || !p2) return '';
    const mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2;
    const dx = p2[0] - p1[0], dy = p2[1] - p1[1];
    const d = Math.sqrt(dx * dx + dy * dy);
    const off = d * 0.06;
    return `M${p1[0]},${p1[1]} Q${mx - (dy / d) * off},${my + (dx / d) * off} ${p2[0]},${p2[1]}`;
}

/* ─── Grid lines ─── */
function buildGrid(projection) {
    const lines = [];
    // Latitude lines every 5°
    for (let lat = 25; lat <= 50; lat += 5) {
        const pts = [];
        for (let lng = -130; lng <= -65; lng += 1) {
            const p = projection([lng, lat]);
            if (p) pts.push(p);
        }
        if (pts.length > 1) lines.push(pts.map((pt) => `${pt[0]},${pt[1]}`).join(' L'));
    }
    // Longitude lines every 10°
    for (let lng = -130; lng <= -65; lng += 10) {
        const pts = [];
        for (let lat = 24; lat <= 52; lat += 1) {
            const p = projection([lng, lat]);
            if (p) pts.push(p);
        }
        if (pts.length > 1) lines.push(pts.map((pt) => `${pt[0]},${pt[1]}`).join(' L'));
    }
    return lines;
}

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */
const MapSection = () => {
    const [active, setActive] = useState(new Set(['truckload', 'drayage', 'distribution']));
    const [geo, setGeo] = useState(null);

    const projection = useMemo(() => geoAlbersUsa().scale(1050).translate([W / 2, H / 2]), []);
    const pathGen = useMemo(() => geoPath().projection(projection), [projection]);
    const gridLines = useMemo(() => buildGrid(projection), [projection]);

    useEffect(() => {
        fetch(GEO_URL).then((r) => r.json())
            .then((t) => setGeo(feature(t, t.objects.countries)))
            .catch(console.error);
    }, []);

    const toggle = (id) =>
        setActive((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

    const on = (id) => active.has(id);
    const none = active.size === 0;
    const pr = (c) => projection(c);

    return (
        <section className="w-full overflow-hidden" style={{ background: COL.bg }}>
            <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row min-h-[650px]">

                {/* ════════ LEFT PANEL ════════ */}
                <div className="relative z-20 flex flex-col justify-center gap-10 px-6 md:px-10 lg:px-14 py-10 lg:py-16 lg:w-[420px] shrink-0">

                    {/* Category toggles */}
                    <div className="flex flex-col gap-3">
                        {CATEGORIES.map((cat) => {
                            const isOn = on(cat.id);
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => toggle(cat.id)}
                                    className="group flex min-h-[70px] w-fit max-w-full items-center gap-5 rounded-full border px-2 pr-8 text-left text-md font-medium leading-tight cursor-pointer transition-all duration-300 ease-out select-none hover:scale-[1.02] active:scale-[0.98]"
                                    style={{
                                        background: isOn
                                            ? 'linear-gradient(135deg, rgba(255,107,0,0.25) 0%, rgba(255,107,0,0.12) 100%)'
                                            : 'rgba(255,255,255,0.05)',
                                        color: isOn ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                                        borderColor: isOn ? 'rgba(255,107,0,0.7)' : 'rgba(255,255,255,0.1)',
                                        boxShadow: isOn ? '0 0 28px rgba(255,107,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)' : 'inset 0 1px 0 rgba(255,255,255,0.04)',
                                    }}
                                >
                                    <span
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                                        style={{
                                            background: isOn ? 'rgba(255,107,0,0.35)' : 'rgba(255,255,255,0.08)',
                                            color: isOn ? '#FF8C33' : 'rgba(255,255,255,0.4)',
                                            border: isOn ? '1px solid rgba(255,107,0,0.5)' : '1px solid rgba(255,255,255,0.1)',
                                        }}
                                    >
                                        {cat.icon}
                                    </span>

                                    <span className="max-w-[520px] whitespace-normal break-words tracking-wide">
                                        {cat.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Title + CTA */}
                    <div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1] mb-5"
                            style={{ color: COL.white, fontFamily: "'Inter', sans-serif" }}
                        >
                            3PL service areas across
                            <br />
                            North America
                        </h2>
                        <a
                            href="#locations"
                            className="group inline-flex items-center gap-3 transition-colors duration-300"
                            style={{ color: COL.orange }}
                        >
                            <span
                                className="flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(255,107,0,0.4)]"
                                style={{ borderColor: COL.orange }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                                    <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-sm font-semibold tracking-wide">Explore our strategic locations</span>
                        </a>
                    </div>
                </div>

                {/* ════════ RIGHT PANEL — MAP ════════ */}
                <div className="relative flex-1 min-h-[480px] lg:min-h-0">
                    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" className="w-full h-full">
                        <defs>
                            {/* Dot glow */}
                            <filter id="dg" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2.5" result="b" />
                                <feFlood floodColor={COL.orange} floodOpacity="0.5" result="c" />
                                <feComposite in="c" in2="b" operator="in" result="g" />
                                <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                            <filter id="dgb" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="b" />
                                <feFlood floodColor={COL.orange} floodOpacity="0.7" result="c" />
                                <feComposite in="c" in2="b" operator="in" result="g" />
                                <feMerge><feMergeNode in="g" /><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                            {/* Route glow */}
                            <filter id="rg" x="-10%" y="-10%" width="120%" height="120%">
                                <feGaussianBlur stdDeviation="2" result="b" />
                                <feFlood floodColor={COL.orange} floodOpacity="0.45" result="c" />
                                <feComposite in="c" in2="b" operator="in" result="g" />
                                <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>

                        {/* ── Country shapes ── */}
                        {geo?.features.map((f) => {
                            const nid = typeof f.id === 'string' ? parseInt(f.id, 10) : f.id;
                            const d = pathGen(f);
                            if (!d) return null;
                            const isUS = nid === 840;
                            return (
                                <path key={f.id} d={d}
                                    fill={isUS ? '#181818' : '#111'}
                                    stroke={isUS ? '#2a2a2a' : '#1a1a1a'}
                                    strokeWidth={isUS ? 0.8 : 0.4}
                                />
                            );
                        })}

                        {/* ── Grid overlay ── */}
                        {gridLines.map((lineD, i) => (
                            <path key={`grid-${i}`} d={`M${lineD}`} fill="none"
                                stroke={COL.grid} strokeWidth={0.4} opacity={0.5}
                                strokeDasharray="4 6"
                            />
                        ))}

                        {/* ═══ TRUCKLOAD: route lines + animated trucks ═══ */}
                        {(on('truckload') || none) && (
                            <g style={{ opacity: none ? 0.2 : 1, transition: 'opacity 0.5s' }}>
                                {ROUTES.map(([a, b], i) => {
                                    const p1 = pr(HUBS[a]), p2 = pr(HUBS[b]);
                                    if (!p1 || !p2) return null;
                                    const d = makeCurve(p1, p2);
                                    const routeId = `route-${i}`;
                                    return (
                                        <g key={routeId}>
                                            {/* Static route line */}
                                            <path d={d} fill="none"
                                                stroke={on('truckload') ? COL.orange : '#4a3010'}
                                                strokeWidth={on('truckload') ? 1.5 : 0.8}
                                                strokeLinecap="round"
                                                opacity={on('truckload') ? 0.7 : 0.4}
                                                filter={on('truckload') ? 'url(#rg)' : 'none'}
                                                style={{ transition: 'all 0.5s' }}
                                            />
                                            {/* Animated moving dot along route (only when active) */}
                                            {on('truckload') && (
                                                <>
                                                    <path id={routeId} d={d} fill="none" stroke="none" />
                                                    <circle r="3" fill={COL.orange} opacity={0.9}>
                                                        <animateMotion
                                                            dur={`${2.5 + (i % 4) * 0.6}s`}
                                                            repeatCount="indefinite"
                                                            begin={`${(i % 5) * 0.4}s`}
                                                        >
                                                            <mpath href={`#${routeId}`} />
                                                        </animateMotion>
                                                    </circle>
                                                    {/* Trailing glow */}
                                                    <circle r="6" fill={COL.orange} opacity={0.2}>
                                                        <animateMotion
                                                            dur={`${2.5 + (i % 4) * 0.6}s`}
                                                            repeatCount="indefinite"
                                                            begin={`${(i % 5) * 0.4}s`}
                                                        >
                                                            <mpath href={`#${routeId}`} />
                                                        </animateMotion>
                                                    </circle>
                                                </>
                                            )}
                                        </g>
                                    );
                                })}
                                {/* Hub dots */}
                                {HUB_CITIES.map((c) => {
                                    const pt = pr(c.coordinates);
                                    if (!pt) return null;
                                    return (
                                        <g key={c.id}>
                                            <circle cx={pt[0]} cy={pt[1]}
                                                r={on('truckload') ? 3 : 1.5}
                                                fill={on('truckload') ? COL.orange : '#5a3a12'}
                                                style={{ transition: 'all 0.4s' }}
                                            />
                                            {on('truckload') && (
                                                <text x={pt[0] + 7} y={pt[1] + 3} fill={COL.white} fontSize="6.5" fontWeight="600"
                                                    fontFamily="'Inter',sans-serif" letterSpacing="0.05em" opacity={0.8}
                                                    style={{ textShadow: '0 0 4px #000, 0 0 8px #000' }}>
                                                    {c.name}
                                                </text>
                                            )}
                                        </g>
                                    );
                                })}
                            </g>
                        )}

                        {/* ═══ DRAYAGE: orange dots ═══ */}
                        {(on('drayage') || none) && (
                            <g style={{ opacity: none ? 0.2 : 1, transition: 'opacity 0.5s' }}>
                                {DRAYAGE.map((loc) => {
                                    const pt = pr(loc.coordinates);
                                    if (!pt) return null;
                                    const a = on('drayage');
                                    return (
                                        <g key={loc.id}>
                                            {a && <circle cx={pt[0]} cy={pt[1]} r={10} fill={`${COL.orange}18`} className="animate-marker-pulse" />}
                                            <circle cx={pt[0]} cy={pt[1]} r={a ? 4.5 : 2.5} fill={COL.orange}
                                                filter={a ? 'url(#dgb)' : 'url(#dg)'} style={{ transition: 'r 0.4s' }} />
                                            {a && (
                                                <text x={pt[0] + 9} y={pt[1] + 3.5} fill={COL.white} fontSize="7" fontWeight="600"
                                                    fontFamily="'Inter',sans-serif" letterSpacing="0.06em"
                                                    style={{ textShadow: '0 0 5px #000, 0 0 10px #000' }}>
                                                    {loc.name}
                                                </text>
                                            )}
                                        </g>
                                    );
                                })}
                            </g>
                        )}

                        {/* ═══ DISTRIBUTION: orange dots with rings ═══ */}
                        {(on('distribution') || none) && (
                            <g style={{ opacity: none ? 0.2 : 1, transition: 'opacity 0.5s' }}>
                                {DISTRO.map((loc) => {
                                    const pt = pr(loc.coordinates);
                                    if (!pt) return null;
                                    const a = on('distribution');
                                    return (
                                        <g key={loc.id}>
                                            {a && <circle cx={pt[0]} cy={pt[1]} r={11} fill="none" stroke={COL.orange} strokeWidth={0.7} opacity={0.3} />}
                                            {a && <circle cx={pt[0]} cy={pt[1]} r={7} fill="none" stroke={COL.orange} strokeWidth={0.5} opacity={0.4} />}
                                            <circle cx={pt[0]} cy={pt[1]} r={a ? 4 : 2.5} fill={COL.orange}
                                                filter={a ? 'url(#dgb)' : 'url(#dg)'} style={{ transition: 'r 0.4s' }} />
                                            {a && (
                                                <text x={pt[0] + 9} y={pt[1] + 3.5} fill={COL.white} fontSize="7" fontWeight="600"
                                                    fontFamily="'Inter',sans-serif" letterSpacing="0.06em"
                                                    style={{ textShadow: '0 0 5px #000, 0 0 10px #000' }}>
                                                    {loc.name}
                                                </text>
                                            )}
                                        </g>
                                    );
                                })}
                            </g>
                        )}
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default MapSection;