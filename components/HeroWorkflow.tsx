'use client'

import { useEffect, useState, useRef } from 'react'
import { Search, Target, Layers, TrendingUp, RotateCcw, Clock } from 'lucide-react'

const phases = [
    { icon: Search,      label: 'Research & Analyse',        sub: 'Målgruppe, marked & indsigter' },
    { icon: Target,      label: 'Strategisk Retning',         sub: 'Mål, budskab & tilgang' },
    { icon: Layers,      label: 'Udarbejdelse',               sub: 'Indhold, design & kreativ' },
    { icon: TrendingUp,  label: 'Konverteringsoptimering',    sub: 'Test, data & forbedring' },
    { icon: RotateCcw,   label: 'Revision & Iteration',       sub: 'Feedback & løbende udvikling' },
]

const FILL_SPEED = 28
const FILL_STEP  = 1.6
const HOLD_MS    = 800
const RESET_MS   = 2000

export default function HeroWorkflow() {
    const [mounted,   setMounted]   = useState(false)
    const [doneUntil, setDoneUntil] = useState(0)
    const [active,    setActive]    = useState(0)
    const [progress,  setProgress]  = useState(0)
    const intRef   = useRef<ReturnType<typeof setInterval> | null>(null)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clear = () => {
        if (intRef.current)   clearInterval(intRef.current)
        if (timerRef.current) clearTimeout(timerRef.current)
    }

    const runPhase = (idx: number) => {
        setActive(idx)
        setProgress(0)
        intRef.current = setInterval(() => {
            setProgress(p => {
                if (p + FILL_STEP >= 100) {
                    clearInterval(intRef.current!)
                    timerRef.current = setTimeout(() => {
                        setDoneUntil(idx + 1)
                        const next = idx + 1
                        if (next < phases.length) {
                            runPhase(next)
                        } else {
                            timerRef.current = setTimeout(() => {
                                setDoneUntil(0)
                                setProgress(0)
                                runPhase(0)
                            }, RESET_MS)
                        }
                    }, HOLD_MS)
                    return 100
                }
                return p + FILL_STEP
            })
        }, FILL_SPEED)
    }

    useEffect(() => {
        setMounted(true)
        timerRef.current = setTimeout(() => runPhase(0), 600)
        return clear
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
            {/* Main card */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/60">
                    <span className="text-sm font-semibold text-white tracking-tight">Min udviklingsproces</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-500">
                            Trin {Math.min(active + 1, phases.length)}/{phases.length}
                        </span>
                        <div className="flex gap-1">
                            {phases.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 rounded-full transition-all duration-500 ${
                                        i < doneUntil
                                            ? 'w-4 bg-brand-500'
                                            : i === active
                                            ? 'w-4 bg-brand-500/60'
                                            : 'w-2 bg-neutral-700'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Phase list */}
                <div className="p-4 space-y-2">
                    {phases.map((phase, i) => {
                        const Icon    = phase.icon
                        const isDone  = i < doneUntil
                        const isActive = i === active && !isDone
                        const barW    = isDone ? 100 : isActive ? progress : 0

                        return (
                            <div
                                key={phase.label}
                                className={`rounded-xl p-3 border transition-all duration-500 ${
                                    isActive ? 'bg-brand-600/8 border-brand-600/20'
                                    : isDone  ? 'bg-neutral-800/20 border-neutral-700/20'
                                    :           'bg-transparent border-neutral-800/30'
                                }`}
                                style={{
                                    opacity:   mounted ? 1 : 0,
                                    transform: mounted ? 'translateY(0)' : 'translateY(6px)',
                                    transition: `opacity 0.35s ease ${i * 70}ms, transform 0.35s ease ${i * 70}ms, background-color 0.5s, border-color 0.5s`,
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    {/* Step number + icon */}
                                    <div className={`relative w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                                        isActive ? 'bg-brand-600/20 border border-brand-600/30'
                                        : isDone  ? 'bg-green-500/8 border border-green-500/15'
                                        :           'bg-neutral-800/40 border border-neutral-800/60'
                                    }`}>
                                        <Icon className={`w-3.5 h-3.5 transition-colors duration-500 ${
                                            isActive ? 'text-brand-400' : isDone ? 'text-green-400/70' : 'text-neutral-700'
                                        }`} />
                                        <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-white text-[8px] font-bold flex items-center justify-center transition-all duration-300 ${
                                            isDone ? 'bg-green-500' : isActive ? 'bg-brand-600' : 'bg-neutral-700'
                                        }`}>
                                            {isDone ? '✓' : i + 1}
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className={`text-xs font-semibold leading-tight transition-colors duration-500 ${
                                                isActive ? 'text-white' : isDone ? 'text-neutral-400' : 'text-neutral-600'
                                            }`}>
                                                {phase.label}
                                            </span>
                                            {(isActive || isDone) && (
                                                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 transition-all duration-500 ${
                                                    isActive ? 'text-brand-400 bg-brand-500/10 border border-brand-500/15'
                                                    :           'text-neutral-600 bg-neutral-800/60'
                                                }`}>
                                                    {isDone ? `Trin ${i + 1}` : `Trin ${i + 1}`}
                                                </span>
                                            )}
                                        </div>
                                        {isActive && (
                                            <p className="text-[10px] text-neutral-500 mt-0.5 leading-tight">{phase.sub}</p>
                                        )}
                                        {(isActive || isDone) && (
                                            <div className="h-0.5 rounded-full bg-neutral-800/50 overflow-hidden mt-1.5">
                                                <div
                                                    className={`h-full rounded-full ${isDone ? 'bg-green-500/50' : 'bg-brand-500'}`}
                                                    style={{ width: `${barW}%`, transition: isDone ? 'width 0.3s ease' : 'none' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-neutral-800/60 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-neutral-700" />
                    <span className="text-[11px] text-neutral-600">Transparent proces</span>
                </div>
            </div>

            {/* Floating bottom badge */}
            <div
                className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2.5 bg-neutral-900 border border-neutral-700/60 rounded-xl px-3.5 py-2.5 shadow-2xl animate-float"
                style={{ animationDuration: '8s', animationDelay: '1s' }}
            >
                <div className="flex -space-x-1">
                    {['B','F','R'].map((l) => (
                        <div key={l} className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 border border-neutral-900 flex items-center justify-center">
                            <span className="text-white text-[9px] font-bold">{l}</span>
                        </div>
                    ))}
                </div>
                <span className="text-xs text-neutral-400">Tilfredse kunder</span>
            </div>
        </div>
    )
}
