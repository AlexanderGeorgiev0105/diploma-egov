import { useEffect, useRef, useState } from "react";

const MENUS = {
  MAIN: "MAIN",
  CATEGORIES: "CATEGORIES",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: "m1",
      from: "bot",
      text: "Здравей! Избери какво ти трябва от бутоните по-долу.",
    },
  ]);

  const [menu, setMenu] = useState(MENUS.MAIN);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function toggleOpen() {
    setIsOpen((p) => !p);
  }

  function pushBot(text) {
    setMessages((prev) => [...prev, { id: `b_${Date.now()}`, from: "bot", text }]);
  }

  function pushUser(text) {
    setMessages((prev) => [...prev, { id: `u_${Date.now()}`, from: "user", text }]);
  }

  function handleQuickReply(label, replyText, nextMenu = null) {
    pushUser(label);
    pushBot(replyText);
    if (nextMenu) setMenu(nextMenu);
  }

  function goBack() {
    setMenu(MENUS.MAIN);
    pushBot("Ок! Върнах те в основното меню.");
  }

  // Quick replies per menu
  const quickReplies =
    menu === MENUS.MAIN
      ? [
          {
            label: "📌 Как да подам заявка?",
            reply:
              "1) Categories → избери категория\n2) Избери услуга\n3) Попълни формата (Три имена + ЕГН)\n4) Изпрати\nПосле виж заявките си в My Requests.",
          },
          {
            label: "📂 Виж категории",
            reply: 'Категориите са в менюто "Categories" (линк: /categories).',
            nextMenu: MENUS.CATEGORIES,
          },
          {
            label: "🧾 Къде са моите заявки?",
            reply: 'Моите заявки са в менюто "My Requests" (линк: /my-requests).',
          },
          {
            label: "🛠️ Админ – заявки",
            reply: "Админът управлява заявките от: /admin/requests",
          },
          {
            label: "❓ Какви услуги има?",
            reply:
              "Има 5 категории: Имущество, Здраве, Социални, Образование, Транспорт.\nИзбери „Виж категории“, за да продължиш.",
          },
        ]
      : [
          {
            label: "🏥 Здраве",
            reply: 'Отиди в Categories → "Здраве" и избери услуга.',
          },
          {
            label: "🏠 Имущество",
            reply: 'Отиди в Categories → "Имущество" и избери услуга.',
          },
          {
            label: "🤝 Социални",
            reply: 'Отиди в Categories → "Социални" и избери услуга.',
          },
          {
            label: "🎓 Образование",
            reply: 'Отиди в Categories → "Образование" и избери услуга.',
          },
          {
            label: "🚗 Транспорт",
            reply: 'Отиди в Categories → "Транспорт" и избери услуга.',
          },
          {
            label: "⬅️ Назад",
            reply: "Връщам те назад.",
            nextMenu: MENUS.MAIN,
          },
        ];

  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 999 }}>
      <button className="btn btn-primary" onClick={toggleOpen}>
        💬 Chat
      </button>

      {isOpen && (
        <div
          className="card"
          style={{
            width: 360,
            marginTop: 10,
            padding: 0,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #eef0f6",
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 700 }}>Помощник</div>
            <div style={{ display: "flex", gap: 8 }}>
              {menu !== MENUS.MAIN && (
                <button className="btn" onClick={goBack}>
                  Back
                </button>
              )}
              <button className="btn" onClick={toggleOpen}>
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              height: 260,
              overflowY: "auto",
              padding: 12,
              background: "#fafbff",
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    maxWidth: "85%",
                    padding: "8px 10px",
                    borderRadius: 14,
                    border: "1px solid #e6e8ef",
                    background: m.from === "user" ? "#eef2ff" : "#ffffff",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 2 }}>
                    {m.from === "user" ? "You" : "Bot"}
                  </div>
                  <div>{m.text}</div>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Quick replies */}
          <div
            style={{
              padding: 12,
              borderTop: "1px solid #eef0f6",
              background: "#fff",
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {quickReplies.map((q) => (
              <button
                key={q.label}
                className="btn"
                onClick={() => handleQuickReply(q.label, q.reply, q.nextMenu)}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
