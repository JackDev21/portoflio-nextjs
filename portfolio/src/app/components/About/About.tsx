export function About() {
  return (
    <div className="my-2 flex w-full flex-col justify-center p-5 text-center">
      <div className="max-w-8xl mx-auto w-full">
        <h2 id="about" className="mb-5 text-center text-4xl font-bold text-green-800 dark:text-green-200">
          Sobre Mí
        </h2>

        <div className="flex flex-col items-center justify-center text-lg md:flex-row">
          <div className="mt-5 flex flex-col items-center justify-center space-y-4 text-left md:mt-0 md:w-2/3 md:pl-10 md:text-justify">
            {/* La presentación destaca la integración de VeriFactu y el trabajo en aviónica. */}
            <p className="text-gray-700 dark:text-gray-300">
              Soy <strong>desarrollador full stack y creador de FactuClient</strong>, una aplicación en producción
              que ya utilizan clientes reales para gestionar albaranes, facturas y documentación de transporte.
              Me encargo del desarrollo, los despliegues y el soporte. Las necesidades que me trasladan los usuarios
              guían las mejoras del producto, que incluye DeCA digital e integra VeriFactu.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Actualmente trabajo en <strong>PLD Space como técnico de aviónica en harness</strong>.
              Mi experiencia en sonova me ha enseñado a trabajar con precisión, verificar el resultado y
              resolver problemas técnicos en equipo.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Antes trabajé como <strong>desarrollador full stack en RkiveAI</strong>, donde desarrollé
              funcionalidades web y móviles con Next.js y React Native, creé APIs con Node.js e integré pagos
              con Stripe y funciones de inteligencia artificial. También participé en los despliegues en AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
