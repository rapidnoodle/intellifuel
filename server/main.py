import requests
key = "073d144a53594de0b5f63a9aaa0fd8f1"
url = ('https://newsapi.org/v2/top-headlines?'
       'q= War &'
       'sortBy=popularity&'
       f'apiKey={key}')

response = requests.get(url)
print(response.json())