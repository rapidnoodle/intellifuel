import database as db
import match
from typing import Any, Callable, List, Tuple

#Original code
def newsOutlook(matches: str):
    factor = matches[0]
    output = db.retrieveByFactor(factor)
    avg = output[0]
    count = output[1]
    resultsByFactor = {"war": ["drop in the price of oil due to the resulting instability endangering supply and transportation.", 
                               "", 
                               ""]}
    end: str = ''
    if(count > avg):
        end = f"more frequent than average. The heightened frequency of {factor} behind this rise in headlines is likely to lead to a {resultsByFactor[factor][0]}"
    elif(count == avg):
        pass
    elif(count < avg):
        pass
    return f"News headlines discussing {factor} and oil together are {end}"
    

#Code I just straight up stole from a3 (which I suppose I also wrote much of)
pa_list: List[Tuple[List[str], Callable[[List[str]], List[Any]]]] = [
    (str.split("how is _ affecting the price of oil"), newsOutlook)
    
]

def search_pa_list(src: List[str]) -> str:
    """Takes source, finds matching pattern and calls corresponding action. If it finds
    a match but has no answers it returns ["No answers"]. If it finds no match it
    returns ["I don't understand"].

    Args:
        source - a phrase represented as a list of words (strings)

    Returns:
        a list of answers. Will be ["I don't understand"] if it finds no matches and
        ["No answers"] if it finds a match but no answers


    """
    output = []
    for tuple in pa_list:
        keywords = match.match(tuple[0], src)
        if keywords != None:
            output = tuple[1](keywords)
            if output != []: return output
            else: return ["No answers"]
    return ["I don't understand"]

def query_loop() -> None:
    """The simple query loop. The try/except structure is to catch Ctrl-C or Ctrl-D
    characters and exit gracefully.
    """
    print("Intellifuel Chatbot: Internal Demo")
    while True:
        try:
            print()
            query = input("Query: ").replace("?", "").lower().split()
            answers = search_pa_list(query)
            print(answers)

        except (KeyboardInterrupt, EOFError):
            break

    print("\nSo long!\n")

query_loop()