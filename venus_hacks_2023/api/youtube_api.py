from googleapiclient.discovery import build
import requests
from flask import Flask
from flask_cors import CORS
import json

url_shorts_base = 'https://www.youtube.com/shorts/'
api_key = 'AIzaSyCLz3kxvqVgXIxRYl73qs-ejBUjHrtjJ0g'
youtube = build('youtube', 'v3', developerKey=api_key)

app = Flask(__name__)
CORS(app)

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


@app.route('/physics')
def physics():

    physics_search = query_search('physics major day in the life')

    vid_id = get_vid_id(physics_search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/biosci')
def biosci():

    search = query_search('biology major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/genetics')
def genetics():

    search = query_search('genetics major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/neurobio')
def neurobio():

    search = query_search('neurobiology major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/biochem')
def biochem():

    search = query_search('biochemistry major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/chemE')
def chem_e():

    search = query_search('chemical engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/civilE')
def civil_e():

    search = query_search('civil engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/elecE')
def elec_e():

    search = query_search('electrical engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/compE')
def comp_e():

    search = query_search('computer engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/biomed')
def biomed():

    search = query_search('biomedical engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/envirE')
def envir_e():

    search = query_search('environmental engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/materials')
def materials():

    search = query_search('materials science major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/mechE')
def mech_e():

    search = query_search('mechanical engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/cs')
def cs():

    search = query_search('computer science major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/data')
def data():

    search = query_search('data science major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/game')
def game():

    search = query_search('game design major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/inf')
def inf():

    search = query_search('informatics major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/swe')
def swe():

    search = query_search('software engineering major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/ics')
def ics():

    search = query_search('information computer science major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/chem')
def chem():

    search = query_search('chemistry major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/math')
def math():

    search = query_search('math major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

@app.route('/earth')
def earth():

    search = query_search('earth system science major day in the life')

    vid_id = get_vid_id(search)

    url = "https://www.youtube.com/embed/" + vid_id
    # physics_embed = query_embed(vid_id)
    # embed_code = get_embed_code(physics_embed)

    return json.dumps(url)

if __name__ == "__main__":
    app.run(port=8000, debug=True)