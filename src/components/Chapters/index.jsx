import React, { useState } from 'react';
import './index.scss';
import verse from '@assets/images/Verse.jpg';
import chorus from '@assets/images/Chorus.jpg';
import outro from '@assets/images/Outro.jpg';
import bridge from '@assets/images/Bridge.jpg';

const ImageChapter = ({ isVisible, videoDuration = 0, currentTime = 0, onSeek }) => {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const chaptersInfo = [
    { title: "Verse", image: verse },
    { title: "Chorus", image: chorus },
    { title: "Bridge", image: bridge },
    { title: "Outro", image: outro},
  ];

  const safeDuration = Math.max(videoDuration, 1);
  const chapters = chaptersInfo.map((chapter, index) => ({
    ...chapter,
    number: index + 1,
    startTime: (index * safeDuration) / 4,
    endTime: index === 3 ? safeDuration : ((index + 1) * safeDuration) / 4
  }));

  const getChapterProgress = (chapterIndex) => {
    const chapter = chapters[chapterIndex];
    if (!chapter) return 0;
    
    if (chapterIndex <= selectedChapter) return 100;
    
    return 0;
  };

  return (
    <div className={`image-chapter-wrapper ${isVisible ? 'visible' : ''}`}>
      <div className="progress-bar">
        {chapters.map((_, index) => (
          <div 
            key={index}
            className="progress-segment"
            style={{ width: `${100 / chapters.length}%` }}
          >
            <div 
              className="progress-fill"
              style={{ 
                width: `${getChapterProgress(index)}%`,
                backgroundColor: '#ff4d4f'
              }}
            />
          </div>
        ))}
      </div>

      <div className="horizontal-chapter-container">
        {chapters.map((chapter, index) => (
          <div 
            key={chapter.number} 
            className={`image-card ${index === selectedChapter ? 'active' : ''}`}
            onClick={() => {
              onSeek(chapter.startTime);
              setSelectedChapter(index);
            }}
            role="button"
            tabIndex={0}
          >
            <div className="image-container">
              <img src={chapter.image} alt={`Chapter ${chapter.number}`} />
              <div className="card-title">{chapter.title}</div>
            </div>
            <div className="chapter-progress">
              <div 
                className="chapter-progress-fill"
                style={{ 
                  width: `${getChapterProgress(index)}%`,
                  backgroundColor: '#ff4d4f'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageChapter;