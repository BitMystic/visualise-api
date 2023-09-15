from os import wait
from .models import FileTestModel, ResultsModel
import pandas as pd 
from sklearn import datasets
import numpy as np
from scipy.stats import norm
import os

def addEntry(data, xy):
    plotType = ""
    if data["plotBar"]:
        plotType = "Bar"
    if data['plotDist']:
        plotType = 'Distribution'
    if data['plotScatter']:
        plotType = 'Scatter'
    if data['plotLine']:
        plotType = 'Line'

    entry = ResultsModel(id_req = data['id_req'],
            plot = plotType,
            data = xy,
            xaxis_name = data['xaxis'],
            yaxis_name = data['yaxis']
            )
    entry.save()

def getXY(data, filename):

    if data['sampleData']:
        choosen_data = pd.DataFrame(datasets.load_iris().data)
        choosen_data.columns = datasets.load_iris().feature_names
        print(choosen_data.columns)
    elif data['randomData']:
        choosen_data = pd.DataFrame({
            data['xaxis']: norm.rvs(size=100),
            data['yaxis']: norm.rvs(size=100)
            })
    else:
        print('-----------file seen---------')
        dir = os.path.abspath(os.path.join(os.path.dirname(filename), '.', 'media/uploads/')) 
        file_addr = dir + '/' + filename
        choosen_data = pd.read_csv(file_addr)


    if data['plotBar'] or data['plotScatter']:
        xy = choosen_data[[data['xaxis'], data['yaxis']]]
        return xy.to_dict(orient='list')
    if data['plotDist']:
        # see numpy notes for this
        # x,y = pd.hist(choosen_data[data['xaxis']])
        # Generate some data for this demonstration.

        # // TODO can plot hist with this in the future if needed
        dat = choosen_data[data['xaxis']]

        # Fit a normal distribution to the data:
        mu, std = norm.fit(dat)

        xmin, xmax = dat.min(), dat.max()
        x = np.linspace(xmin, xmax, 100)
        p = norm.pdf(x, mu, std)
        
        # TODO axis names wont make sense in the front end
        xy = pd.DataFrame({data['xaxis']: x, data['yaxis']: p})
        return xy.to_dict(orient='list')

    if data['plotLine']:
        choosen_data = choosen_data.sort_values(by=data['xaxis'])
        xy = choosen_data[[data['xaxis'], data['yaxis']]]
        print(xy.to_dict(orient='list'))
        return xy.to_dict(orient='list')

