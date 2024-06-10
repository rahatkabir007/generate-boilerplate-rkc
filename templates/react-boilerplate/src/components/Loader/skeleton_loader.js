

import "./loaders.css";

const skeletonCard = (index) => {
    return (
        <div key={index} className="card">
            <div className="image-container skeleton">
                <div style={{ height: "100%", width: "100%" }}></div>
            </div>
            <div className="content">
                <div className="studio-name skeleton skeleton-title"></div>
                <div className="studio-desc">
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </div>
            </div>
        </div>

    )
}
export default function SkeletonLoader({ num }) {
    return (
        <div className="skeleton-container"
            style={{ gridTemplateColumns: `repeat(${num}, 20rem)` }}>
            {
                [...Array(num).keys()].map((_, index) => (
                    skeletonCard(index)
                ))
            }
        </div>
    )
}