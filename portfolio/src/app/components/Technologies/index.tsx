import Image from "next/image"
import type { ReactNode } from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

function TechTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="top">{label}</TooltipContent>
    </Tooltip>
  )
}

export function Technologies() {
  return (
    <TooltipProvider>
      <div className="container mx-auto mb-36 h-full w-full p-2">
        <h2 className="mb-5 text-center text-4xl font-bold text-green-800 dark:text-green-200">Tecnologías</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <Card className="flex flex-col">
            <CardHeader className="text-center text-2xl font-bold">Frontend</CardHeader>
            <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
              <TechTooltip label="React">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/react.svg"
                      alt="React"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Next.js">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/nextjs_icon_dark.svg"
                      alt="Next.js"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Vite">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/vitejs.svg"
                      alt="Vite"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Expo">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <div className="block text-slate-800 dark:hidden">
                      <Image
                        src="/icons/expo-svgrepo-com.svg"
                        alt="Expo"
                        width={48}
                        height={48}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="hidden dark:block">
                      <Image
                        src="/icons/expo-dark.svg"
                        alt="Expo (white)"
                        width={48}
                        height={48}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="HTML5">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/html5.svg"
                      alt="HTML5"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="CSS3">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/css.svg" alt="CSS3" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Tailwind CSS">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/tailwindcss.svg"
                      alt="Tailwind CSS"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="JavaScript">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/javascript.svg"
                      alt="JavaScript"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="TypeScript">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Redux">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/redux.svg" alt="Redux" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="text-center text-2xl font-bold">Backend</CardHeader>
            <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
              <TechTooltip label="Node.js">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/nodejs.svg" alt="Node.js" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="TypeScript">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/typescript.svg"
                      alt="TypeScript"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="DynamoDB">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/aws-dynamodb-svgrepo-com.svg"
                      alt="DynamoDB"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Express">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/Express.js_dark.svg"
                      alt="Express"
                      width={48}
                      height={48}
                      className="hidden max-h-full max-w-full object-contain dark:block"
                    />
                    <Image
                      src="/icons/Express.js_light.svg"
                      alt="Express"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain dark:hidden"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="MongoDB">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/mongodb.svg" alt="MongoDB" width={36} height={36} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="text-center text-2xl font-bold">Utilidades</CardHeader>
            <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
              <TechTooltip label="Git">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/git.svg" alt="Git" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="npm">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/npm.svg" alt="Npm" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="VS Code">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/vscode.svg" alt="VSCode" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Notion">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/notion.svg" alt="Notion" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="GitHub Copilot">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/GitHubCopilot_dark.svg"
                      alt="GitHub Copilot"
                      width={48}
                      height={48}
                      className="hidden max-h-full max-w-full object-contain dark:block"
                    />
                    <Image
                      src="/icons/GitHubCopilot_light.svg"
                      alt="GitHub Copilot"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain dark:hidden"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Postman">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/postman.svg" alt="Postman" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Figma">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/figma.svg" alt="Figma" width={36} height={36} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="text-center text-2xl font-bold">Infra / Servicios</CardHeader>
            <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
              <TechTooltip label="AWS">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/aws-svgrepo-com.svg" alt="AWS" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="GitHub">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/Github_dark.svg"
                      alt="GitHub"
                      width={48}
                      height={48}
                      className="hidden max-h-full max-w-full object-contain dark:block"
                    />
                    <Image
                      src="/icons/Github_light.svg"
                      alt="GitHub"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain dark:hidden"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Stripe">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/stripe-svgrepo-com.svg"
                      alt="Stripe"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="OpenAI">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/openai-mark.svg"
                      alt="OpenAI"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain dark:invert"
                    />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Gemini">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image src="/icons/gemini.svg" alt="Gemini" width={48} height={48} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </TechTooltip>

              <TechTooltip label="Anthropic">
                <div className="transform cursor-pointer transition-transform hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                      src="/icons/anthropic-si.svg"
                      alt="Anthropic"
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain dark:invert"
                    />
                  </div>
                </div>
              </TechTooltip>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}

