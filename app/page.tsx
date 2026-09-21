'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { CONTACT_EMAIL, FAQ_ITEMS } from '@/lib/seo'

const features = [
  {
    title: 'Agendamento com horários',
    text: 'Seu cliente escolhe o serviço, profissional e horário sem precisar mandar mensagem.',
    image: '/screenshots/4-agendamento.png',
    alt: 'Tela de agendamento online do cliente no sistema MeuCorteJá',
  },
  {
    title: 'Fila dinâmica',
    text: 'Para quem chegou sem marcar: ordem de chegada, previsão e status em um só lugar.',
    image: '/screenshots/05-fila.png',
    alt: 'Tela de fila dinâmica do cliente no sistema MeuCorteJá',
  },
  {
    title: 'Painel do salão',
    text: 'Serviços, equipe, agenda e clientes organizados para a rotina da operação.',
    image: '/screenshots/04-admin-dash.png',
    alt: 'Dashboard do painel administrativo do MeuCorteJá',
  },
  {
    title: 'Página do salão',
    text: 'Um link próprio para apresentar seu espaço e receber agendamentos.',
    image: '/screenshots/01-rafael-lp.png',
    alt: 'Página pública de agendamento da Barbearia Rafael no MeuCorteJá',
  },
  {
    title: 'Controles de operação',
    text: 'Bloqueie horários, altere status e mantenha o time alinhado durante o dia.',
    image: '/screenshots/05-admin-agendamento.png',
    alt: 'Agenda do dia no painel de operação do MeuCorteJá',
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
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 800px) 100vw, 560px"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
      />
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  return (
    <>
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner">
            <header>
              <nav className="nav" aria-label="Principal">
                <a href="#inicio" className="brand">
                  MeuCorte<span>Já</span>
                </a>
                <div id={menuId} className={`nav-links ${menuOpen ? 'open' : ''}`}>
                  <a href="#produto" onClick={() => setMenuOpen(false)}>
                    O produto
                  </a>
                  <a href="#funciona" onClick={() => setMenuOpen(false)}>
                    Como funciona
                  </a>
                  <a href="#faq" onClick={() => setMenuOpen(false)}>
                    Dúvidas
                  </a>
                  <a href="#contato" onClick={() => setMenuOpen(false)} className="nav-cta">
                    Falar com a gente <span className="icon-arrow" aria-hidden="true" />
                  </a>
                </div>
                <button
                  type="button"
                  className="menu-button"
                  aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                  aria-expanded={menuOpen}
                  aria-controls={menuId}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? '×' : '—'}
                </button>
              </nav>
            </header>

            <div className="hero-content">
              <div className="hero-copy">
                <p className="eyebrow">
                  <i aria-hidden="true" /> Operação mais leve, salão mais cheio
                </p>
                <h1 id="hero-title">
                  Sistema de agendamento
                  <br />
                  para <em>barbearias e salões.</em>
                </h1>
                <p className="hero-text">
                  Agendamento, fila e gestão em um só lugar. O MeuCorteJá organiza o dia a dia para você
                  cuidar do que realmente importa: o seu cliente.
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="button button-light">
                  Falar no e-mail <span className="icon-arrow" aria-hidden="true" />
                </a>
              </div>
              <div className="hero-visual">
                <div className="hero-visual-frame">
                  <Image
                    src="/hero-corte.jpg"
                    alt="Cliente com corte platinado na barbearia"
                    fill
                    priority
                    sizes="(max-width: 800px) 90vw, 420px"
                    className="hero-visual-img"
                  />
                </div>
              </div>
            </div>

            <div className="hero-note">
              <span>Feito para barbearias e salões que não param.</span>
              <span className="line" aria-hidden="true" />
              <span>meucorteja.com</span>
            </div>
          </div>
        </section>

        <section className="intro shell" id="funciona" aria-labelledby="funciona-title">
          <div className="section-kicker">01 — Como funciona</div>
          <div className="intro-heading">
            <h2 id="funciona-title">
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

        <section className="product-section" id="produto" aria-labelledby="produto-title">
          <div className="shell">
            <div className="section-kicker">02 — O produto</div>
            <div className="section-header">
              <h2 id="produto-title">
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
                      priority={index === 0}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="audience shell" aria-labelledby="audience-title">
          <div className="section-kicker">03 — Para quem é</div>
          <div className="audience-content">
            <h2 id="audience-title">
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

        <section className="faq shell" id="faq" aria-labelledby="faq-title">
          <div className="section-kicker">04 — Dúvidas frequentes</div>
          <div className="faq-heading">
            <h2 id="faq-title">
              Perguntas sobre o
              <br />
              <em>sistema de agendamento.</em>
            </h2>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contato" aria-labelledby="contato-title">
          <div className="cta-inner shell">
            <p className="eyebrow">
              <i aria-hidden="true" /> Vamos conversar
            </p>
            <h2 id="contato-title">
              Quer o MeuCorteJá
              <br />
              <em>no seu salão?</em>
            </h2>
            <p>
              Conte um pouco sobre a sua operação. A gente mostra como o MeuCorteJá pode fazer parte
              dela.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="button button-dark">
              {CONTACT_EMAIL} <span className="icon-arrow" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a href="#inicio" className="brand brand-with-logo">
          <Image
            src="/logo-mj.png"
            alt="Logo MeuCorteJá"
            width={28}
            height={28}
            className="brand-logo"
          />
          MeuCorte<span>Já</span>
        </a>
        <div>
          <a href="https://www.lelecobarbes.com/" target="_blank" rel="noopener noreferrer">
            lelecobarbes.com
          </a>
          <a href="https://www.instagram.com/leleco_barbers" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <span>© {new Date().getFullYear()} MeuCorteJá</span>
      </footer>
    </>
  )
}
