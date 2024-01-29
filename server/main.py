import requests
key = "073d144a53594de0b5f63a9aaa0fd8f1"
url = ('https://newsapi.org/v2/top-headlines?'
       'q=war&'
       'sortBy=relevancy&'
       'language=en&'
       f'apiKey={key}')

response = requests.get(url)
headlines = []
description = []
content = []
articlesDict = response.json()
for i in range(0, len(articlesDict["articles"])):
       headlines.append(articlesDict["articles"][i]["title"])
       description.append(articlesDict["articles"][i]["description"])
       content.append(articlesDict["articles"][i]["content"])
print(headlines)