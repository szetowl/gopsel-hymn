import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import MusicFooter from "./MusicFooter";

import "./Main.css";

function Audio({ Name, Verse,URL }) {
  const { playing, togglePlaying } = useContext(GlobalContext);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const stringToHtml = (text) => {
    let html_str = "<p>" + text;
    html_str = html_str.replaceAll("/b", "</p><p>");
    html_str = html_str.replaceAll("/n", "</p><br /><p>");
    html_str = html_str.replaceAll("/z", "</p><br />");
    return html_str;
  };

  const handleEnd = () => {
    if (playing) togglePlaying();
    audioRef.current.currentTime = 0;
  };

  const toggleAudio = () =>
    audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();


  const handleProgress = (e) => {
    let resultTime = (e.target.value / 100) * duration;
    setCurrentTime(resultTime);
    audioRef.current.currentTime = resultTime;
  };


  const audioRef = useRef(null);

  return (
    <div>
      <div className="verse-page">
        <h2>{Name}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: stringToHtml(Verse) }}
        />
      </div>

      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDuration(e.target.duration)}
        onEnded={handleEnd}
        ref={audioRef}
        src={URL}
        type="audio/mpeg"
        preload="auto"
      />

      <MusicFooter handleProgress={handleProgress} 
      toggleAudio={toggleAudio}
      duration={duration}
      currentTime={currentTime}
      />
    </div>
  );
}

export default Audio;
