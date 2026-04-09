import React from 'react';
import LastSection from '../LastSection';

const VideoGallery = ({ dict, lang }) => {
    return (
        <>
            {/* HEADER SEKCIJA */}
            <div
                className="banner-header valign bg-img bg-fixed"
                data-overlay-dark="5"
                style={{
                    backgroundImage: "url('/img/banner2.jpg')",
                    minHeight: "500px"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center caption mt-60">
                            <h5>Portfolio</h5>
                            <h1>Our Gallery <span>Video Gallery</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*VIDEO - GALLERY SEKCIJA */}
            <section className="section-padding bg-cream">
                <div className="container">
                    <div className="row">
                        {/* 2 columns */}
                        <div className="col-md-6">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/banner.jpg" alt="YouTube" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/slider/4.jpg" alt="Vimeo" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 3 columns */}
                        <div className="col-md-4">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/slider/3.jpg" alt="YouTube" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/banner6.jpg" alt="YouTube" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/slider/10.jpg" alt="YouTube" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2 columns */}
                        <div className="col-md-6">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/slider/5.jpg" alt="YouTube" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="vid-area mb-30">
                                <div className="vid-icon">
                                    <img src="/img/slider/11.jpg" alt="Vimeo" />
                                    <a className="video-gallery-button vid" href="https://vimeo.com/762423057">
                                        <span className="video-gallery-polygon">
                                            <i className="ti-control-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LastSection />

        </>
    );
};

export default VideoGallery;