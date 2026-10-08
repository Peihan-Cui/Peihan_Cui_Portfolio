export function ProjectArtwork({ kind }) {
    return (
        <div className={`project-art ${kind}`} aria-hidden="true">
            {kind === 'dashboard' ? (
                <div className="mock-dashboard">
                    <div className="mock-sidebar"><b>o.</b><i /><i /><i /><i /></div>
                    <div className="mock-dashboard-body">
                        <div className="mock-topline">Overview <span>↗</span></div>
                        <div className="mock-stats"><div><small>Total balance</small><strong>$24,680<span>.00</span></strong></div><div className="mock-trend">+12.8% ↗</div></div>
                        <div className="mock-chart">{[26, 42, 34, 58, 48, 76, 62, 90, 78, 100, 88, 118].map((height, i) => <i key={i} style={{ height }} />)}</div>
                        <div className="mock-bottom"><span>Activity</span><span>● ● ●</span></div>
                    </div>
                </div>
            ) : kind === 'botanical' ? (
                <div className="mock-botanical">
                    <div className="botanical-header">FORM & FIELD <span>Shop&nbsp; About&nbsp; ↗</span></div>
                    <div className="botanical-copy">A little nature.<br /><em>A lot of good.</em></div>
                    <div className="plant"><div className="leaf leaf-one" /><div className="leaf leaf-two" /><div className="leaf leaf-three" /><div className="stem" /><div className="pot" /></div>
                    <span className="botanical-button">Find your green ↗</span>
                </div>
            ) : (
                <div className="mock-atlas">
                    <div className="atlas-top">ATLAS<span>EXPLORE THE EVERYDAY</span></div>
                    <div className="atlas-sun" /><div className="atlas-mountain mountain-back" /><div className="atlas-mountain mountain-front" />
                    <div className="atlas-copy">Take the<br /><em>scenic route.</em></div>
                    <div className="atlas-bottom">YOUR NEXT ADVENTURE STARTS HERE <span>↗</span></div>
                </div>
            )}
        </div>
    )
}