'use client'

import { useEffect, useState, useRef } from 'react'
import { Target, Palette, BarChart2, Send, CheckCircle2, Clock, Zap } from 'lucide-react'

const tasks = [
    { icon: Target,   label: 'Research & Analyse', sub: 'Målgruppe & konkurrenter' },
    { icon: Palette,  label: 'Ad Creative',         sub: 'Static ads til Facebook & Meta' },
    { icon: BarChart2, label: 'CRO Gennemgang',     sub: 'Webshop & checkout' },
    { icon: Send,     label: 'Levering',             sub: 'Revision & godkendelse' },
]

const FILL_SPEED = 25   // ms per tick
const FILL_STEP  = 1.8  // % per tick  → ~1.4s to reach 100
const HOLD_MS    = 900  // pause before moving to next task
const RESET_MS   = 2200 // pause after all done before loop

export default function HeroWorkflow() {
    const [mounted,   setMounted]   = useState(false)
    const [doneUntil, setDoneUntil] = useState(0)   // tasks 0..doneUntil-1 are done
    const [active,    setActive]    = useState(0)   // index of the animating task
    const [progress,  setProgress]  = useState(0)   // 0–100
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const intRef   = useRef<ReturnType<typeof setInterval> | null>(null)

    const clear = () => {
        if (intRef.current)   clearInterval(intRef.current)
        if (timerRef.current) clearTimeout(timerRef.current)
    }

    const runTask = (taskIdx: number) => {
        setActive(taskIdx)
        setProgress(0)
        intRef.current = setInterval(() => {
            setProgress(p => {
                if (p + FILL_STEP >= 100) {
                    clearInterval(intRef.current!)
                    // mark done, move on after hold
                    timerRef.current = setTimeout(() => {
                        setDoneUntil(taskIdx + 1)
                        const next = taskIdx + 1
                        if (next < tasks.length) {
                            runTask(next)
                        } else {
                            // all done – reset loop
                            timerRef.current = setTimeout(() => {
                                setDoneUntil(0)
                                setProgress(0)
                                runTask(0)
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
        timerRef.current = setTimeout(() => runTask(0), 700)
        return clear
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
            {/* Floating badge – top right */}
            <div
                className="absolute -top-4 -right-4 z-10 flex items-center gap-2 bg-neutral-900 border border-neutral-700/60 rounded-xl px-3.5 py-2.5 shadow-2xl animate-float"
                style={{ animationDuration: '6s' }}
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-white whitespace-nowrap">Tilgængelig nu</span>
            </div>

            {/* Main card */}
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/60">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-brand-600/15 border border-brand-600/25 flex items-center justify-center">
                            <Zap className="w-3.5 h-3.5 text-brand-400" />
                        </div>
                        <span className="text-sm font-semibold text-white">Konvertio Workflow</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-600/60" />
                    </div>
                </div>

                {/* Task list */}
                <div className="p-4 space-y-2.5">
                    {tasks.map((task, i) => {
                        const Icon    = task.icon
                        const isDone  = i < doneUntil
                        const isActive = i === active && !isDone
                        const barW    = isDone ? 100 : isActive ? progress : 0

                        return (
                            <div
                                key={task.label}
                                className={`rounded-xl p-3.5 border transition-all duration-500 ${
                                    isActive ? 'bg-brand-600/8 border-brand-600/25'
                                    : isDone  ? 'bg-neutral-800/30 border-neutral-700/30'
                                    :           'bg-neutral-800/15 border-neutral-800/40'
                                }`}
                                style={{
                                    opacity:   mounted ? 1 : 0,
                                    transform: mounted ? 'translateY(0)' : 'translateY(8px)',
                                    transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, background-color 0.5s, border-color 0.5s`,
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500 ${
                                        isActive ? 'bg-brand-600/20 border border-brand-600/30'
                                        : isDone  ? 'bg-green-500/10 border border-green-500/20'
                                        :           'bg-neutral-800/60 border border-neutral-700/40'
                                    }`}>
                                        {isDone
                                            ? <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            : <Icon className={`w-4 h-4 transition-colors duration-500 ${isActive ? 'text-brand-400' : 'text-neutral-600'}`} />
                                        }
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <span className={`text-xs font-semibold transition-colors duration-500 ${isActive ? 'text-white' : isDone ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                {task.label}
                                            </span>
                                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full transition-all duration-500 ${
                                                isActive ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20'
                                                : isDone  ? 'bg-green-500/10 text-green-400'
                                                :           'bg-neutral-800 text-neutral-600'
                                            }`}>
                                                {isDone ? 'Godkendt' : isActive ? 'Aktiv' : 'Afventer'}
                                            </span>
                                        </div>
                                        <p className={`text-[11px] mb-2 transition-colors duration-500 ${isActive ? 'text-neutral-400' : isDone ? 'text-neutral-500' : 'text-neutral-700'}`}>
                                            {task.sub}
                                        </p>
                                        {(isActive || isDone) && (
                                            <div className="h-1 rounded-full bg-neutral-800/60 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${isDone ? 'bg-green-500/70' : 'bg-brand-500'}`}
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
                <div className="px-5 py-3.5 border-t border-neutral-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-neutral-600" />
                        <span className="text-xs text-neutral-600">Levering: 2-4 hverdage</span>
                    </div>
                    <span className="text-xs font-medium text-brand-400">Fast pris</span>
                </div>
            </div>

            {/* Floating badge – bottom left */}
            <div
                className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2.5 bg-neutral-900 border border-neutral-700/60 rounded-xl px-3.5 py-2.5 shadow-2xl animate-float"
                style={{ animationDuration: '8s', animationDelay: '1.5s' }}
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
