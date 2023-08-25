import React from "react";
import Container from 'react-bootstrap/Container';
import "./style.css";
import { useAppContext } from "fusion:context";

function PostBody(props) {
  const { globalContent } = useAppContext();

  const formatDateTime = (date) => {
    return date?new Date(date).toLocaleString('es-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' , hour12: true, hour: "2-digit", minute: "2-digit"}):""
  }

  return globalContent.website_url?.length > 0 ? (
    <Container className="layout-section">
      <div className="row">
        <div className="col-sm-xl-12 layout-section wrap-bottom">
          <h1 className="headline">{globalContent.headlines.basic}</h1>
          <h2 className="h4-primary sub-headline">{globalContent.subheadlines.basic}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-md-12 layout-section">
          <p className="ts-byline"><span>Por</span> {globalContent.credits.by[0]?.name}</p>
          <time className="date" dateTime={`${globalContent.display_date}`}>
            {formatDateTime(globalContent.display_date)}
          </time>
          <div className="article-body-wrapper">
            {globalContent.promo_items?.basic?.resized_params?.image_url?.length > 0 ? (
              <figure className="article-body-image-container">
                <picture>
                  <source srcSet={globalContent.promo_items.basic.resized_params.image_url} media="screen and (min-width: 992px)"/>
                  <source srcSet={globalContent.promo_items.basic.resized_params.image_url} media="screen and (min-width: 768px)"/>
                  <source srcSet={globalContent.promo_items.basic.resized_params.image_url} media="screen and (min-width: 0px)"/>
                  <img src={globalContent.promo_items.basic.resized_params.image_url} width="1440" height="0" loading="lazy"/>
                </picture>
              </figure>
            ) : (
              ""
            )}
            {globalContent.content_elements?.map((el, idx) => {
              if (el.type === "text") {
                return (
                  <p key={idx} className="body-paragraph">
                    {el.content}
                  </p>
                );
              } else if (el.type === "image") {
                return (
                  <figure key={idx} className="article-body-image-container">
                    <picture>
                      <source srcSet={el.url} media="screen and (min-width: 992px)"/>
                      <source srcSet={el.url} media="screen and (min-width: 768px)"/>
                      <source srcSet={el.url} media="screen and (min-width: 0px)"/>
                      <img src={el.url} width="1440" height="0" loading="lazy"/>
                    </picture>
                  </figure>
                );
              }
            })}
            {/*<figure className="article-body-image-container">
              <picture className="Image__StyledPicture-sc-8yioqf-0 iKCNis">
                <source
                  srcSet="/resizer/MPqW8wt1BSnEe-jHrdBBRNNGvcU=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sandbox.rpalatam/QN5IS26UPZB6DIQKCHVHGQYDFU.jpg"
                  media="screen and (min-width: 992px)"
                />
                <source
                  srcSet="/resizer/hqMmYaPQfkqkiOGzuNRBJKHLKGs=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sandbox.rpalatam/QN5IS26UPZB6DIQKCHVHGQYDFU.jpg"
                  media="screen and (min-width: 768px)"
                />
                <source
                  srcSet="/resizer/8cn06DTrjsb5bGKlEBo1ELonwgM=/768x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sandbox.rpalatam/QN5IS26UPZB6DIQKCHVHGQYDFU.jpg"
                  media="screen and (min-width: 0px)"
                />
                <img
                  src="/resizer/MPqW8wt1BSnEe-jHrdBBRNNGvcU=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sandbox.rpalatam/QN5IS26UPZB6DIQKCHVHGQYDFU.jpg"
                  width="1440"
                  height="0"
                  loading="lazy"
                />
              </picture>
            </figure>*/}
          </div>
        </div>
      </div>
    </Container>
  ) : (
    ""
  );
}

PostBody.label = "Article Body";
export default PostBody;
