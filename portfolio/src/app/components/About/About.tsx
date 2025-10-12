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
              contribuyo al desarrollo y mantenimiento de nuestras plataformas tecnológicas: tanto en frontend (web con
              Next.js, apps móviles con React Native y Expo) como en backend.
            </p>

            <div className="text-gray-700 dark:text-gray-300">
              <strong>Responsabilidades principales:</strong>
              <ul className="ml-5 mt-2 list-disc">
                <li>Mantenimiento y desarrollo backend en Node.js; implementación de nuevas APIs.</li>
                <li>Soporte frontend y ajustes en React Native (Expo) para asegurar UX/UI consistente en la app.</li>
                <li>Integración y mantenimiento de pagos con Stripe para la web (Next.js).</li>
                <li>Participación en gestión de infraestructura en AWS y pipelines de CI/CD.</li>
                <li>Depuración, pruebas y aseguramiento de calidad a través del stack completo.</li>
                <li>Apoyo en la integración de funcionalidades basadas en IA dentro de la plataforma.</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Vengo de un background en electrónica, lo que me dio disciplina y atención al detalle. En 2023 redirigí mi
              carrera hacia la programación y desde entonces me motiva crear productos que aporten valor real y mejoren
              la experiencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
