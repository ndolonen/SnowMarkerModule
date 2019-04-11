import glob
import errno

path = './images/iconpack/*.png'
files = glob.glob(path)

nameList = ""
first = True
for name in files:
    try:
        if(not first):
            nameList += ", "
        else:
            first = False
        currentName ='"'+name.split('\\',1)[1]
        nameList += currentName.split('.png', 1)[0] + '"'
    except IOError as exc:
        print(exc)
print(nameList)