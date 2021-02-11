import React, { Fragment, useState, useEffect } from 'react';

/**
 * Post layout
 */
const Post = ({ posts }) => (
    <div className="container mt-5 mx-2">
        {posts.filter((post, i) => i < 7).map((post, i) =>
            <article key={`${post.title}_${post.date}_post_${i}`} className="p-3 mb-3 mx-sm-auto bg-dark text-light no-border neon-shadow posts">
                <div>
                    <header className="d-md-flex justify-content-between">
                        <h4 className="flex-shrink-0 text-light neon">{post.title.toUpperCase()}</h4>
                        <div className="wrap">
                            <span className="badge bg-secondary">{post.date}
                                <small> by </small>{post.author}
                            </span>
                        </div>
                    </header>
                    <hr className="text-light m-md-0"></hr>
                    {post.content.split('#').map((line, i) => <p key={`${post.title}_${post.date}_line_${i}`}><small className="text-muted">{line}</small></p>)}
                </div>

                <div className="text-center">
                    {post.images && post.images.length > 0 &&
                        <Fragment>
                            {post.images.map((screen, i) =>
                            <label key={`${post.title}_${post.date}_img_${i}`} className="m-1 img-hover-zoom">
                                <img key={`${post.date}_img${i}`} className="img-fluid p-0 m-0" src={screen.imgSrc} alt={screen.alt} width="400px" height="256px" />
                            </label>
                            )}
                        </Fragment>
                    }
                </div>

                <div className="text-center">
                    {post.videos && post.videos.length > 0 &&
                        <Fragment>
                            {post.videos.map((video, i) =>
                                <video key={`${post.title}_${post.date}_video_${i}`} className="img-fluid p-0 m-1" controls width="400" preload="">
                                    <source src={video.videoSrc} type="video/webm"></source>
                                    <p>Your browser doesn't support HTML5 video. Here is a
                                            <a href={video.videoSrc}>link to the video</a>instead.
                                        </p>
                                </video>
                            )}
                        </Fragment>
                    }
                </div>
            </article>
        )}
    </div>
);

export default Post;
