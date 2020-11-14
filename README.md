# miles4meows

Picklehack 2020

Documentation for react-native-gl-image-filters:
https://nicedoc.io/GregoryNative/react-native-gl-image-filters


## Description
Miles4Meows uses your phone state and physical activity to determine the state of your pet cat. Every day, you adopt a new cat from thiscatdoesnotexist.com. Throughout the day the cat will come more in focus the more you walk. But watch out, if you're battery gets too low the cat will die!

## Tech Used
**Expo** - A framework to build React Native apps quickly and for both Android and IPhones. 

**React Native** - A Javascript library used to create native apps for Android and IPhone.

**Flask** - A Python library and web microframework used to host the cat image. Updates the image daily at midnight using a cronjob.

## How to Run
The app can be tested by using the Expo app for Android or IPhone. Once cloned, run the following:
```bash
sudo apt install nodejs
npm install
```

The webserver needs to be installed on a dedicated server. We are runnning it on a Raspberry Pi on our local network. In order to get it setup, add the network files to the server, then:
1. Create a cronjob to get the image from the website every night. Begin by opening the cron file, then add the second line at the bottom.
```bash
crontab -e
* * * * * /abs/path/to/curl http://thiscatdoesnotexist.com > /abs/path/to/networkfiles
```
2. Set a static ip (varies based on OS)
3. Install Flask
```bash
pip3 install Flask
```
4. Start the webserver
```bash
python3 meow_server.py
```