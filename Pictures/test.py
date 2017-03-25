import os
import glob

#os.chdir("./clients/")
jpgCount = len(glob.glob1("./clients/","*.jpg"))
folders = os.listdir("./clients/")
folders = folders[jpgCount:]
print folders