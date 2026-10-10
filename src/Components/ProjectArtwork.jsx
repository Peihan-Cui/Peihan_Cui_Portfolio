export function ProjectArtwork({ kind }) {
    return (
        <div className={`project-art ${kind}`} aria-hidden="true">
            {kind === 'dashboard' ? (
                <div className="mock-dashboard">
                    <div className="mock-sidebar">
                        <b>o.</b>
                        <i />
                        <i />
                        <i />
                        <i />
                    </div>

                    <div className="mock-dashboard-body">
                        <div className="mock-topline">
                            Overview <span>↗</span>
                        </div>

                        <div className="mock-stats">
                            <div>
                                <small>Total balance</small>
                                <strong>
                                    $24,680<span>.00</span>
                                </strong>
                            </div>

                            <div className="mock-trend">
                                +12.8% ↗
                            </div>
                        </div>

                        <div className="mock-chart">
                            {[26, 42, 34, 58, 48, 76, 62, 90, 78, 100, 88, 118].map(
                                (height, i) => (
                                    <i key={i} style={{ height }} />
                                )
                            )}
                        </div>

                        <div className="mock-bottom">
                            <span>Activity</span>
                            <span>● ● ●</span>
                        </div>
                    </div>
                </div>
            ) : kind === 'movie' ? (
                <div className="mock-movie">
                    <div className="movie-header">
                        <b>REEL</b>
                        <span>Browse&nbsp;&nbsp; Watchlist&nbsp;&nbsp;⌕</span>
                    </div>

                    <div className="movie-feature">
                        <div className="movie-poster">
                            <div className="poster-circle" />
                            <div className="poster-lines" />
                        </div>

                        <div className="movie-info">
                            <small>FEATURED</small>
                            <h3>Tonight's pick</h3>
                            <p>Find something worth watching.</p>
                            <span className="movie-button">Watch now →</span>
                        </div>
                    </div>

                    <div className="movie-row">
                        <i />
                        <i />
                        <i />
                        <i />
                    </div>
                </div>
            ) : (
                <div className="mock-atlas">
                    <div className="atlas-top">
                        ATLAS<span>EXPLORE THE EVERYDAY</span>
                    </div>

                    <div className="atlas-sun" />
                    <div className="atlas-mountain mountain-back" />
                    <div className="atlas-mountain mountain-front" />

                    <div className="atlas-copy">
                        Take the<br />
                        <em>scenic route.</em>
                    </div>

                    <div className="atlas-bottom">
                        YOUR NEXT ADVENTURE STARTS HERE <span>↗</span>
                    </div>
                </div>
            )}
        </div>
    );
}