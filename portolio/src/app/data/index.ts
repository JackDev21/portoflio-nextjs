export const projects = [
  {
    title: "Igrowkers Intake 3 Proyecto GoPass",
    description:
      "GoPass es una plataforma web diseñada para mitigar la reventa de entradas falsas en eventos deportivos en Argentina. Como líder de equipo en el frontend, trabajé en la creación de componentes para el registro, reventa y compra de entradas, y en la integración con el backend para asegurar la transferencia segura de entradas. Tecnologías utilizadas: React, TypeScript, Redux/Toolkit, TailwindCSS, .NET, C#, API de Ticketmaster.",
    image: "/gopass/gopass1.png",
    video: "https://www.youtube.com/watch?v=GbVOSw_JDzw",
    technologies: ["React", "Vite", "TypeScript", "Axios", "Redux/Toolkit", "TailwindCSS", "DaisyUI"],
    gitHubLink: ["https://github.com/igrowker/i003-gopass-front"],
  },
  {
    title: "Igrowkers Intake 4 Proyecto Reffindr",
    description:
      "Reffindr es una solución PropTech para el mercado inmobiliario desarrollada en sólo 4 semanas. Cuenta con una arquitectura compleja con frontend en React, BFF con NodeJs, Backend en .NET, Data con Python y despliegue en Amazon Web Services (AWS). Participé como fullstack tanto en el frontend como en el backend de Node.js donde se implemento un Backend for frontend(BFF), donde fui el líder de equipo del backend del BFF. Un MVP con una alta calidad de producto.",
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
      "FactuClient es una aplicación <strong>versión mobile</strong> de gestión diseñada para facilitar la creación, visualización y manejo de albaranes y facturas de clientes. Los usuarios pueden crear perfiles de clientes, gestionar sus datos, generar facturas a partir de albaranes existentes, y descargar o compartir estas facturas y albaranes en formato PDF. Este proyecto es parte del proyecto final del BootCamp de ISDICODERS, el cual actualmente esta siendo utilizado por mi familia para la gestion, si deseas verlo en profuncidad contactame.",
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
      "Social Code es una aplicación <strong>versión mobile</strong> desarrollada para facilitar la interacción y colaboración entre desarrolladores. Utiliza una arquitectura con React en el frontend y Vite como herramienta de desarrollo. La aplicación permite a los usuarios compartir código, y conectarse con otros desarrolladores.",
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
    url: "https://socialcoders.netlify.app",
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
    title: "Portafolio Personal",
    description:
      "Este portafolio personal fue desarrollado para mostrar mis proyectos y habilidades. Utiliza Next.js para el frontend y TailwindCSS, Shadcn para los estilos. El portafolio incluye secciones para sobre mí, proyectos y contacto.",
    image: "/portfolio.png",
    video: "",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "Shadcn"],
    gitHubLink: ["https://github.com/JackDev21/portoflio-nextjs"],
  },
]

export const experiences = [
  {
    startDate: "2024-11",
    endDate: "2024-12",
    jobTitle: "Desarrollador Full Stack MERN",
    company: "Igrowker Proyecto REFFINDER",
    description:
      "Participé en el desarrollo del proyecto REFFINDER, una plataforma que facilita el alquiler de viviendas. \n\n" +
      "Desafío del proyecto: Simplificar el proceso de alquiler y hacerlo más justo para todos los involucrados, permitiendo a los inquilinos recomendar nuevos ocupantes y ganar una comisión. \n\n" +
      "Solución: Implementación de una plataforma que permite a los inquilinos recomendar nuevos ocupantes y ganar una comisión, mientras que los nuevos inquilinos pagan menos y los propietarios reciben candidatos revisados sin pagar comisiones altas. \n\n" +
      "Tecnologías utilizadas: React, Tailwind CSS, Node.js, .NET (C#), Python, Power BI, PostgreSQL. \n\n" +
      "Responsabilidades: Creación de componentes frontend y backend, integración con bases de datos y APIs, y colaboración con otros desarrolladores para resolver problemas complejos y mejorar la calidad del código.",
  },
  {
    startDate: "2024-09",
    endDate: "2024-10",
    jobTitle: "Desarrollador Full Stack MERN",
    company: "Igrowkers Proyecto GoPass",
    description:
      "Participé en el desarrollo del Proyecto GoPass, una plataforma web diseñada para mitigar la reventa de entradas falsas en eventos deportivos en Argentina. \n\n" +
      "Desafío del proyecto: Abordar la reventa ilegal de entradas y la falsificación masiva mediante la validación en tiempo real de boletos, utilizando códigos QR únicos. \n\n" +
      "Solución: Implementación de una plataforma que permite a los usuarios verificar la autenticidad de sus entradas y revenderlas de manera segura, reduciendo el fraude y protegiendo tanto a vendedores como a compradores. \n\n" +
      "Tecnologías utilizadas: Git, GitHub, GitHub Actions, React, TypeScript, Redux/Toolkit, TailwindCSS, .NET, C#, API de Ticketmaster. \n\n" +
      "Responsabilidades: Creación de componentes frontend para el registro, reventa y compra de entradas. Integración con el backend para asegurar la transferencia segura de entradas. Trabajo en equipo colaborando con otros desarrolladores, además de realizar tareas individualmente y participar en sesiones de pair programming para resolver problemas complejos y mejorar la calidad del código. \n\n" +
      "Resultados clave: Contribución en la creación de una plataforma escalable y segura, mejorando la confianza de los fanáticos y organizadores de eventos deportivos.",
  },
  {
    startDate: "2023-11",
    endDate: "2024-08",
    jobTitle: "Desarrollador Full Stack MERN",
    company: "ISDI Coders",
    description:
      "Inicié a formarme de manera autodidacta en noviembre de 2023, y más tarde, me uní al bootcamp de ISDI Coders con más de 1000h, donde adquirí conocimientos en el stack MERN, JavaScript, React, HTML, CSS, TailwindCSS, Node.js, Express, MongoDB y testing con Mocha & Chai. Ahora, estoy en busca de mi primera oportunidad como desarrollador. Estoy convencido de que nunca es tarde para seguir tus pasiones y estoy decidido a encontrar un lugar donde pueda aplicar mis habilidades, aprender, y crecer. Sin juniors no hay seniors, y estoy listo para aportar mi entusiasmo y dedicación a cualquier equipo que me dé la oportunidad.",
  },
  {
    startDate: "2018-07",
    endDate: "2023-11",
    jobTitle: "Técnico electrónico",
    company: "Sonova Group",
    description:
      "Trabajé en equipo con profesionales multidisciplinarios para mejorar los procesos de fabricación y reparación de audífonos. Me especialicé en la resolución de problemas técnicos y logísticos, adaptándome rápidamente a nuevas tecnologías como SAP y sistemas de soldadura avanzada. Gestioné mi tiempo de manera eficiente para cumplir con plazos ajustados sin comprometer la calidad, manteniendo un enfoque constante en la calidad y asegurando que cada producto cumpliera con los estándares más altos.",
  },
]
