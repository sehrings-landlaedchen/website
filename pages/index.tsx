import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Content } from "../components/content";
import { CustomImage } from "../components/custom-image";
import { Layout } from "../components/layout";
import PageHeader from "../components/page-header";
import { getPageBySlug, getSettings, pages } from "../lib/pages";

type Props = {
  content: string;
  frontmatter: any;
  allPages: any;
  settings: any;
};

const Home: NextPage<Props> = ({
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
      className="Home"
      settings={settings}
    >
      <PageHeader
        large
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        backgroundImage={frontmatter.featuredImage}
        slider
      />
      {frontmatter.newsBody && (
        <section className="section-top-border">
          <div className="container">
            <div className="alert-banner">
              <Content source={frontmatter.newsBody} />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container section_title">
          <Content source={content} />
        </div>
      </section>

      {frontmatter.aboutBody && (
        <div className="single_about_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5">
                <div className="single_about_text">
                  <Content source={frontmatter.aboutBody} />
                  {frontmatter.aboutLink && frontmatter.aboutLinkText && (
                    <Link href={frontmatter.aboutLink} className="boxed_btn">
                      {frontmatter.aboutLinkText}
                    </Link>
                  )}
                </div>
              </div>
              <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
                {frontmatter.aboutImage && (
                  <div className="single_about_thumb thumb_n1">
                    <CustomImage
                      src={frontmatter.aboutImage}
                      alt=""
                      width={1305}
                      height={932}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {frontmatter.contentTwoBody && (
        <div className="single_about_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 order-lg-2">
                <div className="single_about_text">
                  <Content source={frontmatter.contentTwoBody} />
                  {frontmatter.contentTwoLink &&
                    frontmatter.contentTwoLinkText && (
                      <Link
                        href={frontmatter.contentTwoLink}
                        className="boxed_btn"
                      >
                        {frontmatter.contentTwoLinkText}
                      </Link>
                    )}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-lg-1">
                {frontmatter.contentTwoImage && (
                  <div className="single_about_thumb thumb_n1">
                    <CustomImage
                      src={frontmatter.contentTwoImage}
                      alt=""
                      width={1305}
                      height={932}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {frontmatter.testimonialText &&
      <Testimonial testimonialText={frontmatter.testimonialText} testimonials={frontmatter.testimonials} />
    }
    {frontmatter.brandText &&
      <Brand brandText={frontmatter.brandText} brands={frontmatter.brands} />
    } */}
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = () => {
  const allPages = pages();
  const { content, frontmatter } = getPageBySlug("home");
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
