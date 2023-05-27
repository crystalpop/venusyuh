from googleapiclient.discovery import build
import requests


# url_base = 'https://www.youtube.com/watch?v='
url_shorts_base = 'https://www.youtube.com/shorts/'
api_key = 'AIzaSyCLz3kxvqVgXIxRYl73qs-ejBUjHrtjJ0g'
youtube = build('youtube', 'v3', developerKey=api_key)


def query_search(search_keywords: str):

    search_request = youtube.search().list(
        part="snippet",
        q=search_keywords,
        type="video",
        videoEmbeddable="true",
        order='viewCount'
    )

    search_response = search_request.execute()
    
    return search_response


def query_embed(vid_id: str):
    embed_request = youtube.videos().list(
        part="player",
        id=vid_id
    )

    embed_response = embed_request.execute()

    return embed_response


def get_vid_id(response: dict):
    final_video_id = None
    for vid in response['items']: 
        video_id  = vid['id']['videoId']
        url = url_shorts_base + video_id
        r = requests.get(url, allow_redirects=False)
        if r.status_code == 200:
            pass
        else:
            final_video_id = video_id


    return final_video_id


def get_embed_code(response: dict):
    embed_code = response['items'][0]['player']['embedHtml']
    return embed_code

def main():
    physics_search = query_search('physics major day in the life')

    vid_id = get_vid_id(physics_search)

    physics_embed = query_embed(vid_id)
    embed_code = get_embed_code(physics_embed)

    return embed_code


if __name__ == "__main__":
    main()
