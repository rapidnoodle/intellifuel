import requests
import time
import investpy

key = "073d144a53594de0b5f63a9aaa0fd8f1"
# ufTime = time.gmtime( (time.time() - 86400) )
# print(time.strftime("%d", ufTime))


def retrieveByFactor(factor: str, shouldAnalyze: bool=True):
       '''Searches the NewsAPI database for articles mentioning both oil and the provided keyword
       returns: by default, writes the # of articles to a file and returns both it and the average #, can be configured to return array of the results split by headlines, description, and content'''
       ufTime = time.gmtime( (time.time() - 86400) )
       currTime = time.strftime("%Y-%m-%d", ufTime)
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
       

       if(shouldAnalyze):
              output = analyze(len(headlines), factor, time.strftime("%d", ufTime) )
              return [output, len(headlines)]
       else:
              return [headlines, description, content]
       
def analyze(articleCount: int, factor: str, currTime: str):
       timeF = open("server/time.txt", "r")
       baseTime = timeF.read()
       print(baseTime)
       timeF.close()
       if(int(currTime) != int(baseTime)):
              timeF = open("server\time.txt", "w")
              timeF.write(currTime)
              timeF.close()
              f = open(f"server\{factor}Averages.txt", "a")
              f.write("articleCount" + "\n")
              
       
       pass
       

retrieveByFactor("war")