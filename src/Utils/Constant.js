const GOOGLE_API_KEY = "AIzaSyBj08YjNMw5MEG6fOy3UhyVYA7rlNx_nEs";

export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" 

export const VIDEO_DESCRIPTION_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=${GOOGLE_API_KEY}&id=`

export const COMMENT_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${GOOGLE_API_KEY}&videoId=`

export const SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`

export const CATEGORY_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${GOOGLE_API_KEY}`

export const CATEGORY_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}&videoCategoryId=` 

export const CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`

export const  CHANNEL_API_2 = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&forUsername=`

export const PLAYLIST_ITEM_API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&key=${GOOGLE_API_KEY}&channelId=`

export const PLAYLIST_LIST_API = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${GOOGLE_API_KEY}`

 
export const OFFSET_LIVE_CHAT = 20 

export const arr = [1,2,3,4,5,6,7,8,9,10];
