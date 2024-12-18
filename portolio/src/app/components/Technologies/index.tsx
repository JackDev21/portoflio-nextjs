// filepath: /g:/portoflio-nextjs/portolio/src/app/components/Technologies/index.tsx
import Image from "next/image"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Technologies() {
    return (
        <div className="container mx-auto mb-36 h-full w-full">
            <h2 className="mb-5 text-center text-4xl font-bold text-green-800 dark:text-green-200">Tecnologías</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <Card className="flex flex-col justify-between">
                    <CardHeader className="text-center text-2xl font-bold">Frontend</CardHeader>
                    <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
                        <Image src="/icons/react.svg" alt="React" width={50} height={50} />
                        <Image src="/icons/Nextjs_wordmark_dark.svg" alt="Next.js" width={50} height={50} />
                        <Image src="/icons/vitejs.svg" alt="Vite" width={50} height={50} />
                        <Image src="/icons/html5.svg" alt="HTML5" width={50} height={50} />
                        <Image src="/icons/css.svg" alt="CSS3" width={50} height={50} />
                        <Image src="/icons/tailwindcss.svg" alt="Tailwind CSS" width={50} height={50} />
                        <Image src="/icons/javascript.svg" alt="JavaScript" width={50} height={50} />
                        <Image src="/icons/typescript.svg" alt="TypeScript" width={50} height={50} />
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between">
                    <CardHeader className="text-center text-2xl font-bold">Backend</CardHeader>
                    <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-3">
                        <Image src="/icons/nodejs.svg" alt="Node.js" width={50} height={50} />
                        <Image src="/icons/typescript.svg" alt="TypeScript" width={50} height={50} />
                        <Image src="/icons/Express.js_dark.svg" alt="Express" width={50} height={50} />
                        <Image src="/icons/mongodb.svg" alt="MongoDB" width={25} height={25} />
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between">
                    <CardHeader className="text-center text-2xl font-bold">Utilidades</CardHeader>
                    <CardContent className="grid grid-cols-3 justify-items-center gap-5 p-4 md:grid-cols-4">
                        <Image src="/icons/git.svg" alt="Git" width={50} height={50} />
                        <Image src="/icons/npm.svg" alt="Npm" width={50} height={50} />
                        <Image src="/icons/vscode.svg" alt="VSCode" width={50} height={50} />
                        <Image src="/icons/Github_dark.svg" alt="GitHub" width={50} height={50} />
                        <Image src="/icons/notion.svg" alt="Notion" width={50} height={50} />
                        <Image src="/icons/GitHubCopilot_dark.svg" alt="GitHub Copilot" width={50} height={50} />
                        <Image src="/icons/postman.svg" alt="Postman" width={50} height={50} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
