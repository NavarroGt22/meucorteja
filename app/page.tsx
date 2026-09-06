'use client'

import { useState } from 'react'
import Image from 'next/image'

const CONTACT_EMAIL = 'meucorteja@gmail.com'

const features = [
  {
    title: 'Agendamento com horários',
    text: 'Seu cliente escolhe o serviço, profissional e horário sem precisar mandar mensagem.',
    image: '/screenshots/4-agendamento.png',
    alt: 'Agendamento online do cliente no MeuCorteJá',
  },
  {
    title: 'Fila dinâmica',
    text: 'Para quem chegou sem marcar: ordem de chegada, previsão e status em um só lugar.',
    image: '/screenshots/05-fila.png',
    alt: 'Fila dinâmica do cliente no MeuCorteJá',
  },
  {
    title: 'Painel do salão',
    text: 'Serviços, equipe, agenda e clientes organizados para a rotina da operação.',
    image: '/screenshots/04-admin-dash.png',
    alt: 'Dashboard do painel admin MeuCorteJá',
  },
  {
    title: 'Página do salão',
    text: 'Um link próprio para apresentar seu espaço e receber agendamentos.',
    image: '/screenshots/01-rafael-lp.png',
    alt: 'Landing page pública da Barbearia Rafael',
  },
  {
    title: 'Controles de operação',
    text: 'Bloqueie horários, altere status e mantenha o time alinhado durante o dia.',
    image: '/screenshots/05-admin-agendamento.png',
    alt: 'Agenda do dia no painel MeuCorteJá',
  },
]

function ProductShot({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`product-shot ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 560px" priority={priority} />
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-inner">
        <nav className="nav">
          <a href="#inicio" className="brand">
            MeuCorte<span>Já</span>
          </a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#produto" onClick={() => setMenuOpen(false)}>
              O produto
            </a>
            <a href="#funciona" onClick={() => setMenuOpen(false)}>
              Como funciona
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="nav-cta">
              Falar com a gente <span>↗</span>
            </a>
          </div>
          <button
            className="menu-button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '×' : '—'}
          </button>
        </nav>

        <div className="hero-content hero-content-solo">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> Operação mais leve, salão mais cheio
            </p>
            <h1>
              O seu salão,
              <br />
              <em>no ritmo certo.</em>
            </h1>
            <p className="hero-text">
              Agendamento, fila e gestão em um só lugar. O MeuCorteJá organiza o dia a dia para você
              cuidar do que realmente importa: o seu cliente.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="button button-light">
              Falar no e-mail <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-note">
          <span>Feito para barbearias e salões que não param.</span>
          <span className="line" />
          <span>meucorteja.com</span>
        </div>
        </div>
      </section>

      <section className="intro shell" id="funciona">
        <div className="section-kicker">01 — Como funciona</div>
        <div className="intro-heading">
          <h2>
            Menos improviso.
            <br />
            <em>Mais dia a dia.</em>
          </h2>
          <p>
            O MeuCorteJá transforma as tarefas que tomam tempo em uma experiência simples para quem
            agenda, atende e administra.
          </p>
        </div>
        <div className="steps">
          <article>
            <b>01</b>
            <h3>O cliente escolhe</h3>
            <p>Agenda ou entra na fila pelo link do seu salão, de onde estiver.</p>
          </article>
          <article>
            <b>02</b>
            <h3>A equipe organiza</h3>
            <p>Você gerencia horários, serviços, profissionais e clientes pelo painel.</p>
          </article>
          <article>
            <b>03</b>
            <h3>O dia acontece</h3>
            <p>Todo mundo acompanha o atendimento, a fila e a operação em tempo real.</p>
          </article>
        </div>
      </section>

      <section className="product-section" id="produto">
        <div className="shell">
          <div className="section-kicker">02 — O produto</div>
          <div className="section-header">
            <h2>
              Feito para a
              <br />
              <em>rotina real.</em>
            </h2>
            <p>
              Do primeiro clique ao último atendimento. Cada parte do MeuCorteJá foi pensada para
              caber no seu dia.
            </p>
          </div>
          <div className="feature-list">
            {features.map((feature, index) => (
              <article className="feature-row" key={feature.title}>
                <div className="feature-number">0{index + 1}</div>
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
                <div className="feature-visual">
                  <ProductShot
                    src={feature.image}
                    alt={feature.alt}
                    className="product-shot-feature"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience shell">
        <div className="section-kicker">03 — Para quem é</div>
        <div className="audience-content">
          <h2>
            Seu jeito de atender
            <br />
            <em>merece um sistema à altura.</em>
          </h2>
          <div className="audience-list">
            <p>
              <span>01</span>
              <b>Barbearias</b>
              <small>Da cadeira ao caixa, tudo no fluxo da sua barbearia.</small>
            </p>
            <p>
              <span>02</span>
              <b>Salões de beleza</b>
              <small>Uma visão clara para serviços, profissionais e horários.</small>
            </p>
            <p>
              <span>03</span>
              <b>Unidades em movimento</b>
              <small>Um link próprio para cada espaço e para cada cliente.</small>
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="cta-inner shell">
          <p className="eyebrow">
            <i /> Vamos conversar
          </p>
          <h2>
            Quer o MeuCorteJá
            <br />
            <em>no seu salão?</em>
          </h2>
          <p>
            Conte um pouco sobre a sua operação. A gente mostra como o MeuCorteJá pode fazer parte
            dela.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="button button-dark">
            {CONTACT_EMAIL} <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <a href="#inicio" className="brand">
          MeuCorte<span>Já</span>
        </a>
        <div>
          <span>meucorteja.com</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <span>© {new Date().getFullYear()} MeuCorteJá</span>
      </footer>
    </main>
  )
}
