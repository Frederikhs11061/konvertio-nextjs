'use client'

import { useEffect, useState } from 'react'
import { Target, Palette, BarChart2, Send, CheckCircle2, Clock, Zap } from 'lucide-react'

const tasks = [
    {
        icon: Target,
        label: 'Research & Analyse',
        sub: 'Målgruppe & konkurrenter',
        status: 'done',
        progress: 100,
    },
    {
        icon: Palette,
        label: 'Ad Creative',
        sub: 'Static ads til Facebook & Meta',
        status: 'active',
        progress: 65,
    },
    {
        icon: BarChart2,
        label: 'CRO Gennemgang',
        sub: 'Webshop & checkout',
        status: 'pending',
        progress: 0,
    },
    {
        icon: Send,
        label: 'Levering',
        sub: 'Revision & godkendelse',
        status: 'pending',
        progress: 0,
    },
]

export default function HeroWorkflow() {
    const [mounted, setMounted] = useState(false)
    const [activeProgress, setActiveProgress] = useState(0)

    useEffect(() => {
        setMounted(true)
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setActiveProgress((p) => {
                    if (p >= 65) {
                        clearInterval(interval)
                        return 65
                    }
                    return p + 2
                })
            }, 30)
            return () => clearInterval(interval)
        }, 600)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
            {/* Floating badge - top */}
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
                        const Icon = task.icon
                        const isDone = task.status === 'done'
                        const isActive = task.status === 'active'
                        const progress = isActive ? activeProgress : isDone ? 100 : 0

                        return (
                            <div
                                key={task.label}
                                className={`rounded-xl p-3.5 border transition-all duration-500 ${
                                    isActive
                                        ? 'bg-brand-600/8 border-brand-600/25'
                                        : isDone
                                        ? 'bg-neutral-800/30 border-neutral-700/30'
                                        : 'bg-neutral-800/15 border-neutral-800/40'
                                }`}
                                style={{
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? 'translateY(0)' : 'translateY(8px)',
                                    transition: `all 0.4s ease ${i * 80}ms`,
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                        isActive ? 'bg-brand-600/20 border border-brand-600/30' :
                                        isDone ? 'bg-green-500/10 border border-green-500/20' :
                                        'bg-neutral-800/60 border border-neutral-700/40'
                                    }`}>
                                        {isDone
                                            ? <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            : <Icon className={`w-4 h-4 ${isActive ? 'text-brand-400' : 'text-neutral-600'}`} />
                                        }
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <span className={`text-xs font-semibold ${isActive ? 'text-white' : isDone ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                {task.label}
                                            </span>
                                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                                                isActive ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20' :
                                                isDone ? 'bg-green-500/10 text-green-400' :
                                                'bg-neutral-800 text-neutral-600'
                                            }`}>
                                                {isDone ? 'Godkendt' : isActive ? 'Aktiv' : 'Afventer'}
                                            </span>
                                        </div>
                                        <p className={`text-[11px] mb-2 ${isActive ? 'text-neutral-400' : isDone ? 'text-neutral-500' : 'text-neutral-700'}`}>
                                            {task.sub}
                                        </p>
                                        {(isActive || isDone) && (
                                            <div className="h-1 rounded-full bg-neutral-800/60 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-700 ease-out ${isDone ? 'bg-green-500/70' : 'bg-brand-500'}`}
                                                    style={{ width: `${progress}%` }}
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

            {/* Floating badge - bottom */}
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
