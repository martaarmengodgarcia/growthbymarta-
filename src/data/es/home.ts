import type { HomeContent } from "../types";

export const home: HomeContent = {
  hero: {
    eyebrow: "B2B SaaS Marketing",
    title: "Hola, soy Marta.",
    subtitle:
      "Ayudo a empresas B2B SaaS a crecer conectando marketing, ventas y negocio.",
    text: "Siempre he pensado que un CV se queda corto para explicar cómo trabaja alguien.\n\nPor eso hice este portfolio: para recopilar proyectos reales en los que he trabajado, enseñar cómo abordé cada problema y compartir la forma en la que pienso sobre marketing, ventas y growth.",
    stats: [
      { value: "1.500+", label: "Leads cualificados" },
      { value: "450+", label: "Oportunidades comerciales" },
      { value: "50+", label: "Nuevos clientes" },
      { value: "$600K+", label: "Revenue influenciado" },
    ],
    ctaPrimary: "Conoce mi trabajo",
    ctaSecondary: "Sobre mí",
  },
  expertiseStrip: [
    "Growth Marketing",
    "Demand Generation",
    "Content",
    "Go-to-Market",
    "Sales Enablement",
    "B2B SaaS",
  ],
  valueSection: {
    title: "Dónde aporto más valor",
    intro:
      "He trabajado en empresas B2B SaaS globales y startups construyendo marketing de principio a fin: demanda, campañas, contenido, automatización, web, partnerships y colaboración con ventas.",
    cta: "Ver proyectos",
    items: [
      {
        number: "01",
        title: "Demand Generation",
        description:
          "Campañas para atraer las cuentas adecuadas y convertir interés en oportunidades.",
        tags: "Paid · Orgánico · Email · LinkedIn · Eventos · ABM",
      },
      {
        number: "02",
        title: "Sales Enablement",
        description:
          "Mensajes, secuencias y materiales que ayudan a ventas a avanzar oportunidades.",
        tags: "SDR systems · Sequences · Battlecards · Sales messaging",
      },
      {
        number: "03",
        title: "Positioning & Messaging",
        description:
          "Convierto productos complejos en mensajes claros, relevantes y fáciles de vender.",
        tags: "Value propositions · Website copy · Product messaging",
      },
      {
        number: "04",
        title: "Content & Customer Proof",
        description:
          "Contenido y pruebas que educan, generan confianza y ayudan a comprar.",
        tags: "Case studies · Testimonials · Whitepapers · Ebooks · Video",
      },
      {
        number: "05",
        title: "HubSpot & Marketing Systems",
        description:
          "Automatizaciones y procesos para dar estructura al funnel y al trabajo de marketing.",
        tags: "Workflows · Reporting · CRM · Lead management",
      },
    ],
  },
  experience: {
    title: "Experiencia con productos B2B SaaS complejos",
    text: "He trabajado en startups y empresas tecnológicas internacionales con productos que no siempre son fáciles de entender ni de vender.\n\nDesde healthtech y plataformas de inteligencia artificial conversacional hasta tecnología espacial, he trabajado con equipos y mercados de Australia, Europa y Latinoamérica construyendo posicionamiento, demanda, contenido y sistemas para apoyar a ventas.",
    companies: ["Medow Health", "Blip", "FOSSA Systems", "GBR"],
    openSlotLabel: "Tu marca podría estar aquí",
    testimonialsTitle: "Lo que dicen personas con las que he trabajado",
    testimonialsPrevLabel: "Testimonio anterior",
    testimonialsNextLabel: "Siguiente testimonio",
    testimonials: [
      {
        name: "Joel",
        role: "Founder, Medow Health",
        photo: "joel",
        quotes: [
          "Marta, todo esto tiene muy buena pinta. **Estás haciendo un trabajo increíble en Medow** y estamos muy contentos de tenerte en el equipo. Tengo muchas ganas de ver lo que viene.",
          "**El impacto que has tenido es increíble.** No puedo creer que solo haya pasado un mes.",
        ],
      },
      {
        name: "David",
        role: "Head of Growth, Medow Health",
        photo: "david",
        quotes: [
          "**Marta ha tenido un impacto inmediato en el equipo.** Casi sin tiempo de adaptación, ha sacado adelante case studies, trabajado con los SDRs en sales y partner enablement, relanzado nuestras campañas de Meta, conseguido que el contenido en redes empezara a funcionar de verdad y liderado una de nuestras campañas con partners, entre muchas otras cosas. Estamos encantados de tenerla en el equipo.",
        ],
      },
      {
        name: "Jaime",
        role: "Country Manager, Blip EMEA",
        photo: "jaime",
        quotes: [
          "Muy buen trabajo, equipo de Marketing. Tomando las palabras de Igna, especialmente a ti, Marta: **a seguir así rompiéndola.** Voy a reportarlo positivamente al equipo global.",
        ],
      },
      {
        name: "Carola Gómez",
        role: "Compañera en GBR",
        photo: "carola",
        quotes: [
          "Trabajé con Marta como parte del equipo remoto de GBR. **Es organizada, se responsabiliza de su trabajo y comunica con claridad**, lo que hace que colaborar con ella sea muy fácil incluso trabajando desde lugares distintos.\n\n**Es fiable, proactiva y una persona con la que siempre puedes contar para sacar el trabajo adelante.**",
        ],
      },
      {
        name: "Pedro González Ortiz",
        role: "Compañero en Blip",
        photo: "pedro",
        quotes: [
          "Tuve la oportunidad de trabajar con Marta en el equipo de Marketing de Blip.\n\n**Es proactiva, creativa y siempre está buscando formas de mejorar las cosas.** Se responsabiliza de su trabajo, consigue que las cosas salgan adelante y aporta ideas nuevas a cada proyecto.\n\nAdemás, es una gran compañera. Aporta energía positiva, es muy fácil trabajar con ella y hace que colaborar resulte natural. **Volvería a trabajar con Marta sin dudarlo.**",
        ],
      },
    ],
    ctaMoreAboutMe: "Más sobre mí",
    ctaDownloadCv: "Descargar CV",
  },
  featuredProject: {
    eyebrow: "PROYECTO DESTACADO",
    title: "De una integración de producto a cuatro nuevas vías de crecimiento",
    paragraphs: [
      "Medow iba a lanzar una integración con uno de los softwares de gestión más utilizados por clínicas privadas en Australia. En lugar de tratarlo como un anuncio de producto, **diseñé una estrategia de lanzamiento para cuatro audiencias distintas**: clientes activos, cuentas que habían hecho churn, prospects en pipeline y usuarios del partner.",
    ],
    resultStats: [
      { value: "40+", label: "Demos" },
      { value: "20+", label: "Nuevos clientes" },
      { value: "$50K+", label: "Ingresos nuevos y reactivados" },
    ],
    ctaPrimary: "Ver caso completo",
    ctaSecondary: "Ver más proyectos",
    slug: "partner-gtm",
  },
  howIWork: {
    title: "Forma de trabajar",
    items: [
      {
        title: "Primero entiendo, luego actúo",
        description:
          "Antes de lanzar, **intento entender cómo funciona todo el proceso de venta**: desde que se genera la demanda hasta que una oportunidad se convierte en cliente.\n\nReviso datos, hablo con Ventas y **busco dónde está la fricción y en qué punto puede tener más impacto Marketing**. A veces está en el mensaje; otras, en la conversión, el seguimiento o la estructura del funnel.",
      },
      {
        title: "Conecto marketing con pipeline y revenue",
        description:
          "No pienso en marketing como una lista de campañas o entregables. **Busco que cada acción contribuya a generar demanda, hacer avanzar oportunidades o convertirlas en clientes.**\n\nPor eso trabajo especialmente bien cerca de Ventas y del negocio.",
      },
      {
        title: "Construyo desde cero o mejoro lo que ya existe",
        description:
          "**He montado sistemas de marketing en empresas sin una estructura previa y optimizado procesos en equipos ya formados.**\n\nMe adapto rápido, entiendo el contexto y empiezo a aportar desde el principio.",
      },
    ],
  },
  oneLastThing: {
    title: "Una última cosa",
    paragraphs: [
      "Crear esta web también ha sido parte del ejercicio.",
      "He tenido que pensar cómo posicionarme, qué proyectos representaban mejor mi forma de trabajar y cómo convertir varios años de experiencia en una historia que tuviera sentido.",
      "En cierto modo, ha sido otro proyecto de marketing.",
      "Solo que esta vez, el producto era yo.",
    ],
  },
  finalCta: {
    title: "¿Estás construyendo el marketing de una empresa B2B SaaS?",
    text: "Me interesa conectar con founders y equipos que tengan un buen producto, retos interesantes por resolver y espacio para que marketing tenga un impacto real en el negocio.",
    cta: "Hablemos",
  },
};
