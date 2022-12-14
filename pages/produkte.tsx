import { GetStaticProps, NextPage } from "next";
import { Content } from "../components/content";
import { Layout } from "../components/layout";
import PageHeader from "../components/page-header";
import { getPageBySlug, pages, getSettings } from "../lib/pages";

type Props = {
  frontmatter: any;
  allPages: any;
  content: string;
  settings: any;
};

const Products: NextPage<Props> = ({
  frontmatter,
  allPages,
  content,
  settings,
}) => {
  // const settings = {}

  return (
    <Layout
      title={settings.siteTitle}
      description={settings.siteTitle}
      pages={allPages}
      settings={settings}
      className="ProductsPage"
    >
      <PageHeader
        sliderHalf
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        backgroundImage={frontmatter.featuredImage}
      />

      <section className="section">
        <div className="container section_title list-indentation">
          <Content source={content} />
        </div>
      </section>
    </Layout>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = () => {
  const allPages = pages();
  const { content, frontmatter } = getPageBySlug("produkte");
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
