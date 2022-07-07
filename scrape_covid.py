# Dependencies
import splinter
import datetime as dt   
# dependencies
import pandas as pd 
import requests
import json
import us
from pprint import pprint 

def scrape(): 
    covid_data={}
    # Built URL using Census variables website https://api.census.gov/data/timeseries/poverty/saipe/variables.html
    url="https://api.covidtracking.com/v1/states/daily.json"

    # Get poverty data
    cov_response = requests.get(url)
    cov_json = cov_response.json()
    df = pd.read_json(url)
    newdf = df[['date', 'state', 'fips', 'positive', 'probableCases','negative','hospitalizedCumulative','recovered','death','positiveCasesViral','deathConfirmed']].copy()
    newdf1=newdf.copy()
    fips_to_name = us.states.mapping("abbr", "name")
    newdf1["State"] = newdf1["state"].map(fips_to_name)
     
    covid_data = {
    "date": date,
    "state abbr":state,
    "fips": fips, 
    "positive":positive, 
    "probableCases": probableCases,
    "negative": negative,
    "hospitalizedCumulative":hospitalizedCumulative,
    "recovered":recovered,
    "death":death,
    "positiveCasesViral":positiveCasesViral,
    "deathConfirmed":deathConfirmed
    }

    return covid_data