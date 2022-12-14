import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Content } from "../components/content";
import { Layout } from "../components/layout";
import PageHeader from "../components/page-header";
import { getPageBySlug, getSettings, pages } from "../lib/pages";

type Props = {
  content: string;
  frontmatter: any;
  allPages: any;
  settings: any;
};

const Slug: NextPage<Props> = ({
  content,
  frontmatter,
  allPages,
  settings,
}) => {
  return (
    <Layout
      title={settings.siteTitle}
      description={settings.siteTitle}
      pages={allPages}
      settings={settings}
    >
      <PageHeader
        sliderHalf
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        backgroundImage={frontmatter.featuredImage}
      />
      <section className="section">
        <div className="container">
          <Content source={content} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Content source={frontmatter.contentTwoBody} />
        </div>
      </section>
    </Layout>
  );
};
export default Slug;

export const getStaticProps: GetStaticProps = ({ params }) => {
  const allPages = pages();
  const { content, frontmatter } = getPageBySlug(
    Array.isArray(params) ? params[0] : params?.slug
  );
  const settings = getSettings();

  return {
    props: {
      content,
      frontmatter,
      allPages,
      settings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = pages();

  return {
    paths: allPages
      .filter((x) => x.slug !== "produkte")
      .map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        };
      }),
    fallback: false,
  };
};
