# web/Placeholder - hard

## Description
* Our _____ fansite was hacked!!! It seems we have a crucial vulnerability. We hired ___ to run some scans and fix the issue so as of right now the vulnerable page is only accessible to `______` devices/browsers. 

## Hint
* No hints.

## Solution Steps
* 1. Use burpsuite to change your inital GET request to use `_____` as the User-Agent.
`User-Agent: ____`
* 2. Once you see the login page, enter in some random data and intercept the request.
* 3. You will see the `username` and `password` parameters at the bottom of the POST request. `username=admin&password=dddd`
* 4. Using a tool known as Wappalyzer, a chrome extension, you can see the site uses node.js and express.js for the backend. A potential database used with node.js is a NoSQL database like mongoDB.
![image](https://user-images.githubusercontent.com/70596795/231779780-6f76cc84-443b-4360-922b-ece11028f320.png)
* 5. Change the POST request parameters to allow for authentication bypass (NoSQL Injection)
* 6. `username[$ne]=toto&password[$ne]=toto`
* 7. Using the above injection, the code will find any documents that have a username and password not equal to `toto` or any string(s) provided. 
* Flag: `JCTF{mOngOdB_iS_A_wEbScaLe_dAtabAsE}`

## Credit
* Developed by [Daniel Daszkiewicz](https://github.com/dd482IT)


## Notes 
## cd /var/ww/html/
## mongosh --file db-setup.js --username root
## 