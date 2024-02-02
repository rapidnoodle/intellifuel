import requests
import time

key = "073d144a53594de0b5f63a9aaa0fd8f1"


def retrieveByFactor(factor: str):
       currTime = time.strftime("%Y-%m-%d", time.gmtime( (time.time() - 86400) ) )
       url = ('https://newsapi.org/v2/everything?'
              f'q={factor}%20AND%20oil%20NOT%20film%20NOT%20movie%20NOT%20gender%20NOT%20culture%20NOT%20plagiarism%20NOT%20"World War"%20NOT%20tech%20NOT%20legal%20NOT%20filmmaker&'
              'sortBy=relevancy&'
              'language=en&'
              f'from={currTime}&'
              'excludeDomains=engadget.com,techcrunch.com,arstechnica.com&'
              f'apiKey={key}')
       
       headlines = []
       description = []
       content = []
       response = requests.get(url)
       articlesDict = response.json()
       for i in range(0, len(articlesDict["articles"])):
              headlines.append(articlesDict["articles"][i]["title"])
              description.append(articlesDict["articles"][i]["description"])
              content.append(articlesDict["articles"][i]["content"])
       
       return [headlines, description, content]
       

retrieveByFactor("war")