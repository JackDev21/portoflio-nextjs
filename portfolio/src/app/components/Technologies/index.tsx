// filepath: /g:/portoflio-nextjs/portolio/src/app/components/Technologies/index.tsx
import Image from "next/image"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Technologies() {
  return (
    <div className="container mx-auto mb-36 h-full w-full p-2">
      <h2 className="mb-5 text-center text-4xl font-bold text-green-800 dark:text-green-200">Tecnologías</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <Card className="flex flex-col">
          <CardHeader className="text-center text-2xl font-bold">Frontend</CardHeader>
          <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
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
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/css.svg"
                  alt="CSS3"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
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
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/redux.svg"
                  alt="Redux"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="text-center text-2xl font-bold">Backend</CardHeader>
          <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/nodejs.svg"
                  alt="Node.js"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
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
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/mongodb.svg"
                  alt="MongoDB"
                  width={36}
                  height={36}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="text-center text-2xl font-bold">Utilidades</CardHeader>
          <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/git.svg"
                  alt="Git"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/npm.svg"
                  alt="Npm"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/vscode.svg"
                  alt="VSCode"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/notion.svg"
                  alt="Notion"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
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
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/postman.svg"
                  alt="Postman"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/figma.svg"
                  alt="Figma"
                  width={36}
                  height={36}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="text-center text-2xl font-bold">Infra / Servicios</CardHeader>
          <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/aws-svgrepo-com.svg"
                  alt="AWS"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
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
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center">
                <div className="block text-slate-800 dark:hidden">
                  <Image
                    src="/icons/openai.svg"
                    alt="OpenAI"
                    width={48}
                    height={48}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src="/icons/openai-dark.svg"
                    alt="OpenAI (white)"
                    width={48}
                    height={48}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="transform cursor-pointer transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
                <Image
                  src="/icons/Claude_AI_logo.svg"
                  alt="Claude"
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
