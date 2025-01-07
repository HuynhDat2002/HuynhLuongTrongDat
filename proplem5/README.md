Create volume for mysql

    sudo docker volume create db


Build the system
    sudo docker compose up --build
Down the system
    sudo docker compose down


Note: Because this is just a CURD test, I don't build a sign-in interface of required sign-in.

access to database (mysql)
    username:root
    password:99tech
    localhost:3305

After built the system, if in the database you don't get tables then you need to run:
    sudo docker exec -it server-test /bin/bash
    npx prisma migrate dev --name init
Then you need to go to the folder 'server' in terminal and run: npx prisma generate
Restful API (Postman)

<!-- 1. Create a resource. -->
POST http://localhost:5003/api/profile/createProfile
{
    "name":"profilethree",
    "email":"hltd1@gmail.com",
    "gender":"Male",
    "bio":"i'm a developer",
    "phone":"01234569",
    "age":31
}

<!-- 2. List resources with basic filters. -->
GET http://localhost:5003/api/profile/getAllProfile?page=1&filter={"AND":[{"age":{"gte":20}},{"age":{"lte":32}}]}

<!-- 3. Get details of a resource. -->
GET http://localhost:5003/api/profile/getProfile/2
note: 2 is profileId

<!-- 4. Update resource details. -->
PATCH http://localhost:5003/api/profile/updateProfile
{
   "profileId":2,
   "payload":{
        "name":"tdat",
        "email":"td@gmail.com",
        "age":20
   }
}

<!-- 5. Delete a resource. -->
DELETE http://localhost:5003/api/profile/deleteProfile/4
note: 4 is profileId