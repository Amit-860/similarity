import type {Metadata} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {notFound} from "next/navigation";
import ApiDashboard from "@/components/ApiDashboard"
import RequestApiKey from "@/components/RequestApiKey"
import {db} from "@/lib/db";
import {FC} from "react";

export const metadata: Metadata = {
    title: "Similarity API | Dashboard",
    description: "Free and Open-source text similarity APi"
}

interface pageProps {
}

const page: () => Promise<JSX.Element> = async () => {
    const user = await getServerSession(authOptions)
    if (!user) {
        return notFound()
    }
    const apiKey = await db.apiKey.findFirst({
        where: {userId: user.user.id, enabled: true}
    })
    const isActive = await db.apiKey.findFirst({
        where: {userId: user.user.id}
    })

    // @ts-ignore
    return <div className='max-w-7xl mx-auto mt-16'>
        {apiKey ? (
            // @ts-expect-error Server Component
            <ApiDashboard/>
            ) : (
            <RequestApiKey/>
            )
        }
    </div>
}

export default page