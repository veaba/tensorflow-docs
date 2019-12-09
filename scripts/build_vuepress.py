import os
from multiprocessing.pool import ThreadPool
forders=os.listdir('../docs')
forders =[item for item in forders if item!='.vuepress' and item!='All_Symbols.md' and item!='README.md']

def fn(path):
    print(path)
    os.system('vuepress build ../dosc'+path)

def go():
    pool=ThreadPool(processes=16)
    pool.map(fn,(path for path in forders))
    pool.close()

# go()
