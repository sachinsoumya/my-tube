const GOOGLE_API_KEY = "AIzaSyBj08YjNMw5MEG6fOy3UhyVYA7rlNx_nEs";

export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" 

export const VIDEO_DESCRIPTION_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=${GOOGLE_API_KEY}&id=`