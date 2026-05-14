import React from 'react'

export default function PageHero({ eyebrow, title, highlightWord, description }) {
  const parts = title.split(highlightWord)
  return (
    <section className="relative bg-gradient-to-br from-white via-cream to-warm pt-32 pb-32 px-8 overflow-hidden text-center">
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto relative z-20">
        <p className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-1 h-1 rounded-full bg-brand"></span>
          {eyebrow}
          <span className="w-1 h-1 rounded-full bg-brand"></span>
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal leading-tight mb-6 font-heading">
          {highlightWord ? (
            <>{parts[0]}<span className="text-brand">{highlightWord}</span>{parts[1]}</>
          ) : title}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
