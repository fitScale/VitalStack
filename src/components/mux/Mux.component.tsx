"use client";

import MuxPlayer from "@mux/mux-player-react";
import style from "./MuxVideo.module.css";
import { useState } from "react";
import ImageContainer from "../ImageContainer/ImageContainer.componenet";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import { WASI } from "wasi";

export interface MuxVideoProps {
  videoId: string;
  videoCaption: string;
  wall: boolean;
  thumbnail: string;
}

const tes = "";

const MuxVideo = ({ config }: { config: MuxVideoProps }) => {
  const [wall, setWall] = useState(config.wall);
  const [form, setForm] = useState(false);

  return (
    <div
      className={style.videoBox}
      style={{
        backgroundColor: config.wall ? "transparent" : "black",
        aspectRatio: wall ? "16/9" : "",
      }}
    >
      <div className={style.banner}>
        <p>{config.videoCaption}</p>
      </div>
      <div className={style.videoContainer}>
        <MuxPlayer
          streamType="on-demand"
          playbackId={config.videoId}
          metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
        />
      </div>
    </div>
  );
};

export default MuxVideo;
