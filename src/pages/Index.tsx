import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const features = [
  { n: "01", title: "Локации, в которые хочется возвращаться", desc: "Центр, набережная, видовые районы и удобный доступ к ключевым точкам города — от ресторанов и прогулочных маршрутов до деловых адресов." },
  { n: "02", title: "Заезд без стресса и ожидания", desc: "Поздний прилёт, плотный график или желание ни от кого не зависеть — заселяйтесь самостоятельно и в удобное время." },
  { n: "03", title: "Сервис, который чувствуется в деталях", desc: "Белоснежное бельё, удобные матрасы, оборудованная кухня, быстрый Wi‑Fi и аккуратно подготовленное пространство в каждом объекте сети." },
];

const amenities = [
  { icon: "✦", title: "Спокойный отдых", desc: "Удобные кровати, качественные матрасы, свежий текстиль и атмосфера, в которой действительно можно выспаться и восстановиться." },
  { icon: "✦", title: "Кухня для жизни, а не формальности", desc: "Посуда, базовая техника, чайник, холодильник и всё необходимое, чтобы не зависеть от графика кафе и ресторанов." },
  { icon: "✦", title: "Продуманное повседневное удобство", desc: "Быстрый интернет, хорошее освещение, удобные зоны для вещей и пространство, которое не раздражает в быту." },
];

const steps = [
  { n: "1", title: "Выбираете даты и формат", desc: "Указываете даты, количество гостей и пожелания по размещению в форме бронирования." },
  { n: "2", title: "Получаете подтверждение", desc: "Мы присылаем понятные инструкции, детали по проживанию и контакт для быстрой связи." },
  { n: "3", title: "Заезжаете самостоятельно", desc: "Без ключей, встреч и ожиданий — доступ к апартаментам приходит заранее, чтобы заезд был спокойным." },
  { n: "4", title: "Живёте в своём ритме", desc: "Если понадобится помощь, совет по городу или решение бытового вопроса, команда остаётся на связи." },
];

const reviews = [
  { text: "«После позднего прилёта особенно ценно, что всё уже организовано: инструкции понятные, заезд быстрый, в апартаментах чисто и спокойно.»", author: "Гость · поездка во Владивосток" },
  { text: "«Удобно для командировки: можно работать, спокойно отдохнуть вечером и не чувствовать себя в обезличенном гостиничном номере.»", author: "Гость · командировка" },
  { text: "«Очень приятное ощущение от поездки: хорошая локация, понятный сервис и ощущение, что о госте действительно подумали заранее.»", author: "Гость · отдых во Владивостоке" },
  { text: "«Приехали с мужем на неделю — было всё необходимое, даже мелочи, о которых обычно забывают. Кухня нормально оборудована, кровать удобная. Будем возвращаться.»", author: "Марина, Новосибирск · семейная поездка" },
  { text: "«Бронировал в последний момент, всё оформили быстро. Никаких звонков и встреч — код пришёл заранее, зашёл сам. Именно так и должно работать.»", author: "Алексей · деловая поездка" },
  { text: "«Жила 10 дней. Не ожидала, что будет так комфортно на длительный срок: есть где хранить вещи, нормальная кухня, тихо. Прямо как дома, только лучше убрано.»", author: "Екатерина · длительное проживание" },
  { text: "«Хорошее место, чтобы просто приехать и не думать об организации. Всё понятно с первых минут: где что лежит, как работает, к кому писать.»", author: "Дмитрий · первый раз во Владивостоке" },
  { text: "«Снимали для небольшой рабочей группы. Удобно, что есть кухня — не нужно каждый день идти в кафе. Интернет стабильный, звонки без проблем. Рекомендую.»", author: "Ольга · корпоративная поездка" },
];

const BrandMark = () => (
  <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ color: "var(--color-primary)", display: "block", flexShrink: 0 }}>
    <rect x="8" y="10" width="48" height="44" rx="14" stroke="currentColor" strokeWidth="3" />
    <path d="M20 40V24h14c6 0 10 3 10 8 0 5-4 8-10 8H20Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M34 32 44 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const cardStyle: React.CSSProperties = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  boxShadow: "var(--shadow-md)",
  borderRadius: "1.25rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 52,
  padding: "0 1rem",
  borderRadius: "0.875rem",
  border: "1px solid var(--color-border)",
  background: "var(--color-surface)",
  color: "var(--color-text)",
  fontFamily: "inherit",
  fontSize: "inherit",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.45rem",
  fontSize: "0.7rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
  color: "var(--color-text-muted)",
};

const CONTACT_URL = "https://functions.poehali.dev/b9d80f4a-1c45-4638-82df-bf9505eac61a";

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) { setSent(false); setError(""); setForm({ name: "", phone: "", message: "" }); }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true); setError("");
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setSent(true); }
      else { setError("Что-то пошло не так. Попробуйте ещё раз."); }
    } catch {
      setError("Ошибка сети. Проверьте соединение.");
    } finally {
      setSending(false);
    }
  };

  const inp: React.CSSProperties = {
    width: "100%", minHeight: 52, padding: "0 1rem",
    borderRadius: "0.875rem", border: "1px solid var(--color-border)",
    background: "var(--color-bg)", color: "var(--color-text)",
    fontFamily: "inherit", fontSize: "1rem", outline: "none",
  };
  const lbl: React.CSSProperties = {
    display: "block", marginBottom: "0.4rem", fontSize: "0.7rem",
    letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-text-muted)",
  };

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(4px)" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "1.25rem", boxShadow: "var(--shadow-md)", padding: "clamp(1.5rem, 4vw, 2.5rem)", width: "100%", maxWidth: 480, position: "relative" }}
      >
        <button onClick={onClose} style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: "0.25rem" }}>
          <Icon name="X" size={20} />
        </button>

        {sent ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
            <h2 style={{ fontFamily: "'Boska', Georgia, serif", fontSize: "1.75rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>Заявка отправлена!</h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>Мы свяжемся с вами в ближайшее время и поможем подобрать подходящие апартаменты.</p>
            <button onClick={onClose} style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 1.5rem", borderRadius: 999, background: "var(--color-primary)", color: "var(--color-text-inverse)", fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "'Boska', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>Связаться с нами</h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>Оставьте контакт — мы ответим и поможем выбрать апартаменты под вашу поездку.</p>
            <form onSubmit={handleSend} style={{ display: "grid", gap: "1rem" }}>
              <div>
                <label style={lbl}>Ваше имя *</label>
                <input style={inp} placeholder="Иван Иванов" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
              </div>
              <div>
                <label style={lbl}>Телефон *</label>
                <input style={inp} type="tel" placeholder="+7 900 000-00-00" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
              </div>
              <div>
                <label style={lbl}>Сообщение</label>
                <textarea style={{ ...inp, minHeight: 100, padding: "0.75rem 1rem", resize: "vertical" as const }} placeholder="Даты поездки, количество гостей, вопросы..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              {error && <p style={{ color: "#c0392b", fontSize: "0.875rem" }}>{error}</p>}
              <button type="submit" disabled={sending} style={{ minHeight: 52, borderRadius: 999, background: "var(--color-primary)", color: "var(--color-text-inverse)", fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit", opacity: sending ? 0.7 : 1 }}>
                {sending ? "Отправляем…" : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [submitting, setSubmitting] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setContactOpen(true);
    }, 400);
  };

  const btnPrimary: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    minHeight: 48, padding: "0 1.4rem", borderRadius: 999,
    background: "var(--color-primary)", color: "var(--color-text-inverse)",
    fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit",
    transition: "background 180ms ease",
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "'General Sans', Inter, sans-serif" }}>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* HEADER */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
        borderBottom: "1px solid color-mix(in srgb, var(--color-border) 70%, transparent)",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem", minHeight: 78, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <button onClick={() => scrollTo("top")} style={{ display: "inline-flex", alignItems: "center", gap: "0.875rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: "var(--color-text)" }}>
            <BrandMark />
            <span>
              <strong style={{ display: "block", fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: "inherit" }}>Prim Rooms</strong>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Сеть апартаментов для комфортных поездок</span>
            </span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button onClick={() => scrollTo("booking")} className="btn-ghost" style={{ fontSize: "0.875rem" }}>
              Выбрать даты
            </button>
            <button onClick={toggleTheme} className="btn-ghost" style={{ padding: "0 0.75rem", minHeight: 44 }} aria-label="Переключить тему">
              {theme === "dark" ? <Icon name="Sun" size={20} /> : <Icon name="Moon" size={20} />}
            </button>
            <button onClick={() => scrollTo("booking")} style={{ ...btnPrimary, minHeight: 44 }}>
              Забронировать
            </button>
          </div>
        </div>
      </header>

      <main id="content">

        {/* HERO */}
        <section id="top" style={{ padding: "clamp(3.5rem, 8vw, 7rem) 0 clamp(2.5rem, 6vw, 5rem)" }}>
          <div className="hero-grid-r" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "clamp(1.5rem, 3vw, 3rem)", alignItems: "start" }}>
            <div>
              <FadeUp>
                <div className="eyebrow" style={{ marginBottom: "1rem" }}>Владивосток · лучшие локации · онлайн-бронирование</div>
                <h1 style={{ fontSize: "clamp(2.2rem, 1.2rem + 3vw, 4.25rem)", marginBottom: "1.25rem", maxWidth: "12ch", fontFamily: "'Boska', Georgia, serif", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
                  Сеть апартаментов во Владивостоке для тех, кто ценит комфорт, стиль и спокойный сервис
                </h1>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem", maxWidth: "62ch", lineHeight: 1.6 }}>
                  Prim Rooms — это не случайные квартиры, а единая сеть апартаментов с понятным уровнем качества. Выбирайте проживание в центре или рядом с морем, бронируйте онлайн и заезжайте без лишней суеты — всё уже подготовлено для вашего приезда.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <button onClick={() => scrollTo("booking")} style={btnPrimary}>Выбрать апартаменты</button>
                  <button onClick={() => scrollTo("advantages")} className="btn-ghost" style={{ minHeight: 48, padding: "0 1.4rem" }}>Почему гости выбирают нас</button>
                </div>
              </FadeUp>

              <FadeUp delay={100}>
                <div className="hero-pts-r" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "2rem" }}>
                  {[
                    { strong: "24/7", text: "Самостоятельное заселение в удобное время без ожидания" },
                    { strong: "Стандарт сети", text: "Одинаково высокий уровень чистоты, текстиля и комплектации" },
                    { strong: "Продумано", text: "Локации, Wi‑Fi, кухня, мягкий текстиль и всё для жизни в поездке" },
                  ].map(p => (
                    <div key={p.strong} style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                      <strong style={{ display: "block", fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)", color: "var(--color-text)", marginBottom: "0.2rem", fontFamily: "'Boska', Georgia, serif", lineHeight: 1 }}>{p.strong}</strong>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{p.text}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Booking card */}
            <FadeUp delay={150}>
              <aside id="booking" style={{ ...cardStyle, padding: "clamp(1.25rem, 2vw, 2rem)" }}>
                <h2 style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)", marginBottom: "0.75rem", fontFamily: "'Boska', Georgia, serif", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Выберите апартаменты для своей поездки
                </h2>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                  Укажите даты, количество гостей и предпочтения — мы покажем подходящие варианты сети Prim Rooms.
                </p>
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Заезд</label>
                      <input type="date" name="checkin" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Выезд</label>
                      <input type="date" name="checkout" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Гости</label>
                      <select name="guests" style={inputStyle}>
                        <option>1 гость</option><option>2 гостя</option><option>3 гостя</option><option>4 гостя</option><option>5+ гостей</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Формат поездки</label>
                      <select name="purpose" style={inputStyle}>
                        <option>Отдых</option><option>Командировка</option><option>Длительное проживание</option><option>Семейная поездка</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Предпочтения</label>
                    <select name="district" style={inputStyle}>
                      <option>Центр или у моря</option><option>Только центр</option><option>Только видовые локации</option><option>Нужна тихая квартира для работы</option>
                    </select>
                  </div>
                  <button type="submit" disabled={submitting} style={{ ...btnPrimary, minHeight: 52, opacity: submitting ? 0.7 : 1, width: "100%" }}>
                    {submitting ? "Показываем варианты…" : "Показать доступные апартаменты"}
                  </button>
                </form>
                <p style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px dashed var(--color-border)", fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  Поздний прилёт, ранний выезд или особые пожелания — после бронирования мы поможем согласовать детали и подготовим комфортный заезд.
                </p>
              </aside>
            </FadeUp>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section id="advantages" style={{ padding: "clamp(2.5rem, 6vw, 5rem) 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem" }}>
            <FadeUp>
              <div style={{ marginBottom: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Почему выбирают Prim Rooms</div>
                <h2 style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)", maxWidth: "20ch", fontFamily: "'Boska', Georgia, serif", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Апартаменты, в которых приятно жить с первого часа после приезда
                </h2>
              </div>
              <div className="grid-3-r" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
                {features.map(f => (
                  <article key={f.n} style={{ ...cardStyle, padding: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2.5rem", height: "2.5rem", borderRadius: 999, background: "var(--color-primary-highlight)", color: "var(--color-primary)", fontSize: "0.875rem", fontWeight: 700, marginBottom: "1rem" }}>{f.n}</span>
                    <h3 style={{ fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)", lineHeight: 1.15, marginBottom: "0.75rem", fontFamily: "'Boska', Georgia, serif", letterSpacing: "-0.01em" }}>{f.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
                  </article>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* TWO COLUMN */}
        <section style={{ padding: "clamp(2.5rem, 6vw, 5rem) 0" }}>
          <div className="two-col-r" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", alignItems: "stretch" }}>
            <FadeUp>
              <div style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)", borderRadius: "1.25rem", background: `linear-gradient(180deg, color-mix(in srgb, var(--color-primary-highlight) 82%, var(--color-surface)), var(--color-surface))`, border: "1px solid var(--color-border)", display: "grid", alignContent: "space-between", gap: "2rem", minHeight: "100%" }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Под разные сценарии поездки</div>
                  <h3 style={{ fontFamily: "'Boska', Georgia, serif", fontSize: "clamp(1.8rem, 2vw, 2.5rem)", lineHeight: 1.02, maxWidth: "10ch", letterSpacing: "-0.02em" }}>
                    Одинаково удобно для отдыха, командировки и более долгого проживания
                  </h3>
                </div>
                <div style={{ display: "grid", gap: "0" }}>
                  {[
                    { strong: "Туризм", p: "Удобная отправная точка для прогулок, гастрономии, поездок к морю и знакомства с атмосферой Владивостока." },
                    { strong: "Командировки", p: "Тихая обстановка, стабильный интернет и пространство, где удобно работать, отдыхать и восстанавливаться после делового дня." },
                    { strong: "Долгие визиты", p: "Всё, что нужно для жизни в ритме города: кухня, хранение вещей, уют и ощущение собственного пространства." },
                  ].map(item => (
                    <div key={item.strong} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.75rem", alignItems: "start", paddingTop: "1rem", borderTop: "1px solid var(--color-border)", marginTop: "1rem" }}>
                      <strong style={{ color: "var(--color-text)", fontSize: "0.875rem" }}>{item.strong}</strong>
                      <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.5 }}>{item.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  { icon: "✓", title: "Для поездки вдвоём или семьёй", desc: "Больше свободы и пространства, чем в стандартном номере: можно спокойно отдыхать, готовить и жить в своём ритме." },
                  { icon: "✓", title: "Для тех, кто приезжает по делам", desc: "Удобно совмещать рабочие встречи, онлайн-звонки и отдых, не жертвуя тишиной и бытовым комфортом." },
                  { icon: "✓", title: "Для тех, кто любит порядок и спокойствие", desc: "Prim Rooms подходит тем, кто выбирает не просто адрес, а предсказуемый стандарт проживания и ощущение надёжности." },
                ].map(c => (
                  <article key={c.title} style={{ ...cardStyle, padding: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2.5rem", height: "2.5rem", borderRadius: 999, background: "var(--color-primary-highlight)", color: "var(--color-primary)", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>{c.icon}</span>
                    <h3 style={{ fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)", lineHeight: 1.15, marginBottom: "0.75rem", fontFamily: "'Boska', Georgia, serif", letterSpacing: "-0.01em" }}>{c.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{c.desc}</p>
                  </article>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ padding: "clamp(2.5rem, 6vw, 5rem) 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem" }}>
            <FadeUp>
              <div style={{ marginBottom: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Как это работает</div>
                <h2 style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)", maxWidth: "16ch", fontFamily: "'Boska', Georgia, serif", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Бронирование и заселение без лишних действий
                </h2>
              </div>
              <div className="grid-4-r" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                {steps.map(s => (
                  <article key={s.n} style={{ ...cardStyle, padding: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2.5rem", height: "2.5rem", borderRadius: 999, background: "var(--color-primary-highlight)", color: "var(--color-primary)", fontSize: "0.875rem", fontWeight: 700, marginBottom: "1rem" }}>{s.n}</div>
                    <h3 style={{ fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)", lineHeight: 1.15, marginBottom: "0.75rem", fontFamily: "'Boska', Georgia, serif", letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.desc}</p>
                  </article>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ padding: "clamp(2.5rem, 6vw, 5rem) 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem" }}>
            <FadeUp>
              <div style={{ marginBottom: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Что внутри</div>
                <h2 style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)", maxWidth: "16ch", fontFamily: "'Boska', Georgia, serif", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Внутри всё готово для комфортного проживания
                </h2>
              </div>
              <div className="grid-3-r" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
                {amenities.map(a => (
                  <article key={a.title} style={{ ...cardStyle, padding: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2.5rem", height: "2.5rem", borderRadius: 999, background: "var(--color-primary-highlight)", color: "var(--color-primary)", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>{a.icon}</span>
                    <h3 style={{ fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)", lineHeight: 1.15, marginBottom: "0.75rem", fontFamily: "'Boska', Georgia, serif", letterSpacing: "-0.01em" }}>{a.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{a.desc}</p>
                  </article>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* REVIEWS */}
        <section style={{ padding: "clamp(2.5rem, 6vw, 5rem) 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem" }}>
            <FadeUp>
              <div style={{ marginBottom: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Впечатления гостей</div>
                <h2 style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)", maxWidth: "22ch", fontFamily: "'Boska', Georgia, serif", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  Гости ценят Prim Rooms за ощущение порядка и лёгкости в поездке
                </h2>
              </div>
              <div className="grid-3-r" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
                {reviews.map((r, i) => (
                  <article key={i} style={{ ...cardStyle, padding: "clamp(1.25rem, 2vw, 1.75rem)", display: "grid", gap: "1rem" }}>
                    <div style={{ color: "var(--color-accent-warm)", letterSpacing: "0.15em", fontSize: "0.875rem" }}>★★★★★</div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, fontSize: "0.925rem" }}>{r.text}</p>
                    <div style={{ fontSize: "0.875rem", color: "var(--color-text)", fontWeight: 600 }}>{r.author}</div>
                  </article>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "clamp(2.5rem, 6vw, 5rem) 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1rem" }}>
            <FadeUp>
              <div className="cta-r" style={{ ...cardStyle, padding: "clamp(1.5rem, 4vw, 3rem)", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1.5rem", alignItems: "center" }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Забронировать сейчас</div>
                  <h2 style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)", marginBottom: "1rem", maxWidth: "14ch", fontFamily: "'Boska', Georgia, serif", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                    Найдите свои апартаменты во Владивостоке и забронируйте проживание онлайн
                  </h2>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Выберите даты поездки и подходящий формат проживания. Prim Rooms покажет доступные варианты сети и поможет быстро оформить бронирование.
                  </p>
                </div>
                <div className="cta-actions-r" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "flex-end" }}>
                  <button onClick={() => scrollTo("booking")} style={{ ...btnPrimary, minHeight: 52 }}>Выбрать апартаменты</button>
                  <button onClick={() => setContactOpen(true)} className="btn-ghost" style={{ minHeight: 52, padding: "0 1.5rem" }}>Связаться с менеджером</button>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ padding: "2.5rem 0 3rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "1.5rem 1rem 0", display: "flex", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid var(--color-border)", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.875rem" }}>
            <BrandMark />
            <span>
              <strong style={{ display: "block", fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--color-text)" }}>Prim Rooms</strong>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Бронирование сети апартаментов</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            <button onClick={() => scrollTo("booking")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", fontFamily: "inherit", fontSize: "0.875rem" }}>Бронирование</button>
            <button onClick={() => scrollTo("advantages")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", fontFamily: "inherit", fontSize: "0.875rem" }}>Преимущества</button>
            <button onClick={() => setContactOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", fontFamily: "inherit", fontSize: "0.875rem" }}>Написать нам</button>
            <a href="tel:+70000000000" style={{ color: "var(--color-text-muted)" }}>Телефон</a>
            <a href="mailto:hello@primrooms.ru" style={{ color: "var(--color-text-muted)" }}>E-mail</a>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1080px) {
          .hero-grid-r { grid-template-columns: 1fr !important; }
          .two-col-r { grid-template-columns: 1fr !important; }
          .grid-3-r { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-4-r { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-r { grid-template-columns: 1fr !important; }
          .cta-actions-r { justify-content: flex-start !important; }
        }
        @media (max-width: 720px) {
          .grid-3-r { grid-template-columns: 1fr !important; }
          .grid-4-r { grid-template-columns: 1fr !important; }
          .hero-pts-r { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}