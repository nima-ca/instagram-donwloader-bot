export interface apiResponse {
  formats: [
    {
      title: string;
      url: string;
      src: string;
      videoData: {
        url: string;
        mimeType: string;
        quality: string;
        size: number;
        hasAudio: boolean;
      }[];
      imageData: {
        url: string;
        mimeType: string;
        resolution: string;
        size: number;
      }[];
      audioData: {
        url: string;
        mimeType: string;
        size: number;
        bitrate: number;
      }[];
    }
  ];
  error: string | null;
}
