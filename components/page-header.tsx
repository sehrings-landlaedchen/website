import React, { FC } from "react";
import { CustomImage } from "./custom-image";
import Image from "next/image";
import styles from "./styles.module.css";
import { inherits } from "util";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  large?: boolean;
  className?: string;
  slider?: boolean;
  sliderHalf?: boolean;
}

const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  large = false,
  className = "",
  slider = false,
  sliderHalf = false,
}) => {
  if (large) className += " PageHeader-large";
  if (!backgroundImage) return null;
  return slider || sliderHalf ? (
    <div className="slider_area zigzag_bg_2">
      <div className="slider_sctive owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <div className="owl-item active">
              <div
                className="single_slider slider_img_1"
                style={{
                  ...(sliderHalf && { height: 500 }),
                  backgroundImage: `url(${backgroundImage?.replace(
                    "/img/",
                    "/static/images/"
                  )}`,
                }}
              >
                <div className="single_slider-iner">
                  {(title || subtitle) && (
                    <div className="slider_contant text-center">
                      <h3>{title}</h3>
                      <p>{subtitle}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : backgroundImage ? (
    <CustomImage
      src={backgroundImage}
      className="breadcam_area breadcam_bg_1 zigzag_bg_2"
      alt="background"
      width={1920}
      height={400}
    />
  ) : (
    // <CustomImage
    //     src={backgroundImage}
    //     className="breadcam_area breadcam_bg_1 zigzag_bg_2"
    //     alt="background"
    //     width={1920}
    //     height={400} />
    // <Image background lazy={false} src={backgroundImage} className="breadcam_area breadcam_bg_1 zigzag_bg_2" alt="background">
    //     <div className="breadcam_inner">
    //         <div className="breadcam_text">
    //             <h3>{title}</h3>
    //             <p>{subtitle}</p>
    //         </div>
    //     </div>
    // </Image>
    <div className="zigzag_bg_2 breadcam_area no-image"></div>
  );
};

export default PageHeader;
