# author - Akash Jadhav
# contact - akashjadhav20111995@gmail.com

This is README file to guide on the project created and tools included..

1) Routes, Controllers, Services, Models, Middlewares
2) ENV file, Authentication, DB connection, Nodemon

Steps to run this project - 

1) npm i (install all the required dependency when poped up during execution of the next command)
2) **Replace MongoDB Atlas connection string URL in .env file to connect to DB successfully and to run the project. On failure of connection string, the project wont be able to run.
3) npm start

API documentation
0) API to create a product
---------- cURL ----------
curl -X POST \
  'localhost:3000/products/' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "brand": "H&M",
  "category": "Caps",
  "price": 550,
  "color": "Pink",
  "size": "L",
  "seller": "A",
  "region": "IN"
}'

1) API to get all the products.
---------- cURL ----------
curl -X GET \
  'localhost:3000/products' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)'

2) API to get specific product by ID
---------- cURL ----------
curl -X GET \
  'localhost:3000/products/64743051425258e03be5525a/' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)'

3) API to search the product and to group by the mentioned field name. Can include multiple conditions for all the data to get.
---------- cURL ----------
curl -X POST \
  'localhost:3000/products/search' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "color": "Pink",
  "groupBy": "seller"
}'

Please Note - 
* For the simplicity of the application and considering the requirements, the seller and brand collections are not created seperately as it is not mention to create a brand or a seller. New addition of brand or seller can also be done directly while the product addition.
* If in case the collections to be created seperately, please let know, can update the string format name of brand and seller in prodcuts collection to their respective ID and can create a reference to it and can create API to add and delete the seller/brand.