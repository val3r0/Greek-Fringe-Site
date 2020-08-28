import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"



// COMPONENTS...
import TopBodyNav1 from "../components/topbodynav"
import ArtistFeatured from "../components/artistfeatured"

//  STYLES ...
import bodyStyles from "../styles/body.module.scss"
import "../styles/index.scss"


function Body() {


  const data = useStaticQuery(graphql`

    query Images {

      now01: file(relativePath: {eq: "thenow_00.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      now02: file(relativePath: {eq: "thenow_01.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      now03: file(relativePath: {eq: "thenow_02.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      t01: file(relativePath: {eq: "team_01.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      t02: file(relativePath: {eq: "team_02.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      t03: file(relativePath: {eq: "team_03.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      t04: file(relativePath: {eq: "team_04.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      t05: file(relativePath: {eq: "team_05.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      t06: file(relativePath: {eq: "team_06.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholder: file(relativePath: {eq: "placeholder_00.jpg"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      support: file(relativePath: {eq: "supporters_00.png"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  `)




  return (
    <div id="top" className={bodyStyles.wrapper}>
      <div className={bodyStyles.top}></div>
        <TopBodyNav1 />
      <div className={bodyStyles.body}>
        
        {/* EVENTS SECTION ... */}

        <div className={bodyStyles.events}>
          <h7 data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease">
            An exploration of contemporary Hellenic diversity and innovation.
          </h7>
          <div id="eventsM" className={bodyStyles.anchorM}></div>
          <div className={bodyStyles.video} 
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease">
              <style
              dangerouslySetInnerHTML={{
                __html:
                  ".embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }"
              }}
            />
            <div className="embed-container">
              <iframe
                title="vimeo intro video"
                src="https://player.vimeo.com/video/450405903?autoplay=1&muted=1&loop=1"
                allow="autoplay"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                allowAutoPlay
                frameBorder={0}
              />
            </div>
          </div>          
          <div id="events" className={bodyStyles.eventsanchor}></div>
          <h1
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">
            Events</h1>
          <h3>Greek Fringe is all about unveiling independent artists who are not afforded the attention they deserve. Our mission is to curate events that do just that! Keep an eye on our page for upcoming events in Melbourne, Sydney, New York, Nicosia, Athens and who knows where else?! 
          </h3>
        </div> 
        
        {/* WHATSON SECTION ... */}

        <div className={bodyStyles.whatsON}>   
          <h5>What's on</h5>
          <div className={bodyStyles.on}>
            <div className={bodyStyles.digitalevents}>
              <div className={bodyStyles.textWithLines}>
                <h4>DIGITAL EVENTS</h4>
              </div>            
              <div className={bodyStyles.column1}>
                <p>Greek Fringe is thrilled to present an interhemispheric collaboration, bringing together two award winning creative forces – the strikingly original Amalgamation Project (Cyprus) and prophetic poet and rapper, Luka Lesson (Australia).</p>
                <p>This promises to be a dynamic showcase of contemporary Hellenic diversity that connects young Creatives from the source with the diaspora.</p>
                <p>These artists have pushed the boundaries within their own fields, and we are taking it a step further by merging art forms and continents in a digital presentation that lays claim to the NOW.</p>
              </div>
            </div>
            <div className={bodyStyles.artistsupport}>
              <div className={bodyStyles.textWithLines}><h4>SUPPORT THE ARTISTS</h4></div>
              <div className={bodyStyles.column2}>
                <p>Though we intend on producing mind altering events in real life, due to COVID-19 we are kicking off with a series of digital events in an effort to protect the public and those involved. Despite being online, the same amount of love, sweat and tears go into producing these works, so we encourage people (if you have the means) to throw some coin at the artists we feature.</p>
                <p>We have devised a tiered system of payment so you can pay what you feel to support the many people that have devoted their time and talent to this event. Click on the “SUPPORT THE ARTISTS” button below.</p>
              </div>
            </div>
          </div>  
        </div>  
        
{/* STREAM VIDEO SECTION ... */}
        <div className={bodyStyles.stream}>

          <div className={bodyStyles.streamTitle}>
            <h2
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease">
              Amalgamation Project (CY) + Luka Lesson (AU)
            </h2>
          </div>
          
          {/* <div className={bodyStyles.video}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">
            <Img 
              fluid = {data.placeholder.childImageSharp.fluid}  
              alt="Athens house's main door full of graffiti"
            />
          </div> */}
          <div className={bodyStyles.video} 
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease">
              <style
              dangerouslySetInnerHTML={{
                __html:
                  ".embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }"
              }}
            />
            <div className="embed-container">
            <iframe
              src="https://player.vimeo.com/video/452051006?fbclid=IwAR0vUbkw6cpuUuwBXsqHQMbiO0dGZsSw1_VOjwnzYiK1JD3tF1uPjA5OE6A"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allowTransparency="true"
              allowFullScreen="true"
              width={560}
              height={458}
              frameBorder={0}
            />
            </div>
          </div>
          
            <div className={bodyStyles.streaminfo}> 
              <div className={bodyStyles.time}>
                8:30pm-9:30pm (AEST) 28 August, 2020
              </div>
              <div className={bodyStyles.streambtn}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">
                <a href="https://www.facebook.com/greekfringe/" target="_blank" rel="noreferrer"><button className={bodyStyles.free} type="button" aria-label="Watch Live Stream on GFF's Facebook"><p>WATCH LIVE STREAM</p></button></a>
                <a href="https://www.stickytickets.com.au/fdqoh/greek_fringe_fest__amalgamation_project_cy__luka_lesson_au.aspx" target="_blank" rel="noreferrer"><button className="buttonOrange" type="button" aria-label="Support Artist">SUPPORT THE ARTISTS</button>
                </a> 
              </div>
              
              <div className={bodyStyles.streamtxt}>
                <h5>Amalgamation Project</h5>
                <p>Created by Vasiliki Anastasiou, the Amalgamation Project’s heart centres around her original compositions. It borrows and re-arranges traditional melodies from countries around the shores of the Mediterranean Sea but also from the whole of the Balkan peninsula. Vasiliki invites guest musicians from different backgrounds usually jazz, classical and folk, to share musical thoughts and experiment with the blend. Their repertoire includes polyphonic adaptations of traditional music through a modern approach.</p>
                <div className={bodyStyles.streamtxt2}>
                <h5>Luka Lesson</h5>        
                <p>Luka Lesson is a poet and rapper whose work engages with the Greek mythology of his family homeland, the fiercely political and the vulnerably self-reflective. Luka has performed with the Queensland Symphony Orchestra, released his own musical albums and books, and has been published in a number international poetry collections. Luka Lesson has always used education-based programs as a means for social change both within Australia and abroad, and his work is currently being studied in English departments across the country. Luka Lesson also runs his own poetry retreat in his grandfather’s village on the island of Rhodes, Greece every year. Luka’s latest solo work, entitled Agapi {"&"} Other Kinds of Love will premiere in 2020.</p>
                </div>
              </div>

              {/* <div className={bodyStyles.seemore}>    
                <div className={bodyStyles.textWithLines}>
                  <p>SEE MORE</p>
                </div>             
                <p>Beyond our physical and digital events, we are compiling a catalogue of artists who embody contemporary Hellenic diversity and innovation.</p>
              </div> */}
              {/* <div className={bodyStyles.streambtnCataloge}>
                <button className="buttonW"><p>ARTIST CATALOGUE</p></button>
              </div>  */}

            </div>
            
        </div>
      </div>

      {/* ......... SECTION DIVIDER ......... */}
      <div id="featuredM"></div>
      <div className={bodyStyles.TheNowPhone}>
            <svg viewBox="0 0 762 771.387">
        <defs>
            <style>{".d{fill:#ff4419}"}</style>
            <clipPath id="a">
              <path className="a" d="M0 0h757v-771.387H0z" />
            </clipPath>
            <clipPath id="b">
              <path
                className="a"
                transform="translate(250.498 -179.776)"
                d="M0 0H177.018V63.454H0z"
              />
            </clipPath>
            <clipPath id="c">
              <path
                className="a"
                transform="translate(222.254 -145.993)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="d">
              <path
                className="a"
                transform="translate(229.55 -124.675)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="e">
              <path
                className="a"
                transform="translate(240.265 -100.359)"
                d="M0 0H177.018V63.453H0z"
              />
            </clipPath>
            <clipPath id="f">
              <path
                className="a"
                transform="translate(257.971 -82.532)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="g">
              <path
                className="a"
                transform="translate(275.983 -62.453)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
          </defs>
          <path
            d="M0-.387h770v-771H0z"
            fill="#97ccca"
            transform="translate(0 771.387)"
          />
          <g clipPath="url(#a)" transform="translate(0 771.387)">
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855C-.078 11.716-.234 2.421-.469 0zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.138 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.416 0 13.2 4.53 22.025 18.12 22.025m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.609-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -361.163)"
            />
            <path
              className="d"
              d="M0 0c5.78 0 8.748-1.172 10.31-2.187L8.279-8.2a10.9 10.9 0 01-6.405 1.64c-3.514 0-5.7-1.874-5.7-6.092v-24.6h11.48v-6.092H-3.827v-11.172h-5.155l-2.5 10.856-6.091 1.56v4.843h6.092V-12.5C-11.481-3.749-7.186 0 0 0m41.628-43.972a15.935 15.935 0 00-12.106 5.233h-.312v-20.932h-7.732v59.28h7.732V-30.46a11.263 11.263 0 0110.232-6.717c5.311 0 7.888 3.515 7.888 8.669V-.391h7.732v-29.523c0-8.981-5.155-14.058-13.434-14.058M98.877-9.685a15.289 15.289 0 01-9.841 3.515c-8.2 0-12.184-3.983-12.652-13.434h26.867a68.722 68.722 0 00.391-7.5c0-10.309-5.7-17.026-16.09-17.026S68.73-37.1 68.73-22.025C68.73-6.4 75.447.234 88.1.234c6.795 0 11.169-1.8 14.215-4.139zM87.084-37.8c6.248 0 9.138 3.671 9.138 10.31 0 .312 0 1.484-.078 2.108H76.54c.39-8.827 5.077-12.418 10.544-12.418"
              transform="translate(228.856 -411.173)"
            />
            <path
              className="d"
              d="M0 0c0 16.714 6.483 27.727 22.025 27.727 8.279 0 13.356-2.656 15.7-5.155l-4.375-5.545c-1.874 1.874-5 3.67-10.388 3.67C13.121 20.7 8.045 13.2 8.045-.547c0-14.527 5.233-21.088 14.214-21.088 5.7 0 8.748 2.031 10.857 4.062l5.076-5.936c-1.718-1.562-6.248-5.077-15.308-5.077C7.888-28.586 0-17.729 0 0m50.845-32.335v50.143c0 6.092 3.2 9.762 9.45 9.762a15.141 15.141 0 005.468-1.015v-6.326a8.568 8.568 0 01-3.046.625c-2.89 0-4.218-1.484-4.218-5.077v-48.112zm48.189 48.893a11.4 11.4 0 01-9.451 5.077c-4.373 0-6.795-2.734-6.795-6.092 0-5.624 6.795-7.967 16.246-7.5zm-8.045-33.272c-9.06 0-13.2 5.233-14.761 7.342l5.545 4.295a9.809 9.809 0 019.06-5.076c5.077 0 8.2 1.874 8.2 8.2v4.3c-14.684-.39-23.9 4.218-23.9 13.9 0 5.858 4.452 11.482 12.5 11.482 6.951 0 10.309-3.124 12.262-5.468h.312c1.094 2.89 3.593 5.077 7.811 5.077a6.99 6.99 0 003.28-.781V21.01h-1.172c-2.733 0-3.827-2.109-3.827-5.546V-3.28c0-9.451-5.623-13.434-15.308-13.434m34.522 43.66h7.732v-42.957h-7.732zm-1.484-55.063a5 5 0 005.076 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.16-5.233 5.055 5.055 0 00-5.076 5.233M181.2-10.388h-.312c-1.562-3.671-4.687-6.56-11.169-6.56a13.472 13.472 0 00-11.169 5.311h-.312l-1.484-4.374h-6.092v42.957h7.732V-3.28a9.194 9.194 0 018.747-6.952c5.077 0 7.811 3.359 7.811 9.607v27.571h7.732V-3.749a9.8 9.8 0 019.06-6.483c4.608 0 7.576 2.89 7.576 9.06v28.118h7.732v-29.6c0-9.529-4.764-14.293-13.2-14.293-6.561 0-10.778 3.2-12.653 6.56m43.347 37.334h7.732v-42.958h-7.732zm-1.486-55.064a5 5 0 005.077 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.155-5.233 5.055 5.055 0 00-5.077 5.233m60.217 25.383c-.156-9.528-5.233-14.214-13.746-14.214a16.1 16.1 0 00-12.031 5.311h-.313l-1.562-4.374h-5.936v42.957h7.733V-3.28a10.391 10.391 0 019.841-6.952c5.389 0 8.278 3.359 8.278 9.217v27.961h7.733zm47.954-11.4c-2.968-1.406-7.263-2.343-13.355-2.343-14.137 0-20.932 9.451-20.932 22.65 0 14.918 7.654 20.073 16.558 20.073a15.307 15.307 0 009.841-3.124h.312v3.436c0 7.264-2.968 10.544-10.153 10.544-5.389 0-9.06-1.953-11.169-4.374l-4.452 6.014c1.953 2.031 6.249 4.921 15.074 4.921 10.935 0 18.276-5.624 18.276-17.027zM323.577-8.9v24.989a10.534 10.534 0 01-8.2 3.671c-5.7 0-10.623-2.968-10.623-14.215 0-10.465 4.921-15.542 12.5-15.542a16.7 16.7 0 016.323 1.097"
              transform="translate(214.485 -547.51)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -292.819)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -238.216)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -198.201)"
            />
            <g clipPath="url(#b)" opacity={0.9}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(230.153 -163.169)"
              />
            </g>
            <g clipPath="url(#c)" opacity={0.8}>
              <path
                className="d"
                d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(238.908 -129.386)"
              />
            </g>
            <g clipPath="url(#d)" opacity={0.7}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(246.204 -108.069)"
              />
            </g>
            <g clipPath="url(#e)" opacity={0.6}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(256.92 -83.752)"
              />
            </g>
            <g clipPath="url(#f)" opacity={0.5}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(274.625 -65.926)"
              />
            </g>
            <g clipPath="url(#g)" opacity={0.4}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(292.637 -45.847)"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={bodyStyles.claimingTheNow}>
        {/* <div className={bodyStyles.TheNow}> */}
          <div className={bodyStyles.TheNowSVG}>
            <svg viewBox="0 0 762 771.387">
        <defs>
            <style>{".d{fill:#ff4419}"}</style>
            <clipPath id="a">
              <path className="a" d="M0 0h757v-771.387H0z" />
            </clipPath>
            <clipPath id="b">
              <path
                className="a"
                transform="translate(250.498 -179.776)"
                d="M0 0H177.018V63.454H0z"
              />
            </clipPath>
            <clipPath id="c">
              <path
                className="a"
                transform="translate(222.254 -145.993)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="d">
              <path
                className="a"
                transform="translate(229.55 -124.675)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="e">
              <path
                className="a"
                transform="translate(240.265 -100.359)"
                d="M0 0H177.018V63.453H0z"
              />
            </clipPath>
            <clipPath id="f">
              <path
                className="a"
                transform="translate(257.971 -82.532)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="g">
              <path
                className="a"
                transform="translate(275.983 -62.453)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
          </defs>
          <path
            d="M0-.387h770v-771H0z"
            fill="#97ccca"
            transform="translate(0 771.387)"
          />
          <g clipPath="url(#a)" transform="translate(0 771.387)">
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855C-.078 11.716-.234 2.421-.469 0zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.138 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.416 0 13.2 4.53 22.025 18.12 22.025m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.609-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -361.163)"
            />
            <path
              className="d"
              d="M0 0c5.78 0 8.748-1.172 10.31-2.187L8.279-8.2a10.9 10.9 0 01-6.405 1.64c-3.514 0-5.7-1.874-5.7-6.092v-24.6h11.48v-6.092H-3.827v-11.172h-5.155l-2.5 10.856-6.091 1.56v4.843h6.092V-12.5C-11.481-3.749-7.186 0 0 0m41.628-43.972a15.935 15.935 0 00-12.106 5.233h-.312v-20.932h-7.732v59.28h7.732V-30.46a11.263 11.263 0 0110.232-6.717c5.311 0 7.888 3.515 7.888 8.669V-.391h7.732v-29.523c0-8.981-5.155-14.058-13.434-14.058M98.877-9.685a15.289 15.289 0 01-9.841 3.515c-8.2 0-12.184-3.983-12.652-13.434h26.867a68.722 68.722 0 00.391-7.5c0-10.309-5.7-17.026-16.09-17.026S68.73-37.1 68.73-22.025C68.73-6.4 75.447.234 88.1.234c6.795 0 11.169-1.8 14.215-4.139zM87.084-37.8c6.248 0 9.138 3.671 9.138 10.31 0 .312 0 1.484-.078 2.108H76.54c.39-8.827 5.077-12.418 10.544-12.418"
              transform="translate(228.856 -411.173)"
            />
            <path
              className="d"
              d="M0 0c0 16.714 6.483 27.727 22.025 27.727 8.279 0 13.356-2.656 15.7-5.155l-4.375-5.545c-1.874 1.874-5 3.67-10.388 3.67C13.121 20.7 8.045 13.2 8.045-.547c0-14.527 5.233-21.088 14.214-21.088 5.7 0 8.748 2.031 10.857 4.062l5.076-5.936c-1.718-1.562-6.248-5.077-15.308-5.077C7.888-28.586 0-17.729 0 0m50.845-32.335v50.143c0 6.092 3.2 9.762 9.45 9.762a15.141 15.141 0 005.468-1.015v-6.326a8.568 8.568 0 01-3.046.625c-2.89 0-4.218-1.484-4.218-5.077v-48.112zm48.189 48.893a11.4 11.4 0 01-9.451 5.077c-4.373 0-6.795-2.734-6.795-6.092 0-5.624 6.795-7.967 16.246-7.5zm-8.045-33.272c-9.06 0-13.2 5.233-14.761 7.342l5.545 4.295a9.809 9.809 0 019.06-5.076c5.077 0 8.2 1.874 8.2 8.2v4.3c-14.684-.39-23.9 4.218-23.9 13.9 0 5.858 4.452 11.482 12.5 11.482 6.951 0 10.309-3.124 12.262-5.468h.312c1.094 2.89 3.593 5.077 7.811 5.077a6.99 6.99 0 003.28-.781V21.01h-1.172c-2.733 0-3.827-2.109-3.827-5.546V-3.28c0-9.451-5.623-13.434-15.308-13.434m34.522 43.66h7.732v-42.957h-7.732zm-1.484-55.063a5 5 0 005.076 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.16-5.233 5.055 5.055 0 00-5.076 5.233M181.2-10.388h-.312c-1.562-3.671-4.687-6.56-11.169-6.56a13.472 13.472 0 00-11.169 5.311h-.312l-1.484-4.374h-6.092v42.957h7.732V-3.28a9.194 9.194 0 018.747-6.952c5.077 0 7.811 3.359 7.811 9.607v27.571h7.732V-3.749a9.8 9.8 0 019.06-6.483c4.608 0 7.576 2.89 7.576 9.06v28.118h7.732v-29.6c0-9.529-4.764-14.293-13.2-14.293-6.561 0-10.778 3.2-12.653 6.56m43.347 37.334h7.732v-42.958h-7.732zm-1.486-55.064a5 5 0 005.077 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.155-5.233 5.055 5.055 0 00-5.077 5.233m60.217 25.383c-.156-9.528-5.233-14.214-13.746-14.214a16.1 16.1 0 00-12.031 5.311h-.313l-1.562-4.374h-5.936v42.957h7.733V-3.28a10.391 10.391 0 019.841-6.952c5.389 0 8.278 3.359 8.278 9.217v27.961h7.733zm47.954-11.4c-2.968-1.406-7.263-2.343-13.355-2.343-14.137 0-20.932 9.451-20.932 22.65 0 14.918 7.654 20.073 16.558 20.073a15.307 15.307 0 009.841-3.124h.312v3.436c0 7.264-2.968 10.544-10.153 10.544-5.389 0-9.06-1.953-11.169-4.374l-4.452 6.014c1.953 2.031 6.249 4.921 15.074 4.921 10.935 0 18.276-5.624 18.276-17.027zM323.577-8.9v24.989a10.534 10.534 0 01-8.2 3.671c-5.7 0-10.623-2.968-10.623-14.215 0-10.465 4.921-15.542 12.5-15.542a16.7 16.7 0 016.323 1.097"
              transform="translate(214.485 -547.51)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -292.819)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -238.216)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -198.201)"
            />
            <g clipPath="url(#b)" opacity={0.9}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(230.153 -163.169)"
              />
            </g>
            <g clipPath="url(#c)" opacity={0.8}>
              <path
                className="d"
                d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(238.908 -129.386)"
              />
            </g>
            <g clipPath="url(#d)" opacity={0.7}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(246.204 -108.069)"
              />
            </g>
            <g clipPath="url(#e)" opacity={0.6}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(256.92 -83.752)"
              />
            </g>
            <g clipPath="url(#f)" opacity={0.5}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(274.625 -65.926)"
              />
            </g>
            <g clipPath="url(#g)" opacity={0.4}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(292.637 -45.847)"
              />
            </g>
          </g>
        </svg>
          </div>
        {/* </div> */}
        <div className={bodyStyles.TheNowImg}>
          <Img 
            fluid = {data.now01.childImageSharp.fluid}  
            alt="Athens house's main door full of graffiti"
          />
        </div>
      </div>
      {/* ......... SECTION DIVIDER ......... */}      

      
{/* FEATURED ARTISTS SECTION ... */}

      <div className={bodyStyles.body}>
        <div className={bodyStyles.featured}>  
          <div id="featured" className={bodyStyles.featuredanchor}></div>
          <div className={bodyStyles.title}>
              <h1
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">Featured Artists</h1>
              <h4>Music - Visual - Performance - Words</h4> 
          </div>
        
          <h3>The financial crisis in Europe has led Greece to emerge as a hub of creativity and innovative thinking. The Greek Fringe is a movement that seeks to expose Greece and its booming arts scene and thrust attention upon diasporic art throughout the Globe. </h3>
        <ArtistFeatured />
        {/* <div className={bodyStyles.seemore}>
          <h5>See More</h5>
          <p>Beyond our physical and digital events, we are compiling a catalogue of artists who embody contemporary Hellenic diversity and innovation.</p>
          <button>ARTIST CATALOGUE</button>
        </div> */}
        </div>
      </div>  
      
      {/* ......... SECTION DIVIDER ......... */}
      <div id="calloutM"></div>
      <div className={bodyStyles.TheNowPhone}>
          <Img 
            className={bodyStyles.img}
            fluid = {data.now01.childImageSharp.fluid}  
            alt="Athens house's main door full of graffiti"
          />
      </div>
      <div className={bodyStyles.claimingTheNow}>
        {/* <div className={bodyStyles.TheNow}> */}
        <div className={bodyStyles.TheNowSVG}>
            <svg viewBox="0 0 762 771.387">
        <defs>
            <style>{".d{fill:#ff4419}"}</style>
            <clipPath id="a">
              <path className="a" d="M0 0h757v-771.387H0z" />
            </clipPath>
            <clipPath id="b">
              <path
                className="a"
                transform="translate(250.498 -179.776)"
                d="M0 0H177.018V63.454H0z"
              />
            </clipPath>
            <clipPath id="c">
              <path
                className="a"
                transform="translate(222.254 -145.993)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="d">
              <path
                className="a"
                transform="translate(229.55 -124.675)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="e">
              <path
                className="a"
                transform="translate(240.265 -100.359)"
                d="M0 0H177.018V63.453H0z"
              />
            </clipPath>
            <clipPath id="f">
              <path
                className="a"
                transform="translate(257.971 -82.532)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="g">
              <path
                className="a"
                transform="translate(275.983 -62.453)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
          </defs>
          <path
            d="M0-.387h770v-771H0z"
            fill="#97ccca"
            transform="translate(0 771.387)"
          />
          <g clipPath="url(#a)" transform="translate(0 771.387)">
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855C-.078 11.716-.234 2.421-.469 0zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.138 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.416 0 13.2 4.53 22.025 18.12 22.025m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.609-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -361.163)"
            />
            <path
              className="d"
              d="M0 0c5.78 0 8.748-1.172 10.31-2.187L8.279-8.2a10.9 10.9 0 01-6.405 1.64c-3.514 0-5.7-1.874-5.7-6.092v-24.6h11.48v-6.092H-3.827v-11.172h-5.155l-2.5 10.856-6.091 1.56v4.843h6.092V-12.5C-11.481-3.749-7.186 0 0 0m41.628-43.972a15.935 15.935 0 00-12.106 5.233h-.312v-20.932h-7.732v59.28h7.732V-30.46a11.263 11.263 0 0110.232-6.717c5.311 0 7.888 3.515 7.888 8.669V-.391h7.732v-29.523c0-8.981-5.155-14.058-13.434-14.058M98.877-9.685a15.289 15.289 0 01-9.841 3.515c-8.2 0-12.184-3.983-12.652-13.434h26.867a68.722 68.722 0 00.391-7.5c0-10.309-5.7-17.026-16.09-17.026S68.73-37.1 68.73-22.025C68.73-6.4 75.447.234 88.1.234c6.795 0 11.169-1.8 14.215-4.139zM87.084-37.8c6.248 0 9.138 3.671 9.138 10.31 0 .312 0 1.484-.078 2.108H76.54c.39-8.827 5.077-12.418 10.544-12.418"
              transform="translate(228.856 -411.173)"
            />
            <path
              className="d"
              d="M0 0c0 16.714 6.483 27.727 22.025 27.727 8.279 0 13.356-2.656 15.7-5.155l-4.375-5.545c-1.874 1.874-5 3.67-10.388 3.67C13.121 20.7 8.045 13.2 8.045-.547c0-14.527 5.233-21.088 14.214-21.088 5.7 0 8.748 2.031 10.857 4.062l5.076-5.936c-1.718-1.562-6.248-5.077-15.308-5.077C7.888-28.586 0-17.729 0 0m50.845-32.335v50.143c0 6.092 3.2 9.762 9.45 9.762a15.141 15.141 0 005.468-1.015v-6.326a8.568 8.568 0 01-3.046.625c-2.89 0-4.218-1.484-4.218-5.077v-48.112zm48.189 48.893a11.4 11.4 0 01-9.451 5.077c-4.373 0-6.795-2.734-6.795-6.092 0-5.624 6.795-7.967 16.246-7.5zm-8.045-33.272c-9.06 0-13.2 5.233-14.761 7.342l5.545 4.295a9.809 9.809 0 019.06-5.076c5.077 0 8.2 1.874 8.2 8.2v4.3c-14.684-.39-23.9 4.218-23.9 13.9 0 5.858 4.452 11.482 12.5 11.482 6.951 0 10.309-3.124 12.262-5.468h.312c1.094 2.89 3.593 5.077 7.811 5.077a6.99 6.99 0 003.28-.781V21.01h-1.172c-2.733 0-3.827-2.109-3.827-5.546V-3.28c0-9.451-5.623-13.434-15.308-13.434m34.522 43.66h7.732v-42.957h-7.732zm-1.484-55.063a5 5 0 005.076 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.16-5.233 5.055 5.055 0 00-5.076 5.233M181.2-10.388h-.312c-1.562-3.671-4.687-6.56-11.169-6.56a13.472 13.472 0 00-11.169 5.311h-.312l-1.484-4.374h-6.092v42.957h7.732V-3.28a9.194 9.194 0 018.747-6.952c5.077 0 7.811 3.359 7.811 9.607v27.571h7.732V-3.749a9.8 9.8 0 019.06-6.483c4.608 0 7.576 2.89 7.576 9.06v28.118h7.732v-29.6c0-9.529-4.764-14.293-13.2-14.293-6.561 0-10.778 3.2-12.653 6.56m43.347 37.334h7.732v-42.958h-7.732zm-1.486-55.064a5 5 0 005.077 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.155-5.233 5.055 5.055 0 00-5.077 5.233m60.217 25.383c-.156-9.528-5.233-14.214-13.746-14.214a16.1 16.1 0 00-12.031 5.311h-.313l-1.562-4.374h-5.936v42.957h7.733V-3.28a10.391 10.391 0 019.841-6.952c5.389 0 8.278 3.359 8.278 9.217v27.961h7.733zm47.954-11.4c-2.968-1.406-7.263-2.343-13.355-2.343-14.137 0-20.932 9.451-20.932 22.65 0 14.918 7.654 20.073 16.558 20.073a15.307 15.307 0 009.841-3.124h.312v3.436c0 7.264-2.968 10.544-10.153 10.544-5.389 0-9.06-1.953-11.169-4.374l-4.452 6.014c1.953 2.031 6.249 4.921 15.074 4.921 10.935 0 18.276-5.624 18.276-17.027zM323.577-8.9v24.989a10.534 10.534 0 01-8.2 3.671c-5.7 0-10.623-2.968-10.623-14.215 0-10.465 4.921-15.542 12.5-15.542a16.7 16.7 0 016.323 1.097"
              transform="translate(214.485 -547.51)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -292.819)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -238.216)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -198.201)"
            />
            <g clipPath="url(#b)" opacity={0.9}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(230.153 -163.169)"
              />
            </g>
            <g clipPath="url(#c)" opacity={0.8}>
              <path
                className="d"
                d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(238.908 -129.386)"
              />
            </g>
            <g clipPath="url(#d)" opacity={0.7}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(246.204 -108.069)"
              />
            </g>
            <g clipPath="url(#e)" opacity={0.6}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(256.92 -83.752)"
              />
            </g>
            <g clipPath="url(#f)" opacity={0.5}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(274.625 -65.926)"
              />
            </g>
            <g clipPath="url(#g)" opacity={0.4}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(292.637 -45.847)"
              />
            </g>
          </g>
        </svg>
          </div>
        {/* </div> */}
        <div id="calloutM" className={bodyStyles.TheNowImg}>
          <Img 
            fluid = {data.now02.childImageSharp.fluid}  
            alt="Athens house's main door full of graffiti"
          />
        </div>
      </div>
      {/* ......... SECTION DIVIDER ......... */}   

{/* ARTISTS CALLOUT SECTION ... */}

      <div className={bodyStyles.body}>
        {/* <div id="callout" className={bodyStyles.calloutanchor}></div> */}
        <div id="callout" className={bodyStyles.callout}>
          
          <h1
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">Artist Callout</h1>

          <div className={bodyStyles.callouttxt}>
            <p><h3>What we’re looking for?</h3></p>
            <p><h3>We’re after work that represents the experience of modern Hellenic diversity from emerging artists and creatives living and working in Sydney and Melbourne. We also wish to extend this callout to artists living abroad whose work can be included in a digital capacity.</h3></p>
            <p><h3>Our curatorial ethos is broad and inclusive and we’re open to all types of media.</h3></p>
          </div>

          <div className={bodyStyles.preferenceto}>

            <h2
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease">We give preference to work that:</h2>

            <div className={bodyStyles.textWithLinesRedOut}>
              <h3>Represents the experience of the modern Hellenic diversity</h3>
              <div className={bodyStyles.textWithLinesRedIn}>
              <h3>Is new, surprising, subversive, inventive and different</h3>
              </div>
              <h3>Uses traditional elements in unconventional ways</h3>
            </div>

            <div className={bodyStyles.howtoapply}>

                <h5>How to apply</h5>
                <p>Make sure your work is a good fit for our platform (and that we’re a good fit for you). Take a look at our <b>About</b> section to get a feel for what we do.</p>

                <Link to="/form">
                  <button
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="800"
                  data-sal-easing="ease">APPLY NOW</button>
                </Link>
              
            </div>
            

          </div>
       </div>   
    </div>

      
      
       {/* ......... SECTION DIVIDER ......... */}
       <div id="aboutM"></div>
       <div className={bodyStyles.TheNowPhone}>
          <Img 
            className={bodyStyles.img}
            fluid = {data.now02.childImageSharp.fluid}  
            alt="Athens house's main door full of graffiti"
          />
      </div>
       <div className={bodyStyles.claimingTheNow}>
        {/* <div className={bodyStyles.TheNow}> */}
        <div className={bodyStyles.TheNowSVG}>
            <svg viewBox="0 0 762 771.387">
        <defs>
            <style>{".d{fill:#ff4419}"}</style>
            <clipPath id="a">
              <path className="a" d="M0 0h757v-771.387H0z" />
            </clipPath>
            <clipPath id="b">
              <path
                className="a"
                transform="translate(250.498 -179.776)"
                d="M0 0H177.018V63.454H0z"
              />
            </clipPath>
            <clipPath id="c">
              <path
                className="a"
                transform="translate(222.254 -145.993)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="d">
              <path
                className="a"
                transform="translate(229.55 -124.675)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="e">
              <path
                className="a"
                transform="translate(240.265 -100.359)"
                d="M0 0H177.018V63.453H0z"
              />
            </clipPath>
            <clipPath id="f">
              <path
                className="a"
                transform="translate(257.971 -82.532)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
            <clipPath id="g">
              <path
                className="a"
                transform="translate(275.983 -62.453)"
                d="M0 0H177.017V63.453H0z"
              />
            </clipPath>
          </defs>
          <path
            d="M0-.387h770v-771H0z"
            fill="#97ccca"
            transform="translate(0 771.387)"
          />
          <g clipPath="url(#a)" transform="translate(0 771.387)">
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855C-.078 11.716-.234 2.421-.469 0zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.138 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.416 0 13.2 4.53 22.025 18.12 22.025m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.609-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -361.163)"
            />
            <path
              className="d"
              d="M0 0c5.78 0 8.748-1.172 10.31-2.187L8.279-8.2a10.9 10.9 0 01-6.405 1.64c-3.514 0-5.7-1.874-5.7-6.092v-24.6h11.48v-6.092H-3.827v-11.172h-5.155l-2.5 10.856-6.091 1.56v4.843h6.092V-12.5C-11.481-3.749-7.186 0 0 0m41.628-43.972a15.935 15.935 0 00-12.106 5.233h-.312v-20.932h-7.732v59.28h7.732V-30.46a11.263 11.263 0 0110.232-6.717c5.311 0 7.888 3.515 7.888 8.669V-.391h7.732v-29.523c0-8.981-5.155-14.058-13.434-14.058M98.877-9.685a15.289 15.289 0 01-9.841 3.515c-8.2 0-12.184-3.983-12.652-13.434h26.867a68.722 68.722 0 00.391-7.5c0-10.309-5.7-17.026-16.09-17.026S68.73-37.1 68.73-22.025C68.73-6.4 75.447.234 88.1.234c6.795 0 11.169-1.8 14.215-4.139zM87.084-37.8c6.248 0 9.138 3.671 9.138 10.31 0 .312 0 1.484-.078 2.108H76.54c.39-8.827 5.077-12.418 10.544-12.418"
              transform="translate(228.856 -411.173)"
            />
            <path
              className="d"
              d="M0 0c0 16.714 6.483 27.727 22.025 27.727 8.279 0 13.356-2.656 15.7-5.155l-4.375-5.545c-1.874 1.874-5 3.67-10.388 3.67C13.121 20.7 8.045 13.2 8.045-.547c0-14.527 5.233-21.088 14.214-21.088 5.7 0 8.748 2.031 10.857 4.062l5.076-5.936c-1.718-1.562-6.248-5.077-15.308-5.077C7.888-28.586 0-17.729 0 0m50.845-32.335v50.143c0 6.092 3.2 9.762 9.45 9.762a15.141 15.141 0 005.468-1.015v-6.326a8.568 8.568 0 01-3.046.625c-2.89 0-4.218-1.484-4.218-5.077v-48.112zm48.189 48.893a11.4 11.4 0 01-9.451 5.077c-4.373 0-6.795-2.734-6.795-6.092 0-5.624 6.795-7.967 16.246-7.5zm-8.045-33.272c-9.06 0-13.2 5.233-14.761 7.342l5.545 4.295a9.809 9.809 0 019.06-5.076c5.077 0 8.2 1.874 8.2 8.2v4.3c-14.684-.39-23.9 4.218-23.9 13.9 0 5.858 4.452 11.482 12.5 11.482 6.951 0 10.309-3.124 12.262-5.468h.312c1.094 2.89 3.593 5.077 7.811 5.077a6.99 6.99 0 003.28-.781V21.01h-1.172c-2.733 0-3.827-2.109-3.827-5.546V-3.28c0-9.451-5.623-13.434-15.308-13.434m34.522 43.66h7.732v-42.957h-7.732zm-1.484-55.063a5 5 0 005.076 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.16-5.233 5.055 5.055 0 00-5.076 5.233M181.2-10.388h-.312c-1.562-3.671-4.687-6.56-11.169-6.56a13.472 13.472 0 00-11.169 5.311h-.312l-1.484-4.374h-6.092v42.957h7.732V-3.28a9.194 9.194 0 018.747-6.952c5.077 0 7.811 3.359 7.811 9.607v27.571h7.732V-3.749a9.8 9.8 0 019.06-6.483c4.608 0 7.576 2.89 7.576 9.06v28.118h7.732v-29.6c0-9.529-4.764-14.293-13.2-14.293-6.561 0-10.778 3.2-12.653 6.56m43.347 37.334h7.732v-42.958h-7.732zm-1.486-55.064a5 5 0 005.077 5 4.972 4.972 0 005.155-5 5.027 5.027 0 00-5.155-5.233 5.055 5.055 0 00-5.077 5.233m60.217 25.383c-.156-9.528-5.233-14.214-13.746-14.214a16.1 16.1 0 00-12.031 5.311h-.313l-1.562-4.374h-5.936v42.957h7.733V-3.28a10.391 10.391 0 019.841-6.952c5.389 0 8.278 3.359 8.278 9.217v27.961h7.733zm47.954-11.4c-2.968-1.406-7.263-2.343-13.355-2.343-14.137 0-20.932 9.451-20.932 22.65 0 14.918 7.654 20.073 16.558 20.073a15.307 15.307 0 009.841-3.124h.312v3.436c0 7.264-2.968 10.544-10.153 10.544-5.389 0-9.06-1.953-11.169-4.374l-4.452 6.014c1.953 2.031 6.249 4.921 15.074 4.921 10.935 0 18.276-5.624 18.276-17.027zM323.577-8.9v24.989a10.534 10.534 0 01-8.2 3.671c-5.7 0-10.623-2.968-10.623-14.215 0-10.465 4.921-15.542 12.5-15.542a16.7 16.7 0 016.323 1.097"
              transform="translate(214.485 -547.51)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -292.819)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -238.216)"
            />
            <path
              className="d"
              d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
              transform="translate(224.795 -198.201)"
            />
            <g clipPath="url(#b)" opacity={0.9}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(230.153 -163.169)"
              />
            </g>
            <g clipPath="url(#c)" opacity={0.8}>
              <path
                className="d"
                d="M0 0c1.015 2.655 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(238.908 -129.386)"
              />
            </g>
            <g clipPath="url(#d)" opacity={0.7}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(246.204 -108.069)"
              />
            </g>
            <g clipPath="url(#e)" opacity={0.6}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(256.92 -83.752)"
              />
            </g>
            <g clipPath="url(#f)" opacity={0.5}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(274.625 -65.926)"
              />
            </g>
            <g clipPath="url(#g)" opacity={0.4}>
              <path
                className="d"
                d="M0 0c1.015 2.656 5.389 11.325 6.561 13.668l16.714 31.476h10.153V-9.607h-7.42v27.961c0 2.578 0 13.122.235 16.48h-.469c-.859-2.343-5.545-11.247-6.717-13.59L2.734-9.607H-7.654v54.751h7.576V15.855c0-4.14-.156-13.434-.391-15.855zm56.234 23.353c0-10.466 2.89-15.543 10.153-15.543 7.576 0 10.622 5.311 10.622 16.09 0 10.465-2.655 15.542-10.153 15.542s-10.622-5.389-10.622-16.089m10.153 22.494c13.434 0 18.589-9.139 18.589-22.416 0-13.2-4.53-22.025-18.12-22.025-13.434 0-18.589 9.138-18.589 22.415 0 13.2 4.53 22.026 18.12 22.026m55.922-34.991l7.891 34.288h9.841l11.322-42.957h-7.186l-5.623 22.337c-1.172 4.608-2.187 9.217-3.124 13.9h-.313a124.782 124.782 0 00-2.655-12.653l-5.7-23.587h-8.9l-6.097 23.746c-1.016 3.9-1.953 8.123-2.656 12.5h-.309c-.859-4.921-1.8-9.138-2.89-13.668l-5.627-22.575h-7.888l11.4 42.957h9.685L122 10.856z"
                transform="translate(292.637 -45.847)"
              />
            </g>
          </g>
        </svg>
          </div>
        {/* </div> */}
        <div className={bodyStyles.TheNowImg}>
          <Img 
            fluid = {data.now03.childImageSharp.fluid}  
            alt="Athens house's main door full of graffiti"
          />
        </div>
      </div>

{/* ......... SECTION DIVIDER ......... */} 
{/* ABOUT SECTION ... */}
      <div className={bodyStyles.body}>
        <div className={bodyStyles.about}>
        <div id="about" className={bodyStyles.aboutanchor}></div>  
        <h1
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease">About</h1>

        
        <div className={bodyStyles.abouttxt}>  
        
          <div className={bodyStyles.abouttxt1}>
            <div className={bodyStyles.textWithLines}>
              OUR VISION
            </div>
            <p>It is time for the celebration of Greece, its people, history and art to shift to a new level. The Greek Fringe will attract talent that represents the experience of the modern Hellenic diversity. The Greek Fringe will shift beyond the folkloric representation of migration to explore the contemporary Hellenic diaspora throughout the Globe and the dynamic arts scene of mother Greece.</p>
          </div>

          <div className={bodyStyles.abouttxt2}>  
            <div className={bodyStyles.textWithLines}>
              CLAIMING THE NOW
            </div>
            <div>
              <p>The financial crisis in Europe has led Greece to emerge as a hub of creativity and innovative thinking. The Greek Fringe seeks to promote and celebrate contemporary culture, which can often be overshadowed by a glorified notion of the past.</p>
              <p>The Greek Fringe is a movement that will expose Greece and its booming arts scene and promote diasporic art across various forms of media. Though the theme is Greek, the festival aims to attract people who appreciate contemporary art and culture, regardless of their heritage.</p>
              <p>As humans evolve, so too does language, culture and influence. If we don’t engage with the evolving artscape of Greece and communities abroad, the risk is that Greek culture can become stagnant and obsolete. We are here to facilitate new and emerging interpretations of Greek culture. There is an appetite among younger generations of the diaspora to explore and connect with not only the Greece of their Grandparents but the Greece of now.</p>
              <p>We are here and we are claiming the now.</p>
            </div>
          </div>
        
        </div>

        <div className={bodyStyles.textWithLines}>
            OUR TEAM
        </div>

        <div className={bodyStyles.team}>  

          <div>
            <div className={bodyStyles.teamtitle}>
              <h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="600"
              data-sal-easing="ease">Con Kalamaras</h3>
              <p>Co-founder &amp; Director</p>
            </div>  
            <div className={bodyStyles.teamimg}>
              <Img 
                fluid = {data.t01.childImageSharp.fluid}  
                alt="Con Kalamaras portrait"
              />
            </div>
            <p>Professional insomniac, Con spends every waking hour thinking about Greek Fringe and is constantly throwing ideas at Christina (his partner in crime) as they shape and mould the Festival into something exciting, fresh and evolving. Con is a first-generation Greek events producer/ curator/ practitioner based in Melbourne. His world circulates around art projects, concerts, and festivals including the Melbourne Rebetiko Festival. He lives and breathes music, producing radio and is seen to obsess over records and rare recordings. When not playing music, he juggles his life between the city and the country and is the proud owner of two chickens both called Greg and his cat, Minion Sassy Pants.</p>
          </div>

          <div>
            <div className={bodyStyles.teamtitle}>
              <h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="700"
              data-sal-easing="ease">Christina Bacchiella</h3>
              <p>Co-founder &amp; Director</p>
            </div>  
            <div className={bodyStyles.teamimg}>
              <Img 
                fluid = {data.t02.childImageSharp.fluid}  
                alt="Christina Bacchiella portrait"
              />
            </div>
            <p>Founder of Sydney Greek Jam, Christina is big on community engagement and providing a platform for underrepresented artists. This concept was the genesis for Greek Fringe and exposing hidden talents is what gives her a real buzz. She is an innovative coordinator of projects and people and has worked on a stack of indie events, including the Melbourne Rebetiko Festival. She plays percussion in a rebetiko band and strums the tzoura strictly in the confines of her loungeroom (much to her dog’s torment).</p>
          </div>

          <div>
            <div className={bodyStyles.teamtitle}>
              <h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">Michael Alexandratos</h3>
              <p>Content Producer | Words</p>
            </div>  
            <div className={bodyStyles.teamimg}>
              <Img 
                fluid = {data.t03.childImageSharp.fluid}  
                alt="Michael Alexandratos portrait"
              />
            </div>
            <p>Michael Alexandratos is a writer, researcher and publisher based in Sydney. Taking a lead on literature, he will shed light on burgeoning writers in the Greek scene and conduct interviews with our featured artists. Michael runs the blog Amnesiac Archive, which is dedicated to research into music and recorded sound, and Cycladic Press, which publishes books and zines on aspects of Modern Greek cultures. He can often be seen rummaging through dusty boxes of records in junk shops, swearing that he will not end up as a hoarder.</p>
          </div>

          <div>
            <div className={bodyStyles.teamtitle}>
              <h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="600"
              data-sal-easing="ease">Vasilki Tsouka</h3>
              <p>Content Producer | Performance</p>
            </div>  
            <div className={bodyStyles.teamimg}>
              <Img 
                fluid = {data.t04.childImageSharp.fluid}  
                alt="Vasilki Tsouka portrait"
              />
            </div>
            <p>Vasiliki Tsouka is an arts manager and a dramaturg based in Melbourne. We are thrilled to have her on board as she has her finger on the pulse of performance art throughout the world. Since she was a young girl growing up in Athens, Greece, she has always loved art, literature and theatre, passions that she carries into her professional career. Though having lived in Melbourne the past five years, she keeps her connection to Greece by listening to Rebetiko while cooking her Grandmother’s recipes.</p>
          </div>

          <div>
            <div className={bodyStyles.teamtitle}>
              <h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="700"
              data-sal-easing="ease">Kon Karamountzos</h3>
              <p>Audiovisual Production</p>
            </div>
            <div className={bodyStyles.teamimg}>
              <Img 
                fluid = {data.t05.childImageSharp.fluid}  
                alt="Kon Karamountzos portrait"
              />
            </div>
            <p>Kon has worked in media for years and is considered part man, part legend with all things production. This guy is responsible for the editing of all the slick videos you see on our site and the crisp sound and visuals that will bless your senses at our future events. His passions include well-tuned instruments, sonic chaos and a well-earned drink after a day in the production coal mines.</p>
          </div>

          <div>
            <div className={bodyStyles.teamtitle}>
              <a href="mailTo:info@overduestudio.co"><h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">Overdue Studio</h3></a>
              <p>Visual Design / Web Development</p>
            </div>            
            <div className={bodyStyles.teamimg}>
              <a href="mailTo:info@overduestudio.co">
                <Img 
                  fluid = {data.t06.childImageSharp.fluid}  
                  alt="Overdue Studio portrait"
                />
              </a>
            </div>
            <p>Overdue Studio is a visual design studio creating thoughtful design solutions digitally and physically. From concept and design to realisation, the studio offers a full creative service in photography, branding, print, digital, object and exhibition design. It is Overdue Studio’s honour to collaborate with Greek Fringe, together they promote music and culture with creativity and authenticity.<br/><b><a href="mailTo:info@overduestudio.co">Contact Overdue Studio for design enquiries.</a></b></p>
            <div id="supportM" className={bodyStyles.anchorM}></div>
          </div>
        </div>
      </div>
    

{/* SUPPORT SECTION ... */}

        <div className={bodyStyles.support}>

          <div id="support" className={bodyStyles.supportanchor}></div>      
          <h1
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">Support</h1>
          
            <p><h3>We LURVE our sponsors! They are the force that enables us to shed light on the obscure, the underrepresented and the mega-talented. Its thanks to them that we can explore what contemporary Hellenic culture can bring to the table beyond cuisine.</h3></p>
            <p><h3>If this strikes a chord with you, get on board and…</h3></p>

          <div className={bodyStyles.supportbtn}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">  
            <a href="https://www.patreon.com/greekfringefest" target="_blank" rel="noreferrer"><button className="buttonOrange" type="button" aria-label="Become a Patron">BECOME A PATRON</button></a>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="BG9XPLL99SSK6" />
              <button className="buttonOrange" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button">MAKE A CUSTOM PLEDGE</button>       
            </form>
          </div>

          <div class={bodyStyles.sponsors}>
            <h3>Greek Fringe is powered by</h3>
            <Img 
              fluid = {data.support.childImageSharp.fluid}  
              alt="Overdue Studio portrait"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease"
            />
            <p> © 2019 Greek Fringe Fest Pty Ltd.  All rights reserved. </p>    
          </div>          

        </div>
      </div>
    </div>
  )
}

export default Body