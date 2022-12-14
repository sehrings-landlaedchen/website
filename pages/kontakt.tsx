import {
  faEnvelope,
  faIdCard,
  faMap,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layout";
import { getPageBySlug, getSettings, pages } from "../lib/pages";
import dynamic from "next/dynamic";
import PageHeader from "../components/page-header";
import styles from "../styles/kontakt.module.css";
import { Content } from "../components/content";

const Map = dynamic(() => import("../components/map"), { ssr: false });

type Props = {
  content: string;
  frontmatter: any;
  allPages: any;
  settings: any;
};

const Contact: NextPage<Props> = ({ settings, frontmatter, allPages }) => {
  return (
    <Layout
      title={settings.siteTitle}
      description={settings.siteTitle}
      pages={allPages}
      settings={settings}
      className="Contact"
    >
      <PageHeader
        sliderHalf
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        backgroundImage={frontmatter.featuredImage}
      />
      <section className="contact-section">
        <div className="container">
          <div className="d-sm-block mb-5 pb-4">
            {frontmatter.locations?.length > 0 && (
              <Map locations={frontmatter.locations} />
            )}
            <div id="map"></div>
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title"></h2>
              </div>
              <div className="col-lg-4">
                {frontmatter.address && (
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <FontAwesomeIcon
                        icon={faMap}
                        style={{ fontSize: "27px" }}
                      />
                    </span>
                    <div className="media-body">
                      <Content source={frontmatter.address} />
                    </div>
                  </div>
                )}
              </div>

              <div className="col-lg-4 offset-lg-4">
                {frontmatter.phone && (
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <FontAwesomeIcon
                        icon={faIdCard}
                        style={{ fontSize: "27px" }}
                      />
                    </span>
                    <div className="media-body">
                      <a
                        className={styles["Contact--Details--Item"]}
                        href={`tel:${frontmatter.phone}`}
                        style={{ padding: 0 }}
                      >
                        <h3>{frontmatter.phone}</h3>
                      </a>
                    </div>
                  </div>
                )}
                {frontmatter.email && (
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: "27px" }}
                      />
                    </span>
                    <div className="media-body">
                      <h3>{frontmatter.email}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;

export const getStaticProps: GetStaticProps = ({ params }) => {
  const allPages = pages();
  const { content, frontmatter } = getPageBySlug("contact");
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
