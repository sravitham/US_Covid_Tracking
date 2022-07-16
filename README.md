# US Covid Tracking: Visualization of Data
![image](https://user-images.githubusercontent.com/99145651/176567986-d8595f34-1a78-4657-877f-0c4122dd23a0.png)

## Contributors 
- Sravitha Matlapudi
- Tanisha Cooper
- Hannah Allen
- Jeff Frazier

## Background
This generation has experienced an all-time historic event. The entire world has been greatly impacted, particularly the United States. As a result, many are probably wondering, when will the Covid-19 pandemic end already? There are also others with questions on status of the pandemic historic and/or current hospitalizations, total cases, deaths, and recovered cases. A dashboard quickly shows numbers for the latter, but the goal of this project was to explore these topics in depth including an interactive chloropleth covid map of the United States that help to answer total cases, cumulative tests, and hospitalizations. The rationale behind the selection of this topic/data is to provide information for those with an interest in the rise and decline of COVID cases by state. The latter would allow one to view trends and to anticipate precaution, supplies, and/or hospital influx.


## Project Rationale
The rationale behind the selection of this topic/data is to provide information for those with an interest in the rise and decline of COVID cases by state.
   ### Use Cases
   1. Hospital Administrators visualize hospital and death trends across states for comparison - which allows hospitals to understand the capacity for possible patient       divergence.
   2. Hospital resource use indicates how equipped a location is to treat COVID-19 patients for the Current projection scenario.
   3. Daily deaths are the best indicator of the progression of the pandemic, although there is generally a 17-21 day lag between infection and deaths.
   4. Healthcare professionals may desire  to view trends and enable one to anticipate precaution, supplies, and/or hospital influx.
   

## Configuration

As a team, we split out tasks to ensure that we complete the challenge within a timely manner. Below you can find the process/configuration. 

1. **[Project Proposal](https://docs.google.com/document/d/1EkK7s-hrbfpuLD8JQimp48hNTOVaU1L6Duz4obrLrRY/edit)**
    * **Topic/Rationale/Use Cases:** Determine what use cases and data we want to visualize. Use cases help determined how our data would help our audience. Review link above to identify a list use cases and the project proposal. 
    * [Data Set](./Data/covid_data.json): Selected the dataset for historical COVID-19 as data collection by state ended on March 07, 2021 per website. We selected the api and studied the json data to best know how to visualize it for our audience.
    * **Specifications:** Assisted in sketching our final design by pulling in pictures on how we want to display our data. Determined that we wanted a dashboard, chloropleth map, bar graph, and gauge to showcase our data. See images we gathered our inspiration. 

    ![Dashboard](./getbootstrap.com/Images/dashboard_img.png)
    ![Chloropleth Map](./getbootstrap.com/Images/carousel_img_us_map.png)
    ![AmChart Guage](./getbootstrap.com/Images/amChart_img.jpg)
    * **Sketch Final Design:** From the inspirational maps and data, we sketched what we felt would be the final design of our data visualization. 
    ![Final Sketch](./getbootstrap.com/Images/final_sketch.jpg)

    * **Github Link:** [Project Repo](https://github.com/sravitham/US_Covid_Tracking.git)
    
2. Team Tasks & Processes

![image](https://user-images.githubusercontent.com/99145651/179361971-281f1355-bd82-4429-bb17-5ce9757c4e3d.png)

   > 1. ETL
   > 2. JS
       > 1. Dashboard
       > 2. Chloropleth Map
       > 3. Solid Gauge
   > 3. CSS Template
   > 4. HTML
   

# Data Visualization

* Main Page
![image](https://user-images.githubusercontent.com/99145651/178017741-bcd00d97-fb85-4895-9e14-a08452d3c581.png)



![Web Dashboard](https://user-images.githubusercontent.com/99145651/179328660-b2ff4c2a-370e-43e9-a668-ad700175dd78.png)
* View One- The dashboard contains Total Cases, Total Deaths, Cumulative Hospitalization and Total Recovered Cases.


![image](https://user-images.githubusercontent.com/99145651/179124869-48189c40-2eba-46e0-82fe-557d6a1c3053.png)

* View Two-This map was designed using amCharts 5 in Javascript with the Covidtracking.com API historical dataset.

<img width="256" alt="image (2)" src="https://user-images.githubusercontent.com/99145651/179328504-23171aa7-7fa0-4bdc-9965-87b08d7e370c.png">

* View Three-This gauge utilizes the total count of covid data from each US state that was collected between January 13, 2020 and March 7, 2021.

![image](https://user-images.githubusercontent.com/99145651/179123246-7aeebdf3-767b-43d2-a384-ddc7a4a7b4c0.png)
* Our Team

## Resources/Tools

![image](https://user-images.githubusercontent.com/99145651/179362179-cf287331-a3aa-42a4-9b30-84fbba08a628.png)

* Plotly
* Pandas
* Numpy
* HTML/CSS
* JS/JS Libraries
    - jQuery
    - D3.js
    - Animated.js
    - Platform.js
    - holder.js
    - popper.min.js
    - bootstrap.min.js
* Bootstrap

# Limitations
   1. Historical data
   2. Inconsistency in state data
   3. Not based on Population
   4. Missing values
   5. Data collection ended March 2021




