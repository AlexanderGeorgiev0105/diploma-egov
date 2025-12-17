export const categories = [
    { id: "property", name: "Имущество" },
    { id: "health", name: "Здраве" },
    { id: "social", name: "Социални" },
    { id: "education", name: "Образование" },
    { id: "transport", name: "Транспорт" },
  ];
  
  export const servicesByCategory = {
    property: [
      { id: "prop-1", title: "Данъчна оценка", description: "Заявка за издаване на данъчна оценка." },
      { id: "prop-2", title: "Скица на имот", description: "Заявка за скица/схема." },
      { id: "prop-3", title: "Удостоверение за тежести", description: "Проверка и издаване на удостоверение." },
      { id: "prop-4", title: "Адресна регистрация", description: "Заявка за промяна на адрес." },
    ],
    health: [
      { id: "hlth-1", title: "Здравноосигурителен статус", description: "Проверка на здравен статус." },
      { id: "hlth-2", title: "Избор на личен лекар", description: "Подаване на заявление за ОПЛ." },
      { id: "hlth-3", title: "Е-рецепти (справка)", description: "Преглед на активни рецепти." },
      { id: "hlth-4", title: "Протокол за лечение", description: "Подаване/преглед на протоколи." },
    ],
    social: [
      { id: "soc-1", title: "Социална помощ", description: "Кандидатстване за социална помощ." },
      { id: "soc-2", title: "Детски надбавки", description: "Подаване на заявление за помощи." },
      { id: "soc-3", title: "Помощ за отопление", description: "Заявка за сезонна помощ." },
      { id: "soc-4", title: "Инвалидност (услуги)", description: "Справки и заявления по ТЕЛК/НЕЛК." },
    ],
    education: [
      { id: "edu-1", title: "Удостоверение за ученик/студент", description: "Издаване на удостоверение." },
      { id: "edu-2", title: "Записване в детска градина", description: "Кандидатстване и класиране." },
      { id: "edu-3", title: "Справка за дипломи", description: "Преглед на издадени дипломи." },
      { id: "edu-4", title: "Стипендии", description: "Кандидатстване за стипендия." },
    ],
    transport: [
      { id: "tr-1", title: "Подновяване на СУМПС", description: "Заявка за подновяване на книжка." },
      { id: "tr-2", title: "Регистрация на МПС", description: "Заявка за регистрация/прехвърляне." },
      { id: "tr-3", title: "Глоби (справка)", description: "Справка за неплатени глоби." },
      { id: "tr-4", title: "Технически преглед", description: "Напомняне и история на прегледи." },
    ],
  };
  