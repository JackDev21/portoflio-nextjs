export const projects = [
  {
    title: "Incident Management System",
    description:
      "Sistema full-stack de gestión de incidencias compuesto por una API backend (Node.js, Express, MongoDB) y un dashboard frontend (React, TypeScript, Vite). Permite crear, visualizar, actualizar y eliminar incidencias, además de contar con un asistente de IA integrado para consultar incidencias usando lenguaje natural. La arquitectura sigue las mejores prácticas para escalabilidad y separación de responsabilidades, e incluye soporte completo para Docker.",
    images: [
      "/incident-dashboard/incident-dashboard.png",
      "/incident-dashboard/incident-dashboard-chat.png",
      "/incident-dashboard/incident-dashboard-chat-filter.png",
    ],
    video: "",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "IA",
      "React Query",
      "SCSS",
    ],
    gitHubLink: ["https://github.com/JackDev21/incident-management-system"],
    url: "",
  },
  {
    title: "RkiveAI - Sitio web (Next.js)",
    description:
      "Sitio web corporativo y panel de marketing de RkiveAI construido con Next.js. Presenta la misión del producto, planes y recursos, y sirve como punto de entrada para usuarios y clientes. Formo parte del equipo y trabajo en la implementación y mejora de la integración de pagos con Stripe (Checkout, Elements y webhooks), en los endpoints y webhooks que sincronizan suscripciones, además de optimizaciones de rendimiento, SEO y componentes interactivos. El front también consume servicios de IA para funcionalidades basadas en IA y se despliega en infraestructuras en la nube.",
    image: "/rkiveai/rkiveaiweb.png",
    video: "",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Stripe", "IA", "AWS", "Framer Motion"],
    gitHubLink: [],
    url: "https://www.rkiveai.com",
  },
  {
    title: "RkiveAI - App (Expo / React Native)",
    description:
      "Aplicación móvil de RkiveAI desarrollada con React Native + Expo (con soporte web). En la app formo parte del equipo que gestiona la subida de vídeos y fotos (optimización y generación de thumbnails), integramos APIs de edición automática por IA, programamos publicaciones y manejamos notificaciones. Implemento lógica cliente/servidor para el procesado de media, consumo de APIs protegidas y mejoras de UX en flujos de creación.",
    images: [
      "/rkiveai/app.rkiveai.com_feed(iPhone 6_7_8 Plus).png",
      "/rkiveai/app.rkiveai.com_feed(iPhone 6_7_8 Plus) (1).png",
      "/rkiveai/app.rkiveai.com_feed(iPhone 6_7_8 Plus) (2).png",
      "/rkiveai/app.rkiveai.com_feed(iPhone 6_7_8 Plus) (3).png",
      "/rkiveai/app.rkiveai.com_feed(iPhone 6_7_8 Plus) (4).png",
    ],
    video: "",
    technologies: ["React Native", "Expo", "React", "TypeScript", "Firebase", "Expo Router", "Axios"],
    gitHubLink: [],
    url: "https://app.rkiveai.com",
  },
  {
    title: "Igrowkers Intake 3 Proyecto GoPass",
    description:
      "GoPass es una plataforma web diseñada para mitigar la reventa de entradas falsas en eventos deportivos en Argentina. Como líder de equipo en el frontend, trabajé en la creación de componentes para el registro, reventa y compra de entradas, y en la integración con el backend para asegurar la transferencia segura de entradas. Tecnologías utilizadas: React, TypeScript, Redux/Toolkit, TailwindCSS, .NET, C#, API de Ticketmaster.",
    image: "/gopass/gopass1.png",
    video: "",
    technologies: ["React", "Vite", "TypeScript", "Axios", "Redux/Toolkit", "TailwindCSS", "DaisyUI"],
    gitHubLink: ["https://github.com/igrowker/i003-gopass-front"],
  },
  {
    title: "Igrowkers Intake 4 Proyecto Reffindr",
    description:
      "Reffindr es una solución PropTech para el mercado inmobiliario desarrollada en sólo 4 semanas. Cuenta con una arquitectura compleja con frontend en React, BFF con NodeJs, backend en .NET, data con Python y despliegue en Amazon Web Services (AWS). Participé como fullstack tanto en el frontend como en el backend de Node.js, donde se implementó un Backend for Frontend (BFF) y fui líder de equipo del backend del BFF. Un MVP con una alta calidad de producto.",
    image: "/reffindr/reffindr1.png",
    video: "/reffindr/reffindr.mp4",
    technologies: ["React", "Vite", "TypeScript", "Chakra", "Zustand", "Axios", "NodeJs", "Express", ".NET", "Python"],
    gitHubLink: [
      "https://github.com/igrowker/i004-reffindr-front",
      "https://github.com/igrowker/i004-reffindr-back-nodejs",
    ],
  },
  {
    title: "FactuClient",
    description:
      "FactuClient es una aplicación <strong>versión mobile</strong> de gestión diseñada para facilitar la creación, visualización y manejo de albaranes y facturas de clientes. Los usuarios pueden crear perfiles de clientes, gestionar sus datos, generar facturas a partir de albaranes existentes, y descargar o compartir estas facturas y albaranes en formato PDF. Este proyecto es parte del proyecto final del bootcamp de ISDICODERS, el cual actualmente está siendo utilizado por mi familia para la gestión. Si deseas verlo en profundidad, contáctame.",
    image: "/factuclient/factuclient1.png",
    video: "",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "React-PDF",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Mocha",
      "Chai",
      "Bcrypt",
      "JWT",
    ],
    gitHubLink: ["https://github.com/JackDev21/FactuClient-Project"],
    url: "https://factuclient.netlify.app",
  },
  {
    title: "Social Code",
    description:
      "Social Code es una aplicación <strong>versión mobile</strong> desarrollada para facilitar la interacción y colaboración entre desarrolladores. Utiliza una arquitectura con React en el frontend y Vite como herramienta de desarrollo. La aplicación permite a los usuarios compartir código y conectarse con otros desarrolladores.",
    image: "/socialcode/socialcode.png",
    video: "",
    technologies: [
      "React",
      "React-DOM",
      "React-Redux",
      "React-Router-DOM",
      "Vite",
      "TailwindCSS",
      "Javascript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Mocha",
      "Chai",
      "Bcrypt",
      "JWT",
    ],
    gitHubLink: ["https://github.com/JackDev21/SocialCode-Project"],
  },
  {
    title: "JavaScript Quiz",
    description:
      "Este es un proyecto de quiz de JavaScript que utiliza Zustand para la gestión del estado. El objetivo es permitir a los usuarios responder preguntas de JavaScript y obtener su puntuación al final. \n\n" +
      "Características:\n" +
      "- Preguntas dinámicas sobre JavaScript.\n" +
      "- Puntuación en tiempo real.\n" +
      "- Navegación entre preguntas.\n" +
      "- Sistema de gestión de estado ligero utilizando Zustand.\n\n",
    image: "/quiz/img.png",
    video: "",
    technologies: ["React", "Zustand", "JavaScript", "CSS", "Vite", "TypeScript"],
    gitHubLink: ["https://github.com/JackDev21/zustand-quiz/tree/main"],
  },
  {
    title: "Portfolio Personal",
    description:
      "Este portfolio personal fue desarrollado para mostrar mis proyectos y habilidades. Utiliza Next.js para el frontend y TailwindCSS, Shadcn para los estilos. El portafolio incluye secciones para sobre mí, proyectos y contacto.",
    image: "/portfolio.png",
    video: "",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "Shadcn"],
    gitHubLink: ["https://github.com/JackDev21/portoflio-nextjs"],
  },
]

export const experiences = [
  {
    startDate: "2025-01",
    endDate: "2026-03",
    jobTitle: "Fullstack Developer",
    company: "RkiveAI",
    description: [
      "Como Junior Fullstack Developer en RkiveAI, trabajé en el desarrollo y evolución de nuestro ecosistema tecnológico, trabajando en múltiples capas de la stack: desde la experiencia de usuario en React Native/Expo hasta la infraestructura cloud en AWS. Este rol me ha permitido profundizar en integración de inteligencia artificial, arquitecturas serverless, procesamiento de media y sistemas de pagos en producción.",
      "Responsabilidades:",
      "- **Backend & APIs:** Diseñar e implementar servicios backend en Node.js/Express: APIs REST, webhooks y lógica de negocio (Stripe e IA).",
      "- **Bases de Datos:** Gestionar y optimizar esquemas en DynamoDB y bases de datos relacionales, implementando queries eficientes y estrategias de indexación para mejorar el rendimiento de la app.",
      "- **Frontend Mobile:** Desarrollar funcionalidades en React Native/Expo (con soporte web): flujos de subida/procesamiento de vídeos, gestión de thumbnails, programación de publicaciones y notificaciones push.",
      "- **Integraciones de Pago:** Implementar y evolucionar Stripe (Checkout, Elements y webhooks) para suscripciones, sincronización de usuarios y procesamiento de eventos de facturación.",
      "- **Infraestructura Cloud:** Gestionar recursos en AWS (EC2, CloudFront, API Gateway, S3, App Runner, DynamoDB, ECR, Cognito, CloudWatch, IAM), configurar pipelines CI/CD y optimizar despliegues tanto para el sitio web (Next.js) como para servicios backend.",
      "- **IA & Automatización:** Implementar funcionalidades basadas en IA (asistentes, optimización de contenido y edición automática), además de validar comportamientos de modelos en producción.",
      "- **Testing & QA:** Realizar pruebas funcionales, depuración de bugs y validación de nuevas características en entornos staging antes de producción, asegurando estabilidad y calidad del código.",
    ],
  },
  {
    startDate: "2024-11",
    endDate: "2024-12",
    jobTitle: "Desarrollador Full Stack MERN",
    company: "Igrowker Proyecto REFFINDER",
    description: [
      "Participé en el desarrollo del proyecto REFFINDER, una plataforma que facilita el alquiler de viviendas.",
      "Desafío del proyecto: Simplificar el proceso de alquiler y hacerlo más justo para todos los involucrados, permitiendo a los inquilinos recomendar nuevos ocupantes y ganar una comisión.",
      "Solución: Implementación de una plataforma que permite a los inquilinos recomendar nuevos ocupantes y ganar una comisión, mientras que los nuevos inquilinos pagan menos y los propietarios reciben candidatos revisados sin pagar comisiones altas.",
      "Tecnologías utilizadas: React, Tailwind CSS, Node.js, .NET (C#), Python, Power BI, PostgreSQL.",
      "Responsabilidades: Creación de componentes frontend y backend, integración con bases de datos y APIs, y colaboración con otros desarrolladores para resolver problemas complejos y mejorar la calidad del código.",
    ],
  },
  {
    startDate: "2024-09",
    endDate: "2024-10",
    jobTitle: "Desarrollador Full Stack MERN",
    company: "Igrowkers Proyecto GoPass",
    description: [
      "Participé en el desarrollo del Proyecto GoPass, una plataforma web diseñada para mitigar la reventa de entradas falsas en eventos deportivos en Argentina.",
      "Desafío del proyecto: Abordar la reventa ilegal de entradas y la falsificación masiva mediante la validación en tiempo real de boletos, utilizando códigos QR únicos.",
      "Solución: Implementación de una plataforma que permite a los usuarios verificar la autenticidad de sus entradas y revenderlas de manera segura, reduciendo el fraude y protegiendo tanto a vendedores como a compradores.",
      "Tecnologías utilizadas: Git, GitHub, GitHub Actions, React, TypeScript, Redux/Toolkit, TailwindCSS, .NET, C#, API de Ticketmaster.",
      "Responsabilidades: Creación de componentes frontend para el registro, reventa y compra de entradas. Integración con el backend para asegurar la transferencia segura de entradas. Trabajo en equipo colaborando con otros desarrolladores, además de realizar tareas individualmente y participar en sesiones de pair programming para resolver problemas complejos y mejorar la calidad del código.",
      "Resultados clave: Contribución en la creación de una plataforma escalable y segura, mejorando la confianza de los fanáticos y organizadores de eventos deportivos.",
    ],
  },
  {
    startDate: "2023-11",
    endDate: "2024-08",
    jobTitle: "Desarrollador Full Stack MERN",
    company: "ISDI Coders",
    description: [
      "Inicié a formarme de manera autodidacta en noviembre de 2023, y más tarde me uní al bootcamp de ISDI Coders con más de 1000h, donde adquirí conocimientos en el stack MERN, JavaScript, React, HTML, CSS, TailwindCSS, Node.js, Express, MongoDB y testing con Mocha & Chai.",
      "Ahora estoy en busca de mi primera oportunidad como desarrollador. Estoy convencido de que nunca es tarde para seguir tus pasiones y estoy decidido a encontrar un lugar donde pueda aplicar mis habilidades, aprender y crecer. Sin juniors no hay seniors, y estoy listo para aportar mi entusiasmo y dedicación a cualquier equipo que me dé la oportunidad.",
    ],
  },
  {
    startDate: "2018-07",
    endDate: "2023-11",
    jobTitle: "Técnico electrónico",
    company: "Sonova Group",
    description: [
      "Trabajé en equipo con profesionales multidisciplinarios para mejorar los procesos de fabricación y reparación de audífonos.",
      "Me especialicé en la resolución de problemas técnicos y logísticos, adaptándome rápidamente a nuevas tecnologías como SAP y sistemas de soldadura avanzada.",
      "Gestioné mi tiempo de manera eficiente para cumplir con plazos ajustados sin comprometer la calidad, manteniendo un enfoque constante en la calidad y asegurando que cada producto cumpliera con los estándares más altos.",
    ],
  },
]
