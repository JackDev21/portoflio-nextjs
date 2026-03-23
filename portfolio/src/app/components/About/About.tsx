export function About() {
  return (
    <div className="my-2 flex w-full flex-col justify-center p-5 text-center">
      <div className="max-w-8xl mx-auto w-full">
        <h2 id="about" className="mb-5 text-center text-4xl font-bold text-green-800 dark:text-green-200">
          Sobre Mí
        </h2>

        <div className="flex flex-col items-center justify-center text-lg md:flex-row">
          <div className="mt-5 flex flex-col items-center justify-center space-y-4 text-left md:mt-0 md:w-2/3 md:pl-10 md:text-justify">
            <p className="text-gray-700 dark:text-gray-300">
              Actualmente formo parte del equipo de <strong>RkiveAI</strong>. RkiveAI es una plataforma impulsada por
              inteligencia artificial que transforma tu cámara y carrete en contenido listo para publicar. Automatiza la
              edición, facilita la planificación y programación de publicaciones, y ofrece analíticas para optimizar el
              rendimiento en redes como Instagram, TikTok y YouTube.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              En mi rol como <strong>Fullstack Developer</strong> en RkiveAI (mar. 2025 - actualidad, remoto, Madrid),
              contribuyo al desarrollo y evolución de nuestras plataformas tecnológicas: tanto en frontend (web con
              Next.js, apps móviles con React Native y Expo) como en backend.
            </p>

            <div className="text-gray-700 dark:text-gray-300">
              <strong>Responsabilidades principales:</strong>
              <ul className="ml-5 mt-2 list-disc">
                <li>Desarrollo backend en Node.js/Express: diseño e implementación de APIs y webhooks.</li>
                <li>Desarrollo frontend (Next.js y React Native/Expo): funcionalidades end-to-end de cero a producción.</li>
                <li>Implementación y evolución de pagos con Stripe (Checkout, Elements y webhooks) para suscripciones.</li>
                <li>Gestión de infraestructura en AWS y pipelines de CI/CD: despliegues, permisos y observabilidad.</li>
                <li>Implementación de funcionalidades basadas en IA dentro del producto.</li>
                <li>Depuración, pruebas y aseguramiento de calidad a través de la stack completa.</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Vengo de un background en electrónica y microninformatica donde desde pequeño me encanta este mundo relacionado con la tecnología. En 2023 redirigí mi
              carrera hacia la programación y desde entonces me motiva crear productos que aporten valor real y mejoren
              la experiencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
