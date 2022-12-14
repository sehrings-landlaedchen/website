import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./footer";
import { Nav } from "./nav";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


type Props = {
    title: string
    description: string
    pages: any
    className?: string
    children?: ReactNode
    settings: any
}

export const Layout = ({ title, description, pages, className, children, settings }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <style>{dom.css()}</style>
        </Head>
        <Nav pages={pages} />
        {/* <nav>
            {pages?.map((page: any) => (
                <Link href={page.slug} key={page.slug}>
                    <a>{page.slug}</a>
                </Link>
            ))}
        </nav> */}
        <main className={className}>{children}</main>
        <Footer socialMediaLinks={settings.socialMediaLinks} />
    </>
)