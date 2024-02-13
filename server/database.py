import requests
import time

key = "073d144a53594de0b5f63a9aaa0fd8f1"
# ufTime = time.gmtime( (time.time() - 86400) )
# print(time.strftime("%d", ufTime))


def retrieveByFactor(factor: str, shouldAverage: bool=True):
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
       

       if(shouldAverage):
              output = average(len(headlines), factor, time.strftime("%d", ufTime) )
              return [output, len(headlines)]
       else:
              return [headlines, description, content]
       
def average(articleCount: int, factor: str, currTime: str):
       timeF = open("server\\time.txt", "r")
       baseTime = timeF.read()
       print(baseTime)
       timeF.close()
       if(int(currTime) != int(baseTime)):
              timeF = open("server\\time.txt", "w")
              timeF.write(currTime)
              timeF.close()
              f = open(f"server\{factor}Counts.txt", "a")
              f.write(str(articleCount) + " ")
              f.close()

       f = open(f"server\{factor}Counts.txt")
       counts = f.read()
       counts = counts.split()
       counts = [int(x) for x in counts]
       total = 0
       for x in counts:
              total = total + x
       return (total / len(counts))
       
       

retrieveByFactor("war")

#All this code retrieves the last year of WTI futures prices
#Plot points on a graph and make a linear regression - to attempt to observe the general market trend
#We can also make multiple regression models across different timespans - 6 months, 3 months, etc. in addition to 1 year
ufCurrTime = time.gmtime( (time.time() - 86400) ) 
ufOldTime = time.gmtime( (time.time() - 31622400) )
currTime = time.strftime("%Y-%m-%d", ufCurrTime)
oldTime = time.strftime("%Y-%m-%d", ufOldTime)
output = requests.get(f"http://api.scraperlink.com/investpy/?email=mascislarson@gmail.com&type=historical_data&product=commodities&from_date={oldTime}&to_date={currTime}&time_frame=Daily&name=Crude%20Oil%20WTI")
try: results = output.json()["data"]
except: results = "L."
print(results)

